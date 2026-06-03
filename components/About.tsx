import ScrollRevealWrapper from './ScrollRevealWrapper'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header reveal active">
          <h2>Hakkımız<span>da</span></h2>
          <div className="line"></div>
          <p>Hikayemiz ve değerlerimiz</p>
        </div>
        <div className="about-grid">
          <div className="about-text">
            <ScrollRevealWrapper>
              <h3>10 Yıllık Tecrübe,<br /><span>Sonsuz Güzellik</span></h3>
            </ScrollRevealWrapper>
            <ScrollRevealWrapper className="reveal-delay-1">
              <p>Pearl Beauty, 2015 yılında İstanbul'un kalbinde kurulan bir aile işletmesi olarak yola çıktı. Bugün ise Türkiye'nin en prestijli güzellik merkezlerinden biri olarak hizmet vermeye devam ediyoruz.</p>
            </ScrollRevealWrapper>
            <ScrollRevealWrapper className="reveal-delay-2">
              <p>Amacımız, her kadının kendi güzelliğini keşfetmesine ve özgüvenini artırmasına yardımcı olmak. Doğal yöntemleri ve en son teknolojiyi bir araya getiriyoruz.</p>
              <p>Salonumuzda hijyen ve sterilizasyon en üst düzeydedir. Her müşterimiz için tek kullanımlık malzemeler kullanıyor, tüm ekipmanlarımızı her kullanımdan sonra dezenfekte ediyoruz.</p>
            </ScrollRevealWrapper>
            <div className="about-stats">
              <ScrollRevealWrapper className="reveal-delay-1">
                <div className="stat">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Yıllık Tecrübe</span>
                </div>
              </ScrollRevealWrapper>
              <ScrollRevealWrapper className="reveal-delay-2">
                <div className="stat">
                  <span className="stat-number">15K+</span>
                  <span className="stat-label">Mutlu Müşteri</span>
                </div>
              </ScrollRevealWrapper>
              <ScrollRevealWrapper className="reveal-delay-3">
                <div className="stat">
                  <span className="stat-number">25+</span>
                  <span className="stat-label">Uzman Kadro</span>
                </div>
              </ScrollRevealWrapper>
            </div>
          </div>
          <ScrollRevealWrapper className="reveal-delay-2">
            <div className="about-image">
              <div className="img-frame">
                <img src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=800&h=900&fit=crop" alt="Pearl Beauty Lüks Klinik" loading="lazy" decoding="async" />
              </div>
              <div className="accent"></div>
            </div>
          </ScrollRevealWrapper>
        </div>
      </div>
    </section>
  )
}
