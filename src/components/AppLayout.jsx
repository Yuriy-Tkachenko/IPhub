'use client';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import ConsultationModal from './ConsultationModal';

export default function AppLayout({ children }) {
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [isPreloaderActive, setIsPreloaderActive] = useState(true);
  const [isPreloaderFading, setIsPreloaderFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsPreloaderFading(true);
    }, 1300);

    const removeTimer = setTimeout(() => {
      setIsPreloaderActive(false);
    }, 1800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  const handleOpenConsult = () => setIsConsultOpen(true);
  const handleCloseConsult = () => setIsConsultOpen(false);

  // We can pass handleOpenConsult down via children clone, or just inject a custom click listener globally 
  // since the trigger buttons are nested.
  // Actually, we can use a custom event or a React Context, or simple global click interceptor or just pass the trigger logic.
  // A clean React Context is the standard way to handle global modal states.
  // Let's declare a simple IPContext:
  
  return (
    <div className="app-wrapper">
      {/* Preloader */}
      {isPreloaderActive && (
        <div className={`preloader-overlay ${isPreloaderFading ? 'fade-out' : ''}`}>
          <div className="preloader-content">
            <div className="preloader-logo-wrapper">
              <svg className="preloader-logo-svg" width="60" height="60" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" stroke="url(#logo-grad-preloader)" strokeWidth="2.5"/>
                <path d="M14 11H19.5C21.9853 11 24 13.0147 24 15.5C24 17.9853 21.9853 20 19.5 20H16V29H14V11ZM16 13V18H19.5C20.8807 18 22 16.8807 22 15.5C22 14.1193 20.8807 13 19.5 13H16Z" fill="white"/>
                <rect x="25" y="11" width="2" height="18" fill="#FF4B26"/>
                <defs>
                  <linearGradient id="logo-grad-preloader" x1="2" y1="2" x2="38" y2="38" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF4B26" />
                    <stop offset="1" stopColor="#FF8A71" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="preloader-logo-text">IP<span>hub</span></span>
            </div>
            <div className="preloader-bar">
              <div className="preloader-bar-fill"></div>
            </div>
          </div>
        </div>
      )}

      <Header onOpenConsult={handleOpenConsult} />
      
      {/* We inject the onOpenConsult trigger by adding it as a prop to children. 
          In Next.js App Router, we can clone children or use Context. Context is 100% cleaner! */}
      <main>
        {React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { onOpenConsult: handleOpenConsult });
          }
          return child;
        })}
      </main>

      <Footer />

      <ConsultationModal 
        isOpen={isConsultOpen} 
        onClose={handleCloseConsult} 
      />
    </div>
  );
}
