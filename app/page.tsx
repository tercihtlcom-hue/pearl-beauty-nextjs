import FloatingBackground from '@/components/FloatingBackground'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Instagram from '@/components/Instagram'
import QRCodeSection from '@/components/QRCodeSection'
import Footer from '@/components/Footer'
import ServiceModal from '@/components/ServiceModal'

export default function Home() {
  return (
    <>
      <FloatingBackground />
      <Navbar />
      <div className="content-wrapper">
        <Hero />
        <About />
        <Services />
        <Contact />
      </div>
      <QRCodeSection />
      <Instagram />
      <Footer />
      <ServiceModal />
    </>
  )
}
