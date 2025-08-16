'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'

interface Exam {
  id: string
  title: string
  description: string
  type: 'module' | 'final' | 'certification'
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  questions: number
  timeLimit: number // in minutes
  passingScore: number
  status: 'not-started' | 'in-progress' | 'completed' | 'failed'
  score?: number
  completedAt?: string
  progress?: number
}

const mockExams: Exam[] = [
  {
    id: '1',
    title: 'HTML & CSS Fundamentals',
    description: 'Test je kennis van HTML en CSS basis concepten',
    type: 'module',
    difficulty: 'beginner',
    questions: 20,
    timeLimit: 30,
    passingScore: 70,
    status: 'not-started'
  },
  {
    id: '2',
    title: 'JavaScript Fundamentals',
    description: 'Evalueer je JavaScript vaardigheden',
    type: 'module',
    difficulty: 'intermediate',
    questions: 25,
    timeLimit: 45,
    passingScore: 75,
    status: 'not-started'
  },
  {
    id: '3',
    title: 'Cursor AI Mastery',
    description: 'Test je Cursor AI kennis en vaardigheden',
    type: 'module',
    difficulty: 'intermediate',
    questions: 15,
    timeLimit: 25,
    passingScore: 80,
    status: 'not-started'
  },
  {
    id: '4',
    title: 'Web Development Final',
    description: 'Comprehensive examen over alle web development onderwerpen',
    type: 'final',
    difficulty: 'advanced',
    questions: 50,
    timeLimit: 90,
    passingScore: 80,
    status: 'not-started'
  },
  {
    id: '5',
    title: 'Professional Certification',
    description: 'Officieel certificaat voor professionele web development',
    type: 'certification',
    difficulty: 'advanced',
    questions: 75,
    timeLimit: 120,
    passingScore: 85,
    status: 'not-started'
  }
]

