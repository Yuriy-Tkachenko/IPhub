'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Trademark({ onOpenConsult }) {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  // Slider State
  const [slideIndex, setSlideIndex] = useState(0);

  const relatedServices = [
    {
      title: 'Регистрация товарного знака',
      tags: ['Товарные знаки', 'Дизайн'],
      link: '#'
    },
    {
      title: 'Международная регистрация',
      tags: ['Товарные знаки', 'Дизайн'],
      link: '#'
    },
    {
      title: 'Продление товарного знака',
      tags: ['Товарные знаки', 'Дизайн'],
      link: '#'
    },
    {
      title: 'Изменение сведений в товарном знаке',
      tags: ['Товарные знаки', 'Дизайн'],
      link: '#'
    },
    {
      title: 'Получение дубликата свидетельства',
      tags: ['Товарные знаки', 'Дизайн'],
      link: '#'
    }
  ];

  const getVisibleRelatedCount = () => {
    if (width <= 768) return 1;
    if (width <= 1100) return 2;
    return 3;
  };

  const getMaxSlideIndex = () => Math.max(0, relatedServices.length - getVisibleRelatedCount());

  const handleNextSlide = () => {
    if (slideIndex < getMaxSlideIndex()) {
      setSlideIndex(slideIndex + 1);
    }
  };

  const handlePrevSlide = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
  };

  return (
    <>
      {/* Service Hero Section */}
      <section className="service-hero-section">
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
              <span className="current">Регистрация товарного знака</span>
            </div>
          </div>

          <div className="service-hero-grid">
            <div className="service-hero-content">
              <div className="service-tags">
                <span>Товарные знаки</span>
                <span>Дизайн</span>
              </div>
              <h1 className="service-hero-title">Регистрация товарного знака</h1>
              <p className="service-hero-desc">Полный цикл регистрации обозначения в качестве товарного знака, начиная от подачи заявки, заканчивая получением Свидетельства</p>
              <button className="btn btn-primary btn-consult-trigger" onClick={onOpenConsult}>Получить индивидуальную консультацию</button>
            </div>
            
            <div className="service-hero-visual">
              <div className="wireframe-graphic-box">
                {/* Custom Wireframe Sphere Low-Poly Graphic */}
                <svg width="100%" height="100%" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotating-slow">
                  <circle cx="150" cy="150" r="140" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
                  <path d="M150 10 L150 290" stroke="rgba(255,255,255,0.08)" strokeWidth="0.75"/>
                  <path d="M10 150 L290 150" stroke="rgba(255,255,255,0.08)" strokeWidth="0.75"/>
                  
                  <polygon points="150,30 210,80 230,150 210,220 150,270 90,220 70,150 90,80" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="rgba(255,255,255,0.01)"/>
                  <polygon points="150,60 190,95 210,150 190,205 150,240 110,205 90,150 110,95" stroke="rgba(255,255,255,0.15)" strokeWidth="0.75"/>
                  <polygon points="150,100 170,120 180,150 170,180 150,200 130,180 120,150 130,120" stroke="rgba(255,75,38,0.4)" strokeWidth="1.2"/>
                  
                  <line x1="150" y1="30" x2="150" y2="60" stroke="rgba(255,255,255,0.2)"/>
                  <line x1="210" y1="80" x2="190" y2="95" stroke="rgba(255,255,255,0.2)"/>
                  <line x1="230" y1="150" x2="210" y2="150" stroke="rgba(255,255,255,0.2)"/>
                  <line x1="210" y1="220" x2="190" y2="205" stroke="rgba(255,255,255,0.2)"/>
                  <line x1="150" y1="270" x2="150" y2="240" stroke="rgba(255,255,255,0.2)"/>
                  <line x1="90" y1="220" x2="110" y2="205" stroke="rgba(255,255,255,0.2)"/>
                  <line x1="70" y1="150" x2="90" y2="150" stroke="rgba(255,255,255,0.2)"/>
                  <line x1="90" y1="80" x2="110" y2="95" stroke="rgba(255,255,255,0.2)"/>
                  
                  <line x1="150" y1="60" x2="150" y2="100" stroke="rgba(255,255,255,0.2)"/>
                  <line x1="190" y1="95" x2="170" y2="120" stroke="rgba(255,255,255,0.2)"/>
                  <line x1="210" y1="150" x2="180" y2="150" stroke="rgba(255,255,255,0.2)"/>
                  <line x1="190" y1="205" x2="170" y2="180" stroke="rgba(255,255,255,0.2)"/>
                  <line x1="150" y1="240" x2="150" y2="200" stroke="rgba(255,255,255,0.2)"/>
                  <line x1="110" y1="205" x2="130" y2="180" stroke="rgba(255,255,255,0.2)"/>
                  <line x1="90" y1="150" x2="120" y2="150" stroke="rgba(255,255,255,0.2)"/>
                  <line x1="110" y1="95" x2="130" y2="120" stroke="rgba(255,255,255,0.2)"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Needed Section */}
      <section className="why-needed-section">
        <div className="container">
          <h2 className="section-title">Когда необходимо</h2>
          <div className="why-needed-grid">
            <div className="why-card">
              <h3 className="why-card-title">Защита своего бренда</h3>
              <p className="why-card-desc">Регистрация товарного знака позволяет получить правовую охрану своего бренда</p>
            </div>
            <div className="why-card">
              <h3 className="why-card-title">Ненарушение прав</h3>
              <p className="why-card-desc">Наличие прав подтверждает соответствие бренда требованиям законодательства</p>
            </div>
            <div className="why-card">
              <h3 className="why-card-title">Нематериальный актив</h3>
              <p className="why-card-desc">Права на знак могут приносить дополнительный доход при их использовании и распоряжении (коммерциализации)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Процесс работы</h2>
          <div className="process-grid">
            <div className="process-step-item">
              <div className="step-header">
                <span className="step-num-big">1</span>
                <h3 className="step-title">Проверка бренда</h3>
              </div>
              <p className="step-desc">Оценка вероятности регистрации, выявление знаков, которые могут помешать регистрации</p>
            </div>
            <div className="process-step-item">
              <div className="step-header">
                <span className="step-num-big">2</span>
                <h3 className="step-title">Подготовка отчета</h3>
              </div>
              <p className="step-desc">Проведение анализа по всем основаниям для отказа в регистрации знака</p>
            </div>
            <div className="process-step-item">
              <div className="step-header">
                <span className="step-num-big">3</span>
                <h3 className="step-title">Рекомендации</h3>
              </div>
              <p className="step-desc">Подготовка выводов и рекомендаций для регистрации товарного знака</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="related-services-section">
        <div className="container">
          <div className="related-header">
            <h2 className="section-title">Сопутствующие услуги</h2>
            <Link href="/#services" className="btn-secondary">
              Все услуги
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.16666 10H15.8333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.8333 5L15.8333 10L10.8333 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          <div className="related-slider-wrapper">
            <div className="related-slider-container">
              <div 
                className="related-track" 
                style={{ 
                  transform: `translateX(-${slideIndex * (100 / getVisibleRelatedCount())}%)`,
                  transition: 'transform 0.4s ease'
                }}
              >
                {relatedServices.map((service, index) => (
                  <div key={index} className="related-card" style={{ flex: `0 0 calc((100% - ${(getVisibleRelatedCount() - 1) * 24}px) / ${getVisibleRelatedCount()})` }}>
                    <div className="card-tags-row">
                      {service.tags.map((tag, tIdx) => (
                        <span key={tIdx}>{tag}</span>
                      ))}
                    </div>
                    <h3 className="related-card-title">{service.title}</h3>
                    <a href={service.link} className="related-card-arrow-btn" onClick={(e) => { e.preventDefault(); onOpenConsult(); }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H9M17 7V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="related-controls-row">
              <button className="carousel-control prev" onClick={handlePrevSlide} disabled={slideIndex === 0} aria-label="Previous slide">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="carousel-control next" onClick={handleNextSlide} disabled={slideIndex >= getMaxSlideIndex()} aria-label="Next slide">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Orange Consultation CTA Section */}
      <section className="orange-cta-section">
        <div className="container orange-cta-container">
          <div className="orange-cta-content">
            <h2 className="orange-cta-title">У вас остались вопросы?<br/>Оставьте заявку, мы вам поможем!</h2>
            <p className="orange-cta-desc">У нас есть решения для всех ваших потребностей в сфере защиты и регистрации интеллектуальной собственности</p>
            <button className="btn btn-dark-cta btn-consult-trigger" onClick={onOpenConsult}>Оставить заявку на консультацию</button>
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
