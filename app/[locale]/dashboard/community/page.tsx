'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'

interface Post {
  id: string
  author: {
    name: string
    avatar: string
    level: string
  }
  content: string
  type: 'question' | 'showcase' | 'discussion'
  title: string
  tags: string[]
  likes: number
  comments: number
  timestamp: string
  isLiked: boolean
}

interface Comment {
  id: string
  author: {
    name: string
    avatar: string
  }
  content: string
  timestamp: string
  likes: number
}

const mockPosts: Post[] = [
  {
    id: '1',
    author: {
      name: 'Sarah Johnson',
      avatar: '👩‍💻',
      level: 'Intermediate'
    },
    content: 'Ik heb net mijn eerste portfolio website afgemaakt met Cursor AI! Het was geweldig om te zien hoe snel ik kon bouwen. Heeft iemand tips voor het optimaliseren van de performance?',
    type: 'showcase',
    title: 'Mijn eerste portfolio website met Cursor AI',
    tags: ['portfolio', 'cursor-ai', 'performance'],
    likes: 12,
    comments: 5,
    timestamp: '2 uur geleden',
    isLiked: false
  },
  {
    id: '2',
    author: {
      name: 'Mike Chen',
      avatar: '👨‍💻',
      level: 'Beginner'
    },
    content: 'Ik loop vast met het maken van een responsive navigation bar. Kan iemand me helpen met de CSS Grid layout? Ik gebruik Cursor AI maar krijg niet de juiste resultaten.',
    type: 'question',
    title: 'Hulp nodig met responsive navigation',
    tags: ['css', 'responsive', 'navigation'],
    likes: 8,
    comments: 3,
    timestamp: '4 uur geleden',
    isLiked: true
  },
  {
    id: '3',
    author: {
      name: 'Emma Davis',
      avatar: '👩‍🎨',
      level: 'Advanced'
    },
    content: 'Ik heb een e-commerce website gebouwd met Next.js en Cursor AI. De checkout flow werkt perfect en de performance is uitstekend. Hier zijn enkele best practices die ik heb geleerd...',
    type: 'discussion',
    title: 'E-commerce best practices met Cursor AI',
    tags: ['e-commerce', 'nextjs', 'best-practices'],
    likes: 25,
    comments: 12,
    timestamp: '1 dag geleden',
    isLiked: false
  },
  {
    id: '4',
    author: {
      name: 'Alex Rodriguez',
      avatar: '👨‍🚀',
      level: 'Intermediate'
    },
    content: 'Net een real-time chat applicatie afgemaakt! WebSockets zijn echt geweldig. Cursor AI hielp me enorm met de backend logica. Wie heeft er nog meer ervaring met real-time features?',
    type: 'showcase',
    title: 'Real-time chat app met WebSockets',
    tags: ['websockets', 'real-time', 'chat'],
    likes: 18,
    comments: 7,
    timestamp: '3 dagen geleden',
    isLiked: false
  }
]

const mockComments: Record<string, Comment[]> = {
  '1': [
    {
      id: 'c1',
      author: {
        name: 'Tom Wilson',
        avatar: '👨‍💼'
      },
      content: 'Geweldig werk! Voor performance optimalisatie zou ik aanraden om images te comprimeren en lazy loading toe te voegen.',
      timestamp: '1 uur geleden',
      likes: 3
    },
    {
      id: 'c2',
      author: {
        name: 'Lisa Park',
        avatar: '👩‍🎓'
      },
      content: 'Mooi portfolio! Welke technologieën heb je gebruikt?',
      timestamp: '30 min geleden',
      likes: 1
    }
  ],
  '2': [
    {
      id: 'c3',
      author: {
        name: 'David Kim',
        avatar: '👨‍🔧'
      },
      content: 'Voor responsive navigation kun je CSS Grid gebruiken met grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)).',
      timestamp: '2 uur geleden',
      likes: 5
    }
  ]
}

