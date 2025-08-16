'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

const promptsData = {
  website: {
    title: '🌐 Website Prompts',
    description: 'Basis prompts voor het bouwen van websites met Cursor AI',
    icon: '🌐',
    color: 'from-blue-500 to-cyan-500',
    prompts: [
      {
        id: 1,
        title: 'HTML Basis Structuur',
        prompt: 'Maak een moderne HTML5 basis structuur voor een website met proper meta tags, SEO optimalisatie en responsive viewport.',
        category: 'HTML',
        difficulty: 'Beginner'
      },
      {
        id: 2,
        title: 'CSS Reset & Basis Styling',
        prompt: 'Maak een CSS reset en basis styling met moderne CSS custom properties, flexbox layout en responsive breakpoints.',
        category: 'CSS',
        difficulty: 'Beginner'
      },
      {
        id: 3,
        title: 'Navigation Bar',
        prompt: 'Bouw een moderne navigation bar met logo, menu items, mobile hamburger menu en smooth transitions. Gebruik flexbox en CSS Grid.',
        category: 'CSS',
        difficulty: 'Intermediate'
      },
      {
        id: 4,
        title: 'Hero Section',
        prompt: 'Maak een hero section met een achtergrond afbeelding, call-to-action button, heading en subheading. Zorg voor responsive design.',
        category: 'CSS',
        difficulty: 'Intermediate'
      },
      {
        id: 5,
        title: 'Contact Formulier',
        prompt: 'Bouw een contact formulier met naam, email, bericht velden, validatie en een submit button. Voeg CSS styling en JavaScript validatie toe.',
        category: 'JavaScript',
        difficulty: 'Intermediate'
      },
      {
        id: 6,
        title: 'Footer Sectie',
        prompt: 'Maak een footer met social media links, contact informatie, copyright en een terug naar boven button.',
        category: 'HTML/CSS',
        difficulty: 'Beginner'
      },
      {
        id: 7,
        title: 'Responsive Images',
        prompt: 'Implementeer responsive images met srcset en sizes attributen voor verschillende scherm groottes en pixel densities.',
        category: 'HTML',
        difficulty: 'Intermediate'
      },
      {
        id: 8,
        title: 'Smooth Scrolling',
        prompt: 'Voeg smooth scrolling toe voor anchor links en een terug naar boven functionaliteit met JavaScript.',
        category: 'JavaScript',
        difficulty: 'Beginner'
      },
      {
        id: 9,
        title: 'Loading Animation',
        prompt: 'Maak een loading spinner of skeleton loading animatie met CSS keyframes en JavaScript.',
        category: 'CSS/JS',
        difficulty: 'Intermediate'
      },
      {
        id: 10,
        title: 'SEO Optimalisatie',
        prompt: 'Voeg alle benodigde SEO meta tags toe, structured data, Open Graph tags en Twitter Cards voor sociale media.',
        category: 'HTML',
        difficulty: 'Advanced'
      }
    ]
  },
  webshop: {
    title: '🛒 Webshop Prompts',
    description: 'Prompts voor het bouwen van e-commerce websites met Cursor AI',
    icon: '🛒',
    color: 'from-green-500 to-emerald-500',
    prompts: [
      {
        id: 1,
        title: 'Product Grid Layout',
        prompt: 'Maak een responsive product grid met CSS Grid of Flexbox. Elke product kaart moet afbeelding, titel, prijs en add to cart button hebben.',
        category: 'CSS',
        difficulty: 'Intermediate'
      },
      {
        id: 2,
        title: 'Shopping Cart Functionaliteit',
        prompt: 'Bouw een shopping cart systeem met localStorage. Voeg producten toe, update quantities, bereken totaal en toon cart count in header.',
        category: 'JavaScript',
        difficulty: 'Intermediate'
      },
      {
        id: 3,
        title: 'Product Filter & Search',
        prompt: 'Implementeer product filtering op categorie, prijs range en search functionaliteit met real-time results.',
        category: 'JavaScript',
        difficulty: 'Advanced'
      },
      {
        id: 4,
        title: 'Product Detail Pagina',
        prompt: 'Maak een product detail pagina met afbeelding gallery, product informatie, varianten selector, quantity picker en add to cart.',
        category: 'HTML/CSS',
        difficulty: 'Intermediate'
      },
      {
        id: 5,
        title: 'Checkout Proces',
        prompt: 'Bouw een multi-step checkout proces met shipping info, billing info, order review en payment method selection.',
        category: 'JavaScript',
        difficulty: 'Advanced'
      },
      {
        id: 6,
        title: 'Wishlist Functionaliteit',
        prompt: 'Implementeer een wishlist systeem waar gebruikers producten kunnen opslaan, bekijken en toevoegen aan cart.',
        category: 'JavaScript',
        difficulty: 'Intermediate'
      },
      {
        id: 7,
        title: 'Product Reviews Systeem',
        prompt: 'Maak een review systeem met star ratings, review formulier en display van bestaande reviews met pagination.',
        category: 'JavaScript',
        difficulty: 'Advanced'
      },
      {
        id: 8,
        title: 'Inventory Management',
        prompt: 'Bouw een inventory systeem dat stock levels bijhoudt, out-of-stock meldingen toont en stock updates in real-time.',
        category: 'JavaScript',
        difficulty: 'Advanced'
      },
      {
        id: 9,
        title: 'Discount & Coupon Systeem',
        prompt: 'Implementeer een coupon code systeem met percentage en fixed amount kortingen, validatie en toepassing op cart total.',
        category: 'JavaScript',
        difficulty: 'Advanced'
      },
      {
        id: 10,
        title: 'Order Tracking',
        prompt: 'Maak een order tracking systeem met order status updates, tracking numbers en email notifications.',
        category: 'JavaScript',
        difficulty: 'Advanced'
      }
    ]
  },
  webapp: {
    title: '⚡ Web Applicatie Prompts',
    description: 'Prompts voor het bouwen van complexe web applicaties met Cursor AI',
    icon: '⚡',
    color: 'from-purple-500 to-pink-500',
    prompts: [
      {
        id: 1,
        title: 'User Authentication Systeem',
        prompt: 'Bouw een complete authentication systeem met login, register, password reset, JWT tokens en protected routes.',
        category: 'Backend',
        difficulty: 'Advanced'
      },
      {
        id: 2,
        title: 'Real-time Chat Systeem',
        prompt: 'Implementeer een real-time chat systeem met WebSockets, message history, online status en typing indicators.',
        category: 'Real-time',
        difficulty: 'Advanced'
      },
      {
        id: 3,
        title: 'Dashboard met Charts',
        prompt: 'Maak een admin dashboard met verschillende charts (line, bar, pie) voor data visualisatie en analytics.',
        category: 'Frontend',
        difficulty: 'Advanced'
      },
      {
        id: 4,
        title: 'File Upload & Management',
        prompt: 'Bouw een file upload systeem met drag & drop, progress bars, file preview en cloud storage integratie.',
        category: 'Backend',
        difficulty: 'Advanced'
      },
      {
        id: 5,
        title: 'API Rate Limiting',
        prompt: 'Implementeer rate limiting voor API endpoints met token bucket algoritme en user-based limits.',
        category: 'Backend',
        difficulty: 'Advanced'
      },
      {
        id: 6,
        title: 'Notification Systeem',
        prompt: 'Maak een real-time notification systeem met push notifications, in-app notifications en email alerts.',
        category: 'Real-time',
        difficulty: 'Advanced'
      },
      {
        id: 7,
        title: 'Search & Filter API',
        prompt: 'Bouw een geavanceerde search API met full-text search, filters, sorting, pagination en search suggestions.',
        category: 'Backend',
        difficulty: 'Advanced'
      },
      {
        id: 8,
        title: 'Data Export & Import',
        prompt: 'Implementeer CSV/Excel export en import functionaliteit met data validation en error handling.',
        category: 'Backend',
        difficulty: 'Advanced'
      },
      {
        id: 9,
        title: 'Multi-language Support',
        prompt: 'Voeg internationalization toe met language switching, localized content en RTL support.',
        category: 'Frontend',
        difficulty: 'Advanced'
      },
      {
        id: 10,
        title: 'Performance Monitoring',
        prompt: 'Implementeer performance monitoring met error tracking, user analytics, and performance metrics dashboard.',
        category: 'DevOps',
        difficulty: 'Advanced'
      }
    ]
  }
}

