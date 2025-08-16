'use client'

import { useRouter, useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'

const moduleSections = {
  '1': [
    {
      id: 1,
      title: 'modules.module1.sections.section1.title',
      status: 'Niet gestart',
      description: 'modules.module1.sections.section1.description',
      content: [
        'modules.module1.sections.section1.content.0',
        'modules.module1.sections.section1.content.1',
        'modules.module1.sections.section1.content.2',
        'modules.module1.sections.section1.content.3',
        'modules.module1.sections.section1.content.4'
      ],
      lessons: [
        { id: 1, title: 'modules.module1.sections.section1.content.0', duration: '15 min' },
        { id: 2, title: 'modules.module1.sections.section1.content.1', duration: '20 min' },
        { id: 3, title: 'modules.module1.sections.section1.content.2', duration: '25 min' },
        { id: 4, title: 'modules.module1.sections.section1.content.3', duration: '30 min' },
        { id: 5, title: 'modules.module1.sections.section1.content.4', duration: '35 min' }
      ]
    },
    {
      id: 2,
      title: 'modules.module1.sections.section2.title',
      status: 'Niet gestart',
      description: 'modules.module1.sections.section2.description',
      content: [
        'modules.module1.sections.section2.content.0',
        'modules.module1.sections.section2.content.1',
        'modules.module1.sections.section2.content.2'
      ],
      lessons: [
        { id: 1, title: 'modules.module1.sections.section1.content.0', duration: '15 min' },
        { id: 2, title: 'modules.module1.sections.section1.content.1', duration: '20 min' },
        { id: 3, title: 'modules.module1.sections.section1.content.2', duration: '25 min' }
      ]
    },
    {
      id: 3,
      title: 'modules.module1.sections.section3.title',
      status: 'Niet gestart',
      description: 'modules.module1.sections.section3.description',
      content: [
        'modules.module1.sections.section3.content.0',
        'modules.module1.sections.section3.content.1',
        'modules.module1.sections.section3.content.2'
      ],
      lessons: [
        { id: 4, title: 'modules.module1.sections.section1.content.3', duration: '30 min' },
        { id: 5, title: 'modules.module1.sections.section1.content.4', duration: '35 min' }
      ]
    },
    {
      id: 4,
      title: 'modules.module1.sections.section4.title',
      status: 'Vergrendeld',
      description: 'modules.module1.sections.section4.description',
      content: [
        'modules.module1.sections.section4.content.0',
        'modules.module1.sections.section4.content.1',
        'modules.module1.sections.section4.content.2'
      ],
      lessons: []
    }
  ],
  '2': [
    {
      id: 1,
      title: 'modules.module2.sections.section1.title',
      status: 'Niet gestart',
      description: 'modules.module2.sections.section1.description',
      content: [
        'modules.module2.sections.section1.content.0',
        'modules.module2.sections.section1.content.1',
        'modules.module2.sections.section1.content.2',
        'modules.module2.sections.section1.content.3'
      ],
      lessons: [
        { id: 1, title: 'modules.module2.sections.section1.content.0', duration: '30 min' },
        { id: 2, title: 'modules.module2.sections.section1.content.1', duration: '35 min' },
        { id: 3, title: 'modules.module2.sections.section1.content.2', duration: '25 min' },
        { id: 4, title: 'modules.module2.sections.section1.content.3', duration: '20 min' },
        { id: 5, title: 'modules.module2.sections.section1.content.4', duration: '30 min' }
      ]
    },
    {
      id: 2,
      title: 'modules.module2.sections.section2.title',
      status: 'Niet gestart',
      description: 'modules.module2.sections.section2.description',
      content: [
        'modules.module2.sections.section2.content.0',
        'modules.module2.sections.section2.content.1',
        'modules.module2.sections.section2.content.2',
        'modules.module2.sections.section2.content.3'
      ],
      lessons: [
        { id: 1, title: 'modules.module2.sections.section1.content.0', duration: '30 min' },
        { id: 2, title: 'modules.module2.sections.section1.content.1', duration: '35 min' },
        { id: 3, title: 'modules.module2.sections.section1.content.2', duration: '25 min' },
        { id: 4, title: 'modules.module2.sections.section1.content.3', duration: '20 min' },
        { id: 5, title: 'modules.module2.sections.section1.content.4', duration: '30 min' }
      ]
    },
    {
      id: 3,
      title: 'modules.module2.sections.section3.title',
      status: 'Niet gestart',
      description: 'modules.module2.sections.section3.description',
      content: [
        'modules.module2.sections.section3.content.0',
        'modules.module2.sections.section3.content.1',
        'modules.module2.sections.section3.content.2',
        'modules.module2.sections.section3.content.3'
      ],
      lessons: [
        { id: 1, title: 'modules.module2.sections.section1.content.0', duration: '30 min' },
        { id: 2, title: 'modules.module2.sections.section1.content.1', duration: '35 min' },
        { id: 3, title: 'modules.module2.sections.section1.content.2', duration: '25 min' },
        { id: 4, title: 'modules.module2.sections.section1.content.3', duration: '20 min' },
        { id: 5, title: 'modules.module2.sections.section1.content.4', duration: '30 min' }
      ]
    },
    {
      id: 4,
      title: 'modules.module2.sections.section4.title',
      status: 'Niet gestart',
      description: 'modules.module2.sections.section4.description',
      content: [
        'modules.module2.sections.section4.content.0',
        'modules.module2.sections.section4.content.1',
        'modules.module2.sections.section4.content.2',
        'modules.module2.sections.section4.content.3'
      ],
      lessons: [
        { id: 1, title: 'modules.module2.sections.section1.content.0', duration: '30 min' },
        { id: 2, title: 'modules.module2.sections.section1.content.1', duration: '35 min' },
        { id: 3, title: 'modules.module2.sections.section1.content.2', duration: '25 min' },
        { id: 4, title: 'modules.module2.sections.section1.content.3', duration: '20 min' },
        { id: 5, title: 'modules.module2.sections.section1.content.4', duration: '30 min' }
      ]
    },
    {
      id: 5,
      title: 'modules.module2.sections.section5.title',
      status: 'Vergrendeld',
      description: 'modules.module2.sections.section5.description',
      content: [
        'modules.module2.sections.section5.content.0',
        'modules.module2.sections.section5.content.1',
        'modules.module2.sections.section5.content.2'
      ],
      lessons: []
    }
  ],
  '3': [
    {
      id: 1,
      title: 'modules.module3.sections.section1.title',
      status: 'Niet gestart',
      description: 'modules.module3.sections.section1.description',
      content: [
        'modules.module3.sections.section1.content.0',
        'modules.module3.sections.section1.content.1',
        'modules.module3.sections.section1.content.2',
        'modules.module3.sections.section1.content.3',
        'modules.module3.sections.section1.content.4'
      ],
      lessons: [
        { id: 1, title: 'Cursor AI Mastery', duration: '40 min' },
        { id: 2, title: 'Cursor AI Advanced Features', duration: '35 min' },
        { id: 3, title: 'ChatGPT voor Development', duration: '45 min' },
        { id: 4, title: 'AI Code Review', duration: '30 min' },
        { id: 5, title: 'AI Project Planning', duration: '40 min' }
      ]
    },
    {
      id: 2,
      title: 'modules.module3.sections.section2.title',
      status: 'Niet gestart',
      description: 'modules.module3.sections.section2.description',
      content: [
        'modules.module3.sections.section2.content.0',
        'modules.module3.sections.section2.content.1',
        'modules.module3.sections.section2.content.2',
        'modules.module3.sections.section2.content.3',
        'modules.module3.sections.section2.content.4'
      ],
      lessons: [
        { id: 1, title: 'Cursor AI Mastery', duration: '40 min' },
        { id: 2, title: 'Cursor AI Advanced Features', duration: '35 min' },
        { id: 3, title: 'ChatGPT voor Development', duration: '45 min' },
        { id: 4, title: 'AI Code Review', duration: '30 min' },
        { id: 5, title: 'AI Project Planning', duration: '40 min' }
      ]
    },
    {
      id: 3,
      title: 'modules.module3.sections.section3.title',
      status: 'Niet gestart',
      description: 'modules.module3.sections.section3.description',
      content: [
        'modules.module3.sections.section3.content.0',
        'modules.module3.sections.section3.content.1',
        'modules.module3.sections.section3.content.2',
        'modules.module3.sections.section3.content.3',
        'modules.module3.sections.section3.content.4'
      ],
      lessons: [
        { id: 1, title: 'Cursor AI Mastery', duration: '40 min' },
        { id: 2, title: 'Cursor AI Advanced Features', duration: '35 min' },
        { id: 3, title: 'ChatGPT voor Development', duration: '45 min' },
        { id: 4, title: 'AI Code Review', duration: '30 min' },
        { id: 5, title: 'AI Project Planning', duration: '40 min' }
      ]
    },
    {
      id: 4,
      title: 'modules.module3.sections.section4.title',
      status: 'Niet gestart',
      description: 'modules.module3.sections.section4.description',
      content: [
        'modules.module3.sections.section4.content.0',
        'modules.module3.sections.section4.content.1',
        'modules.module3.sections.section4.content.2',
        'modules.module3.sections.section4.content.3',
        'modules.module3.sections.section4.content.4'
      ],
      lessons: [
        { id: 1, title: 'Cursor AI Mastery', duration: '40 min' },
        { id: 2, title: 'Cursor AI Advanced Features', duration: '35 min' },
        { id: 3, title: 'ChatGPT voor Development', duration: '45 min' },
        { id: 4, title: 'AI Code Review', duration: '30 min' },
        { id: 5, title: 'AI Project Planning', duration: '40 min' }
      ]
    },
    {
      id: 5,
      title: 'modules.module3.sections.section5.title',
      status: 'Vergrendeld',
      description: 'modules.module3.sections.section5.description',
      content: [
        'modules.module3.sections.section5.content.0',
        'modules.module3.sections.section5.content.1',
        'modules.module3.sections.section5.content.2'
      ],
      lessons: []
    }
  ],
  '4': [
    {
      id: 1,
      title: 'modules.module4.sections.section1.title',
      status: 'Niet gestart',
      description: 'modules.module4.sections.section1.description',
      content: [
        'modules.module4.sections.section1.content.0',
        'modules.module4.sections.section1.content.1',
        'modules.module4.sections.section1.content.2',
        'modules.module4.sections.section1.content.3',
        'modules.module4.sections.section1.content.4'
      ],
      lessons: [
        { id: 1, title: 'Project Planning & Setup', duration: '45 min' },
        { id: 2, title: 'Database Design & API Development', duration: '50 min' },
        { id: 3, title: 'Frontend Development & State Management', duration: '55 min' },
        { id: 4, title: 'Testing & Quality Assurance', duration: '40 min' },
        { id: 5, title: 'Deployment & DevOps', duration: '45 min' }
      ]
    },
    {
      id: 2,
      title: 'modules.module4.sections.section2.title',
      status: 'Niet gestart',
      description: 'modules.module4.sections.section2.description',
      content: [
        'modules.module4.sections.section2.content.0',
        'modules.module4.sections.section2.content.1',
        'modules.module4.sections.section2.content.2',
        'modules.module4.sections.section2.content.3',
        'modules.module4.sections.section2.content.4'
      ],
      lessons: [
        { id: 1, title: 'Project Planning & Setup', duration: '45 min' },
        { id: 2, title: 'Database Design & API Development', duration: '50 min' },
        { id: 3, title: 'Frontend Development & State Management', duration: '55 min' },
        { id: 4, title: 'Testing & Quality Assurance', duration: '40 min' },
        { id: 5, title: 'Deployment & DevOps', duration: '45 min' }
      ]
    },
    {
      id: 3,
      title: 'modules.module4.sections.section3.title',
      status: 'Niet gestart',
      description: 'modules.module4.sections.section3.description',
      content: [
        'modules.module4.sections.section3.content.0',
        'modules.module4.sections.section3.content.1',
        'modules.module4.sections.section3.content.2',
        'modules.module4.sections.section3.content.3',
        'modules.module4.sections.section3.content.4'
      ],
      lessons: [
        { id: 1, title: 'Project Planning & Setup', duration: '45 min' },
        { id: 2, title: 'Database Design & API Development', duration: '50 min' },
        { id: 3, title: 'Frontend Development & State Management', duration: '55 min' },
        { id: 4, title: 'Testing & Quality Assurance', duration: '40 min' },
        { id: 5, title: 'Deployment & DevOps', duration: '45 min' }
      ]
    },
    {
      id: 4,
      title: 'modules.module4.sections.section4.title',
      status: 'Niet gestart',
      description: 'modules.module4.sections.section4.description',
      content: [
        'modules.module4.sections.section4.content.0',
        'modules.module4.sections.section4.content.1',
        'modules.module4.sections.section4.content.2',
        'modules.module4.sections.section4.content.3',
        'modules.module4.sections.section4.content.4'
      ],
      lessons: [
        { id: 1, title: 'Project Planning & Setup', duration: '45 min' },
        { id: 2, title: 'Database Design & API Development', duration: '50 min' },
        { id: 3, title: 'Frontend Development & State Management', duration: '55 min' },
        { id: 4, title: 'Testing & Quality Assurance', duration: '40 min' },
        { id: 5, title: 'Deployment & DevOps', duration: '45 min' }
      ]
    },
    {
      id: 5,
      title: 'modules.module4.sections.section5.title',
      status: 'Vergrendeld',
      description: 'modules.module4.sections.section5.description',
      content: [
        'modules.module4.sections.section5.content.0',
        'modules.module4.sections.section5.content.1',
        'modules.module4.sections.section5.content.2'
      ],
      lessons: []
    }
  ],
  '5': [
    {
      id: 1,
      title: 'Cursor AI',
      status: 'Niet gestart',
      description: 'Leer Cursor AI kennen, installeren en effectief gebruiken',
      content: [
        'Wat is Cursor AI?',
        'Cursor AI Installeren & Configureren',
        'Effectieve Prompts Schrijven',
        'Cursor AI Workflow & Best Practices',
        'Geavanceerde Cursor AI Features'
      ],
      lessons: [
        { id: 1, title: 'Wat is Cursor AI?', duration: '45 min' },
        { id: 2, title: 'Cursor AI Installeren & Configureren', duration: '40 min' },
        { id: 3, title: 'Effectieve Prompts Schrijven', duration: '50 min' },
        { id: 4, title: 'Cursor AI Workflow & Best Practices', duration: '45 min' },
        { id: 5, title: 'Geavanceerde Cursor AI Features', duration: '55 min' }
      ]
    }
  ],
  '6': [
    {
      id: 1,
      title: 'Portfolio Website Project',
      status: 'Niet gestart',
      description: 'Bouw een professionele portfolio website van begin tot eind',
      content: [
        'Project Setup: Portfolio Website',
        'Homepage Development',
        'Portfolio Sectie & Projecten',
        'Contact Formulier & Footer',
        'Deployment & Launch'
      ],
      lessons: [
        { id: 1, title: 'Project Setup: Portfolio Website', duration: '45 min' },
        { id: 2, title: 'Homepage Development', duration: '50 min' },
        { id: 3, title: 'Portfolio Sectie & Projecten', duration: '55 min' },
        { id: 4, title: 'Contact Formulier & Footer', duration: '40 min' },
        { id: 5, title: 'Deployment & Launch', duration: '35 min' }
      ]
    }
  ],
  '7': [
    {
      id: 1,
      title: 'E-commerce Website Project',
      status: 'Niet gestart',
      description: 'Bouw een volledig functionele e-commerce website',
      content: [
        'Project Setup: E-commerce Website',
        'Product Catalogus & Database',
        'Shopping Cart & Checkout',
        'User Authentication',
        'Admin Dashboard'
      ],
      lessons: [
        { id: 1, title: 'Project Setup: E-commerce Website', duration: '50 min' },
        { id: 2, title: 'Product Catalogus & Database', duration: '55 min' },
        { id: 3, title: 'Shopping Cart & Checkout', duration: '60 min' },
        { id: 4, title: 'User Authentication', duration: '45 min' },
        { id: 5, title: 'Admin Dashboard', duration: '50 min' }
      ]
    }
  ],
  '8': [
    {
      id: 1,
      title: 'Web Applicatie Project',
      status: 'Niet gestart',
      description: 'Bouw een complexe web applicatie met real-time features',
      content: [
        'Project Setup: Web Applicatie',
        'User Authentication Systeem',
        'Real-time Features',
        'Advanced API Development',
        'Deployment & Scaling'
      ],
      lessons: [
        { id: 1, title: 'Project Setup: Web Applicatie', duration: '55 min' },
        { id: 2, title: 'User Authentication Systeem', duration: '60 min' },
        { id: 3, title: 'Real-time Features', duration: '65 min' },
        { id: 4, title: 'Advanced API Development', duration: '55 min' },
        { id: 5, title: 'Deployment & Scaling', duration: '50 min' }
      ]
    }
  ]
}

export default function ModulePage() {
  const router = useRouter()
  const params = useParams()
  const moduleId = params.id
  const locale = params.locale as string
  const t = useTranslations()

  // State for module progress
  const [moduleProgress, setModuleProgress] = useState<Record<string, any>>({})
  const [completedSections, setCompletedSections] = useState<number[]>([])

  // Load progress from localStorage on component mount
  useEffect(() => {
    if (typeof window !== 'undefined' && moduleId) {
      const savedProgress = localStorage.getItem(`module-${moduleId}-progress`)
      const savedCompletedSections = localStorage.getItem(`module-${moduleId}-completed-sections`)
      
      if (savedProgress) {
        setModuleProgress(JSON.parse(savedProgress))
      }
      
      if (savedCompletedSections) {
        setCompletedSections(JSON.parse(savedCompletedSections))
      }
    }
  }, [moduleId])

  // Save progress to localStorage
  const saveProgress = (newProgress: Record<string, any>, newCompletedSections: number[]) => {
    if (typeof window !== 'undefined' && moduleId) {
      localStorage.setItem(`module-${moduleId}-progress`, JSON.stringify(newProgress))
      localStorage.setItem(`module-${moduleId}-completed-sections`, JSON.stringify(newCompletedSections))
    }
  }

  // Mark section as completed
  const markSectionCompleted = (sectionId: number) => {
    const newCompletedSections = [...completedSections, sectionId]
    setCompletedSections(newCompletedSections)
    saveProgress(moduleProgress, newCompletedSections)
  }

  // Calculate module progress percentage
  const calculateProgress = () => {
    const totalSections = moduleSections[moduleId as keyof typeof moduleSections]?.length || 0
    const completedCount = completedSections.length
    return totalSections > 0 ? Math.round((completedCount / totalSections) * 100) : 0
  }

  // Check if module is available based on progress
  const checkModuleAccess = () => {
    // For testing purposes, make all modules available
    return true
    
    // Original logic (commented out for testing):
    /*
    if (moduleId === '1') {
      return true // Module 1 is always available
    }
    
    if (moduleId === '2') {
      // Check if Module 1 is completed (3 out of 4 sections)
      const module1CompletedSections = localStorage.getItem('module-1-completed-sections')
      const completedSections = module1CompletedSections ? JSON.parse(module1CompletedSections) : []
      return completedSections.length >= 3
    }
    
    if (moduleId === '3') {
      // Check if Module 2 is completed (4 out of 5 sections)
      const module2CompletedSections = localStorage.getItem('module-2-completed-sections')
      const completedSections = module2CompletedSections ? JSON.parse(module2CompletedSections) : []
      return completedSections.length >= 4
    }
    
    if (moduleId === '4') {
      // Check if Module 3 is completed (4 out of 5 sections)
      const module3CompletedSections = localStorage.getItem('module-3-completed-sections')
      const completedSections = module3CompletedSections ? JSON.parse(module3CompletedSections) : []
      return completedSections.length >= 4
    }
    
    if (moduleId === '5') {
      // Check if Module 4 is completed (4 out of 5 sections)
      const module4CompletedSections = localStorage.getItem('module-4-completed-sections')
      const completedSections = module4CompletedSections ? JSON.parse(module4CompletedSections) : []
      return completedSections.length >= 4
    }
    
    if (moduleId === '6') {
      // Check if Module 5 is completed (4 out of 5 sections)
      const module5CompletedSections = localStorage.getItem('module-5-completed-sections')
      const completedSections = module5CompletedSections ? JSON.parse(module5CompletedSections) : []
      return completedSections.length >= 4
    }
    
    if (moduleId === '7') {
      // Check if Module 6 is completed (4 out of 5 sections)
      const module6CompletedSections = localStorage.getItem('module-6-completed-sections')
      const completedSections = module6CompletedSections ? JSON.parse(module6CompletedSections) : []
      return completedSections.length >= 4
    }
    
    if (moduleId === '8') {
      // Check if Module 7 is completed (4 out of 5 sections)
      const module7CompletedSections = localStorage.getItem('module-7-completed-sections')
      const completedSections = module7CompletedSections ? JSON.parse(module7CompletedSections) : []
      return completedSections.length >= 4
    }
    
    return false
    */
  }

  if (!checkModuleAccess()) {
    return (
      <div className="locked-container">
        <div className="locked-content">
          <div className="locked-icon">🔒</div>
          <h2>{t('locked.title')}</h2>
          <div className="locked-description">
            {t('locked.description')}
          </div>
          <div className="locked-requirements">
            <h4>{t('locked.requirements')}</h4>
            <ul>
              {moduleId === '2' && (
                <li>{t('locked.module1')}</li>
              )}
              {moduleId === '3' && (
                <li>{t('locked.module2')}</li>
              )}
              {moduleId === '4' && (
                <li>{t('locked.module3')}</li>
              )}
              {moduleId === '5' && (
                <li>Voltooi Module 4 om Cursor AI te ontgrendelen</li>
              )}
              {moduleId === '6' && (
                <li>Voltooi Module 5 om Portfolio Website Project te ontgrendelen</li>
              )}
              {moduleId === '7' && (
                <li>Voltooi Module 6 om E-commerce Website Project te ontgrendelen</li>
              )}
              {moduleId === '8' && (
                <li>Voltooi Module 7 om Web Applicatie Project te ontgrendelen</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  const handleStartSection = (section: any) => {
    if (section.lessons.length > 0) {
      // Navigate to the first lesson of this section
      router.push(`/${locale}/dashboard/modules/${moduleId}/lessons/${section.lessons[0].id}`)
    }
  }

  const handleCompleteSection = (sectionId: number) => {
    markSectionCompleted(sectionId)
  }

  return (
    <div className="module-content">
      <div className="module-header">
        <button 
          className="back-button"
          onClick={() => router.push(`/${locale}/dashboard/modules`)}
        >
          {t('common.actions.back')}
        </button>
        <h2 className="module-title">
          {moduleId === '1' ? t('modules.module1.name') : 
           moduleId === '2' ? t('modules.module2.name') :
           moduleId === '3' ? t('modules.module3.name') :
           moduleId === '4' ? t('modules.module4.name') :
           moduleId === '5' ? 'Cursor AI' :
           moduleId === '6' ? 'Portfolio Website Project' :
           moduleId === '7' ? 'E-commerce Website Project' :
           moduleId === '8' ? 'Web Applicatie Project' : 'Module'}
        </h2>
        <div className="module-progress">
          <span className="progress-text">{t('common.progress.progress', { percentage: calculateProgress() })}</span>
          <div className="progress-bar">
            <div className="progress-fill" style={{width: `${calculateProgress()}%`}}></div>
          </div>
        </div>
      </div>

      <div className="module-sections">
        {moduleSections[moduleId as keyof typeof moduleSections]?.map((section) => {
          const isCompleted = completedSections.includes(section.id)
          const isLocked = section.status === 'Vergrendeld'
          
          return (
            <div key={section.id} className="section-card">
              <div className="section-header">
                <h3>{t(section.title)}</h3>
                <span className={`section-status ${isLocked ? 'locked' : isCompleted ? 'completed' : ''}`}>
                  {isCompleted ? t('common.status.completed') : isLocked ? t('common.status.locked') : t('common.status.notStarted')}
                </span>
              </div>
              
              <div className="section-content">
                <p>{t(section.description)}</p>
                
                {section.content && (
                  <ul>
                    {section.content.map((item, index) => (
                      <li key={index}>{t(item)}</li>
                    ))}
                  </ul>
                )}

                {/* Lesson Overview */}
                {section.lessons.length > 0 && (
                  <div className="section-lessons-overview">
                    <h4>📚 Lessen in deze sectie:</h4>
                    <div className="lessons-grid">
                      {section.lessons.map((lesson) => (
                        <div key={lesson.id} className="lesson-preview">
                          <div className="lesson-preview-header">
                            <span className="lesson-preview-number">{lesson.id}.</span>
                            <span className="lesson-preview-title">{t(lesson.title)}</span>
                            <span className="lesson-preview-duration">{lesson.duration}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {isLocked ? (
                <button className="btn-secondary" disabled>{t('common.actions.moduleLocked')}</button>
              ) : isCompleted ? (
                <button className="btn-secondary" disabled>{t('common.actions.sectionCompleted')}</button>
              ) : (
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button 
                    className="btn-primary"
                    onClick={() => handleStartSection(section)}
                    disabled={section.lessons.length === 0}
                  >
                    {section.lessons.length > 0 ? t('common.actions.startSection') : t('common.actions.noLessonsAvailable')}
                  </button>
                  <button 
                    className="btn-secondary"
                    onClick={() => handleCompleteSection(section.id)}
                    style={{ fontSize: '0.8rem', padding: '8px 16px' }}
                  >
                    {t('common.actions.markCompleted')}
                  </button>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
} 