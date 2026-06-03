import ScrollRevealWrapper from './ScrollRevealWrapper'

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-header reveal active">
          <h2>İleti<span>şim</span></h2>
          <a href="https://wa.me/905551234567" target="_blank" rel="noopener noreferrer" className="section-wp-link">
            <i className="fab fa-whatsapp section-wp-icon"></i>
          </a>
          <div className="line"></div>
          <p>Bize ulaşın, size yardımcı olalım - +90 530 600 92 06</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info reveal active">
            <h3>Bize Ulaşın</h3>
            <a href="https://www.google.com/maps/search/?api=1&query=Teşvikiye+Mah.+Vali+Konağı+Cad.+No:+23/A+Şişli+İstanbul" target="_blank" rel="noopener noreferrer" className="contact-item" style={{ textDecoration: 'none', display: 'flex' }}>
              <div className="icon">📍</div>
              <div className="info">
                <h4>Adres</h4>
                <p>Teşvikiye Mah. Vali Konağı Cad. No: 23/A<br />Şişli / İstanbul</p>
              </div>
            </a>
            <a href="tel:+902122345678" className="contact-item" style={{ textDecoration: 'none', display: 'flex' }}>
              <div className="icon">📞</div>
              <div className="info">
                <h4>Telefon</h4>
                <p>+90 (212) 234 56 78<br />+90 (532) 123 45 67</p>
              </div>
            </a>
            <a href="mailto:info@pearlbeauty.com.tr" className="contact-item" style={{ textDecoration: 'none', display: 'flex' }}>
              <div className="icon">✉️</div>
              <div className="info">
                <h4>E-posta</h4>
                <p>info@pearlbeauty.com.tr<br />randevu@pearlbeauty.com.tr</p>
              </div>
            </a>
            <div className="contact-item">
              <div className="icon">🚗</div>
              <div className="info">
                <h4>Ulaşım</h4>
                <p>Osmanbey Metro İstasyonu'na 3 dk yürüme mesafesinde.<br />Otopark mevcuttur.</p>
              </div>
            </div>
          </div>
          <div className="contact-hours reveal reveal-delay-2 active">
            <h3>Çalışma Saatleri</h3>
            <div className="hours-row"><span className="day">Pazartesi</span><span className="time">09:00 - 20:00</span></div>
            <div className="hours-row"><span className="day">Salı</span><span className="time">09:00 - 20:00</span></div>
            <div className="hours-row"><span className="day">Çarşamba</span><span className="time">09:00 - 20:00</span></div>
            <div className="hours-row"><span className="day">Perşembe</span><span className="time">09:00 - 20:00</span></div>
            <div className="hours-row"><span className="day">Cuma</span><span className="time">09:00 - 21:00</span></div>
            <div className="hours-row"><span className="day">Cumartesi</span><span className="time">10:00 - 19:00</span></div>
            <div className="hours-row closed"><span className="day">Pazar</span><span className="time">Kapalı</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
