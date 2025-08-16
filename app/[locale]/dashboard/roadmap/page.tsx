'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { 
  Target, 
  BookOpen, 
  Bot, 
  Palette, 
  ShoppingCart, 
  Sparkles,
  CheckCircle,
  Clock,
  TrendingUp,
  DollarSign,
  Users,
  FileText,
  Calendar,
  Star,
  ArrowRight,
  Play,
  Award,
  Zap,
  Lightbulb,
  Building2
} from 'lucide-react'

interface RoadmapPhase {
  id: string
  title: string
  description: string
  icon: any
  color: string
  duration: string
  tasks: RoadmapTask[]
  revenueGoal: number
  status: 'not-started' | 'in-progress' | 'completed'
  progress: number
}

interface RoadmapTask {
  id: string
  title: string
  description: string
  type: 'learning' | 'building' | 'sales' | 'marketing'
  estimatedTime: string
  status: 'not-started' | 'in-progress' | 'completed'
  priority: 'low' | 'medium' | 'high'
  dependencies?: string[]
}

export default function RoadmapPage() {
  const [selectedPhase, setSelectedPhase] = useState<RoadmapPhase | null>(null)
  const [selectedTask, setSelectedTask] = useState<RoadmapTask | null>(null)
  const router = useRouter()

  const roadmapPhases: RoadmapPhase[] = [
    {
      id: 'phase-1',
      title: 'Fundamentals & Learning',
      description: 'Bouw een solide basis met web development skills en Cursor AI',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      duration: '4-6 weken',
      status: 'in-progress',
      progress: 60,
      revenueGoal: 0,
      tasks: [
        {
          id: 'task-1-1',
          title: 'Voltooi Module 1: HTML & CSS Fundamentals',
          description: 'Leer de basis van web development met HTML en CSS',
          type: 'learning',
          estimatedTime: '1 week',
          status: 'completed',
          priority: 'high'
        },
        {
          id: 'task-1-2',
          title: 'Voltooi Module 2: JavaScript Essentials',
          description: 'Master JavaScript voor interactieve websites',
          type: 'learning',
          estimatedTime: '1-2 weken',
          status: 'in-progress',
          priority: 'high'
        },
        {
          id: 'task-1-3',
          title: 'Voltooi Module 3: Git & Version Control',
          description: 'Leer professioneel code management',
          type: 'learning',
          estimatedTime: '1 week',
          status: 'not-started',
          priority: 'medium'
        },
        {
          id: 'task-1-4',
          title: 'Voltooi Module 4: Deployment & Best Practices',
          description: 'Leer hoe je websites online zet',
          type: 'learning',
          estimatedTime: '1 week',
          status: 'not-started',
          priority: 'medium'
        },
        {
          id: 'task-1-5',
          title: 'Master Cursor AI (Module 5)',
          description: 'Word expert in AI-assisted development',
          type: 'learning',
          estimatedTime: '1-2 weken',
          status: 'not-started',
          priority: 'high'
        }
      ]
    },
    {
      id: 'phase-2',
      title: 'Portfolio & First Projects',
      description: 'Bouw je eerste professionele projecten en portfolio',
      icon: Palette,
      color: 'from-purple-500 to-pink-500',
      duration: '3-4 weken',
      status: 'not-started',
      progress: 0,
      revenueGoal: 0,
      tasks: [
        {
          id: 'task-2-1',
          title: 'Bouw Portfolio Website (Module 6)',
          description: 'Creëer een professionele portfolio die je skills showcase',
          type: 'building',
          estimatedTime: '1-2 weken',
          status: 'not-started',
          priority: 'high',
          dependencies: ['task-1-5']
        },
        {
          id: 'task-2-2',
          title: 'Bouw E-commerce Website (Module 7)',
          description: 'Ontwikkel een volledig functionele webshop',
          type: 'building',
          estimatedTime: '2-3 weken',
          status: 'not-started',
          priority: 'high',
          dependencies: ['task-2-1']
        },
        {
          id: 'task-2-3',
          title: 'Bouw Web Applicatie (Module 8)',
          description: 'Creëer een complexe web applicatie met real-time features',
          type: 'building',
          estimatedTime: '2-3 weken',
          status: 'not-started',
          priority: 'medium',
          dependencies: ['task-2-2']
        },
        {
          id: 'task-2-4',
          title: 'Optimaliseer Portfolio voor SEO',
          description: 'Zorg dat potentiële klanten je kunnen vinden',
          type: 'marketing',
          estimatedTime: '3-5 dagen',
          status: 'not-started',
          priority: 'medium',
          dependencies: ['task-2-1']
        }
      ]
    },
    {
      id: 'phase-3',
      title: 'Sales & Marketing Setup',
      description: 'Bouw je online presence en leer verkopen',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      duration: '2-3 weken',
      status: 'not-started',
      progress: 0,
      revenueGoal: 500,
      tasks: [
        {
          id: 'task-3-1',
          title: 'Voltooi Sales Training',
          description: 'Leer effectieve verkooptechnieken en klantcommunicatie',
          type: 'sales',
          estimatedTime: '1 week',
          status: 'not-started',
          priority: 'high',
          dependencies: ['task-2-3']
        },
        {
          id: 'task-3-2',
          title: 'Maak LinkedIn Profiel',
          description: 'Bouw een professioneel LinkedIn profiel voor networking',
          type: 'marketing',
          estimatedTime: '2-3 dagen',
          status: 'not-started',
          priority: 'high',
          dependencies: ['task-2-4']
        },
        {
          id: 'task-3-3',
          title: 'Start Content Marketing',
          description: 'Schrijf artikelen en deel je kennis online',
          type: 'marketing',
          estimatedTime: '1 week',
          status: 'not-started',
          priority: 'medium',
          dependencies: ['task-3-2']
        },
        {
          id: 'task-3-4',
          title: 'Bouw Email List',
          description: 'Verzamel leads via je portfolio en content',
          type: 'marketing',
          estimatedTime: '1 week',
          status: 'not-started',
          priority: 'medium',
          dependencies: ['task-3-3']
        }
      ]
    },
    {
      id: 'phase-4',
      title: 'First Client Acquisition',
      description: 'Verkrijg je eerste betaalde klanten',
      icon: DollarSign,
      color: 'from-yellow-500 to-orange-500',
      duration: '4-6 weken',
      status: 'not-started',
      progress: 0,
      revenueGoal: 2000,
      tasks: [
        {
          id: 'task-4-1',
          title: 'Cold Outreach Campaign',
          description: 'Benader 50 potentiële klanten per week',
          type: 'sales',
          estimatedTime: 'Ongoing',
          status: 'not-started',
          priority: 'high',
          dependencies: ['task-3-1']
        },
        {
          id: 'task-4-2',
          title: 'Networking Events',
          description: 'Bezoek lokale business events en meetups',
          type: 'sales',
          estimatedTime: '2-3 events per maand',
          status: 'not-started',
          priority: 'medium',
          dependencies: ['task-3-2']
        },
        {
          id: 'task-4-3',
          title: 'Freelance Platforms',
          description: 'Maak profielen aan op Upwork, Fiverr, etc.',
          type: 'sales',
          estimatedTime: '1 week',
          status: 'not-started',
          priority: 'medium',
          dependencies: ['task-2-3']
        },
        {
          id: 'task-4-4',
          title: 'Referral System',
          description: 'Vraag bestaande klanten om referenties',
          type: 'sales',
          estimatedTime: 'Ongoing',
          status: 'not-started',
          priority: 'low',
          dependencies: ['task-4-1']
        }
      ]
    },
    {
      id: 'phase-5',
      title: 'Scale & Optimize',
      description: 'Groeit je business en verhoog je tarieven',
      icon: TrendingUp,
      color: 'from-red-500 to-pink-500',
      duration: 'Ongoing',
      status: 'not-started',
      progress: 0,
      revenueGoal: 5000,
      tasks: [
        {
          id: 'task-5-1',
          title: 'Verhoog Tarieven',
          description: 'Verhoog je uurtarief met 20-30%',
          type: 'sales',
          estimatedTime: '1 maand',
          status: 'not-started',
          priority: 'high',
          dependencies: ['task-4-1']
        },
        {
          id: 'task-5-2',
          title: 'Bouw Team',
          description: 'Huur je eerste freelancer in',
          type: 'building',
          estimatedTime: '2-3 maanden',
          status: 'not-started',
          priority: 'medium',
          dependencies: ['task-5-1']
        },
        {
          id: 'task-5-3',
          title: 'Productize Services',
          description: 'Creëer pakketten en templates',
          type: 'building',
          estimatedTime: '1-2 maanden',
          status: 'not-started',
          priority: 'medium',
          dependencies: ['task-4-3']
        },
        {
          id: 'task-5-4',
          title: 'Passive Income',
          description: 'Bouw digitale producten en cursussen',
          type: 'building',
          estimatedTime: '3-6 maanden',
          status: 'not-started',
          priority: 'low',
          dependencies: ['task-5-3']
        }
      ]
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'from-green-500 to-emerald-500'
      case 'in-progress': return 'from-blue-500 to-cyan-500'
      case 'not-started': return 'from-gray-500 to-gray-600'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'from-red-500 to-pink-500'
      case 'medium': return 'from-yellow-500 to-orange-500'
      case 'low': return 'from-green-500 to-emerald-500'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'learning': return BookOpen
      case 'building': return Building2
      case 'sales': return Users
      case 'marketing': return TrendingUp
      default: return FileText
    }
  }

  const totalRevenueGoal = roadmapPhases.reduce((sum, phase) => sum + phase.revenueGoal, 0)
  const completedTasks = roadmapPhases.flatMap(phase => phase.tasks).filter(task => task.status === 'completed').length
  const totalTasks = roadmapPhases.flatMap(phase => phase.tasks).length
  const overallProgress = Math.round((completedTasks / totalTasks) * 100)

  return (
    <div className="roadmap-container">
      <div className="roadmap-header">
        <h1 className="roadmap-title"><Target className="inline-icon" /> Plan van Aanpak</h1>
        <p className="roadmap-description">
          Van 0 naar je eerste klant: Een complete roadmap om je web development business op te bouwen
        </p>
      </div>

      {/* Overview Stats */}
      <div className="roadmap-stats-overview">
        <div className="roadmap-stat-card">
          <div className="roadmap-stat-icon"><Target size={24} /></div>
          <div className="roadmap-stat-content">
            <h3>{roadmapPhases.length}</h3>
            <p>Fases</p>
          </div>
        </div>
        <div className="roadmap-stat-card">
          <div className="roadmap-stat-icon"><CheckCircle size={24} /></div>
          <div className="roadmap-stat-content">
            <h3>{completedTasks}/{totalTasks}</h3>
            <p>Taken Voltooid</p>
          </div>
        </div>
        <div className="roadmap-stat-card">
          <div className="roadmap-stat-icon"><TrendingUp size={24} /></div>
          <div className="roadmap-stat-content">
            <h3>{overallProgress}%</h3>
            <p>Algemene Voortgang</p>
          </div>
        </div>
        <div className="roadmap-stat-card">
          <div className="roadmap-stat-icon"><DollarSign size={24} /></div>
          <div className="roadmap-stat-content">
            <h3>€{totalRevenueGoal.toLocaleString()}</h3>
            <p>Omzet Doel</p>
          </div>
        </div>
      </div>

      {/* Roadmap Phases */}
      <div className="roadmap-phases">
        {roadmapPhases.map((phase, index) => {
          const IconComponent = phase.icon
          const completedTasks = phase.tasks.filter(task => task.status === 'completed').length
          const phaseProgress = Math.round((completedTasks / phase.tasks.length) * 100)
          
          return (
            <div key={phase.id} className="roadmap-phase">
              <div className="phase-header">
                <div className="phase-number">{index + 1}</div>
                <div className="phase-info">
                  <div className="phase-title-section">
                    <IconComponent className="phase-icon" size={24} />
                    <h2 className="phase-title">{phase.title}</h2>
                    <span className={`phase-status ${getStatusColor(phase.status)}`}>
                      {phase.status === 'completed' ? <CheckCircle size={16} /> : 
                       phase.status === 'in-progress' ? <Clock size={16} /> : 
                       <Play size={16} />}
                      {phase.status === 'completed' ? ' Voltooid' : 
                       phase.status === 'in-progress' ? ' In Progress' : 
                       ' Niet Gestart'}
                    </span>
                  </div>
                  <p className="phase-description">{phase.description}</p>
                  <div className="phase-meta">
                    <span className="phase-duration"><Clock size={16} /> {phase.duration}</span>
                    <span className="phase-revenue"><DollarSign size={16} /> €{phase.revenueGoal.toLocaleString()} doel</span>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="phase-progress">
                <div className="progress-header">
                  <span>Voortgang: {completedTasks}/{phase.tasks.length} taken</span>
                  <span>{phaseProgress}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: `${phaseProgress}%`}}></div>
                </div>
              </div>

              {/* Tasks Grid */}
              <div className="tasks-grid">
                {phase.tasks.map((task) => {
                  const TaskIcon = getTypeIcon(task.type)
                  return (
                    <div key={task.id} className={`task-card ${task.status}`}>
                      <div className="task-header">
                        <div className="task-icon">
                          <TaskIcon size={20} />
                        </div>
                        <div className="task-meta">
                          <span className={`task-priority ${getPriorityColor(task.priority)}`}>
                            {task.priority}
                          </span>
                          <span className="task-time">{task.estimatedTime}</span>
                        </div>
                      </div>
                      
                      <div className="task-content">
                        <h4 className="task-title">{task.title}</h4>
                        <p className="task-description">{task.description}</p>
                      </div>

                      <div className="task-actions">
                        <button 
                          className={`task-status-btn ${task.status}`}
                          onClick={() => setSelectedTask(task)}
                        >
                          {task.status === 'completed' ? <CheckCircle size={16} /> : 
                           task.status === 'in-progress' ? <Clock size={16} /> : 
                           <Play size={16} />}
                          {task.status === 'completed' ? ' Voltooid' : 
                           task.status === 'in-progress' ? ' In Progress' : 
                           ' Start Taak'}
                        </button>
                        <button 
                          className="view-details-btn"
                          onClick={() => setSelectedTask(task)}
                        >
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>

              <button 
                className="view-phase-details-btn"
                onClick={() => setSelectedPhase(phase)}
              >
                <ArrowRight size={16} />
                Bekijk Fase Details
              </button>
            </div>
          )
        })}
      </div>

      {/* Phase Details Modal */}
      {selectedPhase && (
        <div className="modal-overlay" onClick={() => setSelectedPhase(null)}>
          <div className="modal-content phase-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedPhase.title}</h2>
              <button className="close-button" onClick={() => setSelectedPhase(null)}>✕</button>
            </div>
            <div className="modal-body">
              <div className="phase-detail-info">
                <div className="detail-item">
                  <span className="detail-label">Duur:</span>
                  <span className="detail-value">{selectedPhase.duration}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Omzet Doel:</span>
                  <span className="detail-value">€{selectedPhase.revenueGoal.toLocaleString()}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Status:</span>
                  <span className="detail-value">
                    <span className={`status-badge ${getStatusColor(selectedPhase.status)}`}>
                      {selectedPhase.status === 'completed' ? 'Voltooid' : 
                       selectedPhase.status === 'in-progress' ? 'In Progress' : 
                       'Niet Gestart'}
                    </span>
                  </span>
                </div>
              </div>
              
              <div className="phase-tasks-full">
                <h3>Taken in deze fase:</h3>
                <div className="tasks-list">
                  {selectedPhase.tasks.map((task) => {
                    const TaskIcon = getTypeIcon(task.type)
                    return (
                      <div key={task.id} className={`task-item ${task.status}`}>
                        <div className="task-item-header">
                          <TaskIcon size={20} />
                          <h4>{task.title}</h4>
                          <span className={`task-status ${task.status}`}>
                            {task.status === 'completed' ? <CheckCircle size={16} /> : 
                             task.status === 'in-progress' ? <Clock size={16} /> : 
                             <Play size={16} />}
                          </span>
                        </div>
                        <p>{task.description}</p>
                        <div className="task-item-meta">
                          <span className={`priority-badge ${getPriorityColor(task.priority)}`}>
                            {task.priority} prioriteit
                          </span>
                          <span className="time-estimate">{task.estimatedTime}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Task Details Modal */}
      {selectedTask && (
        <div className="modal-overlay" onClick={() => setSelectedTask(null)}>
          <div className="modal-content task-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedTask.title}</h2>
              <button className="close-button" onClick={() => setSelectedTask(null)}>✕</button>
            </div>
            <div className="modal-body">
              <div className="task-detail-info">
                <div className="detail-item">
                  <span className="detail-label">Type:</span>
                  <span className="detail-value">{selectedTask.type}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Geschatte tijd:</span>
                  <span className="detail-value">{selectedTask.estimatedTime}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Prioriteit:</span>
                  <span className="detail-value">
                    <span className={`priority-badge ${getPriorityColor(selectedTask.priority)}`}>
                      {selectedTask.priority}
                    </span>
                  </span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Status:</span>
                  <span className="detail-value">
                    <span className={`status-badge ${getStatusColor(selectedTask.status)}`}>
                      {selectedTask.status === 'completed' ? 'Voltooid' : 
                       selectedTask.status === 'in-progress' ? 'In Progress' : 
                       'Niet Gestart'}
                    </span>
                  </span>
                </div>
              </div>
              
              <div className="task-description-full">
                <h3>Beschrijving:</h3>
                <p>{selectedTask.description}</p>
              </div>
              
              {selectedTask.dependencies && selectedTask.dependencies.length > 0 && (
                <div className="task-dependencies">
                  <h3>Afhankelijkheden:</h3>
                  <ul>
                    {selectedTask.dependencies.map((dep, index) => (
                      <li key={index}>{dep}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="task-actions-full">
                <button className="start-task-btn">
                  <Play size={16} />
                  Start Taak
                </button>
                <button className="mark-complete-btn">
                  <CheckCircle size={16} />
                  Markeer als Voltooid
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
