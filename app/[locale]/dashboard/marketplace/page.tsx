'use client'

import { useState } from 'react'
import { 
  ShoppingCart, 
  Star, 
  Users, 
  Clock, 
  Download, 
  Heart, 
  Share2, 
  Filter,
  Search,
  Grid,
  List,
  Tag,
  Award,
  Zap,
  BookOpen,
  Palette,
  Code,
  TrendingUp
} from 'lucide-react'

interface MarketplaceItem {
  id: string
  title: string
  description: string
  type: 'course' | 'template' | 'service'
  category: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  sales: number
  image: string
  author: {
    name: string
    avatar: string
    verified: boolean
  }
  tags: string[]
  features: string[]
  duration?: string
  level: 'beginner' | 'intermediate' | 'advanced'
  featured: boolean
  discount?: number
}

export default function MarketplacePage() {
  const [activeTab, setActiveTab] = useState<'all' | 'course' | 'template' | 'service'>('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedLevel, setSelectedLevel] = useState('all')
  const [sortBy, setSortBy] = useState<'popular' | 'newest' | 'price-low' | 'price-high' | 'rating'>('popular')
  const [showFilters, setShowFilters] = useState(false)

  const marketplaceItems: MarketplaceItem[] = [
    {
      id: '1',
      title: 'Complete Web Development Bootcamp',
      description: 'Leer alles over moderne web development met React, Node.js en databases',
      type: 'course',
      category: 'Web Development',
      price: 99,
      originalPrice: 199,
      rating: 4.8,
      reviews: 1247,
      sales: 5432,
      image: '/api/placeholder/400/250',
      author: {
        name: 'Chiel van der Meer',
        avatar: '/api/placeholder/50/50',
        verified: true
      },
      tags: ['React', 'Node.js', 'MongoDB', 'Full Stack'],
      features: ['40+ uur video', 'Projecten', 'Certificaat', 'Lifetime access'],
      duration: '40 uur',
      level: 'beginner',
      featured: true,
      discount: 50
    },
    {
      id: '2',
      title: 'E-commerce Website Template',
      description: 'Professionale webshop template met moderne design en alle features',
      type: 'template',
      category: 'E-commerce',
      price: 49,
      originalPrice: 79,
      rating: 4.9,
      reviews: 892,
      sales: 2341,
      image: '/api/placeholder/400/250',
      author: {
        name: 'Design Studio Pro',
        avatar: '/api/placeholder/50/50',
        verified: true
      },
      tags: ['Responsive', 'SEO Ready', 'Payment Gateway', 'Admin Panel'],
      features: ['Fully Responsive', 'SEO Optimized', 'Payment Integration', 'Admin Dashboard'],
      level: 'intermediate',
      featured: true,
      discount: 38
    },
    {
      id: '3',
      title: 'Personal Branding Package',
      description: 'Complete branding service inclusief logo, website en social media setup',
      type: 'service',
      category: 'Branding',
      price: 299,
      rating: 5.0,
      reviews: 156,
      sales: 89,
      image: '/api/placeholder/400/250',
      author: {
        name: 'Creative Agency',
        avatar: '/api/placeholder/50/50',
        verified: true
      },
      tags: ['Logo Design', 'Website', 'Social Media', 'Brand Strategy'],
      features: ['Custom Logo Design', 'Website Development', 'Social Media Setup', 'Brand Guidelines'],
      level: 'advanced',
      featured: false
    },
    {
      id: '4',
      title: 'React Advanced Patterns',
      description: 'Leer geavanceerde React patterns en best practices voor enterprise apps',
      type: 'course',
      category: 'Frontend',
      price: 79,
      rating: 4.7,
      reviews: 634,
      sales: 1234,
      image: '/api/placeholder/400/250',
      author: {
        name: 'React Expert',
        avatar: '/api/placeholder/50/50',
        verified: true
      },
      tags: ['React', 'TypeScript', 'Performance', 'Architecture'],
      features: ['Advanced Patterns', 'Performance Optimization', 'TypeScript', 'Real Projects'],
      duration: '25 uur',
      level: 'advanced',
      featured: false
    },
    {
      id: '5',
      title: 'Portfolio Website Template',
      description: 'Elegante portfolio template voor creatieve professionals',
      type: 'template',
      category: 'Portfolio',
      price: 29,
      rating: 4.6,
      reviews: 445,
      sales: 987,
      image: '/api/placeholder/400/250',
      author: {
        name: 'Template Hub',
        avatar: '/api/placeholder/50/50',
        verified: false
      },
      tags: ['Portfolio', 'Creative', 'Minimal', 'Fast'],
      features: ['Portfolio Gallery', 'Contact Form', 'Blog Section', 'SEO Ready'],
      level: 'beginner',
      featured: false
    },
    {
      id: '6',
      title: 'SEO Optimization Service',
      description: 'Professionele SEO optimalisatie voor je website',
      type: 'service',
      category: 'SEO',
      price: 199,
      rating: 4.8,
      reviews: 234,
      sales: 156,
      image: '/api/placeholder/400/250',
      author: {
        name: 'SEO Masters',
        avatar: '/api/placeholder/50/50',
        verified: true
      },
      tags: ['SEO', 'Analytics', 'Keyword Research', 'Technical SEO'],
      features: ['Technical Audit', 'Keyword Research', 'Content Optimization', 'Analytics Setup'],
      level: 'intermediate',
      featured: false
    }
  ]

  const categories = ['all', 'Web Development', 'Frontend', 'Backend', 'E-commerce', 'Portfolio', 'Branding', 'SEO']
  const levels = ['all', 'beginner', 'intermediate', 'advanced']

  const filteredItems = marketplaceItems.filter(item => {
    const matchesTab = activeTab === 'all' || item.type === activeTab
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    const matchesLevel = selectedLevel === 'all' || item.level === selectedLevel

    return matchesTab && matchesSearch && matchesCategory && matchesLevel
  })

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.sales - a.sales
      case 'newest':
        return new Date(b.id).getTime() - new Date(a.id).getTime()
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      default:
        return 0
    }
  })

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'course': return BookOpen
      case 'template': return Palette
      case 'service': return Code
      default: return ShoppingCart
    }
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'from-green-500 to-emerald-500'
      case 'intermediate': return 'from-yellow-500 to-orange-500'
      case 'advanced': return 'from-red-500 to-pink-500'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <div className="marketplace-container">
      <div className="marketplace-header">
        <div className="header-content">
          <h1 className="marketplace-title">
            <ShoppingCart className="inline-icon" /> Marketplace
          </h1>
          <p className="marketplace-description">
            Ontdek premium cursussen, templates en services van experts
          </p>
        </div>
        
        <div className="header-stats">
          <div className="stat-item">
            <ShoppingCart size={24} />
            <div>
              <span className="stat-value">{marketplaceItems.length}</span>
              <span className="stat-label">Producten</span>
            </div>
          </div>
          <div className="stat-item">
            <Users size={24} />
            <div>
              <span className="stat-value">12.5K</span>
              <span className="stat-label">Kopers</span>
            </div>
          </div>
          <div className="stat-item">
            <Star size={24} />
            <div>
              <span className="stat-value">4.8</span>
              <span className="stat-label">Gemiddelde Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="marketplace-controls">
        <div className="search-section">
          <div className="search-input-wrapper">
            <Search size={20} />
            <input
              type="text"
              placeholder="Zoek cursussen, templates, services..."
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

          <div className="view-toggle">
            <button
              onClick={() => setViewMode('grid')}
              className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
            >
              <List size={20} />
            </button>
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="sort-select"
          >
            <option value="popular">Meest Populair</option>
            <option value="newest">Nieuwste</option>
            <option value="price-low">Prijs: Laag naar Hoog</option>
            <option value="price-high">Prijs: Hoog naar Laag</option>
            <option value="rating">Hoogste Rating</option>
          </select>
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="filters-panel">
          <div className="filter-group">
            <label className="filter-label">Categorie</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'Alle Categorieën' : category}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Niveau</label>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="filter-select"
            >
              {levels.map(level => (
                <option key={level} value={level}>
                  {level === 'all' ? 'Alle Niveaus' : level.charAt(0).toUpperCase() + level.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="marketplace-tabs">
        <button
          onClick={() => setActiveTab('all')}
          className={`marketplace-tab ${activeTab === 'all' ? 'active' : ''}`}
        >
          <ShoppingCart size={20} />
          Alles
        </button>
        <button
          onClick={() => setActiveTab('course')}
          className={`marketplace-tab ${activeTab === 'course' ? 'active' : ''}`}
        >
          <BookOpen size={20} />
          Cursussen
        </button>
        <button
          onClick={() => setActiveTab('template')}
          className={`marketplace-tab ${activeTab === 'template' ? 'active' : ''}`}
        >
          <Palette size={20} />
          Templates
        </button>
        <button
          onClick={() => setActiveTab('service')}
          className={`marketplace-tab ${activeTab === 'service' ? 'active' : ''}`}
        >
          <Code size={20} />
          Services
        </button>
      </div>

      {/* Results */}
      <div className="marketplace-results">
        <div className="results-header">
          <span className="results-count">
            {sortedItems.length} resultaten gevonden
          </span>
        </div>

        <div className={`items-grid ${viewMode}`}>
          {sortedItems.map((item) => {
            const TypeIcon = getTypeIcon(item.type)
            return (
              <div key={item.id} className={`marketplace-item ${item.featured ? 'featured' : ''}`}>
                {item.featured && (
                  <div className="featured-badge">
                    <TrendingUp size={16} />
                    Featured
                  </div>
                )}
                
                {item.discount && (
                  <div className="discount-badge">
                    -{item.discount}%
                  </div>
                )}

                <div className="item-image">
                  <img src={item.image} alt={item.title} />
                  <div className="item-overlay">
                    <button className="overlay-btn">
                      <Heart size={20} />
                    </button>
                    <button className="overlay-btn">
                      <Share2 size={20} />
                    </button>
                  </div>
                </div>

                <div className="item-content">
                  <div className="item-header">
                    <div className="item-type">
                      <TypeIcon size={16} />
                      <span className="type-text">{item.type}</span>
                    </div>
                    <span className={`level-badge ${getLevelColor(item.level)}`}>
                      {item.level}
                    </span>
                  </div>

                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-description">{item.description}</p>

                  <div className="item-author">
                    <img src={item.author.avatar} alt={item.author.name} className="author-avatar" />
                    <div className="author-info">
                      <span className="author-name">{item.author.name}</span>
                      {item.author.verified && <Award size={14} className="verified-badge" />}
                    </div>
                  </div>

                  <div className="item-rating">
                    <div className="stars">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={16}
                          className={star <= item.rating ? 'filled' : 'empty'}
                        />
                      ))}
                    </div>
                    <span className="rating-text">
                      {item.rating} ({item.reviews} reviews)
                    </span>
                  </div>

                  <div className="item-features">
                    {item.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="feature-tag">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="item-footer">
                    <div className="item-price">
                      <span className="current-price">€{item.price}</span>
                      {item.originalPrice && (
                        <span className="original-price">€{item.originalPrice}</span>
                      )}
                    </div>
                    
                    <div className="item-actions">
                      <button className="btn-primary">
                        {item.type === 'course' ? 'Start Cursus' : 
                         item.type === 'template' ? 'Download' : 'Boek Service'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {sortedItems.length === 0 && (
          <div className="no-results">
            <ShoppingCart size={64} />
            <h3>Geen resultaten gevonden</h3>
            <p>Probeer andere zoektermen of filters</p>
          </div>
        )}
      </div>
    </div>
  )
}
