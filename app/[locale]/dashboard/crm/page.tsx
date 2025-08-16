'use client'

import { useState } from 'react'
import { 
  Users, 
  UserPlus, 
  Search, 
  Filter, 
  MoreVertical, 
  Phone, 
  Mail, 
  Calendar,
  DollarSign,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Star,
  MessageSquare,
  FileText,
  Settings,
  BarChart3,
  Target,
  Award,
  Building2,
  Globe,
  MapPin,
  Tag,
  Plus,
  Edit,
  Trash2,
  Eye,
  Send,
  Download
} from 'lucide-react'

interface Client {
  id: string
  name: string
  email: string
  phone: string
  company: string
  position: string
  status: 'lead' | 'prospect' | 'client' | 'inactive'
  source: string
  value: number
  lastContact: string
  nextFollowUp: string
  notes: string
  tags: string[]
  projects: Project[]
  communications: Communication[]
}

interface Project {
  id: string
  title: string
  description: string
  status: 'proposal' | 'in-progress' | 'completed' | 'cancelled'
  value: number
  startDate: string
  endDate?: string
  progress: number
  tasks: Task[]
}

interface Task {
  id: string
  title: string
  status: 'todo' | 'in-progress' | 'completed'
  dueDate: string
  assignedTo: string
}

interface Communication {
  id: string
  type: 'email' | 'call' | 'meeting' | 'message'
  date: string
  subject: string
  content: string
  outcome: string
}

