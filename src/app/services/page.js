'use client';
import React from 'react';
import Link from 'next/link';

export default function Services({ onOpenConsult }) {
  const servicesList = [
    {
      id: 'trademark',
      title: 'Регистрация товарного знака в Роспатенте',
      desc: 'Полный цикл регистрации обозначения в качестве товарного знака, начиная от подачи заявки, заканчивая получением Свидетельства.',
      path: '/services/trademark',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="12" stroke="white" strokeWidth="1.5" strokeDasharray="4 4"/>
          <path d="M15 15L25 25M25 15L15 25" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
        </svg>
      )
    },
    {
      id: 'inventions',
      title: 'Изобретения и Полезные модели',
      desc: 'Регистрация прав, защита технических инноваций, устройств, новых способов или промышленных технологий.',
      path: '/services/inventions',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="14" stroke="white" strokeWidth="1.5"/>
          <circle cx="20" cy="20" r="8" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="2 2"/>
          <line x1="20" y1="6" x2="20" y2="34" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
          <line x1="6" y1="20" x2="34" y2="20" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
        </svg>
      )
    },
    {
      id: 'industrial-designs',
      title: 'Промышленные образцы',
      desc: 'Патентование внешнего вида изделий, уникального дизайна продукции, интерфейсов и упаковки.',
      path: '/services/industrial-designs',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="12" width="16" height="16" rx="2" stroke="white" strokeWidth="1.5"/>
          <line x1="20" y1="12" x2="20" y2="28" stroke="rgba(255,255,255,0.4)"/>
        </svg>
      )
    },
    {
      id: 'software-db',
      title: 'Программы для ЭВМ и Базы данных',
      desc: 'Официальное депонирование и регистрация прав на софт, исходный код программ и структуры баз данных в Роспатенте.',
      path: '/services/software-db',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 14C10 12.8954 10.8954 12 12 12H28C29.1046 12 30 12.8954 30 14V26C30 27.1046 29.1046 28 28 28H12C10.8954 28 10 27.1046 10 26V14Z" stroke="white" strokeWidth="1.5"/>
          <path d="M14 20L17 23L26 14" stroke="white" strokeWidth="1.5"/>
        </svg>
      )
    },
    {
      id: 'court-representation',
      title: 'Представление интересов, суды',
      desc: 'Судебная защита интеллектуальных прав, пресечение нарушений на маркетплейсах, споры в Палате по патентным спорам.',
      path: '/services/court-representation',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 28L15 15L28 12L25 25L12 28Z" stroke="white" strokeWidth="1.5"/>
          <circle cx="20" cy="20" r="2" fill="white"/>
        </svg>
      )
    }
  ];

  return (
    <>
      <section className="portfolio-header-section">
        <div className="container">
          {/* Breadcrumbs */}
          <div className="breadcrumbs-container">
            <Link href="/" className="back-arrow-link" aria-label="Back to main page">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </Link>
            <div className="breadcrumbs">
              <Link href="/">Главная</Link>
              <span className="separator">/</span>
              <span className="current">Наши услуги</span>
            </div>
          </div>

          <div className="portfolio-title-row">
            <h1 className="portfolio-main-title">Услуги в сфере IP</h1>
            <div className="portfolio-header-illustration">
              <img src="/projects/iphub/assets/hero_chrome_twist.webp" alt="Abstract chrome sculpture" className="portfolio-header-img animated-float-slow" />
            </div>
          </div>
        </div>
      </section>

      {/* Services List Grid */}
      <section className="services-directory-section" style={{ paddingBottom: '80px' }}>
        <div className="container">
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: '30px' }}>
            {servicesList.map((item) => (
              <div key={item.id} className="service-card" style={{ height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '35px 30px' }}>
                <div>
                  <div className="service-icon-box" style={{ marginBottom: '25px' }}>
                    {item.icon}
                  </div>
                  <h3 className="service-card-title" style={{ fontSize: '20px', marginBottom: '15px' }}>
                    <Link href={item.path}>{item.title}</Link>
                  </h3>
                  <p className="service-card-desc" style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--color-text-muted)', marginBottom: '30px' }}>
                    {item.desc}
                  </p>
                </div>
                <Link href={item.path} className="service-card-arrow" style={{ alignSelf: 'flex-start', position: 'static', marginTop: 'auto' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H9M17 7V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Orange CTA banner */}
      <section className="orange-cta-section">
        <div className="container orange-cta-container">
          <div className="orange-cta-content">
            <h2 className="orange-cta-title">Необходима консультация эксперта?<br/>Оставьте заявку, мы поможем!</h2>
            <p className="orange-cta-desc">Подскажем оптимальный формат регистрации и рассчитаем государственные пошлины.</p>
            <button className="btn btn-dark-cta" onClick={onOpenConsult}>Оставить заявку на консультацию</button>
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
              <img src="/projects/iphub/assets/cta_orange_overlay.webp" alt="Abstract metallic Chrome structure" className="composite-chrome animated-float" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
