import React, { useEffect, useState } from 'react';
import Header from './components/1-header/Header';
import Hero from './components/2-hero/Hero';
import Main from './components/4-main/Main';
import About from './components/3-about/About';
import Contact from './components/5-contact/Contact';
import Footer from './components/6-footer/Footer';

function App() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="up" className="container">
      <Header />
      <div className="divider" />

      <Hero />
      <div className="divider" />

      <About />
      <div className="divider" />

      <Main />
      <div className="divider" />

      <Contact />
      <div className="divider" />

      <Footer />

      <a style={{ opacity: showScrollBtn ? 1 : 0, transition: '1s' }} href="#up">
        <button className="icon-circle-up scrollToTop"></button>
      </a>
    </div>
  );
}

export default App;
