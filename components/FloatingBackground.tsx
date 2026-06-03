'use client'
import { useEffect, useRef } from 'react'

const FLOAT_CONFIG = {
  beforeImages: [
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop",
    "images/img-28.webp",
    "images/img-29.webp",
    "images/img-30.webp",
    "images/img-31.webp",
    "images/img-32.webp",
    "images/img-33.webp",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
  ],
  afterImages: [
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop",
    "images/img-34.webp",
    "images/img-35.webp",
    "images/img-36.webp",
    "images/img-37.webp",
    "images/img-38.webp",
    "images/img-39.webp",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=400&fit=crop",
  ],
  floaterCount: 7,
  floaterSize: { min: 140, max: 200 },
  speed: { min: 22000, max: 45000 },
  colors: [
    "#ff6b9d",
    "#c084fc",
    "#22d3ee",
    "#34d399",
    "#fb7185",
    "#fbbf24",
    "#a78bfa",
  ],
}

interface FloaterData {
  element: HTMLDivElement
  startX: number
  startY: number
  midX: number
  midY: number
  endX: number
  endY: number
  startTime: number
  duration: number
  hasTransformed: boolean
  index: number
  baseRotation: number
  depth: number
}

export default function FloatingBackground() {
  const floatContainerRef = useRef<HTMLDivElement>(null)
  const transformZoneRef = useRef<HTMLDivElement>(null)
  const floatersRef = useRef<FloaterData[]>([])
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const floatContainer = floatContainerRef.current
    const transformZone = transformZoneRef.current
    if (!floatContainer || !transformZone) return

    let zoneRect = transformZone.getBoundingClientRect()
    let zoneCenter = { x: zoneRect.left + zoneRect.width / 2, y: zoneRect.top + zoneRect.height / 2 }
    let zoneRadius = zoneRect.width / 2

    const handleResize = () => {
      zoneRect = transformZone.getBoundingClientRect()
      zoneCenter = { x: zoneRect.left + zoneRect.width / 2, y: zoneRect.top + zoneRect.height / 2 }
      zoneRadius = zoneRect.width / 2
    }
    window.addEventListener('resize', handleResize)

    // Create BG Particles
    const bg = document.getElementById('bgParticles')
    if (bg) {
      const colors = ["#ff6b9d", "#c084fc", "#22d3ee", "#34d399", "#fb7185", "#fbbf24"]
      for (let i = 0; i < 70; i++) {
        const span = document.createElement('span')
        span.style.left = Math.random() * 100 + '%'
        span.style.animationDelay = Math.random() * 20 + 's'
        span.style.animationDuration = 12 + Math.random() * 14 + 's'
        const size = 2 + Math.random() * 5
        span.style.width = size + 'px'
        span.style.height = size + 'px'
        span.style.background = colors[Math.floor(Math.random() * colors.length)]
        span.style.boxShadow = `0 0 ${10 + Math.random() * 15}px currentColor`
        bg.appendChild(span)
      }
    }

    function createBurst(x: number, y: number, color: string) {
      const burst = document.createElement('div')
      burst.className = 'collision-burst'
      burst.style.left = x + 'px'
      burst.style.top = y + 'px'
      document.body.appendChild(burst)

      for (let i = 0; i < 16; i++) {
        const particle = document.createElement('div')
        particle.className = 'burst-particle'
        const angle = (i / 16) * Math.PI * 2 + Math.random() * 0.5
        const distance = 60 + Math.random() * 120
        particle.style.setProperty('--tx', Math.cos(angle) * distance + 'px')
        particle.style.setProperty('--ty', Math.sin(angle) * distance + 'px')
        particle.style.background = color
        particle.style.color = color
        const pSize = 4 + Math.random() * 8
        particle.style.width = pSize + 'px'
        particle.style.height = pSize + 'px'
        particle.style.opacity = '0.7'
        burst.appendChild(particle)
      }
      setTimeout(() => burst.remove(), 1200)
    }

    function triggerScreenShake() {
      // DÜZELTİLDİ: transformZone null kontrolü ve classList doğru erişim
      if (!transformZone) return
      transformZone.classList.add('active-pulse')
      transformZone.style.transform = 'translate(-50%, -50%) scale(1.2)'
      setTimeout(() => {
        if (transformZone) {
          transformZone.classList.remove('active-pulse')
          transformZone.style.transform = 'translate(-50%, -50%) scale(1)'
        }
      }, 600)
    }

    function triggerBgFlash(index: number) {
      const bgFlash = document.getElementById('bgFlash')
      if (!bgFlash) return
      const afterImg = FLOAT_CONFIG.afterImages[index % FLOAT_CONFIG.afterImages.length]
      bgFlash.style.backgroundImage = 'url(' + afterImg + ')'
      requestAnimationFrame(() => {
        bgFlash.classList.add('active')
      })
      setTimeout(() => {
        bgFlash.classList.remove('active')
      }, 1500)
    }

    function createFloater(index: number): FloaterData {
      const floater = document.createElement('div')
      floater.className = 'floater'
      const size = FLOAT_CONFIG.floaterSize.min + Math.random() * (FLOAT_CONFIG.floaterSize.max - FLOAT_CONFIG.floaterSize.min)
      floater.style.width = size + 'px'
      floater.style.height = size + 'px'

      const startSide = Math.floor(Math.random() * 4)
      let startX = 0, startY = 0, endX = 0, endY = 0
      const padding = 400
      const w = window.innerWidth, h = window.innerHeight

      switch (startSide) {
        case 0: startX = Math.random() * w; startY = -padding; endX = Math.random() * w; endY = h + padding; break
        case 1: startX = w + padding; startY = Math.random() * h; endX = -padding; endY = Math.random() * h; break
        case 2: startX = Math.random() * w; startY = h + padding; endX = Math.random() * w; endY = -padding; break
        case 3: startX = -padding; startY = Math.random() * h; endX = w + padding; endY = Math.random() * h; break
      }

      const finalAngle = Math.random() * Math.PI * 2
      const collisionRadius = 140 + Math.random() * 100
      const midX = zoneCenter.x + Math.cos(finalAngle) * collisionRadius
      const midY = zoneCenter.y + Math.sin(finalAngle) * collisionRadius

      floater.style.left = startX + 'px'
      floater.style.top = startY + 'px'

      const beforeImg = document.createElement('img')
      beforeImg.src = FLOAT_CONFIG.beforeImages[index % FLOAT_CONFIG.beforeImages.length]
      beforeImg.className = 'img-before'
      beforeImg.alt = 'Before'
      beforeImg.draggable = false

      const afterImg = document.createElement('img')
      afterImg.src = FLOAT_CONFIG.afterImages[index % FLOAT_CONFIG.afterImages.length]
      afterImg.className = 'img-after'
      afterImg.alt = 'After'
      afterImg.draggable = false

      floater.appendChild(beforeImg)
      floater.appendChild(afterImg)
      floatContainer?.appendChild(floater)

      const duration = FLOAT_CONFIG.speed.min + Math.random() * (FLOAT_CONFIG.speed.max - FLOAT_CONFIG.speed.min)
      const startTime = Date.now() + index * 4000 + Math.random() * 5000

      return {
        element: floater,
        startX,
        startY,
        midX,
        midY,
        endX,
        endY,
        startTime,
        duration,
        hasTransformed: false,
        index,
        baseRotation: Math.random() * 360,
        depth: Math.random() * 200 - 100,
      }
    }

    function initFloaters() {
      // DÜZELTİLDİ: floatContainer null kontrolü
      if (!floatContainer) return
      floatContainer.innerHTML = ''
      floatersRef.current = []
      for (let i = 0; i < FLOAT_CONFIG.floaterCount; i++) {
        floatersRef.current.push(createFloater(i))
      }
    }

    function animate() {
      const now = Date.now()
      floatersRef.current.forEach((f) => {
        if (now < f.startTime) return
        const elapsed = now - f.startTime
        const progress = Math.min(elapsed / f.duration, 1)

        if (progress >= 1) {
          f.startTime = now + Math.random() * 4000
          f.hasTransformed = false
          f.element.classList.remove('is-transforming')
          const startSide = Math.floor(Math.random() * 4)
          const padding = 300
          const w = window.innerWidth, h = window.innerHeight
          switch (startSide) {
            case 0: f.startX = Math.random() * w; f.startY = -padding; break
            case 1: f.startX = w + padding; f.startY = Math.random() * h; break
            case 2: f.startX = Math.random() * w; f.startY = h + padding; break
            case 3: f.startX = -padding; f.startY = Math.random() * h; break
          }
          const angleStep = (Math.PI * 2) / FLOAT_CONFIG.floaterCount
          const baseAngle = f.index * angleStep
          const randomOffset = (Math.random() - 0.5) * (Math.PI / 3)
          const finalAngle = baseAngle + randomOffset
          const collisionRadius = 120 + Math.random() * 130
          f.midX = zoneCenter.x + Math.cos(finalAngle) * collisionRadius
          f.midY = zoneCenter.y + Math.sin(finalAngle) * collisionRadius
          return
        }

        let x: number, y: number
        if (progress < 0.5) {
          const t = progress * 2
          const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
          x = f.startX + (f.midX - f.startX) * ease
          y = f.startY + (f.midY - f.startY) * ease
        } else {
          const t = (progress - 0.5) * 2
          const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
          x = f.midX + (f.endX - f.midX) * ease
          y = f.midY + (f.endY - f.midY) * ease
        }

        const rotation = f.baseRotation + progress * 200
        const wobble = Math.sin(progress * Math.PI * 3) * 6
        const scaleEffect = f.element.classList.contains('is-transforming') ? 1.15 : 1
        const depthScale = 1 + f.depth / 600

        f.element.style.left = x + 'px'
        f.element.style.top = y + 'px'
        f.element.style.transform = `translate(-50%, -50%) rotate(${rotation + wobble}deg) scale(${scaleEffect * depthScale}) translateZ(${f.depth}px)`

        const floaterRect = f.element.getBoundingClientRect()
        const floaterCenter = {
          x: floaterRect.left + floaterRect.width / 2,
          y: floaterRect.top + floaterRect.height / 2,
        }
        const dist = Math.sqrt(
          Math.pow(floaterCenter.x - zoneCenter.x, 2) +
          Math.pow(floaterCenter.y - zoneCenter.y, 2),
        )

        if (dist < zoneRadius + 35 && !f.hasTransformed && progress > 0.3 && progress < 0.7) {
          f.hasTransformed = true
          f.element.classList.add('is-transforming')
          const color = FLOAT_CONFIG.colors[f.index % FLOAT_CONFIG.colors.length]
          createBurst(floaterCenter.x, floaterCenter.y, color)
          triggerScreenShake()
          // DÜZELTİLDİ: transformZone null kontrolü
          if (transformZone) {
            transformZone.style.transform = 'translate(-50%, -50%) scale(1.4)'
            setTimeout(() => {
              if (transformZone) {
                transformZone.style.transform = 'translate(-50%, -50%) scale(1)'
              }
            }, 500)
          }
        }
      })
      rafRef.current = requestAnimationFrame(animate)
    }

    initFloaters()
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <div className="bg-flash" id="bgFlash"></div>
      <div className="floating-bg" id="floatingBg">
        <div className="bg-particles" id="bgParticles"></div>
        <div className="transform-zone" id="transformZone" ref={transformZoneRef} style={{ transform: 'translate(-50%, -50%) scale(1)' }}>
          <div className="expert-image">
            <img src="images/img-13.webp" alt="Uzmanımız" loading="lazy" decoding="async" />
          </div>
          <div className="core"></div>
        </div>
        <div className="floating-container" id="floatContainer" ref={floatContainerRef}></div>
      </div>
      <div className="day-sky" id="daySky">
        <div className="sun"></div>
        <div className="cloud cloud1"></div>
        <div className="cloud cloud2"></div>
        <div className="cloud cloud3"></div>
        <div className="bird bird1"></div>
        <div className="bird bird2"></div>
        <div className="bird bird3"></div>
      </div>
      <div className="noise-overlay"></div>
    </>
  )
}