# Sachet - Transparency Platform for Nepali Governance

A modern, clean, and futuristic UI/UX prototype for a transparency web platform designed to promote trust, accountability, and civic engagement in Nepal.

## 🌟 Features

- **Landing Page** - Striking hero section with Nepal map backdrop and interactive glow effects
- **Interactive Dashboard** - Real-time metrics, Chart.js visualizations, and Leaflet maps
- **Project & Tender Tracking** - Comprehensive project tracking with map-based visualization
- **Anonymous Corruption Reporting** - Secure multi-step form with location selection
- **Simplified Nepali Laws** - Easy-to-understand law summaries in English and Nepali
- **Budget Transparency** - Interactive budget visualization with Chart.js and custom SVG
- **Local Development Tracker** - Community-driven municipal project tracking
- **Smart News Portal** - AI-powered news summaries with fact-checking badges
- **Fully Responsive** - Mobile, tablet, and desktop optimized
- **Dark Mode Support** - Light and dark theme toggle

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - High-quality component library
- **Chart.js + react-chartjs-2** - Data visualization
- **Leaflet.js + react-leaflet** - Interactive maps
- **React Router** - Client-side routing
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/           # shadcn/ui components
│   └── layout/       # Layout components (Sidebar, Navbar)
├── pages/            # Page components
│   ├── Landing.tsx
│   ├── Dashboard.tsx
│   ├── Projects.tsx
│   ├── Tenders.tsx
│   ├── Budget.tsx
│   ├── Laws.tsx
│   ├── ReportCorruption.tsx
│   ├── LocalTracker.tsx
│   ├── News.tsx
│   └── Account.tsx
├── lib/
│   └── utils.ts      # Utility functions
├── App.tsx           # Main app component with routing
├── main.tsx          # Entry point
└── index.css         # Global styles
```

## 🎨 Design System

### Color Palette

- **Primary (Royal Blue)**: `#1E3A8A`
- **Accent (Nepali Red)**: `#DC2626`
- **Background**: Neutral Gray/Slate with light/dark variants
- **Success/Warning/Status**: Subtle gradients

### Typography

- Strong hierarchy with modern font system
- Responsive font sizing
- Clear readability in both light and dark modes

### Components

All components follow shadcn/ui aesthetic:
- Soft shadows
- Rounded corners
- Clean spacing
- Smooth animations

## 🌐 Pages

1. **Landing** (`/`) - Hero section with call-to-action
2. **Dashboard** (`/dashboard`) - Overview with KPIs and charts
3. **Projects** (`/projects`) - Project tracking with map
4. **Tenders** (`/tenders`) - Active tenders and procurement
5. **Budget** (`/budget`) - Budget transparency visualizations
6. **Laws** (`/laws`) - Simplified law summaries
7. **Report Corruption** (`/report`) - Anonymous reporting portal
8. **Local Tracker** (`/local-tracker`) - Municipal project tracking
9. **News** (`/news`) - Governance news feed
10. **Account** (`/account`) - User settings and preferences

## 🔧 Customization

### Theme Configuration

Edit `src/index.css` to customize CSS variables for colors and theming.

### Tailwind Configuration

Modify `tailwind.config.js` to adjust the design system tokens.

## 📝 Notes

- This is a **visual prototype** - no backend is implemented
- All data is mock/sample data for demonstration
- Map markers use sample locations
- Charts display placeholder data
- Forms are for UI demonstration only

## 🤝 Contributing

This is a prototype project. Feel free to use it as a starting point for your own transparency platform.

## 📄 License

MIT License - feel free to use this project for your own purposes.

---

**Built with ❤️ for transparent governance in Nepal**

