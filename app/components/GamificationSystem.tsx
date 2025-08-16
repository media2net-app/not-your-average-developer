'use client'

import { useState, useEffect } from 'react'
import { 
  Trophy, 
  Star, 
  Target, 
  TrendingUp, 
  Award, 
  Users, 
  Crown,
  Zap,
  Flame,
  Gift,
  Calendar,
  Clock,
  CheckCircle,
  XCircle
} from 'lucide-react'
import { ProgressTracker, ProgressData, Achievement } from '../lib/progress'

interface LeaderboardEntry {
  userId: string
  name: string
  avatar: string
  points: number
  level: number
  achievements: number
  streak: number
  rank: number
}

interface DailyChallenge {
  id: string
  title: string
  description: string
  type: 'lesson' | 'quiz' | 'project' | 'social'
  points: number
  completed: boolean
  deadline: string
}

interface Reward {
  id: string
  title: string
  description: string
  type: 'badge' | 'title' | 'feature' | 'bonus'
  icon: string
  unlocked: boolean
  unlockedAt?: string
}

export default function GamificationSystem() {
  const [activeTab, setActiveTab] = useState<'overview' | 'achievements' | 'leaderboard' | 'challenges' | 'rewards'>('overview')
  const [progress, setProgress] = useState<ProgressData | null>(null)
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([])
  const [dailyChallenges, setDailyChallenges] = useState<DailyChallenge[]>([])
  const [rewards, setRewards] = useState<Reward[]>([])
  const [showAchievement, setShowAchievement] = useState<Achievement | null>(null)

  useEffect(() => {
    // Initialize with mock data for demo
    const mockProgress: ProgressData = {
      userId: '1',
      modules: Array.from({ length: 8 }, (_, i) => ({
        moduleId: (i + 1).toString(),
        completed: i < 2,
        lessonsCompleted: i < 2 ? 5 : Math.floor(Math.random() * 5),
        totalLessons: 5,
        sections: [],
        startedAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
        timeSpent: Math.floor(Math.random() * 300)
      })),
      achievements: [
        {
          id: 'first_lesson',
          title: 'Eerste Stap',
          description: 'Voltooid je eerste les',
          icon: '🎯',
          category: 'learning',
          unlockedAt: new Date().toISOString(),
          points: 25
        },
        {
          id: 'streak_7',
          title: 'Consistent Leren',
          description: '7 dagen op rij gestudeerd',
          icon: '🔥',
          category: 'streak',
          unlockedAt: new Date().toISOString(),
          points: 50
        }
      ],
      streaks: {
        currentStreak: 12,
        longestStreak: 15,
        lastStudyDate: new Date().toISOString(),
        totalStudyDays: 45
      },
      totalPoints: 1250,
      level: 13,
      lastActivity: new Date().toISOString()
    }

    setProgress(mockProgress)

    // Mock leaderboard
    setLeaderboard([
      { userId: '1', name: 'John Doe', avatar: '', points: 1250, level: 13, achievements: 8, streak: 12, rank: 1 },
      { userId: '2', name: 'Jane Smith', avatar: '', points: 1100, level: 11, achievements: 6, streak: 8, rank: 2 },
      { userId: '3', name: 'Bob Johnson', avatar: '', points: 950, level: 10, achievements: 5, streak: 5, rank: 3 },
      { userId: '4', name: 'Alice Brown', avatar: '', points: 800, level: 8, achievements: 4, streak: 3, rank: 4 },
      { userId: '5', name: 'Charlie Wilson', avatar: '', points: 650, level: 7, achievements: 3, streak: 2, rank: 5 }
    ])

    // Mock daily challenges
    setDailyChallenges([
      {
        id: '1',
        title: 'Voltooi een les',
        description: 'Leer iets nieuws vandaag',
        type: 'lesson',
        points: 25,
        completed: true,
        deadline: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
      },
      {
        id: '2',
        title: 'Doe een quiz',
        description: 'Test je kennis',
        type: 'quiz',
        points: 30,
        completed: false,
        deadline: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
      },
      {
        id: '3',
        title: 'Help een medestudent',
        description: 'Beantwoord een vraag in de community',
        type: 'social',
        points: 20,
        completed: false,
        deadline: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
      }
    ])

    // Mock rewards
    setRewards([
      {
        id: '1',
        title: 'Beginner Badge',
        description: 'Voltooid je eerste module',
        type: 'badge',
        icon: '🥇',
        unlocked: true,
        unlockedAt: new Date().toISOString()
      },
      {
        id: '2',
        title: 'Streak Master',
        description: '7 dagen op rij gestudeerd',
        type: 'badge',
        icon: '🔥',
        unlocked: true,
        unlockedAt: new Date().toISOString()
      },
      {
        id: '3',
        title: 'Pro Title',
        description: 'Bereikt level 10',
        type: 'title',
        icon: '👑',
        unlocked: false
      },
      {
        id: '4',
        title: 'Advanced Features',
        description: 'Ontgrendel premium features',
        type: 'feature',
        icon: '⭐',
        unlocked: false
      }
    ])
  }, [])

  const tabs = [
    { id: 'overview', label: 'Overzicht', icon: Target },
    { id: 'achievements', label: 'Prestaties', icon: Trophy },
    { id: 'leaderboard', label: 'Ranglijst', icon: TrendingUp },
    { id: 'challenges', label: 'Uitdagingen', icon: Zap },
    { id: 'rewards', label: 'Beloningen', icon: Gift }
  ]

  const getLevelInfo = (level: number) => {
    const pointsForNextLevel = level * 100
    const currentLevelPoints = (level - 1) * 100
    const progressData = progress ? ((progress.totalPoints - currentLevelPoints) / (pointsForNextLevel - currentLevelPoints)) * 100 : 0
    
    return {
      currentLevel: level,
      nextLevel: level + 1,
      progress: Math.min(progressData, 100),
      pointsForNextLevel,
      currentLevelPoints
    }
  }

  const completeChallenge = (challengeId: string) => {
    setDailyChallenges(prev => 
      prev.map(challenge => 
        challenge.id === challengeId 
          ? { ...challenge, completed: true }
          : challenge
      )
    )
  }

  if (!progress) return <div>Loading...</div>

  const levelInfo = getLevelInfo(progress.level)

  return (
    <div className="gamification-system">
      <div className="gamification-header">
        <h1 className="gamification-title"><Trophy className="inline-icon" /> Gamification</h1>
        <p className="gamification-description">
          Verdien punten, behaal prestaties en daag jezelf uit
        </p>
      </div>

      {/* Achievement Notification */}
      {showAchievement && (
        <div className="achievement-notification">
          <div className="achievement-content">
            <span className="achievement-icon">{showAchievement.icon}</span>
            <div className="achievement-info">
              <h3>{showAchievement.title}</h3>
              <p>{showAchievement.description}</p>
              <span className="achievement-points">+{showAchievement.points} punten</span>
            </div>
            <button 
              onClick={() => setShowAchievement(null)}
              className="close-notification"
            >
              <XCircle size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="gamification-tabs">
        {tabs.map((tab) => {
          const IconComponent = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`gamification-tab ${activeTab === tab.id ? 'active' : ''}`}
            >
              <IconComponent size={20} />
              <span>{tab.label}</span>
            </button>
          )
        })}
      </div>

      {/* Tab Content */}
      <div className="gamification-content">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="overview-section">
            {/* Level Progress */}
            <div className="level-card">
              <div className="level-header">
                <div className="level-info">
                  <h2>Level {levelInfo.currentLevel}</h2>
                  <p>{progress.totalPoints} / {levelInfo.pointsForNextLevel} punten</p>
                </div>
                <div className="level-badge">
                  <Crown size={32} />
                </div>
              </div>
              <div className="level-progress">
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${levelInfo.progress}%` }}
                  ></div>
                </div>
                <span>{Math.round(levelInfo.progress)}% naar Level {levelInfo.nextLevel}</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon"><Target size={24} /></div>
                <div className="stat-content">
                  <h3>{progress.totalPoints}</h3>
                  <p>Totaal Punten</p>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon"><Trophy size={24} /></div>
                <div className="stat-content">
                  <h3>{progress.achievements.length}</h3>
                  <p>Prestaties</p>
                </div>
              </div>
              
                             <div className="stat-card">
                 <div className="stat-icon"><Flame size={24} /></div>
                 <div className="stat-content">
                   <h3>{progress.streaks.currentStreak}</h3>
                   <p>Dagen Streak</p>
                 </div>
               </div>
              
              <div className="stat-card">
                <div className="stat-icon"><CheckCircle size={24} /></div>
                <div className="stat-content">
                  <h3>{progress.modules.filter(m => m.completed).length}</h3>
                  <p>Modules Voltooid</p>
                </div>
              </div>
            </div>

            {/* Recent Achievements */}
            <div className="recent-achievements">
              <h3>Recente Prestaties</h3>
              <div className="achievements-grid">
                {progress.achievements.slice(-3).map((achievement) => (
                  <div key={achievement.id} className="achievement-card">
                    <span className="achievement-icon">{achievement.icon}</span>
                    <div className="achievement-info">
                      <h4>{achievement.title}</h4>
                      <p>{achievement.description}</p>
                      <span className="achievement-date">
                        {new Date(achievement.unlockedAt).toLocaleDateString('nl-NL')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <div className="achievements-section">
            <div className="achievements-grid">
              {progress.achievements.map((achievement) => (
                <div key={achievement.id} className="achievement-card unlocked">
                  <span className="achievement-icon">{achievement.icon}</span>
                  <div className="achievement-info">
                    <h4>{achievement.title}</h4>
                    <p>{achievement.description}</p>
                    <span className="achievement-points">+{achievement.points} punten</span>
                    <span className="achievement-date">
                      {new Date(achievement.unlockedAt).toLocaleDateString('nl-NL')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Leaderboard Tab */}
        {activeTab === 'leaderboard' && (
          <div className="leaderboard-section">
            <div className="leaderboard-list">
              {leaderboard.map((entry, index) => (
                <div key={entry.userId} className={`leaderboard-entry ${index < 3 ? 'top-three' : ''}`}>
                  <div className="rank-badge">
                    {index === 0 && <Crown size={20} />}
                    <span>{entry.rank}</span>
                  </div>
                  
                  <div className="user-info">
                    <div className="user-avatar">
                      {entry.avatar ? (
                        <img src={entry.avatar} alt={entry.name} />
                      ) : (
                        <Users size={20} />
                      )}
                    </div>
                    <div className="user-details">
                      <h4>{entry.name}</h4>
                      <span>Level {entry.level}</span>
                    </div>
                  </div>
                  
                  <div className="user-stats">
                    <div className="stat">
                      <span className="stat-label">Punten</span>
                      <span className="stat-value">{entry.points}</span>
                    </div>
                    <div className="stat">
                      <span className="stat-label">Streak</span>
                      <span className="stat-value">{entry.streak} 🔥</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Challenges Tab */}
        {activeTab === 'challenges' && (
          <div className="challenges-section">
            <div className="challenges-header">
              <h3>Dagelijkse Uitdagingen</h3>
              <div className="challenges-progress">
                <span>{dailyChallenges.filter(c => c.completed).length} / {dailyChallenges.length} voltooid</span>
              </div>
            </div>
            
            <div className="challenges-grid">
              {dailyChallenges.map((challenge) => (
                <div key={challenge.id} className={`challenge-card ${challenge.completed ? 'completed' : ''}`}>
                  <div className="challenge-header">
                    <div className="challenge-type">
                      {challenge.type === 'lesson' && <Target size={20} />}
                      {challenge.type === 'quiz' && <Trophy size={20} />}
                      {challenge.type === 'project' && <Star size={20} />}
                      {challenge.type === 'social' && <Users size={20} />}
                    </div>
                    <div className="challenge-status">
                      {challenge.completed ? (
                        <CheckCircle size={20} className="completed-icon" />
                      ) : (
                        <Clock size={20} className="pending-icon" />
                      )}
                    </div>
                  </div>
                  
                  <div className="challenge-content">
                    <h4>{challenge.title}</h4>
                    <p>{challenge.description}</p>
                    <span className="challenge-points">+{challenge.points} punten</span>
                  </div>
                  
                  {!challenge.completed && (
                    <button
                      onClick={() => completeChallenge(challenge.id)}
                      className="complete-challenge-btn"
                    >
                      Voltooid
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Rewards Tab */}
        {activeTab === 'rewards' && (
          <div className="rewards-section">
            <div className="rewards-grid">
              {rewards.map((reward) => (
                <div key={reward.id} className={`reward-card ${reward.unlocked ? 'unlocked' : 'locked'}`}>
                  <div className="reward-icon">
                    <span>{reward.icon}</span>
                    {reward.unlocked && <CheckCircle size={20} className="unlock-badge" />}
                  </div>
                  
                  <div className="reward-content">
                    <h4>{reward.title}</h4>
                    <p>{reward.description}</p>
                    {reward.unlocked && reward.unlockedAt && (
                      <span className="unlock-date">
                        Ontgrendeld op {new Date(reward.unlockedAt).toLocaleDateString('nl-NL')}
                      </span>
                    )}
                  </div>
                  
                  <div className="reward-type">
                    <span className={`type-badge ${reward.type}`}>
                      {reward.type === 'badge' && 'Badge'}
                      {reward.type === 'title' && 'Titel'}
                      {reward.type === 'feature' && 'Feature'}
                      {reward.type === 'bonus' && 'Bonus'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
