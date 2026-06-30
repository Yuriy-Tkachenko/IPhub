'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CourtRepresentation({ onOpenConsult }) {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  const [slideIndex, setSlideIndex] = useState(0);

  const relatedServices = [
    {
      title: 'Претензионная досудебная работа',
      tags: ['Суды', 'Претензии'],
      link: '#'
    },
    {
      title: 'Блокировка контрафакта на маркетплейсах',
      tags: ['Маркетплейсы', 'Защита'],
      link: '#'
    },
    {
      title: 'Оспаривание в Палате по патентным спорам',
      tags: ['Роспатент', 'ППС'],
      link: '#'
    },
    {
      title: 'Взыскание компенсаций за нарушение IP',
      tags: ['Суды', 'Компенсации'],
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
    if (slideIndex < getMaxSlideIndex()) setSlideIndex(slideIndex + 1);
  };

  const handlePrevSlide = () => {
    if (slideIndex > 0) setSlideIndex(slideIndex - 1);
  };

  // Clamp slider index on window resize to prevent overflow
  useEffect(() => {
    const maxS = getMaxSlideIndex();
    if (slideIndex > maxS) setSlideIndex(maxS);
  }, [width, slideIndex]);

  return (
    <>
      {/* Service Hero Section */}
      <section className="service-hero-section">
        <div className="container">
          <div className="breadcrumbs-container">
            <Link href="/services" className="back-arrow-link" aria-label="Back to services">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 19L5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </Link>
            <div className="breadcrumbs">
              <Link href="/">Главная</Link>
              <span className="separator">/</span>
              <Link href="/services">Услуги</Link>
              <span className="separator">/</span>
              <span className="current">Представление интересов, суды</span>
            </div>
          </div>

          <div className="service-hero-grid">
            <div className="service-hero-content">
              <div className="service-tags">
                <span>Суды</span>
                <span>Защита прав</span>
              </div>
              <h1 className="service-hero-title">Судебная защита и представительство</h1>
              <p className="service-hero-desc">Комплексная защита ваших интеллектуальных прав в судах всех инстанций, Суде по интеллектуальным правам (СИП), ФАС и Палате по патентным спорам.</p>
              <button className="btn btn-primary btn-consult-trigger" onClick={onOpenConsult}>Получить индивидуальную консультацию</button>
            </div>
            
            <div className="service-hero-visual">
              <div className="wireframe-graphic-box">
                {/* 3D scales of justice SVG */}
                <svg width="100%" height="100%" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotating-slow">
                  <circle cx="150" cy="150" r="140" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
                  <path d="M150 70 L150 230" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
                  <path d="M90 110 L210 110" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
                  <path d="M150 230 L110 250 H190 L150 230" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="rgba(255,255,255,0.01)"/>
                  
                  <line x1="90" y1="110" x2="70" y2="170" stroke="rgba(255,255,255,0.2)"/>
                  <line x1="90" y1="110" x2="110" y2="170" stroke="rgba(255,255,255,0.2)"/>
                  <ellipse cx="90" cy="170" rx="20" ry="6" stroke="#FF4B26" strokeWidth="1.2"/>
                  
                  <line x1="210" y1="110" x2="190" y2="170" stroke="rgba(255,255,255,0.2)"/>
                  <line x1="210" y1="110" x2="230" y2="170" stroke="rgba(255,255,255,0.2)"/>
                  <ellipse cx="210" cy="170" rx="20" ry="6" stroke="#FF4B26" strokeWidth="1.2"/>
                  
                  <circle cx="150" cy="70" r="4" fill="#FF4B26"/>
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
              <h3 className="why-card-title">Незаконное использование вашего IP</h3>
              <p className="why-card-desc">Если конкуренты без разрешения используют ваш товарный знак, фирменное наименование или запатентованные технологии.</p>
            </div>
            <div className="why-card">
              <h3 className="why-card-title">Получение претензии / иска от нарушителя</h3>
              <p className="why-card-desc">Профессиональная защита и построение сильной оборонительной стратегии, если вас обвинили в нарушении чужих патентных или авторских прав.</p>
            </div>
            <div className="why-card">
              <h3 className="why-card-title">Оспаривание решений Роспатента</h3>
              <p className="why-card-desc">Защита интересов при получении неправомерных отказов в регистрации обозначений или патентовании изобретений.</p>
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
                <h3 className="step-title">Досудебный анализ</h3>
              </div>
              <p className="step-desc">Сбор доказательной базы нарушений, нотариальный осмотр сайтов, подготовка и отправка досудебной претензии.</p>
            </div>
            <div className="process-step-item">
              <div className="step-header">
                <span className="step-num-big">2</span>
                <h3 className="step-title">Судебное производство</h3>
              </div>
              <p className="step-desc">Разработка искового заявления, подача в арбитражный суд, сопровождение заседаний и защита прав экспертами.</p>
            </div>
            <div className="process-step-item">
              <div className="step-header">
                <span className="step-num-big">3</span>
                <h3 className="step-title">Исполнительное производство</h3>
              </div>
              <p className="step-desc">Взыскание денежных компенсаций (до 5 миллионов рублей за факт нарушения) и блокировка пиратского контента.</p>
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
                <path d="M4.16666 10H15.8333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.8333 5L15.8333 10L10.8333 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
                        <path d="M7 17L17 7M17 7H9M17 7V15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="related-controls-row">
              <button className="carousel-control prev" onClick={handlePrevSlide} disabled={slideIndex === 0} aria-label="Previous slide">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 19L8 12L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <button className="carousel-control next" onClick={handleNextSlide} disabled={slideIndex >= getMaxSlideIndex()} aria-label="Next slide">
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