export default function PromptsPage() {
  const [selectedCategory, setSelectedCategory] = useState('website')
  const [selectedPrompt, setSelectedPrompt] = useState<any>(null)
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')
  const t = useTranslations()

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      alert('Prompt gekopieerd naar klembord!')
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  // Filter prompts based on selected difficulty
  const filteredPrompts = promptsData[selectedCategory as keyof typeof promptsData].prompts.filter(prompt => {
    if (selectedDifficulty === 'all') return true
    return prompt.difficulty.toLowerCase() === selectedDifficulty
  })

  return (
    <div className="prompts-container">
      <div className="prompts-header">
        <h1 className="prompts-title">🤖 Cursor AI Prompts</h1>
        <p className="prompts-description">
          Krijg direct toegang tot professionele prompts voor het bouwen van websites, webshops en web applicaties met Cursor AI.
        </p>
      </div>

      {/* Category Selector */}
      <div className="category-selector">
        {Object.entries(promptsData).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key)}
            className={`category-button ${selectedCategory === key ? 'active' : ''}`}
          >
            <span className="category-icon">{category.icon}</span>
            <span className="category-title">{category.title}</span>
          </button>
        ))}
      </div>

      {/* Difficulty Filter */}
      <div className="difficulty-filter">
        <h3 className="filter-title">Filter op Niveau:</h3>
        <div className="filter-buttons">
          <button
            onClick={() => setSelectedDifficulty('all')}
            className={`filter-button ${selectedDifficulty === 'all' ? 'active' : ''}`}
          >
            🌟 Alle Niveaus
          </button>
          <button
            onClick={() => setSelectedDifficulty('beginner')}
            className={`filter-button ${selectedDifficulty === 'beginner' ? 'active' : ''}`}
          >
            🟢 Beginner
          </button>
          <button
            onClick={() => setSelectedDifficulty('intermediate')}
            className={`filter-button ${selectedDifficulty === 'intermediate' ? 'active' : ''}`}
          >
            🟡 Intermediate
          </button>
          <button
            onClick={() => setSelectedDifficulty('advanced')}
            className={`filter-button ${selectedDifficulty === 'advanced' ? 'active' : ''}`}
          >
            🔴 Advanced
          </button>
        </div>
        <div className="filter-info">
          <span className="filter-count">
            {filteredPrompts.length} van {promptsData[selectedCategory as keyof typeof promptsData].prompts.length} prompts
          </span>
        </div>
      </div>

      {/* Selected Category Info */}
      <div className="category-info">
        <div className={`category-header ${promptsData[selectedCategory as keyof typeof promptsData].color}`}>
          <span className="category-icon-large">
            {promptsData[selectedCategory as keyof typeof promptsData].icon}
          </span>
          <div className="category-details">
            <h2>{promptsData[selectedCategory as keyof typeof promptsData].title}</h2>
            <p>{promptsData[selectedCategory as keyof typeof promptsData].description}</p>
          </div>
        </div>
      </div>

      {/* Prompts Grid */}
      <div className="prompts-grid">
        {filteredPrompts.map((prompt) => (
          <div key={prompt.id} className="prompt-card">
            <div className="prompt-header">
              <h3 className="prompt-title">{prompt.title}</h3>
              <div className="prompt-meta">
                <span className={`difficulty-badge ${prompt.difficulty.toLowerCase()}`}>
                  {prompt.difficulty}
                </span>
                <span className="category-badge">{prompt.category}</span>
              </div>
            </div>
            <p className="prompt-text">{prompt.prompt}</p>
            <div className="prompt-actions">
              <button
                onClick={() => copyToClipboard(prompt.prompt)}
                className="copy-button"
              >
                📋 Kopieer Prompt
              </button>
              <button
                onClick={() => setSelectedPrompt(prompt)}
                className="view-button"
              >
                👁️ Bekijk Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Prompt Detail Modal */}
      {selectedPrompt && (
        <div className="modal-overlay" onClick={() => setSelectedPrompt(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedPrompt.title}</h2>
              <button
                onClick={() => setSelectedPrompt(null)}
                className="close-button"
              >
                ✕
              </button>
            </div>
            <div className="modal-body">
              <div className="prompt-detail-meta">
                <span className={`difficulty-badge ${selectedPrompt.difficulty.toLowerCase()}`}>
                  {selectedPrompt.difficulty}
                </span>
                <span className="category-badge">{selectedPrompt.category}</span>
              </div>
              <div className="prompt-detail-content">
                <h4>Prompt:</h4>
                <div className="prompt-text-box">
                  {selectedPrompt.prompt}
                </div>
                <button
                  onClick={() => copyToClipboard(selectedPrompt.prompt)}
                  className="copy-button-large"
                >
                  📋 Kopieer naar Klembord
                </button>
              </div>
              <div className="prompt-tips">
                <h4>💡 Tips voor gebruik:</h4>
                <ul>
                  <li>Pas de prompt aan aan jouw specifieke project</li>
                  <li>Voeg context toe over je project requirements</li>
                  <li>Specificeer de technologie stack die je gebruikt</li>
                  <li>Vraag om code comments en documentatie</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
