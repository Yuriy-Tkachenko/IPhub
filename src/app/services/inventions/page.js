'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSwipeNavigation } from '@/hooks/useSwipeNavigation';

export default function Inventions({ onOpenConsult }) {
  const [width, setWidth] = useState(() => (typeof window === 'undefined' ? 1200 : window.innerWidth));

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  const [slideIndex, setSlideIndex] = useState(0);

  const relatedServices = [
    {
      title: 'Патентные исследования',
      tags: ['Изобретения', 'Аналитика'],
      link: '#'
    },
    {
      title: 'Составление патентной заявки',
      tags: ['Изобретения', 'Документы'],
      link: '#'
    },
    {
      title: 'Поддержание патента в силе',
      tags: ['Изобретения', 'Управление'],
      link: '#'
    },
    {
      title: 'Международное патентование (PCT)',
      tags: ['Изобретения', 'Глобально'],
      link: '#'
    }
  ];

  const getVisibleRelatedCount = () => {
    if (width <= 768) return 1;
    if (width <= 1100) return 2;
    return 3;
  };

  const getMaxSlideIndex = () => Math.max(0, relatedServices.length - getVisibleRelatedCount());
  const visibleSlideIndex = Math.min(slideIndex, getMaxSlideIndex());

  const handleNextSlide = () => {
    if (slideIndex < getMaxSlideIndex()) setSlideIndex(slideIndex + 1);
  };

  const handlePrevSlide = () => {
    if (slideIndex > 0) setSlideIndex(slideIndex - 1);
  };
  const relatedSwipeHandlers = useSwipeNavigation({
    onNext: handleNextSlide,
    onPrev: handlePrevSlide,
    canNext: slideIndex < getMaxSlideIndex(),
    canPrev: slideIndex > 0,
  });

  return (
    <>
      {/* Service Hero Section */}
      <section className="service-hero-section">
        <div className="container">
          <div className="breadcrumbs-container">
            <Link href="/services" className="back-arrow-link" aria-label="Back to services">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <div className="breadcrumbs">
              <Link href="/">Главная</Link>
              <span className="separator">/</span>
              <Link href="/services">Услуги</Link>
              <span className="separator">/</span>
              <span className="current">Изобретения и Полезные модели</span>
            </div>
          </div>

          <div className="service-hero-grid">
            <div className="service-hero-content">
              <div className="service-tags">
                <span>Изобретения</span>
                <span>Патенты</span>
              </div>
              <h1 className="service-hero-title">Изобретения и Полезные модели</h1>
              <p className="service-hero-desc">Оформление и государственная регистрация патентов на технические разработки, инновационные устройства, новые технологии и способы производства.</p>
              <button className="btn btn-primary btn-consult-trigger" onClick={onOpenConsult}>Получить индивидуальную консультацию</button>
            </div>
            
            <div className="service-hero-visual">
              <div className="wireframe-graphic-box">
                {/* 3D Wireframe Cube with core glowing node */}
                <svg width="100%" height="100%" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotating-slow">
                  <circle cx="150" cy="150" r="140" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
                  <polygon points="100,100 200,100 200,200 100,200" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="rgba(255,255,255,0.01)"/>
                  <polygon points="130,70 230,70 230,170 130,170" stroke="rgba(255,255,255,0.15)" strokeWidth="0.75"/>
                  <line x1="100" y1="100" x2="130" y2="70" stroke="rgba(255,255,255,0.2)"/>
                  <line x1="200" y1="100" x2="230" y2="70" stroke="rgba(255,255,255,0.2)"/>
                  <line x1="200" y1="200" x2="230" y2="170" stroke="rgba(255,255,255,0.2)"/>
                  <line x1="100" y1="200" x2="130" y2="170" stroke="rgba(255,255,255,0.2)"/>
                  
                  <circle cx="165" cy="135" r="8" fill="#FF4B26" opacity="0.8"/>
                  <line x1="165" y1="135" x2="100" y2="100" stroke="#FF4B26" strokeWidth="1"/>
                  <line x1="165" y1="135" x2="200" y2="100" stroke="#FF4B26" strokeWidth="1"/>
                  <line x1="165" y1="135" x2="200" y2="200" stroke="#FF4B26" strokeWidth="1"/>
                  <line x1="165" y1="135" x2="100" y2="200" stroke="#FF4B26" strokeWidth="1"/>
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
              <h3 className="why-card-title">Защита уникальных технологий</h3>
              <p className="why-card-desc">Патент закрепляет за вами монопольное право на использование новых технических решений и алгоритмов.</p>
            </div>
            <div className="why-card">
              <h3 className="why-card-title">Патентный барьер для конкурентов</h3>
              <p className="why-card-desc">Запрет копирования ваших продуктов и способов производства на территории всей страны.</p>
            </div>
            <div className="why-card">
              <h3 className="why-card-title">Капитализация разработок</h3>
              <p className="why-card-desc">Официальное признание нематериальных активов с последующей капитализацией и внесением в уставной капитал.</p>
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
                <h3 className="step-title">Патентный поиск</h3>
              </div>
              <p className="step-desc">Исследование по мировым базам патентных ведомств для подтверждения мировой новизны решения.</p>
            </div>
            <div className="process-step-item">
              <div className="step-header">
                <span className="step-num-big">2</span>
                <h3 className="step-title">Формула и описание</h3>
              </div>
              <p className="step-desc">Разработка описания изобретения и составление юридически точной формулы патента.</p>
            </div>
            <div className="process-step-item">
              <div className="step-header">
                <span className="step-num-big">3</span>
                <h3 className="step-title">Подача и сопровождение</h3>
              </div>
              <p className="step-desc">Направление документов в Роспатент, ведение переписки и ответов на запросы экспертизы.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="related-services-section">
        <div className="container">
          <div className="related-header">
            <h2 className="section-title">Сопутствующие услуги</h2>
            <Link href="/services" className="btn-secondary">
              Все услуги
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.16666 10H15.8333" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.8333 5L15.8333 10L10.8333 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </Link>
          </div>

          <div className="related-slider-wrapper">
            <div className="related-slider-container" {...relatedSwipeHandlers}>
              <div 
                className="related-track" 
                style={{ 
                  transform: `translateX(-${visibleSlideIndex * (100 / getVisibleRelatedCount())}%)`,
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
              <button className="carousel-control prev" onClick={handlePrevSlide} disabled={visibleSlideIndex === 0} aria-label="Previous slide">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 19L8 12L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <button className="carousel-control next" onClick={handleNextSlide} disabled={visibleSlideIndex >= getMaxSlideIndex()} aria-label="Next slide">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5L16 12L9 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
                <circle cx="130" cy="130" r="100" stroke="rgba(255,255,255,0.25)" strokeWidth="1" stroke-dasharray="4 4"/>
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
