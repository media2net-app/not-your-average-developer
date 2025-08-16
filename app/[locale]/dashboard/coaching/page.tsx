'use client'

import { useState } from 'react'

interface ScheduledCall {
  id: string
  date: string
  time: string
  coach: string
  type: 'weekly' | 'extra'
  status: 'scheduled' | 'completed' | 'cancelled'
  duration: number
  meetingLink?: string
}

interface CallHistory {
  id: string
  date: string
  time: string
  coach: string
  duration: number
  notes: string
  actionItems: string[]
  nextCallDate?: string
}

export default function CoachingPage() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'history'>('upcoming')
  const [selectedCall, setSelectedCall] = useState<ScheduledCall | null>(null)
  const [selectedHistory, setSelectedHistory] = useState<CallHistory | null>(null)

  // Mock data voor geplande calls
  const scheduledCalls: ScheduledCall[] = [
    {
      id: '1',
      date: '2024-01-15',
      time: '14:00',
      coach: 'Chiel',
      type: 'weekly',
      status: 'scheduled',
      duration: 60,
      meetingLink: 'https://meet.google.com/abc-defg-hij'
    },
    {
      id: '2',
      date: '2024-01-22',
      time: '14:00',
      coach: 'Chiel',
      type: 'weekly',
      status: 'scheduled',
      duration: 60
    },
    {
      id: '3',
      date: '2024-01-29',
      time: '14:00',
      coach: 'Chiel',
      type: 'weekly',
      status: 'scheduled',
      duration: 60
    },
    {
      id: '4',
      date: '2024-02-05',
      time: '14:00',
      coach: 'Chiel',
      type: 'weekly',
      status: 'scheduled',
      duration: 60
    }
  ]

  // Mock data voor call geschiedenis
  const callHistory: CallHistory[] = [
    {
      id: '1',
      date: '2024-01-08',
      time: '14:00',
      coach: 'Chiel',
      duration: 60,
      notes: 'Goede voortgang met Module 1. Student heeft moeite met Git basics. Aanbevolen: extra oefeningen met Cursor AI Git integratie. Volgende week focussen op HTML/CSS fundamentals.',
      actionItems: [
        'Oefen Git commands in Cursor AI',
        'Maak portfolio website mockup',
        'Lees CSS Grid tutorial'
      ],
      nextCallDate: '2024-01-15'
    },
    {
      id: '2',
      date: '2024-01-01',
      time: '14:00',
      coach: 'Chiel',
      duration: 60,
      notes: 'Eerste kennismaking. Student is enthousiast en heeft al wat programmeerervaring. Doel: full-stack developer worden. Plan: focus op praktische projecten met Cursor AI.',
      actionItems: [
        'Installeer Cursor AI',
        'Maak GitHub account',
        'Begin met Module 1'
      ],
      nextCallDate: '2024-01-08'
    }
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('nl-NL', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled': return 'from-blue-500 to-cyan-500'
      case 'completed': return 'from-green-500 to-emerald-500'
      case 'cancelled': return 'from-red-500 to-pink-500'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'scheduled': return 'Gepland'
      case 'completed': return 'Voltooid'
      case 'cancelled': return 'Geannuleerd'
      default: return 'Onbekend'
    }
  }

  const getTypeText = (type: string) => {
    switch (type) {
      case 'weekly': return 'Wekelijks'
      case 'extra': return 'Extra'
      default: return 'Onbekend'
    }
  }

  return (
    <div className="coaching-container">
      <div className="coaching-header">
        <h1 className="coaching-title">Coaching & Mentorship</h1>
        <p className="coaching-description">
          Persoonlijke begeleiding van ervaren coaches om je voortgang te bespreken en vragen te beantwoorden
        </p>
      </div>

      {/* Stats Overview */}
      <div className="coaching-stats-overview">
        <div className="coaching-stat-card">
          <div className="coaching-stat-icon">📅</div>
          <div className="coaching-stat-content">
            <h3>{scheduledCalls.length}</h3>
            <p>Geplande Calls</p>
          </div>
        </div>
        <div className="coaching-stat-card">
          <div className="coaching-stat-icon">✅</div>
          <div className="coaching-stat-content">
            <h3>{callHistory.length}</h3>
            <p>Voltooide Calls</p>
          </div>
        </div>
        <div className="coaching-stat-card">
          <div className="coaching-stat-icon">👨‍🏫</div>
          <div className="coaching-stat-content">
            <h3>1</h3>
            <p>Beschikbare Coach</p>
          </div>
        </div>
        <div className="coaching-stat-card">
          <div className="coaching-stat-icon">⭐</div>
          <div className="coaching-stat-content">
            <h3>4.8</h3>
            <p>Gemiddelde Rating</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="coaching-tabs">
        <button
          className={`coaching-tab ${activeTab === 'upcoming' ? 'active' : ''}`}
          onClick={() => setActiveTab('upcoming')}
        >
          📅 Geplande Calls
        </button>
        <button
          className={`coaching-tab ${activeTab === 'history' ? 'active' : ''}`}
          onClick={() => setActiveTab('history')}
        >
          📚 Call Geschiedenis
        </button>
      </div>

      {/* Upcoming Calls */}
      {activeTab === 'upcoming' && (
        <div className="calls-grid">
          {scheduledCalls.map((call) => (
            <div key={call.id} className="call-card">
              <div className="call-header">
                <div className="call-date-time">
                  <div className="call-date">{formatDate(call.date)}</div>
                  <div className="call-time">{call.time} - {call.duration} min</div>
                </div>
                <div className="call-status">
                  <span className={`status-badge ${getStatusColor(call.status)}`}>
                    {getStatusText(call.status)}
                  </span>
                  <span className="type-badge">
                    {getTypeText(call.type)}
                  </span>
                </div>
              </div>
              
              <div className="call-content">
                <div className="call-coach">
                  <div className="coach-avatar">👨‍🏫</div>
                  <div className="coach-info">
                    <div className="coach-name">{call.coach}</div>
                    <div className="coach-title">Lead Developer & Coach</div>
                  </div>
                </div>
                
                <div className="call-actions">
                  {call.meetingLink && (
                    <button className="join-button">
                      🎥 Deelnemen aan Call
                    </button>
                  )}
                  <button 
                    className="view-details-button"
                    onClick={() => setSelectedCall(call)}
                  >
                    📋 Details Bekijken
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Call History */}
      {activeTab === 'history' && (
        <div className="history-grid">
          {callHistory.map((call) => (
            <div key={call.id} className="history-card">
              <div className="history-header">
                <div className="history-date-time">
                  <div className="history-date">{formatDate(call.date)}</div>
                  <div className="history-time">{call.time} - {call.duration} min</div>
                </div>
                <div className="history-coach">
                  <div className="coach-avatar">👨‍🏫</div>
                  <div className="coach-name">{call.coach}</div>
                </div>
              </div>
              
              <div className="history-content">
                <div className="history-notes">
                  <h4>Notities van Coach:</h4>
                  <p>{call.notes}</p>
                </div>
                
                <div className="action-items">
                  <h4>Actiepunten:</h4>
                  <ul>
                    {call.actionItems.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                {call.nextCallDate && (
                  <div className="next-call">
                    <strong>Volgende call:</strong> {formatDate(call.nextCallDate)}
                  </div>
                )}
              </div>
              
              <button 
                className="view-full-button"
                onClick={() => setSelectedHistory(call)}
              >
                📋 Volledige Details
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Call Details Modal */}
      {selectedCall && (
        <div className="modal-overlay" onClick={() => setSelectedCall(null)}>
          <div className="modal-content call-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Call Details</h2>
              <button className="close-button" onClick={() => setSelectedCall(null)}>✕</button>
            </div>
            <div className="modal-body">
              <div className="call-detail-info">
                <div className="detail-item">
                  <span className="detail-label">Datum:</span>
                  <span className="detail-value">{formatDate(selectedCall.date)}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Tijd:</span>
                  <span className="detail-value">{selectedCall.time} - {selectedCall.duration} minuten</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Coach:</span>
                  <span className="detail-value">{selectedCall.coach}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Type:</span>
                  <span className="detail-value">{getTypeText(selectedCall.type)}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Status:</span>
                  <span className="detail-value">
                    <span className={`status-badge ${getStatusColor(selectedCall.status)}`}>
                      {getStatusText(selectedCall.status)}
                    </span>
                  </span>
                </div>
                {selectedCall.meetingLink && (
                  <div className="detail-item">
                    <span className="detail-label">Meeting Link:</span>
                    <a href={selectedCall.meetingLink} target="_blank" rel="noopener noreferrer" className="meeting-link">
                      Deelnemen aan Meeting
                    </a>
                  </div>
                )}
              </div>
              
              <div className="call-preparation">
                <h3>Voorbereiding voor de Call:</h3>
                <ul>
                  <li>Bereid je vragen voor over de afgelopen week</li>
                  <li>Zorg dat je code klaar staat om te delen</li>
                  <li>Denk na over je doelen voor de komende week</li>
                  <li>Test je microfoon en camera</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* History Details Modal */}
      {selectedHistory && (
        <div className="modal-overlay" onClick={() => setSelectedHistory(null)}>
          <div className="modal-content history-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Call Geschiedenis - {formatDate(selectedHistory.date)}</h2>
              <button className="close-button" onClick={() => setSelectedHistory(null)}>✕</button>
            </div>
            <div className="modal-body">
              <div className="history-detail-info">
                <div className="detail-item">
                  <span className="detail-label">Datum:</span>
                  <span className="detail-value">{formatDate(selectedHistory.date)}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Tijd:</span>
                  <span className="detail-value">{selectedHistory.time} - {selectedHistory.duration} minuten</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Coach:</span>
                  <span className="detail-value">{selectedHistory.coach}</span>
                </div>
              </div>
              
              <div className="history-notes-full">
                <h3>Notities van Coach:</h3>
                <div className="notes-content">
                  {selectedHistory.notes}
                </div>
              </div>
              
              <div className="action-items-full">
                <h3>Actiepunten:</h3>
                <ul>
                  {selectedHistory.actionItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              {selectedHistory.nextCallDate && (
                <div className="next-call-info">
                  <h3>Volgende Call:</h3>
                  <p>{formatDate(selectedHistory.nextCallDate)}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 