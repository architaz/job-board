'use client'
import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // 1. Check localStorage for preference
    const savedMode = localStorage.getItem('darkMode') === 'true'
    // 2. Check system preference
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    // 3. Determine initial state
    const initialMode = savedMode ?? systemPrefersDark
    
    setDarkMode(initialMode)
    document.documentElement.classList.toggle('dark', initialMode)
  }, [])

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem('darkMode', newMode)
    document.documentElement.classList.toggle('dark', newMode)
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
    </button>
  )
}