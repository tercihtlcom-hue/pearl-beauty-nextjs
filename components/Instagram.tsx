const images = [
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop",
];

export default function Instagram() {
  return (
    <section id="instagram" className="reveal active">
      <div className="container">
        <div className="section-header">
          <h2>Instagram <span>@pearlbeauty</span></h2>
          <div className="line"></div>
          <p>Bizi Takip Edin</p>
        </div>
        <div className="instagram-grid">
          {images.map((img, i) => (
            <a
              key={i}
              href="https://instagram.com/pearlbeauty"
              target="_blank"
              rel="noopener noreferrer"
              className="insta-card"
              style={{ '--delay': `${i * 0.1}s` } as React.CSSProperties}
            >
              <div className="insta-img" style={{ backgroundImage: `url("${img}")` }}></div>
              <div className="insta-overlay">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>@pearlbeauty</span>
              </div>
            </a>
          ))}
        </div>
        <div className="insta-cta">
          <a
            href="https://instagram.com/pearlbeauty"
            target="_blank"
            rel="noopener noreferrer"
            className="insta-btn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            Daha Fazlası İçin Takip Et
          </a>
        </div>
      </div>
    </section>
  );
}