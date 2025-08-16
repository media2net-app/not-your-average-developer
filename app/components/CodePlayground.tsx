'use client'

import { useState, useEffect, useRef } from 'react'
import { Play, Square, RotateCcw, Download, Share2, Check, X, AlertTriangle } from 'lucide-react'

interface CodePlaygroundProps {
  initialCode?: string
  language?: 'html' | 'css' | 'javascript' | 'typescript'
  title?: string
  description?: string
  expectedOutput?: string
  hints?: string[]
  onComplete?: (code: string, output: string) => void
  onRun?: (code: string) => void
}

export default function CodePlayground({
  initialCode = '',
  language = 'html',
  title = 'Code Playground',
  description = 'Schrijf en test je code live',
  expectedOutput = '',
  hints = [],
  onComplete,
  onRun
}: CodePlaygroundProps) {
  const [code, setCode] = useState(initialCode)
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [showHints, setShowHints] = useState(false)
  const [currentHint, setCurrentHint] = useState(0)
  const [isCompleted, setIsCompleted] = useState(false)
  const [error, setError] = useState('')
  
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const editorRef = useRef<HTMLTextAreaElement>(null)

  const languageConfig = {
    html: { name: 'HTML', extension: '.html' },
    css: { name: 'CSS', extension: '.css' },
    javascript: { name: 'JavaScript', extension: '.js' },
    typescript: { name: 'TypeScript', extension: '.ts' }
  }

  const runCode = () => {
    setIsRunning(true)
    setError('')
    
    try {
      let result = ''
      
      switch (language) {
        case 'html':
          result = code
          break
        case 'css':
          result = `<style>${code}</style><div class="preview">Preview content</div>`
          break
        case 'javascript':
          result = `<script>${code}</script><div id="output"></div>`
          break
        case 'typescript':
          // For demo, we'll just run as JavaScript
          result = `<script>${code}</script><div id="output"></div>`
          break
      }
      
      setOutput(result)
      
      if (iframeRef.current) {
        const iframe = iframeRef.current
        iframe.srcdoc = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                .preview { padding: 20px; border: 1px solid #ccc; margin: 10px 0; }
                #output { padding: 10px; background: #f5f5f5; margin: 10px 0; }
              </style>
            </head>
            <body>
              ${result}
            </body>
          </html>
        `
      }
      
      onRun?.(code)
      
      // Check if output matches expected
      if (expectedOutput && result.includes(expectedOutput)) {
        setIsCompleted(true)
        onComplete?.(code, result)
      }
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Er is een fout opgetreden')
    } finally {
      setIsRunning(false)
    }
  }

  const stopCode = () => {
    setIsRunning(false)
    if (iframeRef.current) {
      iframeRef.current.srcdoc = ''
    }
  }

  const resetCode = () => {
    setCode(initialCode)
    setOutput('')
    setError('')
    setIsCompleted(false)
    if (iframeRef.current) {
      iframeRef.current.srcdoc = ''
    }
  }

  const downloadCode = () => {
    const blob = new Blob([code], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `code${languageConfig[language].extension}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const shareCode = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: `Bekijk mijn code: ${code.substring(0, 100)}...`,
        url: window.location.href
      })
    } else {
      navigator.clipboard.writeText(code)
      alert('Code gekopieerd naar klembord!')
    }
  }

  const nextHint = () => {
    setCurrentHint((prev) => (prev + 1) % hints.length)
  }

  const prevHint = () => {
    setCurrentHint((prev) => (prev - 1 + hints.length) % hints.length)
  }

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.focus()
    }
  }, [])

  return (
    <div className="code-playground">
      <div className="playground-header">
        <div className="playground-info">
          <h3 className="playground-title">{title}</h3>
          <p className="playground-description">{description}</p>
        </div>
        
        <div className="playground-actions">
          <button
            onClick={runCode}
            disabled={isRunning}
            className="action-button run"
          >
            <Play size={16} />
            {isRunning ? 'Uitvoeren...' : 'Uitvoeren'}
          </button>
          
          <button
            onClick={stopCode}
            disabled={!isRunning}
            className="action-button stop"
          >
            <Square size={16} />
            Stop
          </button>
          
          <button
            onClick={resetCode}
            className="action-button reset"
          >
            <RotateCcw size={16} />
            Reset
          </button>
          
          <button
            onClick={downloadCode}
            className="action-button download"
          >
            <Download size={16} />
            Download
          </button>
          
          <button
            onClick={shareCode}
            className="action-button share"
          >
            <Share2 size={16} />
            Delen
          </button>
        </div>
      </div>

      <div className="playground-content">
        {/* Code Editor */}
        <div className="editor-section">
          <div className="editor-header">
            <span className="language-badge">{languageConfig[language].name}</span>
            <div className="editor-controls">
              <button
                onClick={() => setShowHints(!showHints)}
                className="hint-button"
                disabled={hints.length === 0}
              >
                💡 Tips ({hints.length})
              </button>
            </div>
          </div>
          
          <div className="editor-container">
            <textarea
              ref={editorRef}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="code-editor"
              placeholder={`Schrijf je ${languageConfig[language].name} code hier...`}
              spellCheck={false}
            />
            
            <div className="line-numbers">
              {code.split('\n').map((_, index) => (
                <div key={index} className="line-number">{index + 1}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Output */}
        <div className="output-section">
          <div className="output-header">
            <h4>Output</h4>
            {isCompleted && (
              <div className="completion-badge">
                <Check size={16} />
                Voltooid!
              </div>
            )}
          </div>
          
          <div className="output-container">
            {error ? (
              <div className="error-output">
                <AlertTriangle size={16} />
                <span>{error}</span>
              </div>
            ) : (
              <iframe
                ref={iframeRef}
                className="output-iframe"
                title="Code Output"
                sandbox="allow-scripts allow-same-origin"
              />
            )}
          </div>
        </div>
      </div>

      {/* Hints Panel */}
      {showHints && hints.length > 0 && (
        <div className="hints-panel">
          <div className="hints-header">
            <h4>💡 Tips</h4>
            <div className="hints-navigation">
              <button onClick={prevHint} className="hint-nav-btn">←</button>
              <span>{currentHint + 1} / {hints.length}</span>
              <button onClick={nextHint} className="hint-nav-btn">→</button>
            </div>
          </div>
          <p className="hint-text">{hints[currentHint]}</p>
        </div>
      )}

      {/* Expected Output */}
      {expectedOutput && (
        <div className="expected-output">
          <h4>Verwachte Output:</h4>
          <div className="expected-content">
            <code>{expectedOutput}</code>
          </div>
        </div>
      )}
    </div>
  )
}
