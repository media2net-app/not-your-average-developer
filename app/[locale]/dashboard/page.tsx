'use client'

import { useState, useEffect } from 'react'
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
  Building2,
  BarChart3,
  GraduationCap,
  Trophy
} from 'lucide-react'

interface User {
  id: string
  name: string
  email: string
  role: string
}

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

export default function DashboardOverview() {
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
          dependencies: ['task-2-1']
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
          title: 'Freelance Platforms',
          description: 'Maak profielen aan op Upwork, Fiverr, etc.',
          type: 'sales',
          estimatedTime: '1 week',
          status: 'not-started',
          priority: 'medium',
          dependencies: ['task-2-3']
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

  const totalRevenueGoal = roadmapPhases.reduce((sum, phase) => sum + phase.revenueGoal, 0)
  const completedTasks = roadmapPhases.flatMap(phase => phase.tasks).filter(task => task.status === 'completed').length
  const totalTasks = roadmapPhases.flatMap(phase => phase.tasks).length
  const overallProgress = Math.round((completedTasks / totalTasks) * 100)
  const completedPhases = roadmapPhases.filter(phase => phase.status === 'completed').length

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title"><BarChart3 className="inline-icon" /> Dashboard</h1>
        <p className="dashboard-description">
          Welkom terug! Hier zie je een overzicht van je voortgang en volgende stappen.
        </p>
      </div>

      {/* Overview Stats */}
      <div className="dashboard-stats-overview">
        <div className="dashboard-stat-card">
          <div className="dashboard-stat-icon"><Target size={24} /></div>
          <div className="dashboard-stat-content">
            <h3>{roadmapPhases.length}</h3>
            <p>Fases</p>
          </div>
        </div>
        <div className="dashboard-stat-card">
          <div className="dashboard-stat-icon"><CheckCircle size={24} /></div>
          <div className="dashboard-stat-content">
            <h3>{completedTasks}/{totalTasks}</h3>
            <p>Taken Voltooid</p>
          </div>
        </div>
        <div className="dashboard-stat-card">
          <div className="dashboard-stat-icon"><TrendingUp size={24} /></div>
          <div className="dashboard-stat-content">
            <h3>{overallProgress}%</h3>
            <p>Algemene Voortgang</p>
          </div>
        </div>
        <div className="dashboard-stat-card">
          <div className="dashboard-stat-icon"><DollarSign size={24} /></div>
          <div className="dashboard-stat-content">
            <h3>€{totalRevenueGoal.toLocaleString()}</h3>
            <p>Omzet Doel</p>
          </div>
        </div>
      </div>

      {/* Roadmap Overview */}
      <div className="roadmap-overview-section">
        <div className="section-header">
          <h2 className="section-title"><Target className="inline-icon" /> Plan van Aanpak</h2>
          <button 
            className="view-all-btn"
            onClick={() => router.push('/nl/dashboard/roadmap')}
          >
            <ArrowRight size={16} />
            Bekijk Volledige Roadmap
          </button>
        </div>
        
        <div className="roadmap-phases-grid">
          {roadmapPhases.map((phase, index) => {
            const IconComponent = phase.icon
            const completedTasks = phase.tasks.filter(task => task.status === 'completed').length
            const phaseProgress = Math.round((completedTasks / phase.tasks.length) * 100)
            
            return (
              <div key={phase.id} className="roadmap-phase-card">
                <div className="phase-card-header">
                  <div className="phase-number">{index + 1}</div>
                  <div className="phase-info">
                    <div className="phase-title-section">
                      <IconComponent className="phase-icon" size={20} />
                      <h3 className="phase-title">{phase.title}</h3>
                    </div>
                    <p className="phase-description">{phase.description}</p>
                  </div>
                </div>

                <div className="phase-progress-section">
                  <div className="progress-header">
                    <span>Voortgang: {completedTasks}/{phase.tasks.length} taken</span>
                    <span>{phaseProgress}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: `${phaseProgress}%`}}></div>
                  </div>
                </div>

                <div className="phase-meta">
                  <span className="phase-duration"><Clock size={14} /> {phase.duration}</span>
                  <span className="phase-revenue"><DollarSign size={14} /> €{phase.revenueGoal.toLocaleString()}</span>
                  <span className={`phase-status ${getStatusColor(phase.status)}`}>
                    {phase.status === 'completed' ? <CheckCircle size={14} /> : 
                     phase.status === 'in-progress' ? <Clock size={14} /> : 
                     <Play size={14} />}
                    {phase.status === 'completed' ? ' Voltooid' : 
                     phase.status === 'in-progress' ? ' In Progress' : 
                     ' Niet Gestart'}
                  </span>
                </div>

                <button 
                  className="view-phase-btn"
                  onClick={() => router.push('/nl/dashboard/roadmap')}
                >
                  <ArrowRight size={14} />
                  Bekijk Details
                </button>
              </div>
            )
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions-section">
        <h2 className="section-title"><Zap className="inline-icon" /> Snelle Acties</h2>
        <div className="quick-actions-grid">
          <button 
            className="quick-action-card"
            onClick={() => router.push('/nl/dashboard/modules')}
          >
            <BookOpen size={24} />
            <h3>Ga door met Modules</h3>
            <p>Voltooi je huidige module</p>
          </button>
          
          <button 
            className="quick-action-card"
            onClick={() => router.push('/nl/dashboard/prompts')}
          >
            <Bot size={24} />
            <h3>Cursor AI Prompts</h3>
            <p>Bekijk prompts voor je projecten</p>
          </button>
          
          <button 
            className="quick-action-card"
            onClick={() => router.push('/nl/dashboard/sales')}
          >
            <Users size={24} />
            <h3>Sales Training</h3>
            <p>Leer verkopen en klanten werven</p>
          </button>
          
          <button 
            className="quick-action-card"
            onClick={() => router.push('/nl/dashboard/gamification')}
          >
            <Award size={24} />
            <h3>Gamification</h3>
            <p>Verdien punten en behaal prestaties</p>
          </button>
          
          <button 
            className="quick-action-card"
            onClick={() => router.push('/nl/dashboard/marketplace')}
          >
            <ShoppingCart size={24} />
            <h3>Marketplace</h3>
            <p>Ontdek cursussen en templates</p>
          </button>
          
          <button 
            className="quick-action-card"
            onClick={() => router.push('/nl/dashboard/crm')}
          >
            <Users size={24} />
            <h3>CRM</h3>
            <p>Beheer je klanten en projecten</p>
          </button>
          
          <button 
            className="quick-action-card"
            onClick={() => router.push('/nl/dashboard/community')}
          >
            <Users size={24} />
            <h3>Community</h3>
            <p>Connect met andere cursisten</p>
          </button>
        </div>
      </div>
    </div>
  )
} 