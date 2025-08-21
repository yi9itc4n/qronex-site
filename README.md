# QroneX - Corporate Quality Engineering Website

A modern, responsive corporate website for QroneX, a quality engineering consultancy serving the European automotive industry. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Internationalization**: Turkish (default) and English support with next-intl
- **Responsive Design**: Mobile-first approach with shadcn/ui components
- **Content Management**: MDX-based content for services and case studies
- **Form Handling**: Contact forms with React Hook Form and Zod validation
- **SEO Optimized**: Meta tags, Open Graph, sitemap, and robots.txt
- **Performance**: Optimized images, code splitting, and caching
- **Accessibility**: WCAG 2.1 AA compliance with ARIA labels

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/qronex-site.git
   cd qronex-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
qronex-site/
├── src/
│   ├── app/                    # Next.js 14 App Router
│   │   ├── [locale]/          # Internationalized routes
│   │   │   ├── (pages)/       # Page routes
│   │   │   │   ├── services/  # Services listing & detail
│   │   │   │   ├── pricing/   # Pricing packages
│   │   │   │   ├── contact/   # Contact forms
│   │   │   │   └── ...
│   │   │   ├── layout.tsx     # Root layout with header/footer
│   │   │   └── page.tsx       # Homepage
│   │   └── globals.css        # Global styles
│   ├── components/            # Reusable components
│   │   ├── ui/               # shadcn/ui components
│   │   └── site/             # Site-specific components
│   │       ├── header.tsx    # Navigation with mega menu
│   │       ├── footer.tsx    # Footer with contact info
│   │       ├── hero.tsx      # Homepage hero section
│   │       └── ...
│   ├── lib/                  # Utility functions
│   ├── i18n/                 # Internationalization config
│   └── middleware.ts         # Next.js middleware for i18n
├── content/                  # Content files
│   ├── services/            # Service descriptions (MDX)
│   ├── cases/              # Case studies (MDX)
│   ├── careers/            # Job listings (MDX)
│   ├── contacts.yml        # Regional managers
│   └── pricing.yml         # Pricing packages
├── messages/               # Translation files
│   ├── tr.json            # Turkish translations
│   └── en.json            # English translations
└── public/                # Static assets
```

## 🛠 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run check-types` - TypeScript type checking
- `npm run test` - Run tests (placeholder)

## 🌍 Internationalization

The site supports Turkish (default) and English:

- **URL Structure**: `/tr/services` and `/en/services`
- **Default Locale**: Turkish (`tr`)
- **Translation Files**: `messages/tr.json` and `messages/en.json`
- **Content**: Separate content files for each language

### Adding New Languages

1. Add locale to `src/i18n.ts`:
   ```typescript
   export const routing = defineRouting({
     locales: ['tr', 'en', 'de'], // Add 'de' for German
     defaultLocale: 'tr'
   });
   ```

2. Create translation file: `messages/de.json`

3. Add content translations as needed

## 📝 Content Management

### Services

Add new services in `content/services/`:

```markdown
---
title: "New Service"
slug: "new-service"
description: "Service description"
category: "quality-control"
featured: true
---

# Service Content

Your service description in Markdown/MDX format.
```

### Case Studies

Add case studies in `content/cases/`:

```markdown
---
title: "Case Study Title"
client: "Client Name"
industry: "automotive-oem"
service: "sorting-containment"
results:
  - metric: "Defect Rate"
    value: "0.1"
    unit: "%"
---

# Case study content...
```

### Regional Contacts

Update `content/contacts.yml`:

```yaml
regionalManagers:
  - id: "new-manager"
    name: "Manager Name"
    title: "Region Manager"
    phone: "+1 234 567 8900"
    email: "manager@qronex.com"
    region: "North America"
```

## 🎨 Styling & Design

### Design System

- **Colors**: Corporate blue/navy with bright accents
- **Typography**: Inter font family
- **Components**: shadcn/ui for consistent design
- **Spacing**: Tailwind CSS spacing scale
- **Breakpoints**: Mobile-first responsive design

