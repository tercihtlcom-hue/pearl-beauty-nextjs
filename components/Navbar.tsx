'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dayMode, setDayMode] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const saved = localStorage.getItem('pearlBeautyTheme')
    if (saved === 'day') setDayMode(true)
  }, [])

  useEffect(() => {
    if (dayMode) {
      document.body.classList.add('day-mode')
    } else {
      document.body.classList.remove('day-mode')
    }
    localStorage.setItem('pearlBeautyTheme', dayMode ? 'day' : 'night')

    const floaters = document.querySelectorAll('.floater')
    floaters.forEach((f) => {
      (f as HTMLElement).style.opacity = dayMode ? '0' : ''
      ;(f as HTMLElement).style.transition = 'opacity 0.6s ease'
    })
  }, [dayMode])

  const toggleMenu = () => setMenuOpen(!menuOpen)

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) setMenuOpen(false)
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [menuOpen])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [menuOpen])

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      {/* Logo - Sol */}
      <a href="#" className="logo">Pearl Beauty</a>

      {/* Orta Menü Linkleri */}
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`} id="navLinks">
        <li><a href="#home" onClick={() => setMenuOpen(false)}>Ana Sayfa</a></li>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>Hakkımızda</a></li>
        <li><a href="#services" onClick={() => setMenuOpen(false)}>Hizmetlerimiz</a></li>
        {/* Mobile'da görünecek WhatsApp */}
        <li className="mobile-wp-item">
          <a
            href="https://wa.me/905306009206"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-wp-link"
            onClick={() => setMenuOpen(false)}
          >
            <i className="fab fa-whatsapp nav-wp-icon"></i>
            <span className="nav-wp-text">İletişim 905306009206</span>
          </a>
        </li>
      </ul>

      {/* Sağ Taraf - Desktop WhatsApp + Tema Toggle */}
      <div className="nav-right">
        <a
          href="https://wa.me/905306009206"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-wp-link desktop-wp-link"
          onClick={() => setMenuOpen(false)}
        >
          <i className="fab fa-whatsapp nav-wp-icon"></i>
          <span className="nav-wp-text">İletişim 905306009206</span>
        </a>
        <div className="day-night-toggle" onClick={() => setDayMode(!dayMode)}>
          <span className="toggle-sun">☀️</span>
          <span className="toggle-moon">🌙</span>
          <div className="toggle-slider"></div>
        </div>
      </div>

      {/* Mobile Menü Butonu */}
      <button
        className={`mobile-menu-btn ${menuOpen ? 'active' : ''}`}
        id="mobileMenuBtn"
        aria-label="Menüyü Aç/Kapat"
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Overlay */}
      <div className={`nav-overlay ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(false)}></div>
    </nav>
  )
}