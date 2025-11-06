# Steven Vo - Portfolio Website

A modern, responsive portfolio website showcasing my professional experience, skills, and qualifications.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Sections**:
  - Hero/Landing section with contact information
  - About Me
  - Qualifications & Skills
  - Work Experience (with timeline)
  - Education
  - Contact & Referees

## Technologies Used

- React 18
- Vite (build tool)
- CSS3 (modern features with CSS variables)
- HTML5

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:
```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Customization

To update the content:
- Edit the component files in `src/components/` to modify text and information
- Update CSS files in the same directory to change styling
- Modify `src/index.css` for global styles and CSS variables

## License

This project is open source and available for personal use.

