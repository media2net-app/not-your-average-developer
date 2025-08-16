'use client'

import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { 
  Target, 
  BookOpen, 
  Zap, 
  Bot, 
  Palette, 
  ShoppingCart, 
  Sparkles,
  ArrowRight,
  CheckCircle,
  Monitor,
  Code,
  Lightbulb,
  Lock
} from 'lucide-react'

const modulesData = {
  '1': {
    name: 'modules.module1.name',
    description: 'modules.module1.description',
    status: 'Beschikbaar',
    icon: BookOpen,
    color: 'from-purple-500 to-pink-500',
    lessons: [
      'modules.module1.sections.section1.content.0',
      'modules.module1.sections.section1.content.1',
      'modules.module1.sections.section1.content.2',
      'modules.module1.sections.section1.content.3',
      'modules.module1.sections.section1.content.4'
    ],
    totalLessons: 5,
    completedLessons: 0,
    sections: [
      { id: 1, title: 'modules.module1.sections.section1.title', status: 'Niet gestart' },
      { id: 2, title: 'modules.module1.sections.section2.title', status: 'Niet gestart' },
      { id: 3, title: 'modules.module1.sections.section3.title', status: 'Niet gestart' },
      { id: 4, title: 'modules.module1.sections.section4.title', status: 'Vergrendeld' }
    ]
  },
  '2': {
    name: 'modules.module2.name',
    description: 'modules.module2.description',
    status: 'Vergrendeld',
    icon: Zap,
    color: 'from-blue-500 to-cyan-500',
    lessons: [
      'modules.module2.sections.section1.content.0',
      'modules.module2.sections.section1.content.1',
      'modules.module2.sections.section1.content.2',
      'modules.module2.sections.section1.content.3',
      'modules.module2.sections.section1.content.4'
    ],
    totalLessons: 5,
    completedLessons: 0,
    sections: [
      { id: 1, title: 'modules.module2.sections.section1.title', status: 'Niet gestart' },
      { id: 2, title: 'modules.module2.sections.section2.title', status: 'Niet gestart' },
      { id: 3, title: 'modules.module2.sections.section3.title', status: 'Niet gestart' },
      { id: 4, title: 'modules.module2.sections.section4.title', status: 'Niet gestart' },
      { id: 5, title: 'modules.module2.sections.section5.title', status: 'Vergrendeld' }
    ]
  },
  '3': {
    name: 'modules.module3.name',
    description: 'modules.module3.description',
    status: 'Vergrendeld',
    icon: Code,
    color: 'from-green-500 to-emerald-500',
    lessons: [
      'modules.module3.sections.section1.content.0',
      'modules.module3.sections.section1.content.1',
      'modules.module3.sections.section1.content.2',
      'modules.module3.sections.section1.content.3',
      'modules.module3.sections.section1.content.4'
    ],
    totalLessons: 5,
    completedLessons: 0,
    sections: [
      { id: 1, title: 'modules.module3.sections.section1.title', status: 'Niet gestart' },
      { id: 2, title: 'modules.module3.sections.section2.title', status: 'Niet gestart' },
      { id: 3, title: 'modules.module3.sections.section3.title', status: 'Niet gestart' },
      { id: 4, title: 'modules.module3.sections.section4.title', status: 'Niet gestart' },
      { id: 5, title: 'modules.module3.sections.section5.title', status: 'Vergrendeld' }
    ]
  },
  '4': {
    name: 'modules.module4.name',
    description: 'modules.module4.description',
    status: 'Vergrendeld',
    icon: Target,
    color: 'from-orange-500 to-red-500',
    lessons: [
      'modules.module4.sections.section1.content.0',
      'modules.module4.sections.section1.content.1',
      'modules.module4.sections.section1.content.2',
      'modules.module4.sections.section1.content.3',
      'modules.module4.sections.section1.content.4'
    ],
    totalLessons: 5,
    completedLessons: 0,
    sections: [
      { id: 1, title: 'modules.module4.sections.section1.title', status: 'Niet gestart' },
      { id: 2, title: 'modules.module4.sections.section2.title', status: 'Niet gestart' },
      { id: 3, title: 'modules.module4.sections.section3.title', status: 'Niet gestart' },
      { id: 4, title: 'modules.module4.sections.section4.title', status: 'Niet gestart' },
      { id: 5, title: 'modules.module4.sections.section5.title', status: 'Vergrendeld' }
    ]
  },
  '5': {
    name: 'Cursor AI',
    description: 'Leer Cursor AI kennen, installeren en effectief gebruiken voor development',
    status: 'Vergrendeld',
    icon: Bot,
    color: 'from-indigo-500 to-purple-500',
    lessons: [
      'Wat is Cursor AI?',
      'Cursor AI Installeren & Configureren',
      'Effectieve Prompts Schrijven',
      'Cursor AI Workflow & Best Practices',
      'Geavanceerde Cursor AI Features'
    ],
    totalLessons: 5,
    completedLessons: 0,
    sections: [
      { id: 1, title: 'Cursor AI', status: 'Vergrendeld' }
    ]
  },
  '6': {
    name: 'Portfolio Website Project',
    description: 'Bouw een professionele portfolio website van begin tot eind met Cursor AI',
    status: 'Vergrendeld',
    icon: Palette,
    color: 'from-purple-500 to-pink-500',
    lessons: [
      'Project Setup: Portfolio Website',
      'Homepage Development',
      'Portfolio Sectie & Projecten',
      'Contact Formulier & Footer',
      'Deployment & Launch'
    ],
    totalLessons: 5,
    completedLessons: 0,
    sections: [
      { id: 1, title: 'Portfolio Website Project', status: 'Vergrendeld' }
    ]
  },
  '7': {
    name: 'E-commerce Website Project',
    description: 'Bouw een volledig functionele e-commerce website met producten en betalingen',
    status: 'Vergrendeld',
    icon: ShoppingCart,
    color: 'from-green-500 to-blue-500',
    lessons: [
      'Project Setup: E-commerce Website',
      'Product Catalogus & Database',
      'Shopping Cart & Checkout',
      'User Authentication',
      'Admin Dashboard'
    ],
    totalLessons: 5,
    completedLessons: 0,
    sections: [
      { id: 1, title: 'E-commerce Website Project', status: 'Vergrendeld' }
    ]
  },
  '8': {
    name: 'Web Applicatie Project',
    description: 'Bouw een complexe web applicatie met real-time features en user accounts',
    status: 'Vergrendeld',
    icon: Sparkles,
    color: 'from-yellow-500 to-orange-500',
    lessons: [
      'Project Setup: Web Applicatie',
      'User Authentication Systeem',
      'Real-time Features',
      'Advanced API Development',
      'Deployment & Scaling'
    ],
    totalLessons: 5,
    completedLessons: 0,
    sections: [
      { id: 1, title: 'Web Applicatie Project', status: 'Vergrendeld' }
    ]
  }
}

