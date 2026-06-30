'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Cases({ onOpenConsult }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const casesData = [
    {
      id: 1,
      client: 'CIRKLE — производитель косметической продукции',
      desc: 'Как в результате защиты мы зарегистрировали бренд российской косметики при наличии оснований для отказа.',
      logo: 'CIRKLE',
      tags: ['Товарные знаки', 'Дизайн'],
      categories: ['trademark', 'design', 'protection'],
      searchTerms: 'cirkle cosmetics косметическая продукция бренд'
    },
    {
      id: 2,
      client: 'Camera IQ — производитель систем машинного зрения',
      desc: 'Защита прав после ребрендинга. Как провести успешную регистрацию товарного знака в сжатые сроки.',
      logo: 'Camera IQ®',
      tags: ['IT', 'Товарные знаки'],
      categories: ['it', 'trademark', 'protection'],
      className: 'bg-purple',
      searchTerms: 'camera iq машинное зрение системы ребрендинг'
    },
    {
      id: 3,
      client: 'HANDS — производитель строительных материалов',
      desc: 'Предварительный отказ — не приговор! Как мы защищали монополию российского производителя строительных материалов.',
      logo: 'Hands',
      tags: ['Патенты', 'Защита'],
      categories: ['patent', 'protection'],
      className: 'bg-blue',
      searchTerms: 'hands строительные материалы монополия отказ'
    },
    {
      id: 4,
      client: 'CIRKLE — производитель косметической продукции',
      desc: 'Как в результате защиты мы зарегистрировали бренд российской косметики при наличии оснований для отказа.',
      logo: 'CIRKLE',
      tags: ['Товарные знаки', 'Дизайн'],
      categories: ['trademark', 'design', 'protection'],
      searchTerms: 'cirkle cosmetics косметическая продукция бренд'
    },
    {
      id: 5,
      client: 'Camera IQ — производитель систем машинного зрения',
      desc: 'Защита прав после ребрендинга. Как провести успешную регистрацию товарного знака в сжатые сроки.',
      logo: 'Camera IQ®',
      tags: ['IT', 'Товарные знаки'],
      categories: ['it', 'trademark', 'protection'],
      className: 'bg-purple',
      searchTerms: 'camera iq машинное зрение системы ребрендинг'
    },
    {
      id: 6,
      client: 'HANDS — производитель строительных материалов',
      desc: 'Предварительный отказ — не приговор! Как мы защищали монополию российского производителя строительных материалов.',
      logo: 'Hands',
      tags: ['Патенты', 'Защита'],
      categories: ['patent', 'protection'],
      className: 'bg-blue',
      searchTerms: 'hands строительные материалы монополия отказ'
    },
    {
      id: 7,
      client: 'HANDS — производитель строительных материалов',
      desc: 'Предварительный отказ — не приговор! Как мы защищали монополию российского производителя строительных материалов.',
      logo: 'Hands',
      tags: ['Патенты', 'Защита'],
      categories: ['patent', 'protection'],
      className: 'bg-blue',
      searchTerms: 'hands строительные материалы монополия отказ'
    },
    {
      id: 8,
      client: 'CIRKLE — производитель косметической продукции',
      desc: 'Как в результате защиты мы зарегистрировали бренд российской косметики при наличии оснований для отказа.',
      logo: 'CIRKLE',
      tags: ['Товарные знаки', 'Дизайн'],
      categories: ['trademark', 'design', 'protection'],
      searchTerms: 'cirkle cosmetics косметическая продукция бренд'
    }
  ];

  // Filtering Logic
  const filteredCases = casesData.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.categories.includes(activeCategory);
    const matchesSearch = searchQuery.trim() === '' || item.searchTerms.toLowerCase().includes(searchQuery.toLowerCase().trim());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Portfolio Header Section */}
      <section className="portfolio-header-section">
        <div className="container">
          {/* Breadcrumbs */}
          <div className="breadcrumbs-container">
            <Link href="/" className="back-arrow-link" aria-label="Back to main page">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <div className="breadcrumbs">
              <Link href="/">Главная</Link>
              <span className="separator">/</span>
              <span className="current">Все кейсы</span>
            </div>
          </div>

          <div className="portfolio-title-row">
            <h1 className="portfolio-main-title">Все кейсы</h1>
            <div className="portfolio-header-illustration">
              <img src="assets/cta_chrome_shell.png" alt="Abstract chrome sculpture" className="portfolio-header-img animated-float-slow" />
            </div>
          </div>

          {/* Search Bar */}
          <div className="search-bar-container">
            <div className="search-input-wrapper">
              <input 
                type="text" 
                id="cases-search-input" 
                placeholder="Начните вводить слово" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoComplete="off" 
              />
              <span className="search-icon-right">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          </div>

          {/* Category Filters */}
          <div className="filters-container">
            <span className="filters-label">КАТЕГОРИИ</span>
            <div className="filter-tabs-wrapper">
              {[
                { label: 'Все услуги', cat: 'all' },
                { label: 'Товарные знаки', cat: 'trademark' },
                { label: 'Патенты', cat: 'patent' },
                { label: 'Дизайн', cat: 'design' },
                { label: 'IT', cat: 'it' },
                { label: 'Защита', cat: 'protection' }
              ].map((tab, idx) => (
                <button 
                  key={idx}
                  className={`filter-tab-btn ${activeCategory === tab.cat ? 'active' : ''}`} 
                  onClick={() => setActiveCategory(tab.cat)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Cases Grid */}
      <section className="portfolio-grid-section">
        <div className="container">
          {filteredCases.length > 0 ? (
            <div className="portfolio-grid" id="portfolio-cases-grid">
              {filteredCases.map((item, index) => (
                <div 
                  key={item.id} 
                  className="case-card"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className={`case-card-visual ${item.className || ''}`}>
                    <span className="case-logo-text">{item.logo}</span>
                    <div className="card-tags-row">
                      {item.tags.map((tag, tIdx) => (
                        <span key={tIdx}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="case-card-content">
                    <h4 className="case-client">{item.client}</h4>
                    <p className="case-desc">{item.desc}</p>
                    <a href="#consultation" className="case-arrow-btn" onClick={(e) => { e.preventDefault(); onOpenConsult(); }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Empty State Message */
            <div className="search-empty-state" id="search-empty-state" style={{ display: 'flex', opacity: 1 }}>
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5 14H14.71L14.43 13.73C15.44 12.56 16 11.02 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.02 16 12.56 15.44 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="currentColor"/>
              </svg>
              <h4>Ничего не найдено</h4>
              <p>Попробуйте ввести другой поисковый запрос или сменить категорию фильтрации.</p>
            </div>
          )}
        </div>
      </section>

      {/* Consultation Banner Section */}
      <section className="orange-cta-section">
        <div className="container orange-cta-container">
          <div className="orange-cta-content">
            <h2 className="orange-cta-title">Не нашли, что искали?<br/>Оставьте заявку, мы вам поможем!</h2>
            <p className="orange-cta-desc">У нас есть решения для всех ваших потребностей в сфере защиты и регистрации интеллектуальной собственности</p>
            <button className="btn btn-dark-cta" onClick={onOpenConsult}>Оставить заявку на консультацию</button>
          </div>
          
          <div className="orange-cta-visual">
            <div className="graphic-composite">
              <svg className="composite-wireframe" width="100%" height="100%" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="30" y="30" width="200" height="200" stroke="rgba(255,255,255,0.25)" strokeWidth="1"/>
                <circle cx="130" cy="130" r="100" stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeDasharray="4 4"/>
                <circle cx="130" cy="130" r="70" stroke="rgba(255,255,255,0.15)" strokeWidth="0.75"/>
                <line x1="30" y1="30" x2="230" y2="230" stroke="rgba(255,255,255,0.15)"/>
                <line x1="230" y1="30" x2="30" y2="230" stroke="rgba(255,255,255,0.15)"/>
              </svg>
              <img src="assets/cta_orange_overlay.png" alt="Abstract metallic Chrome structure" className="composite-chrome animated-float" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
