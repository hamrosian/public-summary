import { useState, useEffect } from 'react';
import { useDarkMode } from '../App';
import './header.css';

type Page = 'home' | 'article' | 'about' | 'contact';

type HeaderProps = {
  currentPage: Page;
  onNavigate: (page: Page) => void;
};

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringTop, setIsHoveringTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hero is approximately 500px tall, so show header after scrolling past it
      const heroHeight = 500;
      const scrollY = window.scrollY;
      setIsVisible(scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hover near top of screen on home page
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Show header when mouse is within 50px of top of screen
      if (currentPage === 'home') {
        setIsHoveringTop(e.clientY < 50);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [currentPage]);

  // Always show header on non-home pages
  const showHeader = currentPage !== 'home' || isVisible || isHoveringTop;

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`blog-header ${showHeader ? 'visible' : ''}`}>
      <div className="header-container">
        <h1 className="site-title">
          <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
            Public Interest
          </a>
        </h1>
        <button 
          className="hamburger-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
        <nav className={`main-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <a 
            href="#" 
            className={currentPage === 'home' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
          >
            Home
          </a>
          <a 
            href="#" 
            className={currentPage === 'about' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
          >
            About
          </a>
          <a 
            href="#" 
            className={currentPage === 'contact' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
          >
            Contact
          </a>
          <button 
            className="dark-mode-toggle" 
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  );
}
