import ScrollRevealWrapper from './ScrollRevealWrapper'

export default function Hero() {
  return (
    <section id="home">
      <div className="container">
        <div className="hero">
          <ScrollRevealWrapper>
            <div className="hero-badge">
              <span className="dot"></span>
              <span>Pearl Beauty Güzellik Merkezi</span>
            </div>
          </ScrollRevealWrapper>
          <ScrollRevealWrapper className="reveal-delay-1">
            <h1>Güzelliğinizi<br /><span>Yeniden Keşfedin</span></h1>
          </ScrollRevealWrapper>
          <ScrollRevealWrapper className="reveal-delay-2">
            <div className="hero-card">
              <p className="hero-sub">
                Pearl Beauty olarak, 2015'ten beri kadınların kendilerini en iyi
                hissettikleri versiyonlarına ulaşmalarına yardımcı oluyoruz.
                Uzman kadromuz ve son teknoloji ekipmanlarımızla sizleri
                bekliyoruz.
              </p>
              <a href="#services" className="hero-cta">
                Hizmetlerimizi Keşfedin
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </ScrollRevealWrapper>
          <div className="scroll-indicator">
            <span>Keşfet</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M19 12l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
