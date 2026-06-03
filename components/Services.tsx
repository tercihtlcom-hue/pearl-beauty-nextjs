'use client'
import { useEffect } from 'react'
import { useModal } from '@/context/ModalContext'
import { SERVICES } from '@/lib/data'

export default function Services() {
  const { openModal } = useModal()

  useEffect(() => {
    const grid = document.getElementById('servicesGrid')
    if (!grid) return

    const handleTilt = (e: MouseEvent) => {
      const card = (e.target as HTMLElement).closest('.service-card') as HTMLElement
      if (!card) return
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = (y - centerY) / 12
      const rotateY = (centerX - x) / 12
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02) translateY(-10px)`
    }

    const resetTilt = (e: MouseEvent) => {
      const card = (e.target as HTMLElement).closest('.service-card') as HTMLElement
      if (!card) return
      card.style.transform = ''
    }

    grid.addEventListener('mousemove', handleTilt)
    grid.addEventListener('mouseleave', resetTilt, true)

    return () => {
      grid.removeEventListener('mousemove', handleTilt)
      grid.removeEventListener('mouseleave', resetTilt, true)
    }
  }, [])

  return (
    <section id="services">
      <div className="container">
        <div className="section-header reveal active">
          <h2>Hizmetlerim<span>iz</span></h2>
          <div className="line"></div>
          <p>Detaylı bilgi için kartlara tıklayın</p>
        </div>
        <div className="services-grid" id="servicesGrid">
          {SERVICES.map((s, i) => (
            <div
              key={s.id}
              className={`service-card reveal reveal-delay-${(i % 3) + 1} active`}
              data-service-id={s.id}
              style={{ '--card-color': s.color, '--card-glow': s.glow } as React.CSSProperties}
              onClick={() => openModal(s.id)}
            >
              <div className="card-bg"></div>
              <div className="card-content">
                <h3>{s.title}</h3>
                <p>{s.shortDesc}</p>
                <div className="click-hint" style={{ color: s.color }}>Detaylar için tıklayın</div>
              </div>
              <div className="glow-line" style={{ background: s.color, boxShadow: `0 0 20px ${s.glow}` }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
