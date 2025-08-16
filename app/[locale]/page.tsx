'use client'

import { useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { motion } from 'framer-motion'

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const params = useParams()
  const locale = params.locale as string

  const handleGetStarted = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      localStorage.setItem('user', JSON.stringify({
        id: 'demo-user-123',
        name: 'Demo Student',
        email: email || 'demo@example.com',
        role: 'student',
        progress: {
          modulesCompleted: 0,
          currentModule: 1,
          badges: []
        }
      }))
      // Always redirect to Dutch version
      router.push('/nl/dashboard')
    }, 1000)
  }

  const handleDemoClick = () => {
    // Create demo user data
    localStorage.setItem('user', JSON.stringify({
      id: 'demo-user-123',
      name: 'Demo Student',
      email: 'demo@example.com',
      role: 'student',
      progress: {
        modulesCompleted: 0,
        currentModule: 1,
        badges: []
      }
    }))
    // Always redirect to Dutch version for demo
    router.push('/nl/dashboard')
  }

  return (
    <div className="animate-fade-in">
      {/* Debug indicator */}
      <div className="debug-indicator">
        CSS LOADED ✅
      </div>

      <div className="container">
        {/* Hero Section */}
        <div className="hero">
          <h1 className="hero-title">
            Not Your Average <span className="primary">Developer</span>
          </h1>
          <p className="hero-subtitle">
            Leer developer worden zonder technische achtergrond, 
            door AI effectief in te zetten
          </p>
          
          <div className="hero-features">
            <div className="feature">
              <span className="feature-icon">🚀</span>
              <span>Van beginner naar developer</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🤖</span>
              <span>AI als centrale tool</span>
            </div>
            <div className="feature">
              <span className="feature-icon">💰</span>
              <span>Verdien €500 - €20.000+ per project</span>
            </div>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="intro-section">
          <div className="intro-grid">
            <div className="intro-left">
              <div className="trainer-intro">
                <div className="trainer-avatar">
                  <span className="avatar-icon">💪</span>
                </div>
                <div className="trainer-info">
                  <h2 className="trainer-name">Ontmoet Chiel</h2>
                  <p className="trainer-description">
                    12 jaar ervaring als developer, maar géén standaard tech-nerd. 
                    Sportief, tattoos, en bewijst dat je geen stereotype developer hoeft te zijn 
                    om succesvol te zijn in tech.
                  </p>
                </div>
              </div>

              <div className="inspiration-text">
                <h3>Iedereen kan developer worden</h3>
                <p>
                  Voel je je niet als een tech-nerd? Geen probleem! Deze cursus is speciaal 
                  ontworpen voor mensen die zichzelf niet als traditionele developers zien. 
                  Je leert developer worden op jouw eigen manier, met jouw eigen stijl.
                </p>
              </div>

              <div className="course-difference">
                <h3>Waarom deze cursus anders is</h3>
                <p>
                  In plaats van eindeloos code te typen, leer je AI te gebruiken als 
                  je persoonlijke virtuele medewerker. Samen bouw je professionele projecten 
                  die écht geld opleveren.
                </p>
              </div>
            </div>

            <div className="intro-right">
              <div className="project-types">
                <h3>Wat kun je bouwen (en verdienen)?</h3>
                <div className="project-grid">
                  <div className="project-card">
                    <h4>🌐 Website</h4>
                    <p>Eenvoudige presentatiesite voor bedrijven</p>
                    <span className="earnings">€500 - €2.000</span>
                  </div>
                  <div className="project-card">
                    <h4>🛒 Webshop</h4>
                    <p>Online winkel met betalingsverwerking</p>
                    <span className="earnings">€2.000 - €8.000</span>
                  </div>
                  <div className="project-card">
                    <h4>⚡ Webapplicatie</h4>
                    <p>Complexe software met databases en API's</p>
                    <span className="earnings">€8.000 - €20.000+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="motivation-cta">
            <h3>Klaar om te beginnen?</h3>
            <p>
              Start vandaag nog met Module 1 en ontdek hoe je met AI je eerste 
              professionele project bouwt. Geen technische achtergrond nodig - alleen 
              de wil om te leren en te groeien.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="card">
          <h2 className="welcome">Start je developer reis</h2>
          <p className="cta-text">
            Begin vandaag nog en leer hoe je met AI professionele websites en applicaties bouwt
          </p>

          <form onSubmit={handleGetStarted}>
            <div className="form-group">
              <label htmlFor="email">Email adres</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jouw@email.com"
                className="input-field"
                disabled={isLoading}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary"
            >
              {isLoading ? 'Bezig...' : 'Gratis starten'}
            </button>
          </form>

          <div className="divider">
            <span>Of</span>
          </div>

          <button
            onClick={handleDemoClick}
            className="btn-secondary"
          >
            Demo bekijken
          </button>
        </div>

        {/* Course Overview */}
        <div className="course-overview">
          <h3>Wat ga je leren?</h3>
          <div className="course-modules">
            <div className="module-card">
              <h4>📚 Introductie</h4>
              <p>Wat is een website, webshop en webapplicatie? Niveaus en verdienmodellen.</p>
            </div>
            <div className="module-card">
              <h4>🤖 AI Tools</h4>
              <p>Wat het is, hoe je ermee werkt, best practices en effectieve prompts.</p>
            </div>
            <div className="module-card">
              <h4>💻 Leermodules</h4>
              <p>Van simpel naar complex, praktische opdrachten en AI-interactie.</p>
            </div>
            <div className="module-card">
              <h4>🎯 Examen</h4>
              <p>Bouw een project met AI en zet het live via Vercel.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <p>Word developer zonder technische achtergrond - Powered by AI</p>
          <p>1-op-1 coaching • Praktische opdrachten • Live projecten</p>
        </div>
      </div>
    </div>
  )
} 