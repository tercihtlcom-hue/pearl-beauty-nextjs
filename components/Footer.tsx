export default function Footer() {
  return (
    <footer>
      <a href="#" className="logo">Pearl Beauty</a>
      <p>© 2025 Pearl Beauty. Tüm hakları saklıdır.</p>
      <div style={{ marginTop: '24px' }}>
        <a href="https://instagram.com/pearlbeauty" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: 'var(--neon-pink)', textDecoration: 'none', fontWeight: 700, fontSize: '1.1rem', transition: 'all 0.3s ease' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          @pearlbeauty
        </a>
      </div>
      <p>Teşvikiye Mah. Vali Konağı Cad. No: 23/A Şişli / İstanbul</p>
    </footer>
  )
}