### Custom Classes

```css
.hero-gradient     /* Hero section gradient background */
.section-padding   /* Consistent section spacing */
.container-padding /* Container horizontal padding */
.card-hover        /* Hover effects for cards */
.text-gradient     /* Gradient text effect */
```

### Brand Colors

- Primary: Blue (#2563eb)
- Secondary: Slate (#64748b)
- Accent: Green (#10b981)
- Warning: Orange (#f59e0b)
- Danger: Red (#ef4444)

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+
- **Large**: 1280px+

Key responsive features:
- Collapsible navigation menu
- Stacked layouts on mobile
- Touch-friendly buttons and forms
- Optimized image sizes

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   - Import project to Vercel
   - Configure build settings (automatic)

2. **Environment Variables**
   - Add production environment variables
   - Configure domain settings

3. **Deploy**
   ```bash
   # Automatic deployment on push to main
   git push origin main
   ```

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Export static files** (if needed)
   ```bash
   npm run export
   ```

3. **Deploy** to your hosting provider

## 🔧 Configuration

### Environment Variables

Copy `env.example` to `.env.local` and configure:

```bash
# Required
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME=QroneX

# Optional
FORMS_ENDPOINT=https://api.example.com/contact
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Next.js Configuration

Key configurations in `next.config.ts`:

- **Internationalization**: next-intl plugin
- **MDX Support**: @next/mdx for content
- **Image Optimization**: Built-in Next.js features
- **Redirects**: Root to default locale

## 🧪 Testing

### Manual Testing Checklist

- [ ] Navigation works on all devices
- [ ] Forms submit successfully
- [ ] Language switching works
- [ ] All links are functional
- [ ] Contact information is correct
- [ ] SEO meta tags are present

### Lighthouse Scores (Targets)

- **Performance**: ≥ 90
- **Accessibility**: ≥ 95
- **Best Practices**: ≥ 95
- **SEO**: ≥ 95

## 🔐 Security

### Implemented Security Measures

- **Headers**: Security headers via Vercel config
- **Validation**: Form input validation with Zod
- **Sanitization**: Content sanitization for MDX
- **HTTPS**: Enforced in production
- **CSP**: Content Security Policy headers

### Best Practices

- Regular dependency updates
- Input validation on all forms
- Secure environment variable handling
- OWASP security guidelines

## 📈 Performance

### Optimization Techniques

- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Next.js Image component
- **Font Loading**: Optimized Google Fonts
- **Caching**: Static generation where possible
- **Compression**: Gzip/Brotli compression

### Performance Monitoring

- Vercel Analytics (built-in)
- Google PageSpeed Insights
- Core Web Vitals tracking

## 🐛 Troubleshooting

### Common Issues

**Build Errors**
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

**TypeScript Errors**
```bash
# Check types
npm run check-types
```

**Internationalization Issues**
- Verify translation files exist
- Check locale configuration
- Ensure routing is properly set up

### Getting Help

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review [shadcn/ui components](https://ui.shadcn.com)
3. Consult [Tailwind CSS docs](https://tailwindcss.com/docs)

## 🤝 Contributing

### Development Workflow

1. **Create feature branch**
   ```bash
   git checkout -b feature/new-feature
   ```

2. **Make changes**
   - Follow TypeScript/ESLint rules
   - Add tests if applicable
   - Update documentation

3. **Test thoroughly**
   ```bash
   npm run lint
   npm run check-types
   npm run build
   ```

4. **Submit pull request**

### Code Style

- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js recommended rules
- **Prettier**: Automatic formatting
- **Naming**: kebab-case for files, camelCase for variables

## 📄 License

This project is proprietary software for QroneX. All rights reserved.

## 👥 Support

For technical support or questions:

- **Email**: tech@qronex.com
- **Phone**: +49 89 123 456 789

---

**Built with ❤️ for QroneX Quality Engineering**