export default function ExamenPage() {
  const [exams, setExams] = useState<Exam[]>(mockExams)
  const [selectedExam, setSelectedExam] = useState<Exam | null>(null)
  const [activeTab, setActiveTab] = useState('all')
  const [showExamModal, setShowExamModal] = useState(false)
  const t = useTranslations()

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'from-green-500 to-emerald-500'
      case 'in-progress': return 'from-blue-500 to-cyan-500'
      case 'failed': return 'from-red-500 to-pink-500'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return '✅'
      case 'in-progress': return '⏳'
      case 'failed': return '❌'
      default: return '📝'
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'from-green-500 to-emerald-500'
      case 'intermediate': return 'from-yellow-500 to-orange-500'
      case 'advanced': return 'from-red-500 to-pink-500'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'module': return '📚'
      case 'final': return '🏁'
      case 'certification': return '🏆'
      default: return '📝'
    }
  }

  const startExam = (exam: Exam) => {
    setSelectedExam(exam)
    setShowExamModal(true)
  }

  const filteredExams = exams.filter(exam => {
    if (activeTab === 'all') return true
    return exam.type === activeTab
  })

  const completedExams = exams.filter(exam => exam.status === 'completed')
  const totalScore = completedExams.reduce((sum, exam) => sum + (exam.score || 0), 0)
  const averageScore = completedExams.length > 0 ? Math.round(totalScore / completedExams.length) : 0

  return (
    <div className="examen-container">
      <div className="examen-header">
        <h1 className="examen-title">🏆 Examen & Certificering</h1>
        <p className="examen-description">
          Test je kennis en behaal certificaten om je vaardigheden te valideren
        </p>
      </div>

      {/* Stats Overview */}
      <div className="examen-stats-overview">
        <div className="examen-stat-card">
          <div className="examen-stat-icon">📊</div>
          <div className="examen-stat-content">
            <h3>{completedExams.length}</h3>
            <p>Examenen Voltooid</p>
          </div>
        </div>
        <div className="examen-stat-card">
          <div className="examen-stat-icon">🎯</div>
          <div className="examen-stat-content">
            <h3>{averageScore}%</h3>
            <p>Gemiddelde Score</p>
          </div>
        </div>
        <div className="examen-stat-card">
          <div className="examen-stat-icon">🏆</div>
          <div className="examen-stat-content">
            <h3>{exams.filter(e => e.status === 'completed' && (e.score || 0) >= e.passingScore).length}</h3>
            <p>Certificaten Behaald</p>
          </div>
        </div>
        <div className="examen-stat-card">
          <div className="examen-stat-icon">⏱️</div>
          <div className="examen-stat-content">
            <h3>{exams.filter(e => e.status === 'in-progress').length}</h3>
            <p>In Progress</p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="filter-tabs">
        <button
          onClick={() => setActiveTab('all')}
          className={`filter-tab ${activeTab === 'all' ? 'active' : ''}`}
        >
          🌟 Alle Examenen
        </button>
        <button
          onClick={() => setActiveTab('module')}
          className={`filter-tab ${activeTab === 'module' ? 'active' : ''}`}
        >
          📚 Module Examenen
        </button>
        <button
          onClick={() => setActiveTab('final')}
          className={`filter-tab ${activeTab === 'final' ? 'active' : ''}`}
        >
          🏁 Final Examen
        </button>
        <button
          onClick={() => setActiveTab('certification')}
          className={`filter-tab ${activeTab === 'certification' ? 'active' : ''}`}
        >
          🏆 Certificering
        </button>
      </div>

      {/* Exams Grid */}
      <div className="exams-grid">
        {filteredExams.map((exam) => (
          <div key={exam.id} className="exam-card">
            <div className="exam-header">
              <div className="exam-type">
                <span className={`type-badge ${getTypeIcon(exam.type)}`}>
                  {getTypeIcon(exam.type)} {exam.type}
                </span>
                <span className={`difficulty-badge ${getDifficultyColor(exam.difficulty)}`}>
                  {exam.difficulty}
                </span>
              </div>
              <div className="exam-status">
                <span className={`status-badge ${getStatusColor(exam.status)}`}>
                  {getStatusIcon(exam.status)} {exam.status.replace('-', ' ')}
                </span>
              </div>
            </div>

            <div className="exam-content">
              <h3 className="exam-title">{exam.title}</h3>
              <p className="exam-description">{exam.description}</p>
              
              <div className="exam-details">
                <div className="detail-item">
                  <span className="detail-label">Vragen:</span>
                  <span className="detail-value">{exam.questions}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Tijd:</span>
                  <span className="detail-value">{exam.timeLimit} min</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Passing Score:</span>
                  <span className="detail-value">{exam.passingScore}%</span>
                </div>
                {exam.score && (
                  <div className="detail-item">
                    <span className="detail-label">Jouw Score:</span>
                    <span className={`detail-value ${exam.score >= exam.passingScore ? 'passed' : 'failed'}`}>
                      {exam.score}%
                    </span>
                  </div>
                )}
              </div>

              {exam.status === 'completed' && exam.score && (
                <div className="exam-result">
                  <div className={`result-badge ${exam.score >= exam.passingScore ? 'passed' : 'failed'}`}>
                    {exam.score >= exam.passingScore ? '✅ Geslaagd' : '❌ Niet Geslaagd'}
                  </div>
                  {exam.score >= exam.passingScore && (
                    <button className="download-certificate-button">
                      📄 Download Certificaat
                    </button>
                  )}
                </div>
              )}
            </div>

            <div className="exam-actions">
              {exam.status === 'not-started' && (
                <button
                  onClick={() => startExam(exam)}
                  className="start-exam-button"
                >
                  🚀 Start Examen
                </button>
              )}
              {exam.status === 'in-progress' && (
                <button
                  onClick={() => startExam(exam)}
                  className="continue-exam-button"
                >
                  ⏳ Verder Gaan
                </button>
              )}
              {exam.status === 'failed' && (
                <button
                  onClick={() => startExam(exam)}
                  className="retry-exam-button"
                >
                  🔄 Opnieuw Proberen
                </button>
              )}
              {exam.status === 'completed' && (
                <button
                  onClick={() => startExam(exam)}
                  className="review-exam-button"
                >
                  👁️ Bekijk Resultaten
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Exam Start Modal */}
      {showExamModal && selectedExam && (
        <div className="modal-overlay" onClick={() => setShowExamModal(false)}>
          <div className="modal-content exam-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Start Examen: {selectedExam.title}</h2>
              <button
                onClick={() => setShowExamModal(false)}
                className="close-button"
              >
                ✕
              </button>
            </div>
            
            <div className="modal-body">
              <div className="exam-info">
                <div className="info-section">
                  <h3>📋 Examen Informatie</h3>
                  <ul>
                    <li><strong>Vragen:</strong> {selectedExam.questions}</li>
                    <li><strong>Tijdslimiet:</strong> {selectedExam.timeLimit} minuten</li>
                    <li><strong>Passing Score:</strong> {selectedExam.passingScore}%</li>
                    <li><strong>Type:</strong> {selectedExam.type}</li>
                    <li><strong>Niveau:</strong> {selectedExam.difficulty}</li>
                  </ul>
                </div>

                <div className="info-section">
                  <h3>📝 Instructies</h3>
                  <ul>
                    <li>Lees elke vraag zorgvuldig</li>
                    <li>Je kunt teruggaan naar eerdere vragen</li>
                    <li>De timer stopt niet als je de pagina verlaat</li>
                    <li>Zorg voor een stabiele internetverbinding</li>
                    <li>Gebruik geen andere tabbladen tijdens het examen</li>
                  </ul>
                </div>

                <div className="info-section">
                  <h3>⚠️ Belangrijk</h3>
                  <p>
                    Dit examen test je praktische kennis van web development en Cursor AI. 
                    Zorg ervoor dat je alle modules hebt voltooid voordat je begint.
                  </p>
                </div>
              </div>

              <div className="modal-actions">
                <button
                  onClick={() => setShowExamModal(false)}
                  className="cancel-button"
                >
                  ❌ Annuleren
                </button>
                <button
                  onClick={() => {
                    setShowExamModal(false)
                    // Hier zou je naar de exam pagina navigeren
                    alert('Examen wordt gestart...')
                  }}
                  className="confirm-button"
                >
                  🚀 Start Examen
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 