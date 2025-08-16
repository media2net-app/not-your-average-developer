'use client'

import { useState } from 'react'

interface SalesTechnique {
  id: string
  title: string
  description: string
  category: 'psychology' | 'technique' | 'practical'
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  steps: string[]
  examples: string[]
  tips: string[]
}

interface SalesExercise {
  id: string
  title: string
  description: string
  scenario: string
  objectives: string[]
  steps: string[]
  expectedOutcome: string
}

export default function SalesPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'techniques' | 'exercises' | 'resources'>('overview')
  const [selectedTechnique, setSelectedTechnique] = useState<SalesTechnique | null>(null)
  const [selectedExercise, setSelectedExercise] = useState<SalesExercise | null>(null)

  const salesTechniques: SalesTechnique[] = [
    {
      id: '1',
      title: 'Customer Psychology Fundamentals',
      description: 'Begrijp hoe klanten denken en wat hen motiveert om te kopen',
      category: 'psychology',
      difficulty: 'beginner',
      steps: [
        'Identificeer de pijnpunten van je klant',
        'Begrijp hun emotionele triggers',
        'Herken hun beslissingspatroon',
        'Pas je communicatie aan hun persoonlijkheid aan'
      ],
      examples: [
        'Een klant die tijd wil besparen → focus op efficiëntie',
        'Een klant die status zoekt → focus op exclusiviteit',
        'Een klant die veiligheid wil → focus op risicovermindering'
      ],
      tips: [
        'Stel open vragen om hun behoeften te ontdekken',
        'Luister actief naar hun antwoorden',
        'Gebruik hun eigen woorden in je pitch'
      ]
    },
    {
      id: '2',
      title: 'Value Proposition Development',
      description: 'Creëer een overtuigende waarde-propositie die klanten aanspreekt',
      category: 'technique',
      difficulty: 'beginner',
      steps: [
        'Definieer je unieke voordelen',
        'Identificeer klantproblemen die je oplost',
        'Kwantificeer de ROI voor je klant',
        'Creëer een heldere, beknopte boodschap'
      ],
      examples: [
        '"Bespaar 10 uur per week met onze automatisering"',
        '"Verdien €50.000 extra per jaar met onze strategie"',
        '"Verminder fouten met 90% door onze oplossing"'
      ],
      tips: [
        'Focus op voordelen, niet op features',
        'Gebruik concrete cijfers en resultaten',
        'Test je propositie met echte klanten'
      ]
    },
    {
      id: '3',
      title: 'Objection Handling Mastery',
      description: 'Leer hoe je bezwaren van klanten effectief kunt weerleggen',
      category: 'technique',
      difficulty: 'intermediate',
      steps: [
        'Luister naar het echte bezwaar',
        'Erken hun zorgen',
        'Stel een tegenvraag',
        'Presenteer een oplossing',
        'Bevestig hun begrip'
      ],
      examples: [
        '"Het is te duur" → "Wat zou het je kosten als je het niet doet?"',
        '"Ik heb geen tijd" → "Hoeveel tijd kost het huidige probleem je?"',
        '"Ik moet erover nadenken" → "Wat zou je helpen om een beslissing te nemen?"'
      ],
      tips: [
        'Wees niet defensief',
        'Gebruik de "feel, felt, found" techniek',
        'Focus op waarde in plaats van prijs'
      ]
    },
    {
      id: '4',
      title: 'Closing Techniques',
      description: 'Effectieve technieken om de verkoop af te sluiten',
      category: 'technique',
      difficulty: 'intermediate',
      steps: [
        'Herken buying signals',
        'Vraag om de verkoop',
        'Gebruik assumptive closing',
        'Creëer urgentie',
        'Bied een garantie'
      ],
      examples: [
        '"Zullen we beginnen met de implementatie?"',
        '"Welke startdatum werkt het beste voor je?"',
        '"Wil je betalen per maand of per jaar?"'
      ],
      tips: [
        'Wees niet bang om te vragen',
        'Gebruik stilte na je vraag',
        'Bied altijd een volgende stap'
      ]
    },
    {
      id: '5',
      title: 'Relationship Building',
      description: 'Bouw langdurige relaties die leiden tot herhaalde verkopen',
      category: 'psychology',
      difficulty: 'advanced',
      steps: [
        'Wees authentiek en oprecht',
        'Lever meer waarde dan verwacht',
        'Blijf in contact na de verkoop',
        'Word een vertrouwde adviseur',
        'Vraag om referenties'
      ],
      examples: [
        'Stuur relevante artikelen zonder verkooppitch',
        'Organiseer netwerkevenementen',
        'Bied gratis advies en consultatie'
      ],
      tips: [
        'Focus op lange termijn relaties',
        'Wees consistent in je communicatie',
        'Vier hun successen met hen'
      ]
    }
  ]

  const salesExercises: SalesExercise[] = [
    {
      id: '1',
      title: 'Cold Call Simulation',
      description: 'Oefen het maken van koude telefoontjes in een veilige omgeving',
      scenario: 'Je belt een potentiële klant die je nog nooit hebt gesproken. Ze zijn druk en sceptisch.',
      objectives: [
        'Maak een sterke eerste indruk',
        'Creëer interesse in 30 seconden',
        'Krijg een afspraak of vervolgcontact'
      ],
      steps: [
        'Bereid je elevator pitch voor',
        'Onderzoek de persoon/het bedrijf',
        'Open met een relevante vraag',
        'Presenteer je waarde-propositie',
        'Vraag om een specifieke volgende stap'
      ],
      expectedOutcome: 'Een afspraak of toestemming voor een vervolggesprek'
    },
    {
      id: '2',
      title: 'Objection Role Play',
      description: 'Oefen het omgaan met veelvoorkomende bezwaren',
      scenario: 'Een klant heeft meerdere bezwaren: prijs, tijd, en concurrentie.',
      objectives: [
        'Identificeer het echte bezwaar',
        'Gebruik effectieve tegenargumenten',
        'Behoud een positieve houding'
      ],
      steps: [
        'Luister zonder te onderbreken',
        'Erken hun zorgen',
        'Stel verhelderende vragen',
        'Presenteer oplossingen',
        'Test hun begrip'
      ],
      expectedOutcome: 'Bezwaren omgezet in interesse of begrip'
    },
    {
      id: '3',
      title: 'Value Proposition Workshop',
      description: 'Creëer en test je eigen waarde-propositie',
      scenario: 'Je moet je dienst/product verkopen aan een sceptische klant.',
      objectives: [
        'Definieer je unieke waarde',
        'Creëer een overtuigende boodschap',
        'Test en verfijn je propositie'
      ],
      steps: [
        'Brainstorm je voordelen',
        'Identificeer klantproblemen',
        'Koppel voordelen aan problemen',
        'Schrijf je propositie op',
        'Test met feedback'
      ],
      expectedOutcome: 'Een heldere, overtuigende waarde-propositie'
    },
    {
      id: '4',
      title: 'Discovery Call Practice',
      description: 'Leer effectieve vragen stellen om behoeften te ontdekken',
      scenario: 'Je hebt een eerste gesprek met een potentiële klant.',
      objectives: [
        'Bouw rapport op',
        'Ontdek echte behoeften',
        'Kwalificeer de lead'
      ],
      steps: [
        'Open met small talk',
        'Stel open vragen',
        'Duw door oppervlakkige antwoorden',
        'Identificeer pijnpunten',
        'Bepaal volgende stappen'
      ],
      expectedOutcome: 'Duidelijk inzicht in klantbehoeften en kwalificatie'
    }
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'from-green-500 to-emerald-500'
      case 'intermediate': return 'from-yellow-500 to-orange-500'
      case 'advanced': return 'from-red-500 to-pink-500'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'psychology': return 'from-purple-500 to-pink-500'
      case 'technique': return 'from-blue-500 to-cyan-500'
      case 'practical': return 'from-green-500 to-emerald-500'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <div className="sales-container">
      <div className="sales-header">
        <h1 className="sales-title">💼 Sales Mastery</h1>
        <p className="sales-description">
          Leer hoe je vanaf 0 een verkoop kunt doen. Van psychologie tot praktische technieken.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="sales-stats-overview">
        <div className="sales-stat-card">
          <div className="sales-stat-icon">🎯</div>
          <div className="sales-stat-content">
            <h3>{salesTechniques.length}</h3>
            <p>Sales Technieken</p>
          </div>
        </div>
        <div className="sales-stat-card">
          <div className="sales-stat-icon">💡</div>
          <div className="sales-stat-content">
            <h3>{salesExercises.length}</h3>
            <p>Praktische Oefeningen</p>
          </div>
        </div>
        <div className="sales-stat-card">
          <div className="sales-stat-icon">📈</div>
          <div className="sales-stat-content">
            <h3>3</h3>
            <p>Expertise Niveaus</p>
          </div>
        </div>
        <div className="sales-stat-card">
          <div className="sales-stat-icon">🏆</div>
          <div className="sales-stat-content">
            <h3>100%</h3>
            <p>Praktisch Gericht</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="sales-tabs">
        <button
          className={`sales-tab ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          📋 Overzicht
        </button>
        <button
          className={`sales-tab ${activeTab === 'techniques' ? 'active' : ''}`}
          onClick={() => setActiveTab('techniques')}
        >
          🎯 Sales Technieken
        </button>
        <button
          className={`sales-tab ${activeTab === 'exercises' ? 'active' : ''}`}
          onClick={() => setActiveTab('exercises')}
        >
          💪 Praktische Oefeningen
        </button>
        <button
          className={`sales-tab ${activeTab === 'resources' ? 'active' : ''}`}
          onClick={() => setActiveTab('resources')}
        >
          📚 Extra Bronnen
        </button>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="overview-content">
          <div className="overview-section">
            <h2>Waarom Sales Skills Essentieel Zijn</h2>
            <p>
              Of je nu een eigen bedrijf hebt, freelancer bent, of in loondienst werkt - 
              sales skills zijn cruciaal voor succes. Je leert hier hoe je:
            </p>
            <ul>
              <li>Klanten begrijpt en hun behoeften ontdekt</li>
              <li>Overtuigende waarde-proposities creëert</li>
              <li>Bezwaren effectief weerlegt</li>
              <li>Verkopen afsluit met vertrouwen</li>
              <li>Langdurige klantrelaties opbouwt</li>
            </ul>
          </div>

          <div className="overview-section">
            <h2>Leerpad: Van Beginner tot Expert</h2>
            <div className="learning-path">
              <div className="path-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Fundamentals</h3>
                  <p>Klantpsychologie en basis sales principes</p>
                </div>
              </div>
              <div className="path-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Techniques</h3>
                  <p>Objection handling en closing technieken</p>
                </div>
              </div>
              <div className="path-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Mastery</h3>
                  <p>Relatiebouw en advanced strategieën</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Techniques Tab */}
      {activeTab === 'techniques' && (
        <div className="techniques-grid">
          {salesTechniques.map((technique) => (
            <div key={technique.id} className="technique-card">
              <div className="technique-header">
                <div className="technique-title">{technique.title}</div>
                <div className="technique-badges">
                  <span className={`difficulty-badge ${getDifficultyColor(technique.difficulty)}`}>
                    {technique.difficulty}
                  </span>
                  <span className={`category-badge ${getCategoryColor(technique.category)}`}>
                    {technique.category}
                  </span>
                </div>
              </div>
              
              <div className="technique-content">
                <p className="technique-description">{technique.description}</p>
                
                <div className="technique-steps">
                  <h4>Stappen:</h4>
                  <ol>
                    {technique.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>
              
              <button 
                className="view-details-button"
                onClick={() => setSelectedTechnique(technique)}
              >
                📋 Volledige Details
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Exercises Tab */}
      {activeTab === 'exercises' && (
        <div className="exercises-grid">
          {salesExercises.map((exercise) => (
            <div key={exercise.id} className="exercise-card">
              <div className="exercise-header">
                <div className="exercise-title">{exercise.title}</div>
              </div>
              
              <div className="exercise-content">
                <p className="exercise-description">{exercise.description}</p>
                
                <div className="exercise-scenario">
                  <h4>Scenario:</h4>
                  <p>{exercise.scenario}</p>
                </div>
                
                <div className="exercise-objectives">
                  <h4>Doelen:</h4>
                  <ul>
                    {exercise.objectives.map((objective, index) => (
                      <li key={index}>{objective}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <button 
                className="start-exercise-button"
                onClick={() => setSelectedExercise(exercise)}
              >
                🚀 Start Oefening
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Resources Tab */}
      {activeTab === 'resources' && (
        <div className="resources-content">
          <div className="resources-section">
            <h2>📚 Aanbevolen Boeken</h2>
            <div className="resources-grid">
              <div className="resource-card">
                <h3>"To Sell Is Human" - Daniel Pink</h3>
                <p>Over de psychologie van verkopen en overtuigen</p>
              </div>
              <div className="resource-card">
                <h3>"SPIN Selling" - Neil Rackham</h3>
                <p>Wetenschappelijk onderbouwde verkoopmethode</p>
              </div>
              <div className="resource-card">
                <h3>"The Psychology of Selling" - Brian Tracy</h3>
                <p>Klassieke sales psychologie en technieken</p>
              </div>
            </div>
          </div>

          <div className="resources-section">
            <h2>🎥 Video Bronnen</h2>
            <div className="resources-grid">
              <div className="resource-card">
                <h3>Sales Psychology Masterclass</h3>
                <p>Diepgaande uitleg over klantpsychologie</p>
              </div>
              <div className="resource-card">
                <h3>Objection Handling Techniques</h3>
                <p>Praktische voorbeelden van bezwaarafhandeling</p>
              </div>
              <div className="resource-card">
                <h3>Closing Techniques Workshop</h3>
                <p>Effectieve manieren om verkopen af te sluiten</p>
              </div>
            </div>
          </div>

          <div className="resources-section">
            <h2>🛠️ Tools & Templates</h2>
            <div className="resources-grid">
              <div className="resource-card">
                <h3>Sales Script Templates</h3>
                <p>Bewezen scripts voor verschillende scenario's</p>
              </div>
              <div className="resource-card">
                <h3>Objection Response Library</h3>
                <p>Antwoorden op veelvoorkomende bezwaren</p>
              </div>
              <div className="resource-card">
                <h3>Sales Tracking Sheet</h3>
                <p>Template om je verkopen bij te houden</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Technique Details Modal */}
      {selectedTechnique && (
        <div className="modal-overlay" onClick={() => setSelectedTechnique(null)}>
          <div className="modal-content technique-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedTechnique.title}</h2>
              <button className="close-button" onClick={() => setSelectedTechnique(null)}>✕</button>
            </div>
            <div className="modal-body">
              <div className="technique-detail-info">
                <div className="detail-item">
                  <span className="detail-label">Categorie:</span>
                  <span className="detail-value">{selectedTechnique.category}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Niveau:</span>
                  <span className="detail-value">{selectedTechnique.difficulty}</span>
                </div>
              </div>
              
              <div className="technique-steps-full">
                <h3>Gedetailleerde Stappen:</h3>
                <ol>
                  {selectedTechnique.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
              
              <div className="technique-examples">
                <h3>Praktische Voorbeelden:</h3>
                <ul>
                  {selectedTechnique.examples.map((example, index) => (
                    <li key={index}>{example}</li>
                  ))}
                </ul>
              </div>
              
              <div className="technique-tips">
                <h3>Pro Tips:</h3>
                <ul>
                  {selectedTechnique.tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Exercise Details Modal */}
      {selectedExercise && (
        <div className="modal-overlay" onClick={() => setSelectedExercise(null)}>
          <div className="modal-content exercise-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedExercise.title}</h2>
              <button className="close-button" onClick={() => setSelectedExercise(null)}>✕</button>
            </div>
            <div className="modal-body">
              <div className="exercise-scenario-full">
                <h3>Scenario:</h3>
                <p>{selectedExercise.scenario}</p>
              </div>
              
              <div className="exercise-objectives-full">
                <h3>Doelen:</h3>
                <ul>
                  {selectedExercise.objectives.map((objective, index) => (
                    <li key={index}>{objective}</li>
                  ))}
                </ul>
              </div>
              
              <div className="exercise-steps-full">
                <h3>Stappenplan:</h3>
                <ol>
                  {selectedExercise.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
              
              <div className="exercise-outcome">
                <h3>Verwacht Resultaat:</h3>
                <p>{selectedExercise.expectedOutcome}</p>
              </div>
              
              <div className="exercise-actions">
                <button className="practice-button">
                  🎯 Start Oefening
                </button>
                <button className="download-script-button">
                  📄 Download Script
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
