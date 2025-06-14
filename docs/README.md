# Project Documentation

## Overview
This is a modern portfolio website built with React, TypeScript, and Tailwind CSS. The project features a collection of reusable UI components, animations, and a responsive design.

## Table of Contents
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Components](#components)
- [Styling](#styling)
- [Animations](#animations)
- [Best Practices](#best-practices)

## Getting Started
1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Build for production: `npm run build`

## Project Structure
```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── layout/       # Layout components
│   └── sections/     # Page sections
├── styles/          # Global styles
├── utils/           # Utility functions
└── types/           # TypeScript types
```

## Components
Our component library includes:

### UI Components
- [Button](./components/Button.md) - Reusable button with variants
- [Input](./components/Input.md) - Form input with validation
- [Modal](./components/Modal.md) - Modal dialog with animations
- [Alert](./components/Alert.md) - Alert messages with variants
- [Avatar](./components/Avatar.md) - User avatar with fallback
- [Card](./components/Card.md) - Card container with variants
- [ThemeToggle](./components/ThemeToggle.md) - Dark/Light mode toggle

### Layout Components
- [Header](./components/Header.md) - Navigation header
- [Footer](./components/Footer.md) - Site footer
- [Layout](./components/Layout.md) - Main layout wrapper

### Section Components
- [About](./components/About.md) - About section
- [Skills](./components/Skills.md) - Skills showcase
- [Projects](./components/Projects.md) - Projects gallery
- [Contact](./components/Contact.md) - Contact form

## Styling
The project uses Tailwind CSS for styling with a custom configuration. Key features include:
- Custom color palette
- Responsive design
- Dark/Light mode support
- Custom animations
- Typography system

## Animations
Animations are implemented using Framer Motion with:
- Page transitions
- Scroll animations
- Hover effects
- Loading states

## Best Practices
1. Component Structure
   - Use TypeScript for type safety
   - Implement proper prop validation
   - Follow atomic design principles
   - Maintain consistent naming conventions

2. Performance
   - Lazy load components when possible
   - Optimize images and assets
   - Implement proper code splitting
   - Use memoization when needed

3. Accessibility
   - Follow WCAG guidelines
   - Implement proper ARIA attributes
   - Ensure keyboard navigation
   - Maintain proper color contrast

4. Code Quality
   - Write clean, maintainable code
   - Add proper documentation
   - Follow ESLint rules
   - Write unit tests 