'use client'
import { createContext, useContext, useState } from 'react'

interface ModalContextType {
  openModal: (id: number) => void
  closeModal: () => void
  isOpen: boolean
  activeService: number | null
}

const ModalContext = createContext<ModalContextType | null>(null)

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeService, setActiveService] = useState<number | null>(null)

  const openModal = (id: number) => {
    setActiveService(id)
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsOpen(false)
    setActiveService(null)
    document.body.style.overflow = ''
  }

  return (
    <ModalContext.Provider value={{ openModal, closeModal, isOpen, activeService }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  if (!context) throw new Error('useModal must be used within ModalProvider')
  return context
}
