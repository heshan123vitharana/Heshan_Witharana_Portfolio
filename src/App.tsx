import React from 'react';
import MatrixBackground from './components/MatrixBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Designs from './components/Designs';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <MatrixBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Designs />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;