export default function CommunityPage() {
  const [posts, setPosts] = useState<Post[]>(mockPosts)
  const [comments, setComments] = useState<Record<string, Comment[]>>(mockComments)
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    type: 'question' as 'question' | 'showcase' | 'discussion',
    tags: ''
  })
  const [newComment, setNewComment] = useState('')
  const [activeTab, setActiveTab] = useState('all')
  const [showNewPostForm, setShowNewPostForm] = useState(false)
  const t = useTranslations()

  const handleLikePost = (postId: string) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          isLiked: !post.isLiked
        }
      }
      return post
    }))
  }

  const handleAddComment = (postId: string) => {
    if (!newComment.trim()) return

    const comment: Comment = {
      id: `c${Date.now()}`,
      author: {
        name: 'Jouw Naam',
        avatar: '👤'
      },
      content: newComment,
      timestamp: 'Nu',
      likes: 0
    }

    setComments({
      ...comments,
      [postId]: [...(comments[postId] || []), comment]
    })

    setPosts(posts.map(post => {
      if (post.id === postId) {
        return { ...post, comments: post.comments + 1 }
      }
      return post
    }))

    setNewComment('')
  }

  const handleCreatePost = () => {
    if (!newPost.title.trim() || !newPost.content.trim()) return

    const post: Post = {
      id: `p${Date.now()}`,
      author: {
        name: 'Jouw Naam',
        avatar: '👤',
        level: 'Beginner'
      },
      content: newPost.content,
      type: newPost.type,
      title: newPost.title,
      tags: newPost.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      likes: 0,
      comments: 0,
      timestamp: 'Nu',
      isLiked: false
    }

    setPosts([post, ...posts])
    setNewPost({ title: '', content: '', type: 'question', tags: '' })
    setShowNewPostForm(false)
  }

  const filteredPosts = posts.filter(post => {
    if (activeTab === 'all') return true
    return post.type === activeTab
  })

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'question': return '❓'
      case 'showcase': return '🎨'
      case 'discussion': return '💬'
      default: return '📝'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'question': return 'from-blue-500 to-cyan-500'
      case 'showcase': return 'from-green-500 to-emerald-500'
      case 'discussion': return 'from-purple-500 to-pink-500'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <div className="community-container">
      <div className="community-header">
        <h1 className="community-title">👥 Community</h1>
        <p className="community-description">
          Connect met andere developers, stel vragen, deel je werk en leer van elkaar
        </p>
      </div>

      {/* Create Post Button */}
      <div className="create-post-section">
        <button
          onClick={() => setShowNewPostForm(!showNewPostForm)}
          className="create-post-button"
        >
          ✨ Nieuwe Post Maken
        </button>
      </div>

      {/* New Post Form */}
      {showNewPostForm && (
        <div className="new-post-form">
          <h3>Nieuwe Post</h3>
          <div className="form-group">
            <label>Titel</label>
            <input
              type="text"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              placeholder="Geef je post een titel..."
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label>Type</label>
            <select
              value={newPost.type}
              onChange={(e) => setNewPost({ ...newPost, type: e.target.value as any })}
              className="form-select"
            >
              <option value="question">❓ Vraag</option>
              <option value="showcase">🎨 Showcase</option>
              <option value="discussion">💬 Discussie</option>
            </select>
          </div>
          <div className="form-group">
            <label>Content</label>
            <textarea
              value={newPost.content}
              onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
              placeholder="Schrijf je post..."
              className="form-textarea"
              rows={4}
            />
          </div>
          <div className="form-group">
            <label>Tags (komma-gescheiden)</label>
            <input
              type="text"
              value={newPost.tags}
              onChange={(e) => setNewPost({ ...newPost, tags: e.target.value })}
              placeholder="cursor-ai, css, javascript..."
              className="form-input"
            />
          </div>
          <div className="form-actions">
            <button onClick={handleCreatePost} className="submit-button">
              📤 Post Publiceren
            </button>
            <button onClick={() => setShowNewPostForm(false)} className="cancel-button">
              ❌ Annuleren
            </button>
          </div>
        </div>
      )}

      {/* Filter Tabs */}
      <div className="filter-tabs">
        <button
          onClick={() => setActiveTab('all')}
          className={`filter-tab ${activeTab === 'all' ? 'active' : ''}`}
        >
          🌟 Alle Posts
        </button>
        <button
          onClick={() => setActiveTab('question')}
          className={`filter-tab ${activeTab === 'question' ? 'active' : ''}`}
        >
          ❓ Vragen
        </button>
        <button
          onClick={() => setActiveTab('showcase')}
          className={`filter-tab ${activeTab === 'showcase' ? 'active' : ''}`}
        >
          🎨 Showcases
        </button>
        <button
          onClick={() => setActiveTab('discussion')}
          className={`filter-tab ${activeTab === 'discussion' ? 'active' : ''}`}
        >
          💬 Discussies
        </button>
      </div>

      {/* Posts Grid */}
      <div className="posts-grid">
        {filteredPosts.map((post) => (
          <div key={post.id} className="post-card">
            <div className="post-header">
              <div className="post-author">
                <span className="author-avatar">{post.author.avatar}</span>
                <div className="author-info">
                  <span className="author-name">{post.author.name}</span>
                  <span className="author-level">{post.author.level}</span>
                </div>
              </div>
              <div className="post-meta">
                <span className={`post-type ${getTypeColor(post.type)}`}>
                  {getTypeIcon(post.type)} {post.type}
                </span>
                <span className="post-time">{post.timestamp}</span>
              </div>
            </div>
            
            <div className="post-content">
              <h3 className="post-title">{post.title}</h3>
              <p className="post-text">{post.content}</p>
              <div className="post-tags">
                {post.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="post-actions">
              <button
                onClick={() => handleLikePost(post.id)}
                className={`like-button ${post.isLiked ? 'liked' : ''}`}
              >
                {post.isLiked ? '❤️' : '🤍'} {post.likes}
              </button>
              <button
                onClick={() => setSelectedPost(post)}
                className="comment-button"
              >
                💬 {post.comments}
              </button>
              <button className="share-button">
                📤 Delen
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Post Detail Modal */}
      {selectedPost && (
        <div className="modal-overlay" onClick={() => setSelectedPost(null)}>
          <div className="modal-content post-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="post-author">
                <span className="author-avatar">{selectedPost.author.avatar}</span>
                <div className="author-info">
                  <span className="author-name">{selectedPost.author.name}</span>
                  <span className="author-level">{selectedPost.author.level}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedPost(null)}
                className="close-button"
              >
                ✕
              </button>
            </div>
            
            <div className="modal-body">
              <div className="post-detail-content">
                <h2>{selectedPost.title}</h2>
                <p>{selectedPost.content}</p>
                <div className="post-tags">
                  {selectedPost.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="comments-section">
                <h3>💬 Reacties ({comments[selectedPost.id]?.length || 0})</h3>
                
                <div className="comments-list">
                  {comments[selectedPost.id]?.map((comment) => (
                    <div key={comment.id} className="comment">
                      <div className="comment-header">
                        <span className="comment-avatar">{comment.author.avatar}</span>
                        <span className="comment-author">{comment.author.name}</span>
                        <span className="comment-time">{comment.timestamp}</span>
                      </div>
                      <p className="comment-content">{comment.content}</p>
                      <div className="comment-actions">
                        <button className="like-button">🤍 {comment.likes}</button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="add-comment">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Schrijf een reactie..."
                    className="comment-input"
                    rows={3}
                  />
                  <button
                    onClick={() => handleAddComment(selectedPost.id)}
                    className="submit-comment-button"
                  >
                    📤 Reactie Toevoegen
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 