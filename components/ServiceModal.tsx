'use client'
import { useEffect } from 'react'
import { useModal } from '@/context/ModalContext'
import { SERVICES } from '@/lib/data'

const bgImages: Record<number, string> = {
  1: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&h=800&fit=crop",
  2: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&h=800&fit=crop",
  3: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1200&h=800&fit=crop",
  4: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&h=800&fit=crop",
  5: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&h=800&fit=crop",
  6: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&h=800&fit=crop",
}

export default function ServiceModal() {
  const { isOpen, activeService, closeModal } = useModal()

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKey)
      return () => document.removeEventListener('keydown', handleKey)
    }
  }, [isOpen, closeModal])

  if (!isOpen || !activeService) return null

  const s = SERVICES.find(x => x.id === activeService)
  if (!s) return null

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}>
      <div className="modal-box" style={{
        backgroundImage: `linear-gradient(180deg, rgba(4,4,20,0.88) 0%, rgba(4,4,20,0.95) 100%), url(${bgImages[s.id]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <button className="modal-close" onClick={closeModal}>×</button>
        <div>
          <div className="modal-header">
            <h2>{s.title}</h2>
            <p className="modal-sub">{s.subtitle}</p>
            <div className="modal-divider"></div>
          </div>
          <div className="modal-section">
            <h4>Hakkında</h4>
            <p>{s.detailDesc}</p>
          </div>
          <div className="modal-section">
            <h4>Aşamalar & Etkiler</h4>
            <ul>
              {s.stages.map((st, i) => <li key={i}>{st}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
