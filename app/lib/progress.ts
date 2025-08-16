export interface ProgressData {
  userId: string
  modules: ModuleProgress[]
  achievements: Achievement[]
  streaks: StreakData
  totalPoints: number
  level: number
  lastActivity: string
}

export interface ModuleProgress {
  moduleId: string
  completed: boolean
  lessonsCompleted: number
  totalLessons: number
  sections: SectionProgress[]
  startedAt: string
  completedAt?: string
  timeSpent: number // in minutes
}

export interface SectionProgress {
  sectionId: string
  completed: boolean
  lessonsCompleted: number
  totalLessons: number
  quizScore?: number
}

export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  category: 'learning' | 'streak' | 'social' | 'business'
  unlockedAt: string
  points: number
}

export interface StreakData {
  currentStreak: number
  longestStreak: number
  lastStudyDate: string
  totalStudyDays: number
}

export class ProgressTracker {
  private static instance: ProgressTracker
  private storageKey = 'user_progress'

  static getInstance(): ProgressTracker {
    if (!ProgressTracker.instance) {
      ProgressTracker.instance = new ProgressTracker()
    }
    return ProgressTracker.instance
  }

  getProgress(userId: string): ProgressData {
    const stored = localStorage.getItem(`${this.storageKey}_${userId}`)
    if (stored) {
      return JSON.parse(stored)
    }
    
    return this.initializeProgress(userId)
  }

  private initializeProgress(userId: string): ProgressData {
    const progress: ProgressData = {
      userId,
      modules: [],
      achievements: [],
      streaks: {
        currentStreak: 0,
        longestStreak: 0,
        lastStudyDate: '',
        totalStudyDays: 0
      },
      totalPoints: 0,
      level: 1,
      lastActivity: new Date().toISOString()
    }

    // Initialize modules 1-8
    for (let i = 1; i <= 8; i++) {
      progress.modules.push({
        moduleId: i.toString(),
        completed: false,
        lessonsCompleted: 0,
        totalLessons: 5, // Default, can be overridden
        sections: [],
        startedAt: '',
        timeSpent: 0
      })
    }

    this.saveProgress(userId, progress)
    return progress
  }

  completeLesson(userId: string, moduleId: string, lessonId: string, timeSpent: number = 0): void {
    const progress = this.getProgress(userId)
    const module = progress.modules.find(m => m.moduleId === moduleId)
    
    if (module) {
      module.lessonsCompleted++
      module.timeSpent += timeSpent
      
      if (module.lessonsCompleted === module.totalLessons) {
        module.completed = true
        module.completedAt = new Date().toISOString()
        this.addPoints(userId, 100) // Bonus for completing module
        this.checkAchievements(userId, 'module_completed', { moduleId })
      }
      
      this.updateStreak(userId)
      this.addPoints(userId, 10) // Points per lesson
      this.checkAchievements(userId, 'lesson_completed', { moduleId, lessonId })
    }

    progress.lastActivity = new Date().toISOString()
    this.saveProgress(userId, progress)
  }

  completeQuiz(userId: string, moduleId: string, score: number): void {
    const progress = this.getProgress(userId)
    const module = progress.modules.find(m => m.moduleId === moduleId)
    
    if (module) {
      const points = Math.floor(score / 10) * 5 // 5 points per 10% score
      this.addPoints(userId, points)
      
      if (score >= 80) {
        this.checkAchievements(userId, 'quiz_excellent', { moduleId, score })
      }
    }
  }

  private addPoints(userId: string, points: number): void {
    const progress = this.getProgress(userId)
    progress.totalPoints += points
    
    // Level up calculation (100 points per level)
    const newLevel = Math.floor(progress.totalPoints / 100) + 1
    if (newLevel > progress.level) {
      progress.level = newLevel
      this.checkAchievements(userId, 'level_up', { level: newLevel })
    }
  }

