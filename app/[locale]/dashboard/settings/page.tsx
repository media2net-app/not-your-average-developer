'use client'

import { useState, useEffect } from 'react'
import { 
  User, 
  Bell, 
  Mail, 
  Shield, 
  Palette, 
  Globe, 
  Download, 
  Trash2,
  Save,
  Edit,
  Camera,
  Eye,
  EyeOff,
  Check,
  X,
  AlertTriangle,
  Info
} from 'lucide-react'

interface UserProfile {
  id: string
  name: string
  email: string
  avatar: string
  role: string
  joinDate: string
  lastLogin: string
}

interface Settings {
  notifications: {
    email: boolean
    push: boolean
    sms: boolean
    weeklyDigest: boolean
  }
  privacy: {
    profileVisibility: 'public' | 'private' | 'friends'
    showProgress: boolean
    showEmail: boolean
  }
  preferences: {
    theme: 'dark' | 'light' | 'auto'
    language: 'nl' | 'en'
    timezone: string
    currency: string
  }
  account: {
    twoFactorAuth: boolean
    sessionTimeout: number
    dataRetention: number
  }
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile')
  const [isEditing, setIsEditing] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)

  const [profile, setProfile] = useState<UserProfile>({
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: '',
    role: 'Student',
    joinDate: '2024-01-15',
    lastLogin: '2024-01-20'
  })

  const [settings, setSettings] = useState<Settings>({
    notifications: {
      email: true,
      push: true,
      sms: false,
      weeklyDigest: true
    },
    privacy: {
      profileVisibility: 'public',
      showProgress: true,
      showEmail: false
    },
    preferences: {
      theme: 'dark',
      language: 'nl',
      timezone: 'Europe/Amsterdam',
      currency: 'EUR'
    },
    account: {
      twoFactorAuth: false,
      sessionTimeout: 30,
      dataRetention: 365
    }
  })

  const [formData, setFormData] = useState({
    name: profile.name,
    email: profile.email,
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  const handleSave = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setProfile(prev => ({
      ...prev,
      name: formData.name,
      email: formData.email
    }))
    
    setIsEditing(false)
    setIsLoading(false)
    setSaveSuccess(true)
    
    setTimeout(() => setSaveSuccess(false), 3000)
  }

  const handleCancel = () => {
    setFormData({
      name: profile.name,
      email: profile.email,
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    })
    setIsEditing(false)
  }

  const updateSetting = (category: keyof Settings, key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: value
      }
    }))
  }

  const tabs = [
    { id: 'profile', label: 'Profiel', icon: User },
    { id: 'notifications', label: 'Notificaties', icon: Bell },
    { id: 'privacy', label: 'Privacy', icon: Shield },
    { id: 'preferences', label: 'Voorkeuren', icon: Palette },
    { id: 'account', label: 'Account', icon: Globe }
  ]

  return (
    <div className="settings-container">
      <div className="settings-header">
        <h1 className="settings-title"><Globe className="inline-icon" /> Instellingen</h1>
        <p className="settings-description">
          Beheer je profiel, notificaties en account instellingen
        </p>
      </div>

      {/* Success Message */}
      {saveSuccess && (
        <div className="success-message">
          <Check size={16} />
          <span>Instellingen succesvol opgeslagen!</span>
        </div>
      )}

      <div className="settings-content">
        {/* Tabs */}
        <div className="settings-tabs">
          {tabs.map((tab) => {
            const IconComponent = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`settings-tab ${activeTab === tab.id ? 'active' : ''}`}
              >
                <IconComponent size={20} />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Tab Content */}
        <div className="settings-panel">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="profile-section">
              <div className="section-header">
                <h2>Profiel Informatie</h2>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="edit-button"
                >
                  {isEditing ? <X size={16} /> : <Edit size={16} />}
                  {isEditing ? 'Annuleren' : 'Bewerken'}
                </button>
              </div>

              <div className="profile-form">
                <div className="avatar-section">
                  <div className="avatar-container">
                    {profile.avatar ? (
                      <img src={profile.avatar} alt="Profile" className="avatar" />
                    ) : (
                      <div className="avatar-placeholder">
                        <User size={40} />
                      </div>
                    )}
                    <button className="avatar-upload">
                      <Camera size={16} />
                    </button>
                  </div>
                  <div className="avatar-info">
                    <h3>{profile.name}</h3>
                    <p>{profile.role}</p>
                    <span>Lid sinds {new Date(profile.joinDate).toLocaleDateString('nl-NL')}</span>
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label>Naam</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      disabled={!isEditing}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      disabled={!isEditing}
                      className="form-input"
                    />
                  </div>

                  {isEditing && (
                    <>
                      <div className="form-group">
                        <label>Huidig Wachtwoord</label>
                        <div className="password-input">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            value={formData.currentPassword}
                            onChange={(e) => setFormData(prev => ({ ...prev, currentPassword: e.target.value }))}
                            className="form-input"
                            placeholder="Voer je huidige wachtwoord in"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="password-toggle"
                          >
                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                          </button>
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Nieuw Wachtwoord</label>
                        <div className="password-input">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            value={formData.newPassword}
                            onChange={(e) => setFormData(prev => ({ ...prev, newPassword: e.target.value }))}
                            className="form-input"
                            placeholder="Voer een nieuw wachtwoord in"
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Bevestig Wachtwoord</label>
                        <div className="password-input">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                            className="form-input"
                            placeholder="Bevestig je nieuwe wachtwoord"
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {isEditing && (
                  <div className="form-actions">
                    <button
                      onClick={handleSave}
                      disabled={isLoading}
                      className="save-button"
                    >
                      {isLoading ? 'Opslaan...' : 'Opslaan'}
                      <Save size={16} />
                    </button>
                    <button
                      onClick={handleCancel}
                      className="cancel-button"
                    >
                      Annuleren
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <div className="notifications-section">
              <h2>Notificatie Instellingen</h2>
              <p className="section-description">
                Kies welke notificaties je wilt ontvangen
              </p>

              <div className="settings-list">
                <div className="setting-item">
                  <div className="setting-info">
                    <div className="setting-header">
                      <Mail size={20} />
                      <h3>Email Notificaties</h3>
                    </div>
                    <p>Ontvang updates en herinneringen via email</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={settings.notifications.email}
                      onChange={(e) => updateSetting('notifications', 'email', e.target.checked)}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <div className="setting-header">
                      <Bell size={20} />
                      <h3>Push Notificaties</h3>
                    </div>
                    <p>Ontvang real-time notificaties in je browser</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={settings.notifications.push}
                      onChange={(e) => updateSetting('notifications', 'push', e.target.checked)}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <div className="setting-header">
                      <Mail size={20} />
                      <h3>Weekelijkse Digest</h3>
                    </div>
                    <p>Ontvang een wekelijks overzicht van je voortgang</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={settings.notifications.weeklyDigest}
                      onChange={(e) => updateSetting('notifications', 'weeklyDigest', e.target.checked)}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Privacy Tab */}
          {activeTab === 'privacy' && (
            <div className="privacy-section">
              <h2>Privacy Instellingen</h2>
              <p className="section-description">
                Beheer wie je profiel en voortgang kan zien
              </p>

              <div className="settings-list">
                <div className="setting-item">
                  <div className="setting-info">
                    <div className="setting-header">
                      <User size={20} />
                      <h3>Profiel Zichtbaarheid</h3>
                    </div>
                    <p>Kies wie je profiel kan bekijken</p>
                  </div>
                  <select
                    value={settings.privacy.profileVisibility}
                    onChange={(e) => updateSetting('privacy', 'profileVisibility', e.target.value)}
                    className="form-select"
                  >
                    <option value="public">Openbaar</option>
                    <option value="friends">Alleen Vrienden</option>
                    <option value="private">Privé</option>
                  </select>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <div className="setting-header">
                      <Info size={20} />
                      <h3>Voortgang Tonen</h3>
                    </div>
                    <p>Laat anderen je cursus voortgang zien</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={settings.privacy.showProgress}
                      onChange={(e) => updateSetting('privacy', 'showProgress', e.target.checked)}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <div className="setting-header">
                      <Mail size={20} />
                      <h3>Email Adres Tonen</h3>
                    </div>
                    <p>Laat anderen je email adres zien</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={settings.privacy.showEmail}
                      onChange={(e) => updateSetting('privacy', 'showEmail', e.target.checked)}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Preferences Tab */}
          {activeTab === 'preferences' && (
            <div className="preferences-section">
              <h2>Voorkeuren</h2>
              <p className="section-description">
                Pas de app aan naar jouw voorkeuren
              </p>

              <div className="settings-list">
                <div className="setting-item">
                  <div className="setting-info">
                    <div className="setting-header">
                      <Palette size={20} />
                      <h3>Thema</h3>
                    </div>
                    <p>Kies je voorkeursthema</p>
                  </div>
                  <select
                    value={settings.preferences.theme}
                    onChange={(e) => updateSetting('preferences', 'theme', e.target.value)}
                    className="form-select"
                  >
                    <option value="dark">Donker</option>
                    <option value="light">Licht</option>
                    <option value="auto">Automatisch</option>
                  </select>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <div className="setting-header">
                      <Globe size={20} />
                      <h3>Taal</h3>
                    </div>
                    <p>Kies je voorkeurstaal</p>
                  </div>
                  <select
                    value={settings.preferences.language}
                    onChange={(e) => updateSetting('preferences', 'language', e.target.value)}
                    className="form-select"
                  >
                    <option value="nl">Nederlands</option>
                    <option value="en">English</option>
                  </select>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <div className="setting-header">
                      <Globe size={20} />
                      <h3>Tijdzone</h3>
                    </div>
                    <p>Kies je tijdzone</p>
                  </div>
                  <select
                    value={settings.preferences.timezone}
                    onChange={(e) => updateSetting('preferences', 'timezone', e.target.value)}
                    className="form-select"
                  >
                    <option value="Europe/Amsterdam">Europe/Amsterdam</option>
                    <option value="Europe/London">Europe/London</option>
                    <option value="America/New_York">America/New_York</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Account Tab */}
          {activeTab === 'account' && (
            <div className="account-section">
              <h2>Account Instellingen</h2>
              <p className="section-description">
                Beheer je account beveiliging en sessies
              </p>

              <div className="settings-list">
                <div className="setting-item">
                  <div className="setting-info">
                    <div className="setting-header">
                      <Shield size={20} />
                      <h3>Twee-Factor Authenticatie</h3>
                    </div>
                    <p>Voeg een extra beveiligingslaag toe</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={settings.account.twoFactorAuth}
                      onChange={(e) => updateSetting('account', 'twoFactorAuth', e.target.checked)}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <div className="setting-header">
                      <Globe size={20} />
                      <h3>Sessie Timeout</h3>
                    </div>
                    <p>Automatisch uitloggen na inactiviteit (minuten)</p>
                  </div>
                  <select
                    value={settings.account.sessionTimeout}
                    onChange={(e) => updateSetting('account', 'sessionTimeout', parseInt(e.target.value))}
                    className="form-select"
                  >
                    <option value={15}>15 minuten</option>
                    <option value={30}>30 minuten</option>
                    <option value={60}>1 uur</option>
                    <option value={120}>2 uur</option>
                  </select>
                </div>
              </div>

              <div className="danger-zone">
                <h3>Gevaarlijke Zone</h3>
                <div className="danger-actions">
                  <button className="danger-button">
                    <Download size={16} />
                    Exporteer Data
                  </button>
                  <button className="danger-button delete">
                    <Trash2 size={16} />
                    Account Verwijderen
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 