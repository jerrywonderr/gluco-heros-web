# Gluco Heroes Website

A beautiful, playful, and vibrant landing page for Gluco Heroes - the gamified diabetes management app for kids and families.

## 🎨 Design Features

- **Playful & Colorful**: Uses a vibrant color palette inspired by the mobile app
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Accessible**: Built with accessibility in mind (WCAG 2.1 compliant)
- **Fast**: Static generation with Next.js for optimal performance
- **Fun Animations**: Smooth transitions and engaging animations

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (static export)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Unicode emojis
- **Deployment**: Can be deployed to Netlify, Vercel, or any static hosting

## 📁 Project Structure

```
web/
├── app/
│   ├── layout.tsx          # Root layout with navigation and footer
│   ├── page.tsx            # Home/landing page
│   ├── globals.css         # Global styles and animations
│   ├── support/
│   │   └── page.tsx        # Support/Contact page
│   ├── privacy/
│   │   └── page.tsx        # Privacy Policy page
│   └── terms/
│       └── page.tsx        # Terms of Service page
├── public/
│   └── assets/             # Game assets and images
├── tailwind.config.ts      # Tailwind configuration
├── next.config.ts          # Next.js configuration
└── package.json            # Dependencies
```

## 🚀 Getting Started

### Installation

```bash
cd web
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

This creates a static export in the `out/` directory that can be deployed to any static hosting service.

## 🎨 Colors

The website uses colors inspired by the Gluco Heroes mobile app:

- **Gluco Beige**: `#F4EAD8` - Warm, welcoming background
- **Gluco Blue**: `#317CA2` - Primary brand color
- **Gluco Teal**: `#4A9B7F` - Secondary color
- **Gluco Orange**: `#FF8A50` - Call-to-action buttons
- **Gluco Yellow**: `#FFD700` - Gold accents
- **Gluco Pink**: `#FF6B9D` - Playful accent
- **Gluco Purple**: `#9B59B6` - Fun accent
- **Gluco Green**: `#2ECC71` - Health accent

## 📄 Pages

### Home (`/`)
Landing page with:
- Hero section with call-to-action
- Feature showcase (8 features)
- How it works section
- Character introduction (Leo, Fiona, Ellie)
- Call-to-action section

### Support (`/support`)
Contact and FAQ page with:
- Email, phone, and live chat options
- Comprehensive FAQ with details about the app
- Contact form

### Privacy Policy (`/privacy`)
Detailed privacy policy covering:
- Data collection practices
- COPPA compliance for children's privacy
- User rights (GDPR/CCPA compliant)
- Data security measures

### Terms of Service (`/terms`)
Legal terms covering:
- Use license and restrictions
- Age verification
- Medical disclaimer
- User responsibilities
- Intellectual property rights

## 🖼️ Assets

Game assets are copied from the mobile app:
- Hero characters (Leo the Lion, Fiona the Fox, Ellie the Elephant)
- Game icons (coins, badges, achievements)
- Food items and game props
- Colorful gamified assets

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`

## ♿ Accessibility

- Semantic HTML structure
- Proper color contrast ratios
- Keyboard navigation support
- Alt text for images (emojis used as accessible icons)
- ARIA labels where needed

## 🔐 Privacy & Security

- No cookies or tracking (unless added explicitly)
- Privacy policy covering COPPA and GDPR/CCPA
- Placeholder contact information (update in production)

## 📝 Customization

To customize the website:

1. **Colors**: Update `tailwind.config.ts`
2. **Content**: Edit individual page `.tsx` files
3. **Navigation**: Modify `app/layout.tsx`
4. **Contact Info**: Update email, phone in layout and pages
5. **Assets**: Add images to `public/assets/`

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy the 'out' directory to Netlify
```

### Traditional Static Hosting

```bash
npm run build
# Upload the 'out' directory to your web host
```

## 📞 Support

For website-specific questions or issues:
- Email: support@glucoheros.com (placeholder)
- Phone: +1 (555) GLUCO-123 (placeholder)

## 📄 License

© 2024 Gluco Heroes. All rights reserved.

## 🎉 Features Coming Soon

- Live chat integration
- Newsletter signup
- Blog/news section
- Educational resources
- Community stories
- Testimonials from users