export default function ModulesPage() {
  const router = useRouter()
  const t = useTranslations()
  const [moduleProgress, setModuleProgress] = useState<Record<string, any>>(() => {
    // Load progress from localStorage
    if (typeof window !== 'undefined') {
      const progress: Record<string, any> = {}
      for (let i = 1; i <= 8; i++) {
        const saved = localStorage.getItem(`module-${i}-progress`)
        const savedCompletedSections = localStorage.getItem(`module-${i}-completed-sections`)
        progress[i] = saved ? JSON.parse(saved) : { correct: 0, total: 0, completedLessons: [] }
        progress[i].completedSections = savedCompletedSections ? JSON.parse(savedCompletedSections) : []
      }
      return progress
    }
    return {}
  })

  // Add useEffect to listen for localStorage changes
  useEffect(() => {
    const handleStorageChange = () => {
      // Reload progress when localStorage changes
      const newProgress: Record<string, any> = {}
      for (let i = 1; i <= 4; i++) {
        const saved = localStorage.getItem(`module-${i}-progress`)
        const savedCompletedSections = localStorage.getItem(`module-${i}-completed-sections`)
        newProgress[i] = saved ? JSON.parse(saved) : { correct: 0, total: 0, completedLessons: [] }
        newProgress[i].completedSections = savedCompletedSections ? JSON.parse(savedCompletedSections) : []
      }
      setModuleProgress(newProgress)
    }

    // Listen for storage events (when localStorage changes in other tabs/windows)
    window.addEventListener('storage', handleStorageChange)
    
    // Also check for changes every 2 seconds (for same-tab updates)
    const interval = setInterval(handleStorageChange, 2000)
    
    return () => {
      window.removeEventListener('storage', handleStorageChange)
      clearInterval(interval)
    }
  }, [])

  const handleStorageChange = () => {
    // Reload progress when localStorage changes
    const newProgress: Record<string, any> = {}
    for (let i = 1; i <= 8; i++) {
      const saved = localStorage.getItem(`module-${i}-progress`)
      const savedCompletedSections = localStorage.getItem(`module-${i}-completed-sections`)
      newProgress[i] = saved ? JSON.parse(saved) : { correct: 0, total: 0, completedLessons: [] }
      newProgress[i].completedSections = savedCompletedSections ? JSON.parse(savedCompletedSections) : []
    }
    setModuleProgress(newProgress)
  }

  // Function to determine module status based on progress
  const getModuleStatus = (moduleId: string) => {
    // For testing purposes, make all modules available
    return t('common.status.available')
    
    // Original logic (commented out for testing):
    /*
    if (moduleId === '1') {
      return t('common.status.available')
    }
    
    if (moduleId === '2') {
      const module1CompletedSections = moduleProgress['1']?.completedSections?.length || 0
      return module1CompletedSections >= 3 ? t('common.status.available') : t('common.status.locked')
    }
    
    if (moduleId === '3') {
      const module2CompletedSections = moduleProgress['2']?.completedSections?.length || 0
      return module2CompletedSections >= 4 ? t('common.status.available') : t('common.status.locked')
    }
    
    if (moduleId === '4') {
      const module3CompletedSections = moduleProgress['3']?.completedSections?.length || 0
      return module3CompletedSections >= 4 ? t('common.status.available') : t('common.status.locked')
    }
    
    return t('common.status.locked')
    */
  }

  // Calculate progress percentage for a module
  const calculateModuleProgress = (moduleId: string) => {
    const completedSections = moduleProgress[moduleId]?.completedSections?.length || 0
    const totalSections = modulesData[moduleId as keyof typeof modulesData]?.sections?.length || 0
    return totalSections > 0 ? Math.round((completedSections / totalSections) * 100) : 0
  }

  return (
    <div className="modules-overview-container">
      {/* Header */}
      <div className="modules-header">
        <h1 className="modules-title">{t('modules.overview.title')}</h1>
        <p className="modules-subtitle">
          {t('modules.overview.subtitle')}
        </p>
      </div>

      {/* Course Introduction */}
      <div className="course-introduction">
        <div className="intro-section">
          <h2><Target className="inline-icon" /> Cursus Opbouw & Leerpad</h2>
          <p>
            Welkom bij je reis naar het worden van een professionele web developer! 
            Deze cursus is zorgvuldig opgebouwd om je stap voor stap te begeleiden van beginner tot expert.
          </p>
        </div>

        <div className="learning-path-overview">
          <div className="path-section">
            <div className="path-header">
              <div className="path-number">1-4</div>
              <h3><BookOpen className="inline-icon" /> Basis Kennis</h3>
            </div>
            <p>
              De eerste 4 modules vormen de fundamenten van web development. Je leert HTML, CSS, JavaScript en Git - 
              de essentiële tools die elke developer nodig heeft. Deze modules zijn cruciaal voor je succes in de rest van de cursus.
            </p>
            <ul>
              <li><strong>Module 1:</strong> HTML & CSS Fundamentals</li>
              <li><strong>Module 2:</strong> JavaScript Essentials</li>
              <li><strong>Module 3:</strong> Git & Version Control</li>
              <li><strong>Module 4:</strong> Deployment & Best Practices</li>
            </ul>
          </div>

          <div className="path-section">
            <div className="path-header">
              <div className="path-number">5</div>
              <h3><Bot className="inline-icon" /> Cursor AI Mastery</h3>
            </div>
            <p>
              Module 5 introduceert Cursor AI - het revolutionaire development tool dat je gaat gebruiken om sneller en efficiënter te bouwen. 
              Je leert hoe je AI kunt integreren in je workflow om je productivity te verhogen.
            </p>
            <ul>
              <li>Wat is Cursor AI en waarom gebruiken we het?</li>
              <li>Installatie en configuratie</li>
              <li>Effectieve prompts schrijven</li>
              <li>Geavanceerde features en workflows</li>
            </ul>
          </div>

          <div className="path-section">
            <div className="path-header">
              <div className="path-number">6-8</div>
              <h3><Sparkles className="inline-icon" /> Praktische Projecten</h3>
            </div>
            <p>
              Nu ga je echt bouwen! In de laatste 3 modules bouw je complete, professionele projecten van begin tot eind. 
              Elke module focust op een specifiek type website/ applicatie met Cursor AI als je primaire tool.
            </p>
            <ul>
              <li><strong>Module 6:</strong> Portfolio Website - Je eerste professionele project</li>
              <li><strong>Module 7:</strong> E-commerce Website - Complexe functionaliteiten</li>
              <li><strong>Module 8:</strong> Web Applicatie - Advanced features en real-time data</li>
            </ul>
          </div>
        </div>

        <div className="intro-tips">
          <h3><Lightbulb className="inline-icon" /> Tips voor Succes</h3>
                      <div className="tips-grid">
              <div className="tip-card">
                <div className="tip-icon"><BookOpen size={24} /></div>
                <div className="tip-content">
                  <h4>Volg de Volgorde</h4>
                  <p>Werk door de modules in volgorde - elke module bouwt voort op de vorige</p>
                </div>
              </div>
              <div className="tip-card">
                <div className="tip-icon"><Monitor size={24} /></div>
                <div className="tip-content">
                  <h4>Oefen Actief</h4>
                  <p>Doe alle oefeningen en bouw mee met de voorbeelden</p>
                </div>
              </div>
              <div className="tip-card">
                <div className="tip-icon"><Bot size={24} /></div>
                <div className="tip-content">
                  <h4>Gebruik Cursor AI</h4>
                  <p>Leer Cursor AI goed kennen - het wordt je belangrijkste tool</p>
                </div>
              </div>
              <div className="tip-card">
                <div className="tip-icon"><Target size={24} /></div>
                <div className="tip-content">
                  <h4>Bouw Projecten</h4>
                  <p>De praktische projecten zijn waar je echt leert - neem ze serieus</p>
                </div>
              </div>
            </div>
        </div>
      </div>

      {/* Modules Grid */}
      <div className="modules-grid">
        {Object.entries(modulesData).map(([id, module]) => {
          const currentStatus = getModuleStatus(id)
          const isClickable = currentStatus === t('common.status.available')
          const progressPercentage = calculateModuleProgress(id)
          const completedSections = moduleProgress[id]?.completedSections?.length || 0
          const totalSections = module.sections.length
          
          return (
            <div 
              key={id}
              className={`module-card ${isClickable ? 'clickable' : 'locked'}`}
              onClick={() => isClickable && router.push(`/nl/dashboard/modules/${id}`)}
            >
              {/* Module Header */}
              <div className="module-card-header">
                <div className={`module-icon ${module.color}`}>
                  <span className="icon-text">
                    {(() => {
                      const IconComponent = module.icon
                      return <IconComponent size={24} />
                    })()}
                  </span>
                </div>
                <div className="module-card-info">
                  <h3 className="module-card-title">{t(module.name)}</h3>
                  <p className="module-card-description">{t(module.description)}</p>
                </div>
                <div className={`module-status-badge ${currentStatus === t('common.status.locked') ? 'locked' : 'available'}`}>
                  {currentStatus === t('common.status.locked') ? <Lock size={16} /> : <CheckCircle size={16} />}
                </div>
              </div>

              {/* Progress Section */}
              <div className="module-progress-section">
                <div className="progress-header">
                  <span className="progress-label">{t('modules.overview.progress')}</span>
                  <span className="progress-percentage">{progressPercentage}%</span>
                </div>
                <div className="progress-bar-container">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{width: `${progressPercentage}%`}}
                    ></div>
                  </div>
                  <span className="progress-text">
                    {completedSections} {t('modules.overview.sectionsCompleted')}
                  </span>
                </div>
              </div>

              {/* Sections Overview */}
              <div className="module-sections-overview">
                <h4 className="sections-title">{t('modules.overview.sectionsInModule')}</h4>
                <div className="sections-list">
                  {module.sections.map((section, index) => {
                    const isCompleted = moduleProgress[id]?.completedSections?.includes(section.id)
                    const isLocked = section.status === 'Vergrendeld'
                    
                    return (
                      <div key={section.id} className={`section-item ${isCompleted ? 'completed' : isLocked ? 'locked' : ''}`}>
                        <div className="section-item-content">
                          <span className="section-number">{section.id}.</span>
                          <span className="section-title-text">{t(section.title)}</span>
                          <span className="section-status-icon">
                            {isCompleted ? '✅' : isLocked ? '🔒' : '⏳'}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Module Actions */}
              <div className="module-actions">
                {currentStatus === t('common.status.locked') ? (
                  <div className="locked-message">
                    <span className="lock-icon">🔒</span>
                    <span>{t('modules.overview.lockedMessage')}</span>
                  </div>
                ) : (
                  <button 
                    className="module-action-button"
                    onClick={() => router.push(`/nl/dashboard/modules/${id}`)}
                  >
                    {progressPercentage === 100 ? t('modules.overview.reviewModule') : t('modules.overview.startModule')}
                  </button>
                )}
              </div>

              {/* Quiz Score (if available) */}
              {moduleProgress[id]?.total > 0 && (
                <div className="module-quiz-score">
                  <span className="quiz-label">{t('modules.overview.quizScore')}</span>
                  <span className="quiz-percentage">
                    {Math.round((moduleProgress[id]?.correct / moduleProgress[id]?.total) * 100)}%
                  </span>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Progress Summary */}
      <div className="progress-summary">
        <div className="summary-card">
          <h3 className="summary-title">{t('modules.overview.yourProgress')}</h3>
          <div className="summary-stats">
            <div className="stat-item">
              <span className="stat-number">
                {Object.keys(modulesData).filter(id => getModuleStatus(id) === t('common.status.available')).length}
              </span>
              <span className="stat-label">{t('modules.overview.unlockedModules')}</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">
                {Object.values(moduleProgress).reduce((total, progress) => 
                  total + (progress?.completedSections?.length || 0), 0
                )}
              </span>
              <span className="stat-label">{t('modules.overview.completedSections')}</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">
                {Math.round(
                  Object.keys(modulesData).reduce((total, id) => 
                    total + calculateModuleProgress(id), 0
                  ) / Object.keys(modulesData).length
                )}%
              </span>
              <span className="stat-label">{t('modules.overview.averageProgress')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 