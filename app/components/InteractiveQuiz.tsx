'use client'

import { useState, useEffect } from 'react'
import { Check, X, ArrowRight, ArrowLeft, RotateCcw, Trophy, Clock, Target } from 'lucide-react'

interface QuizQuestion {
  id: string
  question: string
  type: 'multiple-choice' | 'true-false' | 'code' | 'fill-blank'
  options?: string[]
  correctAnswer: string | string[]
  explanation: string
  points: number
  difficulty: 'easy' | 'medium' | 'hard'
  category: string
}

interface QuizProps {
  questions: QuizQuestion[]
  title: string
  description: string
  timeLimit?: number // in minutes
  passingScore?: number // percentage
  onComplete?: (score: number, totalPoints: number, timeSpent: number) => void
  onQuestionAnswer?: (questionId: string, isCorrect: boolean) => void
}

export default function InteractiveQuiz({
  questions,
  title,
  description,
  timeLimit = 30,
  passingScore = 70,
  onComplete,
  onQuestionAnswer
}: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({})
  const [showResults, setShowResults] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(timeLimit * 60) // in seconds
  const [isStarted, setIsStarted] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)
  const [startTime, setStartTime] = useState<Date | null>(null)

  const currentQuestion = questions[currentQuestionIndex]
  const totalQuestions = questions.length
  const answeredQuestions = Object.keys(answers).length
  const progress = (answeredQuestions / totalQuestions) * 100

  // Timer effect
  useEffect(() => {
    if (!isStarted || isCompleted) return

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          completeQuiz()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isStarted, isCompleted])

  const startQuiz = () => {
    setIsStarted(true)
    setStartTime(new Date())
  }

  const completeQuiz = () => {
    setIsCompleted(true)
    setShowResults(true)
    
    const endTime = new Date()
    const timeSpent = startTime ? Math.round((endTime.getTime() - startTime.getTime()) / 1000) : 0
    
    const score = calculateScore()
    const totalPoints = questions.reduce((sum, q) => sum + q.points, 0)
    
    onComplete?.(score, totalPoints, timeSpent)
  }

  const calculateScore = (): number => {
    let totalScore = 0
    let totalPoints = 0

    questions.forEach((question) => {
      totalPoints += question.points
      const userAnswer = answers[question.id]
      
      if (userAnswer) {
        if (Array.isArray(question.correctAnswer)) {
          // Multiple correct answers
          const userArray = Array.isArray(userAnswer) ? userAnswer : [userAnswer]
          const correctCount = question.correctAnswer.filter(ans => userArray.includes(ans)).length
          const score = (correctCount / question.correctAnswer.length) * question.points
          totalScore += score
        } else {
          // Single correct answer
          if (userAnswer === question.correctAnswer) {
            totalScore += question.points
          }
        }
      }
    })

    return Math.round((totalScore / totalPoints) * 100)
  }

  const handleAnswer = (answer: string | string[]) => {
    const questionId = currentQuestion.id
    setAnswers(prev => ({ ...prev, [questionId]: answer }))
    
    // Check if answer is correct
    const isCorrect = Array.isArray(currentQuestion.correctAnswer)
      ? Array.isArray(answer) && answer.every(a => currentQuestion.correctAnswer.includes(a))
      : answer === currentQuestion.correctAnswer
    
    onQuestionAnswer?.(questionId, isCorrect)
  }

  const nextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
      setShowExplanation(false)
    } else {
      completeQuiz()
    }
  }

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1)
      setShowExplanation(false)
    }
  }

  const goToQuestion = (index: number) => {
    setCurrentQuestionIndex(index)
    setShowExplanation(false)
  }

  const resetQuiz = () => {
    setCurrentQuestionIndex(0)
    setAnswers({})
    setShowResults(false)
    setTimeRemaining(timeLimit * 60)
    setIsStarted(false)
    setIsCompleted(false)
    setShowExplanation(false)
    setStartTime(null)
  }

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'from-green-500 to-emerald-500'
      case 'medium': return 'from-yellow-500 to-orange-500'
      case 'hard': return 'from-red-500 to-pink-500'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  if (!isStarted) {
    return (
      <div className="quiz-intro">
        <div className="quiz-intro-content">
          <h2 className="quiz-title">{title}</h2>
          <p className="quiz-description">{description}</p>
          
          <div className="quiz-info">
            <div className="info-item">
              <Target size={20} />
              <span>{totalQuestions} vragen</span>
            </div>
            <div className="info-item">
              <Clock size={20} />
              <span>{timeLimit} minuten</span>
            </div>
            <div className="info-item">
              <Trophy size={20} />
              <span>{passingScore}% om te slagen</span>
            </div>
          </div>
          
          <button onClick={startQuiz} className="start-quiz-btn">
            Start Quiz
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    )
  }

  if (showResults) {
    const score = calculateScore()
    const isPassed = score >= passingScore
    
    return (
      <div className="quiz-results">
        <div className="results-content">
          <div className={`results-header ${isPassed ? 'passed' : 'failed'}`}>
            {isPassed ? (
              <>
                <Trophy size={48} />
                <h2>Gefeliciteerd!</h2>
                <p>Je bent geslaagd voor de quiz</p>
              </>
            ) : (
              <>
                <X size={48} />
                <h2>Nog niet geslaagd</h2>
                <p>Probeer het opnieuw om te verbeteren</p>
              </>
            )}
          </div>
          
          <div className="results-stats">
            <div className="stat-item">
              <span className="stat-label">Score</span>
              <span className="stat-value">{score}%</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Tijd</span>
              <span className="stat-value">{formatTime(timeLimit * 60 - timeRemaining)}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Vragen</span>
              <span className="stat-value">{answeredQuestions}/{totalQuestions}</span>
            </div>
          </div>
          
          <div className="results-actions">
            <button onClick={resetQuiz} className="retry-btn">
              <RotateCcw size={16} />
              Opnieuw Proberen
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="interactive-quiz">
      {/* Quiz Header */}
      <div className="quiz-header">
        <div className="quiz-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="progress-text">
            Vraag {currentQuestionIndex + 1} van {totalQuestions}
          </span>
        </div>
        
        <div className="quiz-timer">
          <Clock size={16} />
          <span className={timeRemaining < 60 ? 'warning' : ''}>
            {formatTime(timeRemaining)}
          </span>
        </div>
      </div>

      {/* Question */}
      <div className="question-container">
        <div className="question-header">
          <span className={`difficulty-badge ${getDifficultyColor(currentQuestion.difficulty)}`}>
            {currentQuestion.difficulty}
          </span>
          <span className="question-points">{currentQuestion.points} punten</span>
        </div>
        
        <h3 className="question-text">{currentQuestion.question}</h3>
        
        {/* Answer Options */}
        <div className="answer-options">
          {currentQuestion.type === 'multiple-choice' && currentQuestion.options && (
            <div className="multiple-choice">
              {currentQuestion.options.map((option, index) => (
                <label key={index} className="option-label">
                  <input
                    type="radio"
                    name={`question-${currentQuestion.id}`}
                    value={option}
                    checked={answers[currentQuestion.id] === option}
                    onChange={(e) => handleAnswer(e.target.value)}
                    className="option-input"
                  />
                  <span className="option-text">{option}</span>
                </label>
              ))}
            </div>
          )}
          
          {currentQuestion.type === 'true-false' && (
            <div className="true-false">
              <label className="option-label">
                <input
                  type="radio"
                  name={`question-${currentQuestion.id}`}
                  value="true"
                  checked={answers[currentQuestion.id] === 'true'}
                  onChange={(e) => handleAnswer(e.target.value)}
                  className="option-input"
                />
                <span className="option-text">Waar</span>
              </label>
              <label className="option-label">
                <input
                  type="radio"
                  name={`question-${currentQuestion.id}`}
                  value="false"
                  checked={answers[currentQuestion.id] === 'false'}
                  onChange={(e) => handleAnswer(e.target.value)}
                  className="option-input"
                />
                <span className="option-text">Onwaar</span>
              </label>
            </div>
          )}
          
          {currentQuestion.type === 'fill-blank' && (
            <div className="fill-blank">
              <input
                type="text"
                value={answers[currentQuestion.id] || ''}
                onChange={(e) => handleAnswer(e.target.value)}
                placeholder="Type je antwoord hier..."
                className="fill-blank-input"
              />
            </div>
          )}
        </div>
        
        {/* Explanation */}
        {answers[currentQuestion.id] && (
          <div className="explanation-section">
            <button
              onClick={() => setShowExplanation(!showExplanation)}
              className="explanation-toggle"
            >
              {showExplanation ? 'Verberg' : 'Toon'} Uitleg
            </button>
            
            {showExplanation && (
              <div className="explanation-content">
                <p>{currentQuestion.explanation}</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="quiz-navigation">
        <button
          onClick={prevQuestion}
          disabled={currentQuestionIndex === 0}
          className="nav-button prev"
        >
          <ArrowLeft size={16} />
          Vorige
        </button>
        
        <div className="question-dots">
          {questions.map((_, index) => (
            <button
              key={index}
              onClick={() => goToQuestion(index)}
              className={`question-dot ${index === currentQuestionIndex ? 'active' : ''} ${
                answers[questions[index].id] ? 'answered' : ''
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        
        <button
          onClick={nextQuestion}
          className="nav-button next"
        >
          {currentQuestionIndex === totalQuestions - 1 ? 'Afronden' : 'Volgende'}
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  )
}