export default function CRMPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'clients' | 'projects' | 'sales' | 'analytics'>('overview')
  const [selectedClient, setSelectedClient] = useState<Client | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [showAddClient, setShowAddClient] = useState(false)
  const [showFilters, setShowFilters] = useState(false)

  const clients: Client[] = [
    {
      id: '1',
      name: 'John Smith',
      email: 'john@techstartup.com',
      phone: '+31 6 12345678',
      company: 'TechStartup BV',
      position: 'CEO',
      status: 'client',
      source: 'Website',
      value: 15000,
      lastContact: '2024-01-15',
      nextFollowUp: '2024-01-30',
      notes: 'Interesseert zich voor e-commerce website. Budget beschikbaar.',
      tags: ['E-commerce', 'High Value', 'Tech'],
      projects: [
        {
          id: '1',
          title: 'E-commerce Website',
          description: 'Complete webshop voor TechStartup',
          status: 'in-progress',
          value: 15000,
          startDate: '2024-01-10',
          progress: 65,
          tasks: [
            { id: '1', title: 'Design Mockups', status: 'completed', dueDate: '2024-01-15', assignedTo: 'Designer' },
            { id: '2', title: 'Frontend Development', status: 'in-progress', dueDate: '2024-01-25', assignedTo: 'Developer' },
            { id: '3', title: 'Payment Integration', status: 'todo', dueDate: '2024-01-30', assignedTo: 'Developer' }
          ]
        }
      ],
      communications: [
        {
          id: '1',
          type: 'meeting',
          date: '2024-01-15',
          subject: 'Project Kickoff',
          content: 'Besproken requirements en timeline',
          outcome: 'Project gestart'
        }
      ]
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      email: 'sarah@creativeagency.nl',
      phone: '+31 6 87654321',
      company: 'Creative Agency',
      position: 'Marketing Manager',
      status: 'prospect',
      source: 'LinkedIn',
      value: 8000,
      lastContact: '2024-01-12',
      nextFollowUp: '2024-01-20',
      notes: 'Zoekt naar portfolio website. Budget €5-10k.',
      tags: ['Portfolio', 'Creative', 'Medium Value'],
      projects: [],
      communications: [
        {
          id: '1',
          type: 'call',
          date: '2024-01-12',
          subject: 'Initial Contact',
          content: 'Intake gesprek over portfolio website',
          outcome: 'Proposal verstuurd'
        }
      ]
    },
    {
      id: '3',
      name: 'Mike van der Berg',
      email: 'mike@restaurant.nl',
      phone: '+31 6 11223344',
      company: 'Restaurant de Berg',
      position: 'Eigenaar',
      status: 'lead',
      source: 'Referral',
      value: 3000,
      lastContact: '2024-01-10',
      nextFollowUp: '2024-01-18',
      notes: 'Wil eenvoudige website voor restaurant.',
      tags: ['Restaurant', 'Small Business', 'Local'],
      projects: [],
      communications: []
    }
  ]

  const tabs = [
    { id: 'overview', label: 'Overzicht', icon: BarChart3 },
    { id: 'clients', label: 'Klanten', icon: Users },
    { id: 'projects', label: 'Projecten', icon: FileText },
    { id: 'sales', label: 'Sales', icon: TrendingUp },
    { id: 'analytics', label: 'Analytics', icon: Target }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'lead': return 'from-blue-500 to-cyan-500'
      case 'prospect': return 'from-yellow-500 to-orange-500'
      case 'client': return 'from-green-500 to-emerald-500'
      case 'inactive': return 'from-gray-500 to-gray-600'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  const getProjectStatusColor = (status: string) => {
    switch (status) {
      case 'proposal': return 'from-blue-500 to-cyan-500'
      case 'in-progress': return 'from-yellow-500 to-orange-500'
      case 'completed': return 'from-green-500 to-emerald-500'
      case 'cancelled': return 'from-red-500 to-pink-500'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         client.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         client.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = selectedStatus === 'all' || client.status === selectedStatus
    return matchesSearch && matchesStatus
  })

  const totalValue = clients.reduce((sum, client) => sum + client.value, 0)
  const activeClients = clients.filter(client => client.status === 'client').length
  const totalProjects = clients.reduce((sum, client) => sum + client.projects.length, 0)
  const activeProjects = clients.reduce((sum, client) => 
    sum + client.projects.filter(project => project.status === 'in-progress').length, 0
  )

  return (
    <div className="crm-container">
      <div className="crm-header">
        <div className="header-content">
          <h1 className="crm-title">
            <Users className="inline-icon" /> Client Management
          </h1>
          <p className="crm-description">
            Beheer je klanten, projecten en sales pipeline
          </p>
        </div>
        
        <div className="header-actions">
          <button
            onClick={() => setShowAddClient(true)}
            className="btn-primary"
          >
            <UserPlus size={20} />
            Nieuwe Klant
          </button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="crm-stats">
        <div className="stat-card">
          <div className="stat-icon">
            <Users size={24} />
          </div>
          <div className="stat-content">
            <h3>{clients.length}</h3>
            <p>Totaal Klanten</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <DollarSign size={24} />
          </div>
          <div className="stat-content">
            <h3>€{totalValue.toLocaleString()}</h3>
            <p>Totale Waarde</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <CheckCircle size={24} />
          </div>
          <div className="stat-content">
            <h3>{activeClients}</h3>
            <p>Actieve Klanten</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <FileText size={24} />
          </div>
          <div className="stat-content">
            <h3>{activeProjects}</h3>
            <p>Actieve Projecten</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="crm-tabs">
        {tabs.map((tab) => {
          const IconComponent = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`crm-tab ${activeTab === tab.id ? 'active' : ''}`}
            >
              <IconComponent size={20} />
              <span>{tab.label}</span>
            </button>
          )
        })}
      </div>

      {/* Tab Content */}
      <div className="crm-content">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="overview-section">
            <div className="overview-grid">
              {/* Recent Activity */}
              <div className="overview-card">
                <h3>Recente Activiteit</h3>
                <div className="activity-list">
                  {clients.slice(0, 5).map((client) => (
                    <div key={client.id} className="activity-item">
                      <div className="activity-icon">
                        <Users size={16} />
                      </div>
                      <div className="activity-content">
                        <p><strong>{client.name}</strong> - {client.company}</p>
                        <span className="activity-date">
                          Laatste contact: {new Date(client.lastContact).toLocaleDateString('nl-NL')}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Follow-ups */}
              <div className="overview-card">
                <h3>Volgende Follow-ups</h3>
                <div className="followup-list">
                  {clients
                    .filter(client => client.nextFollowUp)
                    .sort((a, b) => new Date(a.nextFollowUp).getTime() - new Date(b.nextFollowUp).getTime())
                    .slice(0, 5)
                    .map((client) => (
                      <div key={client.id} className="followup-item">
                        <div className="followup-date">
                          {new Date(client.nextFollowUp).toLocaleDateString('nl-NL')}
                        </div>
                        <div className="followup-content">
                          <p><strong>{client.name}</strong></p>
                          <span className="followup-company">{client.company}</span>
                        </div>
                        <button className="followup-action">
                          <Phone size={16} />
                        </button>
                      </div>
                    ))}
                </div>
              </div>

              {/* Sales Pipeline */}
              <div className="overview-card">
                <h3>Sales Pipeline</h3>
                <div className="pipeline-stats">
                  <div className="pipeline-stage">
                    <span className="stage-label">Leads</span>
                    <span className="stage-count">{clients.filter(c => c.status === 'lead').length}</span>
                  </div>
                  <div className="pipeline-stage">
                    <span className="stage-label">Prospects</span>
                    <span className="stage-count">{clients.filter(c => c.status === 'prospect').length}</span>
                  </div>
                  <div className="pipeline-stage">
                    <span className="stage-label">Clients</span>
                    <span className="stage-count">{clients.filter(c => c.status === 'client').length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Clients Tab */}
        {activeTab === 'clients' && (
          <div className="clients-section">
            {/* Search and Filters */}
            <div className="clients-controls">
              <div className="search-section">
                <div className="search-input-wrapper">
                  <Search size={20} />
                  <input
                    type="text"
                    placeholder="Zoek klanten..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                  />
                </div>
              </div>

              <div className="controls-section">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="filter-toggle"
                >
                  <Filter size={20} />
                  Filters
                </button>

                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="status-select"
                >
                  <option value="all">Alle Statussen</option>
                  <option value="lead">Leads</option>
                  <option value="prospect">Prospects</option>
                  <option value="client">Clients</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>

            {/* Clients List */}
            <div className="clients-list">
              {filteredClients.map((client) => (
                <div key={client.id} className="client-card">
                  <div className="client-header">
                    <div className="client-info">
                      <h3 className="client-name">{client.name}</h3>
                      <p className="client-company">{client.company}</p>
                      <span className="client-position">{client.position}</span>
                    </div>
                    
                    <div className="client-status">
                      <span className={`status-badge ${getStatusColor(client.status)}`}>
                        {client.status}
                      </span>
                    </div>
                  </div>

                  <div className="client-details">
                    <div className="contact-info">
                      <div className="contact-item">
                        <Mail size={16} />
                        <span>{client.email}</span>
                      </div>
                      <div className="contact-item">
                        <Phone size={16} />
                        <span>{client.phone}</span>
                      </div>
                    </div>

                    <div className="client-meta">
                      <div className="meta-item">
                        <DollarSign size={16} />
                        <span>€{client.value.toLocaleString()}</span>
                      </div>
                      <div className="meta-item">
                        <Calendar size={16} />
                        <span>Volgende: {new Date(client.nextFollowUp).toLocaleDateString('nl-NL')}</span>
                      </div>
                    </div>
                  </div>

                  <div className="client-tags">
                    {client.tags.map((tag, index) => (
                      <span key={index} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="client-actions">
                    <button className="action-btn">
                      <Eye size={16} />
                    </button>
                    <button className="action-btn">
                      <MessageSquare size={16} />
                    </button>
                    <button className="action-btn">
                      <Phone size={16} />
                    </button>
                    <button className="action-btn">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="projects-section">
            <div className="projects-grid">
              {clients.flatMap(client => 
                client.projects.map(project => (
                  <div key={project.id} className="project-card">
                    <div className="project-header">
                      <h3 className="project-title">{project.title}</h3>
                      <span className={`project-status ${getProjectStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>

                    <p className="project-description">{project.description}</p>

                    <div className="project-client">
                      <Users size={16} />
                      <span>{client.name} - {client.company}</span>
                    </div>

                    <div className="project-progress">
                      <div className="progress-header">
                        <span>Voortgang</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="project-meta">
                      <div className="meta-item">
                        <DollarSign size={16} />
                        <span>€{project.value.toLocaleString()}</span>
                      </div>
                      <div className="meta-item">
                        <Calendar size={16} />
                        <span>{new Date(project.startDate).toLocaleDateString('nl-NL')}</span>
                      </div>
                    </div>

                    <div className="project-tasks">
                      <h4>Taken ({project.tasks.length})</h4>
                      <div className="tasks-list">
                        {project.tasks.slice(0, 3).map(task => (
                          <div key={task.id} className="task-item">
                            <span className={`task-status ${task.status}`}>
                              {task.status === 'completed' && <CheckCircle size={12} />}
                              {task.status === 'in-progress' && <Clock size={12} />}
                            </span>
                            <span className="task-title">{task.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Sales Tab */}
        {activeTab === 'sales' && (
          <div className="sales-section">
            <div className="sales-overview">
              <div className="sales-card">
                <h3>Sales Pipeline</h3>
                <div className="pipeline-chart">
                  {/* Placeholder for chart */}
                  <div className="chart-placeholder">
                    <BarChart3 size={48} />
                    <p>Sales Pipeline Chart</p>
                  </div>
                </div>
              </div>

              <div className="sales-card">
                <h3>Revenue Forecast</h3>
                <div className="revenue-stats">
                  <div className="revenue-item">
                    <span className="revenue-label">Q1 2024</span>
                    <span className="revenue-value">€45,000</span>
                  </div>
                  <div className="revenue-item">
                    <span className="revenue-label">Q2 2024</span>
                    <span className="revenue-value">€62,000</span>
                  </div>
                  <div className="revenue-item">
                    <span className="revenue-label">Q3 2024</span>
                    <span className="revenue-value">€78,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="analytics-section">
            <div className="analytics-grid">
              <div className="analytics-card">
                <h3>Client Acquisition</h3>
                <div className="chart-placeholder">
                  <TrendingUp size={48} />
                  <p>Acquisition Chart</p>
                </div>
              </div>

              <div className="analytics-card">
                <h3>Revenue by Source</h3>
                <div className="chart-placeholder">
                  <Target size={48} />
                  <p>Revenue Chart</p>
                </div>
              </div>

              <div className="analytics-card">
                <h3>Project Success Rate</h3>
                <div className="success-rate">
                  <div className="rate-circle">
                    <span className="rate-value">94%</span>
                    <span className="rate-label">Success Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