  private updateStreak(userId: string): void {
    const progress = this.getProgress(userId)
    const today = new Date().toDateString()
    const lastDate = progress.streaks.lastStudyDate ? new Date(progress.streaks.lastStudyDate).toDateString() : ''
    
    if (today !== lastDate) {
      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate() - 1)
      const yesterdayStr = yesterday.toDateString()
      
      if (lastDate === yesterdayStr) {
        progress.streaks.currentStreak++
      } else if (today !== lastDate) {
        progress.streaks.currentStreak = 1
      }
      
      if (progress.streaks.currentStreak > progress.streaks.longestStreak) {
        progress.streaks.longestStreak = progress.streaks.currentStreak
        this.checkAchievements(userId, 'streak_record', { streak: progress.streaks.currentStreak })
      }
      
      progress.streaks.lastStudyDate = new Date().toISOString()
      progress.streaks.totalStudyDays++
    }
  }

  private checkAchievements(userId: string, type: string, data: any): void {
    const progress = this.getProgress(userId)
    const achievements = this.getAchievementDefinitions()
    
    achievements.forEach(achievement => {
      if (this.shouldUnlockAchievement(achievement, type, data, progress)) {
        if (!progress.achievements.find(a => a.id === achievement.id)) {
          progress.achievements.push({
            ...achievement,
            unlockedAt: new Date().toISOString()
          })
          this.addPoints(userId, achievement.points)
        }
      }
    })
  }

  private getAchievementDefinitions(): Omit<Achievement, 'unlockedAt'>[] {
    return [
      {
        id: 'first_lesson',
        title: 'Eerste Stap',
        description: 'Voltooid je eerste les',
        icon: '🎯',
        category: 'learning',
        points: 25
      },
      {
        id: 'module_complete',
        title: 'Module Master',
        description: 'Voltooid een volledige module',
        icon: '🏆',
        category: 'learning',
        points: 100
      },
      {
        id: 'streak_7',
        title: 'Consistent Leren',
        description: '7 dagen op rij gestudeerd',
        icon: '🔥',
        category: 'streak',
        points: 50
      },
      {
        id: 'streak_30',
        title: 'Leren is een Gewoonte',
        description: '30 dagen op rij gestudeerd',
        icon: '⚡',
        category: 'streak',
        points: 200
      },
      {
        id: 'level_5',
        title: 'Gevorderde Student',
        description: 'Bereikt level 5',
        icon: '⭐',
        category: 'learning',
        points: 150
      },
      {
        id: 'quiz_master',
        title: 'Quiz Master',
        description: 'Behaald 90%+ op een quiz',
        icon: '🧠',
        category: 'learning',
        points: 75
      },
      {
        id: 'first_client',
        title: 'Eerste Klant',
        description: 'Verkregen je eerste betaalde klant',
        icon: '💰',
        category: 'business',
        points: 500
      },
      {
        id: 'community_helper',
        title: 'Community Helper',
        description: 'Geholpen 10 andere cursisten',
        icon: '🤝',
        category: 'social',
        points: 100
      }
    ]
  }

  private shouldUnlockAchievement(achievement: any, type: string, data: any, progress: ProgressData): boolean {
    switch (achievement.id) {
      case 'first_lesson':
        return type === 'lesson_completed' && progress.modules.some(m => m.lessonsCompleted > 0)
      case 'module_complete':
        return type === 'module_completed'
      case 'streak_7':
        return progress.streaks.currentStreak >= 7
      case 'streak_30':
        return progress.streaks.currentStreak >= 30
      case 'level_5':
        return progress.level >= 5
      case 'quiz_master':
        return type === 'quiz_excellent' && data.score >= 90
      default:
        return false
    }
  }

  private saveProgress(userId: string, progress: ProgressData): void {
    localStorage.setItem(`${this.storageKey}_${userId}`, JSON.stringify(progress))
  }

  getAnalytics(userId: string) {
    const progress = this.getProgress(userId)
    
    return {
      totalModules: progress.modules.length,
      completedModules: progress.modules.filter(m => m.completed).length,
      totalLessons: progress.modules.reduce((sum, m) => sum + m.totalLessons, 0),
      completedLessons: progress.modules.reduce((sum, m) => sum + m.lessonsCompleted, 0),
      totalTimeSpent: progress.modules.reduce((sum, m) => sum + m.timeSpent, 0),
      averageScore: this.calculateAverageScore(progress),
      completionRate: this.calculateCompletionRate(progress),
      achievements: progress.achievements.length,
      currentStreak: progress.streaks.currentStreak,
      longestStreak: progress.streaks.longestStreak,
      level: progress.level,
      totalPoints: progress.totalPoints
    }
  }

  private calculateAverageScore(progress: ProgressData): number {
    // This would be calculated from quiz results
    return 85 // Placeholder
  }

  private calculateCompletionRate(progress: ProgressData): number {
    const totalLessons = progress.modules.reduce((sum, m) => sum + m.totalLessons, 0)
    const completedLessons = progress.modules.reduce((sum, m) => sum + m.lessonsCompleted, 0)
    return totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0
  }

  resetProgress(userId: string): void {
    localStorage.removeItem(`${this.storageKey}_${userId}`)
  }
}
