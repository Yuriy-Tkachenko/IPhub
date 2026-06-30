'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header({ onOpenConsult }) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const handleServicesClick = (e) => {
    closeDrawer();
    if (pathname === '/services') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isLinkActive = (href) => {
    if (href === '/services') {
      return pathname.startsWith('/services') ? 'active' : '';
    }
    return pathname === href ? 'active' : '';
  };

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
        <div className="header-container">
          <Link href="/" className="logo" id="logo-link" onClick={closeDrawer}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" stroke="url(#logo-grad-header)" strokeWidth="2.5"/>
              <path d="M14 11H19.5C21.9853 11 24 13.0147 24 15.5C24 17.9853 21.9853 20 19.5 20H16V29H14V11ZM16 13V18H19.5C20.8807 18 22 16.8807 22 15.5C22 14.1193 20.8807 13 19.5 13H16Z" fill="white"/>
              <rect x="25" y="11" width="2" height="18" fill="#FF4B26"/>
              <defs>
                <linearGradient id="logo-grad-header" x1="2" y1="2" x2="38" y2="38" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF4B26" />
                  <stop offset="1" stopColor="#FF8A71" />
                </linearGradient>
              </defs>
            </svg>
            <span className="logo-text">IP<span>hub</span></span>
          </Link>

          <nav className="nav-menu" id="nav-menu">
            <Link href="/services" className={`nav-link ${isLinkActive('/services')}`} onClick={handleServicesClick}>Услуги</Link>
            <Link href="/cases" className={`nav-link ${isLinkActive('/cases')}`}>Кейсы</Link>
            <Link href="/faq" className={`nav-link ${isLinkActive('/faq')}`}>FAQ</Link>
          </nav>

          <div className="header-actions">
            <a href="tel:+78888888888" className="phone-link">+7 (888) 888 88 88</a>
            <button className="btn btn-consult-trigger" onClick={onOpenConsult}>Получить консультацию</button>
            <button className={`burger-menu ${drawerOpen ? 'active' : ''}`} id="burger-menu" aria-label="Toggle menu" onClick={toggleDrawer}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      <div className={`mobile-drawer ${drawerOpen ? 'active' : ''}`} id="mobile-drawer">
        <nav className="mobile-nav">
          <Link href="/services" className="mobile-nav-link" onClick={handleServicesClick}>Услуги</Link>
          <Link href="/cases" className="mobile-nav-link" onClick={closeDrawer}>Кейсы</Link>
          <Link href="/faq" className="mobile-nav-link" onClick={closeDrawer}>FAQ</Link>
          <a href="tel:+78888888888" className="mobile-phone">+7 (888) 888 88 88</a>
          <button className="btn btn-consult-trigger mobile-btn" onClick={() => { closeDrawer(); onOpenConsult(); }}>Получить консультацию</button>
        </nav>
      </div>
    </>
  );
}
