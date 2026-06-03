# Pearl Beauty - Next.js

Next.js 14 (App Router) ile yeniden yapılandırılmış Pearl Beauty web sitesi.

## Kurulum

```bash
npm install
```

## Geliştirme

```bash
npm run dev
```

## Build (Static Export)

```bash
npm run build
```

Build çıktısı `dist/` klasöründe oluşur.

## Özellikler

- App Router yapısı
- React Server Components + Client Components
- TypeScript
- Tailwind CSS (yapılandırılmış, özel CSS ile birlikte)
- `next/font` ile optimize edilmiş Google Fonts
- IntersectionObserver scroll reveal animasyonları
- Floating background animasyonu (Canvas yerine DOM)
- Day/Night toggle (localStorage destekli)
- Service modal (Context API)
- Mobile responsive hamburger menü
- QR Code entegrasyonu (`qrcode.react`)
- Static export (`output: 'export'`)

## Görseller

Yerel görselleri (`images/img-13.webp`, `images/img-28.webp` - `images/img-39.webp`) `public/images/` klasörüne eklemeyi unutmayın.

Unsplash görselleri dış bağlantı olarak kullanılmaya devam eder.

## Notlar

- `next.config.mjs` içinde `images.unoptimized: true` ayarlanmıştır (static export için gerekli).
- Font Awesome CDN link'i `app/layout.tsx` head bölümünde tanımlıdır.
