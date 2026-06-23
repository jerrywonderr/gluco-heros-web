# Gluco Heroes Website - Quick Start Guide

## 🚀 Get Started in 2 Minutes

### 1. Install Dependencies
```bash
cd web
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` and watch the magic! ✨

## 📦 Build for Production
```bash
npm run build
npm start
```

The `out/` directory contains your static site ready to deploy.

## 🎨 Quick Customization

### Change Contact Info
Edit in `app/layout.tsx` (header footer) and `app/support/page.tsx`:
- Email: `support@glucoheros.com` → your email
- Phone: `+1 (555) GLUCO-123` → your phone

### Update Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  "gluco-orange": "#FF8A50", // Change CTA button color
  "gluco-blue": "#317CA2",   // Change primary color
}
```

### Edit Home Page Content
Edit `app/page.tsx`:
- Features section (8 cards)
- How it works (4 steps)
- Hero characters (Leo, Fiona, Ellie)

### Customize Text
All text is in the `.tsx` files. Find and replace your changes.

## 📱 Pages Overview

| Page | File | Purpose |
|------|------|---------|
| Home | `app/page.tsx` | Landing page with features & CTA |
| Support | `app/support/page.tsx` | Contact methods & FAQ |
| Privacy | `app/privacy/page.tsx` | Privacy policy (COPPA compliant) |
| Terms | `app/terms/page.tsx` | Terms of service |

## 🖼️ Using Assets

Assets are in `public/assets/`:
- Copy images as needed
- All are PNG with transparency
- Optimized for web

To add new assets:
1. Copy image to `public/assets/`
2. Reference in components: `src="/assets/filename.png"`

## 🚢 Deploy in 1 Click

### Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Connect GitHub repo
2. Build command: `npm run build`
3. Publish directory: `out`

### Any Static Host
```bash
npm run build
# Upload `out/` folder to your server
```

## 🎯 Next Customizations

- [ ] Replace placeholder emails/phone with real contacts
- [ ] Add your app download links (App Store, Google Play)
- [ ] Create a blog section
- [ ] Add testimonials from users
- [ ] Integrate newsletter signup
- [ ] Add live chat widget
- [ ] Create press kit page
- [ ] Add more hero emotions (sad, neutral)

## 📚 Key Files Explained

- **package.json** - Dependencies and scripts
- **next.config.ts** - Next.js settings (static export enabled)
- **tailwind.config.ts** - Color palette and theme
- **app/layout.tsx** - Main layout, navigation, footer
- **app/globals.css** - Global styles and animations

## 🆘 Troubleshooting

### Port 3000 already in use?
```bash
npm run dev -- -p 3001
```

### Styles not showing?
```bash
rm -rf .next node_modules
npm install
npm run dev
```

### Build fails?
```bash
npm run build 2>&1 | head -30  # See first error
```

## 📞 Support

- Check README.md for detailed docs
- Look at component code in `app/`
- See Tailwind CSS docs: https://tailwindcss.com

## 🎉 You're All Set!

Your beautiful Gluco Heroes website is ready. Customize it, deploy it, and share it with the world! 🦁✨
