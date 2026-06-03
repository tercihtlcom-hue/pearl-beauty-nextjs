'use client'
import { QRCodeSVG } from 'qrcode.react'

export default function QRCodeSection() {
  return (
    <section id="qr" style={{ minHeight: 'auto', padding: '80px 60px' }}>
      <div className="container">
        <div className="section-header reveal active">
          <h2>Bizi <span>Tarayın</span></h2>
          <div className="line"></div>
          <p>QR kodu okutarak sitemize hızlıca ulaşın</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '60px', flexWrap: 'wrap' }}>
          <div className="qr-card reveal active">
            <div className="qr-frame">
              <QRCodeSVG value="https://wa.me/905XXXXXXXXX" size={180} bgColor="#0d0d1a" fgColor="#25d366" level="H" />
              <div className="qr-logo"><i className="fab fa-whatsapp"></i></div>
            </div>
            <p className="qr-label">WhatsApp Randevu</p>
          </div>
          <div className="qr-card reveal reveal-delay-1 active">
            <div className="qr-frame">
              <QRCodeSVG value="https://pearlbeauty.com.tr" size={180} bgColor="#0d0d1a" fgColor="#ff6b9d" level="H" />
              <div className="qr-logo" style={{ color: 'var(--neon-pink)' }}>
                <span style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif', fontSize: '1.5rem', fontWeight: 400 }}>P</span>
              </div>
            </div>
            <p className="qr-label">Pearl Beauty Site</p>
          </div>
        </div>
      </div>
    </section>
  )
}
