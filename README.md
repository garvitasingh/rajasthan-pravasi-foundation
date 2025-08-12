# Rajasthan Pravasi Foundation Website

A modern React.js website for the Rajasthan Pravasi Foundation with a beautiful landing page design inspired by Rajasthani architecture.

## 🏗️ Project Structure

```
rajasthan-pravasi-foundation/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.js
│   │   │   └── Header.css
│   │   ├── Hero/
│   │   │   ├── Hero.js
│   │   │   └── Hero.css
│   │   └── Layout/
│   │       ├── Layout.js
│   │       └── Layout.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Create a new React app:**
   ```bash
   npx create-react-app rajasthan-pravasi-foundation
   cd rajasthan-pravasi-foundation
   ```

2. **Replace the generated files with the provided code:**
   - Copy all the component files to their respective folders
   - Replace the default package.json, App.js, index.js, etc.

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```

5. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

## 🎨 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, modern interface with beautiful gradients and animations
- **Component-based Architecture**: Modular React components for easy maintenance
- **CSS Animations**: Smooth animations and hover effects
- **Typography**: Beautiful Google Fonts (Poppins & Dancing Script)
- **Gradient Effects**: Eye-catching gradient backgrounds and buttons
- **Accessibility**: Proper semantic HTML and accessibility features

## 🎯 Components

### Header Component
- Logo with colorful diamond design
- Navigation menu (Home, About Us, Gallery, Contact, FAQ)
- Action buttons (LOGIN, JOIN US)
- Responsive design with mobile-friendly layout

### Hero Component
- Full-screen landing section
- Animated gradient background
- Elegant typography with custom fonts
- Call-to-action button
- Responsive text scaling

### Layout Component
- Wrapper component for consistent page structure
- Fixed header with proper spacing
- Main content area

## 🎨 Design Elements

- **Color Scheme**: 
  - Primary: Purple to blue gradients (#667eea to #764ba2)
  - Secondary: Orange gradients (#ff6b35 to #ff8e53)
  - Accent: Pink/Purple (#e91e63, #9c27b0)

- **Typography**:
  - Headers: Dancing Script (elegant, script font)
  - Body: Poppins (clean, modern sans-serif)

- **Effects**:
  - Backdrop blur for header
  - Gradient animations
  - Hover transitions
  - Box shadows

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🛠️ Customization

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and use it in `App.js`
3. Add corresponding styles

### Modifying Colors
- Update gradient colors in CSS files
- Maintain consistency across components

### Adding Navigation Items
- Update the navigation array in `Header.js`
- Add corresponding routes/sections

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🚀 Deployment

The built application can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 📄 License

This project is created for the Rajasthan Pravasi Foundation.

## 👨‍💻 Development Notes

- Uses modern React functional components with hooks
- CSS modules for component-specific styling
- Mobile-first responsive design approach
- Optimized for performance and accessibility