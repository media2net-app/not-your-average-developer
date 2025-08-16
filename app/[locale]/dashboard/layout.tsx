'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname, useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import LanguageSwitcher from '../../components/LanguageSwitcher'
import { 
  BookOpen, 
  Bot, 
  Users, 
  Trophy, 
  Briefcase, 
  GraduationCap, 
  Settings, 
  Home, 
  BarChart3, 
  Target, 
  Menu, 
  X, 
  LogOut, 
  User,
  Award,
  ShoppingCart
} from 'lucide-react'

interface User {
  id: string
  name: string
  email: string
  role: string
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [user, setUser] = useState<User | null>(null)
  const [isAdminMode, setIsAdminMode] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const locale = params.locale as string
  const t = useTranslations('navigation')

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('user')
    if (!userData) {
      router.push(`/${locale}`)
      return
    }
    setUser(JSON.parse(userData))
  }, [router, locale])

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.querySelector('.dashboard-sidebar')
      const hamburger = document.querySelector('.hamburger-menu')
      
      if (isSidebarOpen && sidebar && !sidebar.contains(event.target as Node) && !hamburger?.contains(event.target as Node)) {
        setIsSidebarOpen(false)
      }
    }

    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isSidebarOpen])

  // Close sidebar when route changes on mobile
  useEffect(() => {
    setIsSidebarOpen(false)
  }, [pathname])

  const handleLogout = () => {
    localStorage.removeItem('user')
    router.push(`/${locale}`)
  }

  const menu = [
    { label: t('dashboard'), icon: BarChart3, href: `/${locale}/dashboard` },
    { label: t('modules'), icon: BookOpen, href: `/${locale}/dashboard/modules` },
    { label: 'Plan van Aanpak', icon: Target, href: `/${locale}/dashboard/roadmap` },
    { label: 'Cursor AI Prompts', icon: Bot, href: `/${locale}/dashboard/prompts` },
    { label: 'Gamification', icon: Award, href: `/${locale}/dashboard/gamification` },
    { label: 'Marketplace', icon: ShoppingCart, href: `/${locale}/dashboard/marketplace` },
    { label: 'CRM', icon: Users, href: `/${locale}/dashboard/crm` },
    { label: t('community'), icon: Users, href: `/${locale}/dashboard/community` },
    { label: t('examen'), icon: Trophy, href: `/${locale}/dashboard/examen` },
    { label: 'Sales', icon: Briefcase, href: `/${locale}/dashboard/sales` },
    { label: t('coaching'), icon: GraduationCap, href: `/${locale}/dashboard/coaching` },
    { label: t('settings'), icon: Settings, href: `/${locale}/dashboard/settings` },
  ] as const

  if (!user) {
    return (
      <div className="loading-container">
        <div className="loading-spinner" />
      </div>
    )
  }

  return (
    <div className="dashboard-layout">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div className="mobile-overlay" onClick={() => setIsSidebarOpen(false)} />
      )}

      {/* Header */}
      <header className="dashboard-header">
        <div className="header-content">
          <div className="header-left">
            <button 
              className="hamburger-menu"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              aria-label="Toggle menu"
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h1 className="header-title">
              {menu.find(item => item.href === pathname)?.label || t('dashboard')}
            </h1>
          </div>
          
          <div className="header-right">
            <div className="header-actions">
              <LanguageSwitcher />
              <div className="user-info">
                <User size={16} />
                <span className="welcome-text">{user.name}</span>
              </div>
              <button
                onClick={() => setIsAdminMode(!isAdminMode)}
                className="btn-admin"
                title={isAdminMode ? 'Switch to Student Mode' : 'Switch to Admin Mode'}
              >
                {isAdminMode ? '👤 Student' : '⚙️ Admin'}
              </button>
              <button
                onClick={handleLogout}
                className="btn-logout"
                title="Logout"
              >
                <LogOut size={16} />
                <span className="logout-text">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside className={`dashboard-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-title">Menu</h2>
          <button 
            className="close-sidebar"
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>
        
        <nav className="sidebar-nav">
          {menu.map((item) => {
            const IconComponent = item.icon
            return (
              <button
                key={item.href}
                onClick={() => router.push(item.href)}
                className={`sidebar-item ${pathname === item.href ? 'active' : ''}`}
              >
                <span className="sidebar-icon">
                  <IconComponent size={20} />
                </span>
                <span className="sidebar-label">{item.label}</span>
              </button>
            )
          })}
        </nav>

        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="user-avatar">
              <User size={20} />
            </div>
            <div className="user-details">
              <span className="user-name">{user.name}</span>
              <span className="user-role">{isAdminMode ? 'Admin' : 'Student'}</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="main-content">
          {children}
        </div>
      </main>
    </div>
  )
} 