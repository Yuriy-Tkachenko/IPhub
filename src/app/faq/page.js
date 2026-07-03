'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function Faq({ onOpenConsult }) {
  // Active Category is set to 'trademark' (Товарные знаки) by default to match the mockup screenshot!
  const [activeCategory, setActiveCategory] = useState('trademark');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState({ 1: true });

  const faqData = [
    {
      id: 1,
      question: 'Что такое патент и что он дает?',
      answer: 'Патент — это охранный документ, предоставляющий вам исключительное право на определённый результат интеллектуальной деятельности (изобретение, полезную модель, промышленный образец). Иными словами, патент — это гарантия вашей временной монополии на производство, распространение и сбыт определённого продукта (устройства, вещества, штамма микроорганизмов и т.д.), в том числе характеризующегося только оригинальным внешним видом, реализацию описанного в патенте способа выполнения того или иного действия (технологию). В обмен на предоставление вам такого исключительного права вы публично раскрываете в описании патента всю информацию о вашем продукте или технологии.',
      tags: ['Базы данных', 'Дизайн'],
      categories: ['patent', 'protection', 'management', 'trademark'], // Added trademark to make sure it shows under 'trademark' category (as shown in the active screenshot!)
      searchTerms: 'что такое патент что он дает охранный документ исключительное право монополия'
    },
    {
      id: 2,
      question: 'Какие документы необходимо представить для получения патента на изобретение?',
      answer: 'Для подачи заявки на изобретение необходимы: заявление на выдачу патента с указанием автора и заявителя, описание изобретения, раскрывающее его с достаточной для осуществления полнотой, формула изобретения, выражающая его сущность и полностью основанная на описании, чертежи или иные иллюстрирующие материалы (если они необходимы для понимания сущности), реферат, а также документ об уплате патентной пошлины.',
      tags: ['Базы данных', 'Дизайн'],
      categories: ['patent', 'trademark'], // Added trademark to display in the mockup
      searchTerms: 'какие документы необходимо представить для получения патента на изобретение описание формула чертежи заявление реферат пошлина'
    },
    {
      id: 3,
      question: 'Каков порядок рассмотрения заявки на выдачу патента на изобретение в Роспатенте?',
      answer: 'Процедура рассмотрения заявки Роспатентом включает два основных этапа: \n1. Формальная экспертиза: проверяется наличие необходимых документов, соблюдение требований к их оформлению и уплата госпошлин. \n2. Экспертиза по существу: проводится патентный поиск и проверяется соответствие изобретения условиям патентоспособности (новизна, изобретательский уровень, промышленная применимость).',
      tags: ['Базы данных', 'Дизайн'],
      categories: ['patent', 'protection', 'trademark'],
      searchTerms: 'каков порядок рассмотрения заявки на выдачу патента на изобретение в роспатенте формальная экспертиза по существу патентный поиск решения'
    },
    {
      id: 4,
      question: 'Можно ли продлить срок действия исключительного права?',
      answer: 'Да, продление возможно в зависимости от объекта IP: \n— Товарные знаки: регистрируются на 10 лет, срок может продлеваться неограниченное число раз на очередные 10 лет. \n— Промышленные образцы: действуют 5 лет с возможностью многократного продления в сумме до 25 лет. \n— Патенты на изобретения: действуют 20 лет, продление (до 5 лет) допускается только для лекарств, пестицидов и агрохимикатов.',
      tags: ['Базы данных', 'Дизайн'],
      categories: ['trademark', 'patent', 'design', 'protection'],
      searchTerms: 'можно ли продлить срок действия исключительного права продление патента товарного знака сроки пошлины закон'
    },
    {
      id: 5,
      question: 'Чем подтверждается факт поступления заявки в Роспатент?',
      answer: 'При подаче документов (электронно или лично) Роспатент выдает официальное уведомление о поступлении материалов заявки. В уведомлении фиксируется точная дата получения, входящий номер и присвоенный регистрационный номер. Этот документ подтверждает дату приоритета вашей заявки.',
      tags: ['Базы данных', 'Дизайн'],
      categories: ['trademark', 'patent', 'design'],
      searchTerms: 'чем подтверждается факт поступления заявки в роспатент уведомление регистрационный номер дата приоритет'
    },
    {
      id: 6,
      question: 'Кто может подать заявку?',
      answer: 'Заявку могут подать физические лица (включая ИП), юридические лица, а также группы лиц (соавторы, совладельцы). Подача может осуществляться заявителем самостоятельно, либо через представителя — Патентного поверенного РФ, имеющего официальную доверенность и государственную аккредитацию.',
      tags: ['Базы данных', 'Дизайн'],
      categories: ['trademark', 'patent', 'design', 'it'],
      searchTerms: 'кто может подать заявку заявитель автор работодатель юридическое лицо патентный поверенный'
    },
    {
      id: 7,
      question: 'Какие документы необходимо представить для получения патента на полезную модель?',
      answer: 'Комплект документов для регистрации полезной модели аналогичен изобретению: заявление установленной формы, подробное описание, формула полезной модели (отличающаяся более лаконичной структурой и описывающая конструктивное устройство), чертежи, реферат и квитанция об оплате государственной пошлины.',
      tags: ['Базы данных', 'Дизайн'],
      categories: ['patent', 'design', 'trademark'],
      searchTerms: 'какие документы необходимо представить для получения патента на полезную модель заявление описание формула чертежи реферат'
    }
  ];

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Filtering Logic
  const filteredFaqs = faqData.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.categories.includes(activeCategory);
    const matchesSearch = searchQuery.trim() === '' || item.searchTerms.toLowerCase().includes(searchQuery.toLowerCase().trim());
    return matchesCategory && matchesSearch;
  });

  // Split filtered FAQs into two columns (Left column gets items, Right column gets the rest)
  const leftColFaqs = [];
  const rightColFaqs = [];
  
  filteredFaqs.forEach((item, index) => {
    if (index % 2 === 0) {
      leftColFaqs.push(item);
    } else {
      rightColFaqs.push(item);
    }
  });

  // Accordion height reference trigger helper
  const Panel = ({ isOpen, children }) => {
    const panelRef = useRef(null);
    const [height, setHeight] = useState('0px');

    useEffect(() => {
      if (isOpen && panelRef.current) {
        setHeight(`${panelRef.current.scrollHeight}px`);
      } else {
        setHeight('0px');
      }
    }, [isOpen, children]);

    return (
      <div 
        className="accordion-collapse-panel" 
        style={{ maxHeight: height }}
      >
        <div ref={panelRef} className="accordion-answer-content">
          {children}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* FAQ Header Section */}
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
              <span className="current">FAQ</span>
            </div>
          </div>

          <div className="portfolio-title-row">
            <h1 className="portfolio-main-title">FAQ</h1>
            <div className="portfolio-header-illustration">
              <img src="/projects/iphub/assets/cta_chrome_shell.webp" alt="Abstract chrome sculpture" className="portfolio-header-img animated-float-slow" />
            </div>
          </div>

          {/* Search Bar */}
          <div className="search-bar-container">
            <div className="search-input-wrapper">
              <input 
                type="text" 
                id="faq-search-input" 
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
                { label: 'Защита', cat: 'protection' },
                { label: 'Управление', cat: 'management' },
                { label: 'Обучение', cat: 'education' }
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

      {/* FAQ Grid Section */}
      <section className="faq-grid-section">
        <div className="container">
          {filteredFaqs.length > 0 ? (
            <div className="faq-columns-container" id="faq-accordions-grid">
              {filteredFaqs.map(item => (
                <div key={item.id} className={`faq-accordion-item ${openItems[item.id] ? 'open' : ''}`}>
                  <div className="accordion-tags-row">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx}>{tag}</span>
                    ))}
                  </div>
                  <button className="accordion-header" onClick={() => toggleItem(item.id)}>
                    <span className="accordion-question">{item.question}</span>
                    <span className="accordion-icon-box">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4V20M12 20L6 14M12 20L18 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>
                  <Panel isOpen={openItems[item.id]}>
                    <p style={{ whiteSpace: 'pre-line' }}>{item.answer}</p>
                  </Panel>
                </div>
              ))}
            </div>
          ) : (
            /* Empty State Message */
            <div className="search-empty-state" id="faq-empty-state" style={{ display: 'flex', opacity: 1 }}>
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
              <img src="/projects/iphub/assets/cta_orange_overlay.webp" alt="Abstract metallic Chrome structure" className="composite-chrome animated-float" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
