'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSwipeNavigation } from '@/hooks/useSwipeNavigation';

export default function Home({ onOpenConsult }) {
  // Window Width for Responsive Sliders
  const [width, setWidth] = useState(() => (typeof window === 'undefined' ? 1200 : window.innerWidth));
  

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#services') {
      const servicesEl = document.getElementById('services');
      if (servicesEl) {
        const timer = setTimeout(() => {
          servicesEl.scrollIntoView({ behavior: 'smooth' });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  // Sliders State
  const [caseIndex, setCaseIndex] = useState(0);
  const [teamIndex, setTeamIndex] = useState(0);
  const getSliderTranslate = (index, visibleCount, gap = 24) => (
    `translateX(calc(-${(index * 100) / visibleCount}% - ${(index * gap) / visibleCount}px))`
  );
  const realizedCases = [
    {
      logo: 'CIRKLE',
      logoClass: '',
      client: 'CIRKLE — производитель косметической продукции',
      desc: 'Как в результате защиты мы зарегистрировали бренд российской косметики при наличии оснований для отказа.',
    },
    {
      logo: 'Camera IQ',
      logoClass: 'bg-purple',
      client: 'Camera IQ — производитель систем машинного зрения',
      desc: 'Защита прав после ребрендинга. Как провести успешную регистрацию товарного знака в сжатые сроки.',
    },
    {
      logo: 'Hands',
      logoClass: 'bg-blue',
      client: 'Hands — строительная экосистема',
      desc: 'Разработка патентной стратегии и комплексная защита интерфейсов мобильного приложения в Роспатенте.',
    },
    {
      logo: 'FishPro',
      logoClass: 'bg-green',
      client: 'FishPro — рыболовные принадлежности',
      desc: 'Пресечение продажи контрафактной продукции на маркетплейсах через защиту авторских прав на фотографии и промдизайн.',
    },
  ];

  // Cases Slider Navigation
  const getVisibleCasesCount = () => (width <= 768 ? 1 : 2);
  const getMaxCaseIndex = () => Math.max(0, realizedCases.length - getVisibleCasesCount());
  const visibleCaseIndex = Math.min(caseIndex, getMaxCaseIndex());
  const visibleCases = realizedCases.slice(visibleCaseIndex, visibleCaseIndex + getVisibleCasesCount());

  const handleNextCase = () => {
    setCaseIndex((current) => Math.min(current + 1, getMaxCaseIndex()));
  };
  const handlePrevCase = () => {
    setCaseIndex((current) => Math.max(current - 1, 0));
  };
  const caseSwipeHandlers = useSwipeNavigation({
    onNext: handleNextCase,
    onPrev: handlePrevCase,
    canNext: visibleCaseIndex < getMaxCaseIndex(),
    canPrev: visibleCaseIndex > 0,
  });

  // Team Slider Navigation
  const getVisibleTeamCount = () => {
    if (width <= 480) return 1;
    if (width <= 768) return 2;
    if (width <= 1100) return 3;
    return 3; // Desktop limit
  };
  const getMaxTeamIndex = () => Math.max(0, 8 - getVisibleTeamCount());
  const visibleTeamIndex = Math.min(teamIndex, getMaxTeamIndex());

  const handleNextTeam = () => {
    setTeamIndex((current) => Math.min(current + 1, getMaxTeamIndex()));
  };
  const handlePrevTeam = () => {
    setTeamIndex((current) => Math.max(current - 1, 0));
  };
  const teamSwipeHandlers = useSwipeNavigation({
    onNext: handleNextTeam,
    onPrev: handlePrevTeam,
    canNext: visibleTeamIndex < getMaxTeamIndex(),
    canPrev: visibleTeamIndex > 0,
  });

  // Quiz State
  const quizSteps = [
    {
      question: "С какой целью вы обращаетесь?",
      options: [
        "Регистрация товарного знака",
        "Защита бренда от недобросовестной конкуренции",
        "Защита авторских прав в интернете",
        "Разрешение споров и представительство в суде"
      ]
    },
    {
      question: "Каковы объекты патентования?",
      options: [
        "Регистрация полезной модели",
        "Регистрация промышленного образца",
        "Регистрация прав на использование",
        "Подготовка заявки на выдачу патента",
        "Подготовка заявки на передачу прав патента",
        "Регистрация изобретения"
      ]
    },
    {
      question: "Каков масштаб вашего бизнеса?",
      options: [
        "Стартап / Индивидуальный предприниматель",
        "Малый или средний бизнес",
        "Крупная производственная или IT компания",
        "Международный холдинг / Зарубежный бизнес"
      ]
    },
    {
      question: "Нужно ли международное патентование / регистрация?",
      options: [
        "Да, в странах СНГ",
        "Да, по всему миру (WIPO / Мадридское соглашение)",
        "Нет, только в Российской Федерации",
        "Пока не уверен(а), требуется консультация эксперта"
      ]
    },
    {
      question: "В какие сроки вам необходимо зарегистрировать права?",
      options: [
        "Срочно (до 1 месяца для ускоренной экспертизы)",
        "Стандартно (до 6-8 месяцев в обычном порядке)",
        "Сроки не имеют принципиального значения",
        "Требуется предварительное исследование рынка"
      ]
    },
    {
      question: "Требуется ли юридическое сопровождение 'под ключ'?",
      options: [
        "Да, с финансовыми гарантиями возврата пошлин",
        "Нет, только составление и подача заявки в Роспатент",
        "Не уверен(а), нужна детальная консультация эксперта"
      ]
    },
    {
      question: "Каков планируемый бюджет на регистрацию и пошлины?",
      options: [
        "Минимальный (базовый пакет)",
        "Оптимальный (полный цикл + аудит)",
        "Премиум (международное патентование и юристы)"
      ]
    }
  ];

  const [quizStep, setQuizStep] = useState(1);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizName, setQuizName] = useState('');
  const [quizPhone, setQuizPhone] = useState('');
  const [quizAgree, setQuizAgree] = useState(true);
  const [quizErrors, setQuizErrors] = useState({});
  const [quizSuccess, setQuizSuccess] = useState(false);
  const [isQuizSubmitting, setIsQuizSubmitting] = useState(false);

  const handleSelectOption = (option) => {
    setQuizAnswers(prev => ({
      ...prev,
      [quizStep]: option
    }));
  };

  const handleNextQuiz = () => {
    if (quizStep < quizSteps.length) {
      setQuizStep(quizStep + 1);
    } else {
      // Go to final form screen (Step 8)
      setQuizStep(quizSteps.length + 1);
    }
  };

  const handlePrevQuiz = () => {
    if (quizStep > 1) {
      setQuizStep(quizStep - 1);
    }
  };

  const handleQuizFormSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!quizName.trim()) {
      errs.name = 'Имя обязательно';
    }
    const digitsOnly = quizPhone.replace(/\D/g, '');
    if (!quizPhone.trim()) {
      errs.phone = 'Телефон обязателен';
    } else if (digitsOnly.length < 10) {
      errs.phone = 'Некорректный номер (минимум 10 цифр)';
    }
    if (!quizAgree) {
      errs.agree = 'Необходимо согласие';
    }

    if (Object.keys(errs).length > 0) {
      setQuizErrors(errs);
      return;
    }

    setQuizErrors({});
    setIsQuizSubmitting(true);
    setTimeout(() => {
      setIsQuizSubmitting(false);
      setQuizSuccess(true);
      console.log("Quiz answers:", quizAnswers, "Contact:", { name: quizName, phone: quizPhone });
    }, 1200);
  };

  // Forums Tab State
  const [forumTab, setForumTab] = useState('upcoming');

  // Inline Consultation Form State
  const [consultName, setConsultName] = useState('');
  const [consultPhone, setConsultPhone] = useState('');
  const [consultAgree, setConsultAgree] = useState(true);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!consultName.trim()) {
      errs.name = 'Имя обязательно';
    } else if (consultName.trim().length < 2) {
      errs.name = 'Имя должно содержать не менее 2 символов';
    } else if (!/^[a-zA-Zа-яА-ЯёЁ\s\-]+$/.test(consultName)) {
      errs.name = 'Только буквы';
    }

    const digitsOnly = consultPhone.replace(/\D/g, '');
    if (!consultPhone.trim()) {
      errs.phone = 'Телефон обязателен';
    } else if (digitsOnly.length < 10) {
      errs.phone = 'Некорректный номер (минимум 10 цифр)';
    }

    if (!consultAgree) {
      errs.agree = 'Необходимо согласие';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false);
        setConsultName('');
        setConsultPhone('');
        setConsultAgree(true);
        setErrors({});
      }, 5000);
    }, 1200);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" id="hero">
        <div className="hero-digital-grid"></div>
        <div className="hero-bg-glow"></div>
        <div className="container hero-container">
          <div className="hero-content">
            <div className="digital-status-badge">
              <span className="pulsing-neon-dot"></span>
              <span className="badge-text">IP PROTECTION PLATFORM</span>
            </div>
            
            <h1 className="hero-title">
              Интеллектуальная<br/>
              <span className="gradient-text">собственность</span>
              <span className="coral-dot">.</span>
            </h1>
            
            <p className="hero-desc">Цифровая экосистема и индивидуальные правовые решения для защиты ваших нематериальных активов в России и по всему миру.</p>
            
            <div className="hero-actions-row">
              <button 
                className="btn btn-primary btn-consult-trigger btn-glowing-neon" 
                onClick={() => {
                  const el = document.getElementById('consultation');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Получить экспресс-анализ
              </button>
              <Link href="/services" className="btn-secondary link-underlined">
                Смотреть услуги 
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.16666 10H15.8333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.8333 5L15.8333 10L10.8333 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            <div className="hero-glass-stats">
              <div className="mini-glass-card">
                <span className="card-val">&gt;2500</span>
                <span className="card-lbl">клиентов по РФ</span>
              </div>
              <div className="mini-glass-card">
                <span className="card-val">99%</span>
                <span className="card-lbl">успех патентов</span>
              </div>
              <div className="mini-glass-card">
                <span className="card-val">98%</span>
                <span className="card-lbl">успех знаков</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="glass-sphere-container">
              {/* Floating Hologram tags */}
              <div className="hologram-tag tag-top animated-float-slow">
                <span className="tag-pulse"></span>
                <span>WIPO & PCT</span>
              </div>
              <div className="hologram-tag tag-mid animated-float" style={{ animationDelay: '1s' }}>
                <span className="tag-pulse"></span>
                <span>ЗАЩИТА В СУДЕ</span>
              </div>
              <div className="hologram-tag tag-bot animated-float-slow" style={{ animationDelay: '2s' }}>
                <span className="tag-pulse"></span>
                <span>РЕЕСТР ПО РФ</span>
              </div>

              <img src="assets/hero_chrome_twist.png" alt="Abstract metallic Chrome structure" className="chrome-3d-image animated-float" />
              <div className="glow-orb"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section" id="stats">
        <div className="container stats-container">
          <div className="stats-visual">
            <img src="assets/stats_chrome_sculpture.png" alt="Abstract chrome sculpture" className="chrome-3d-image-small animated-float-slow" />
          </div>
          <div className="stats-content">
            <h2 className="section-title">Многолетний опыт</h2>
            <p className="section-desc">Наша компания была создана в 2019 году специалистами, имеющими опыт работы в сфере интеллектуальной собственности более 20 лет</p>
            
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-num">&gt;300</div>
                <div className="stat-label">Представления интересов в спорах по IP правам в год</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">&gt;2500</div>
                <div className="stat-label">Оказаний юридической помощи компаниям в год</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">1150</div>
                <div className="stat-label">Завершённых дел по регистрации товарных знаков</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">61</div>
                <div className="stat-label">Совокупный опыт экспертов</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">99%</div>
                <div className="stat-label">Успех получения патентов</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">98%</div>
                <div className="stat-label">Успех регистрации товарных знаков</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section" id="partners">
        <div className="container">
          <div className="partners-header">
            <h3 className="partners-title">Подтвержденный практикой</h3>
            <p className="partners-desc">Мы и наши клиенты гордимся опытом, который подтверждается нашими результатами от закрепления прав заявителей до успешной защиты интересов</p>
          </div>
          <div className="partners-grid">
            <div className="partner-logo">
              <span className="logo-symbol">depot</span> <span className="logo-suffix">BRANDING AGENCY</span>
            </div>
            <div className="partner-logo">
              <span className="logo-symbol">МЕТАФРАКС</span> <span className="logo-suffix">ГРУПП</span>
            </div>
            <div className="partner-logo">
              <span className="logo-symbol">deneb</span>
            </div>
            <div className="partner-logo">
              <span className="logo-symbol">MONÉ</span>
            </div>
            <div className="partner-logo">
              <span className="logo-symbol">BETCITY</span>
            </div>
            <div className="partner-logo">
              <span className="logo-symbol">fishp</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" id="services">
        <div className="container">
          <div className="services-header">
            <div>
              <h2 className="section-title">Решения для вашего бизнеса</h2>
              <p className="section-desc">У нас есть все необходимые ресурсы для решения любых ваших потребностей в сфере интеллектуальной собственности</p>
            </div>
            <Link href="/services" className="btn-secondary services-header-btn">
              Все услуги
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.16666 10H15.8333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.8333 5L15.8333 10L10.8333 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          <div className="services-grid">
            {/* Card 1 */}
            <div className="service-card">
              <div className="service-icon-box">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="12" stroke="white" strokeWidth="1.5" strokeDasharray="4 4"/>
                  <path d="M15 15L25 25M25 15L15 25" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
                </svg>
              </div>
              <h3 className="service-card-title"><Link href="/services/trademark">Регистрация товарного знака в Роспатенте</Link></h3>
              <Link href="/services/trademark" className="service-card-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H9M17 7V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {/* Card 2 (Active by default) */}
            <div className="service-card active">
              <div className="service-icon-box">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotating-slow">
                  <circle cx="30" cy="30" r="22" stroke="#FF4B26" strokeWidth="1.5"/>
                  <circle cx="30" cy="30" r="14" stroke="#FF4B26" strokeWidth="1" strokeDasharray="2 2"/>
                  <line x1="30" y1="8" x2="30" y2="52" stroke="#FF4B26" strokeWidth="1" opacity="0.3"/>
                  <line x1="8" y1="30" x2="52" y2="30" stroke="#FF4B26" strokeWidth="1" opacity="0.3"/>
                </svg>
              </div>
              <h3 className="service-card-title"><Link href="/services/inventions">Изобретения и Полезные модели</Link></h3>
              <p className="service-card-desc">Регистрация прав, инновационные устройства, способы или технологии.</p>
              <Link href="/services/inventions" className="service-card-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H9M17 7V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="service-card">
              <div className="service-icon-box">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="12" y="12" width="16" height="16" rx="2" stroke="white" strokeWidth="1.5"/>
                  <line x1="20" y1="12" x2="20" y2="28" stroke="rgba(255,255,255,0.4)"/>
                </svg>
              </div>
              <h3 className="service-card-title"><Link href="/services/industrial-designs">Промышленные образцы</Link></h3>
              <Link href="/services/industrial-designs" className="service-card-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H9M17 7V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {/* Card 4 */}
            <div className="service-card">
              <div className="service-icon-box">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 14C10 12.8954 10.8954 12 12 12H28C29.1046 12 30 12.8954 30 14V26C30 27.1046 29.1046 28 28 28H12C10.8954 28 10 27.1046 10 26V14Z" stroke="white" strokeWidth="1.5"/>
                  <path d="M14 20L17 23L26 14" stroke="white" strokeWidth="1.5"/>
                </svg>
              </div>
              <h3 className="service-card-title"><Link href="/services/software-db">Программы для ЭВМ и Базы данных</Link></h3>
              <Link href="/services/software-db" className="service-card-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H9M17 7V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {/* Card 5 */}
            <div className="service-card">
              <div className="service-icon-box">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 28L15 15L28 12L25 25L12 28Z" stroke="white" strokeWidth="1.5"/>
                  <circle cx="20" cy="20" r="2" fill="white"/>
                </svg>
              </div>
              <h3 className="service-card-title"><Link href="/services/court-representation">Представление интересов, суды</Link></h3>
              <Link href="/services/court-representation" className="service-card-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H9M17 7V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="quiz-section" id="quiz">
        <div className="container quiz-container">
          <div className="quiz-intro">
            <h2 className="quiz-main-title">Не знаете, что вам нужно?</h2>
            <p className="quiz-main-desc">Пройдите квиз, чтобы выбрать оптимальное решение для Вашей задачи</p>
          </div>

          <div className="quiz-box">
            {quizSuccess ? (
              <div className="quiz-success-message" style={{ padding: '40px 20px', textAlign: 'center' }}>
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '20px' }}>
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#FF4B26"/>
                </svg>
                <h4 style={{ fontSize: '20px', fontWeight: '700', color: '#fff', marginBottom: '10px' }}>Спасибо за ваши ответы!</h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '14px', maxWidth: '400px', margin: '0 auto' }}>
                  Мы подобрали оптимальное решение для вас. Менеджер свяжется с вами в течение нескольких минут для подробной консультации.
                </p>
              </div>
            ) : quizStep > quizSteps.length ? (
              <form className="quiz-contact-form" onSubmit={handleQuizFormSubmit} style={{ padding: '10px' }}>
                <h4 className="quiz-question-title" style={{ marginBottom: '8px' }}>Получить результаты подбора</h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '13px', marginBottom: '24px' }}>
                  Заполните форму ниже, чтобы зафиксировать за вашим номером телефона индивидуальные бонусы и получить подборку решений.
                </p>
                
                <div className={`form-group ${quizErrors.name ? 'has-error' : ''}`} style={{ marginBottom: '20px' }}>
                  <input 
                    type="text" 
                    id="quiz-name-field"
                    required 
                    placeholder=" " 
                    value={quizName}
                    onChange={(e) => setQuizName(e.target.value)}
                    style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '16px 20px', borderRadius: '10px', width: '100%' }}
                  />
                  <label htmlFor="quiz-name-field" style={{ left: '20px' }}>Ваше имя</label>
                  {quizErrors.name && <span className="error-text" style={{ color: '#FF4B26', fontSize: '11px', marginTop: '4px', display: 'block' }}>{quizErrors.name}</span>}
                </div>
                
                <div className={`form-group ${quizErrors.phone ? 'has-error' : ''}`} style={{ marginBottom: '20px' }}>
                  <input 
                    type="tel" 
                    id="quiz-phone-field"
                    required 
                    placeholder=" " 
                    value={quizPhone}
                    onChange={(e) => setQuizPhone(e.target.value)}
                    style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '16px 20px', borderRadius: '10px', width: '100%' }}
                  />
                  <label htmlFor="quiz-phone-field" style={{ left: '20px' }}>Номер телефона</label>
                  {quizErrors.phone && <span className="error-text" style={{ color: '#FF4B26', fontSize: '11px', marginTop: '4px', display: 'block' }}>{quizErrors.phone}</span>}
                </div>

                <div className="form-agreement" style={{ marginBottom: '24px' }}>
                  <input 
                    type="checkbox" 
                    id="quiz-agree-field"
                    checked={quizAgree}
                    onChange={(e) => setQuizAgree(e.target.checked)}
                    style={{ marginRight: '10px' }}
                  />
                  <label htmlFor="quiz-agree-field" style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Соглашаюсь на обработку персональных данных</label>
                  {quizErrors.agree && <span className="error-text" style={{ color: '#FF4B26', fontSize: '11px', marginTop: '4px', display: 'block' }}>{quizErrors.agree}</span>}
                </div>

                <div className="quiz-navigation">
                  <button type="button" className="btn-quiz-nav" onClick={handlePrevQuiz}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.8333 10H4.16666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9.16666 15L4.16666 10L9.16666 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Назад</span>
                  </button>
                  <button type="submit" className="btn btn-primary btn-glowing-neon" style={{ padding: '14px 28px' }} disabled={isQuizSubmitting}>
                    {isQuizSubmitting ? 'Отправка...' : 'Получить расчет'}
                  </button>
                </div>
              </form>
            ) : (
              <>
                <div className="quiz-header">
                  <h4 className="quiz-question-title">{quizSteps[quizStep - 1].question}</h4>
                  <div className="quiz-progress">{quizStep}/{quizSteps.length}</div>
                </div>
                
                <div className="quiz-options-grid">
                  {quizSteps[quizStep - 1].options.map(optionText => (
                    <button 
                      key={optionText}
                      className={`quiz-option ${quizAnswers[quizStep] === optionText ? 'selected' : ''}`}
                      onClick={() => handleSelectOption(optionText)}
                    >
                      {optionText}
                    </button>
                  ))}
                </div>

                <div className="quiz-navigation">
                  <button className="btn-quiz-nav" onClick={handlePrevQuiz} disabled={quizStep === 1}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.8333 10H4.16666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9.16666 15L4.16666 10L9.16666 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Назад</span>
                  </button>
                  <button className="btn-quiz-nav" onClick={handleNextQuiz} disabled={!quizAnswers[quizStep]}>
                    <span>{quizStep === quizSteps.length ? 'Получить результат' : 'Далее'}</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.16666 10H15.8333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10.8333 5L15.8333 10L10.8333 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Quiz Bonuses */}
          <div className="quiz-bonuses">
            <h5 className="bonuses-title">Бонусы после прохождения</h5>
            <div className="bonuses-grid">
              <div className="bonus-item">
                <div className="bonus-icon">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 4L26 15L15 26L4 15L15 4Z" stroke="#FF4B26" strokeWidth="1.5"/>
                    <circle cx="15" cy="15" r="4" fill="#FF4B26"/>
                  </svg>
                </div>
                <div className="bonus-text">Скидка 10% на подготовку документов</div>
              </div>
              <div className="bonus-item">
                <div className="bonus-icon">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 4L26 15L15 26L4 15L15 4Z" stroke="#FF4B26" strokeWidth="1.5"/>
                    <circle cx="15" cy="15" r="4" fill="#FF4B26"/>
                  </svg>
                </div>
                <div className="bonus-text">Бесплатный экспресс-анализ товарного знака</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Realized Cases Section */}
      <section className="cases-section" id="cases">
        <div className="container">
          <div className="cases-header">
            <div>
              <h2 className="section-title">Реализованные кейсы</h2>
              <p className="section-desc">Наши реальные истории о том, как мы помогали своим клиентам регистрировать товарные знаки и оформлять права на объекты интеллектуальной собственности</p>
            </div>
            <div className="cases-header-actions">
              <Link href="/cases" className="btn-secondary">Все кейсы
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.16666 10H15.8333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.8333 5L15.8333 10L10.8333 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          <div className="cases-carousel-wrapper">
            <button className="carousel-control prev" onClick={handlePrevCase} disabled={visibleCaseIndex === 0} aria-label="Previous case">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="cases-carousel-container" {...caseSwipeHandlers}>
              <div className="cases-track">
                {visibleCases.map((item) => (
                  <div key={item.logo} className="case-card">
                    <div className={`case-logo-box ${item.logoClass}`}>
                      <span className="case-logo-text">{item.logo}</span>
                    </div>
                    <div className="case-info">
                      <h4 className="case-client">{item.client}</h4>
                      <p className="case-desc">{item.desc}</p>
                    </div>
                    <a href="#consultation" className="case-arrow-btn" onClick={(e) => { e.preventDefault(); onOpenConsult(); }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H9M17 7V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <button className="carousel-control next" onClick={handleNextCase} disabled={visibleCaseIndex >= getMaxCaseIndex()} aria-label="Next case">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section" id="team">
        <div className="container">
          <div className="team-header">
            <h2 className="section-title">Команда экспертов</h2>
            <p className="section-desc">Наша команда — эксперты в сфере IP. Мы берёмся за работу и доводим дело до конца, потому что понимаем ценности вашего бизнеса</p>
          </div>

          <div className="team-slider-wrapper">
            <button className="carousel-control prev" onClick={handlePrevTeam} disabled={visibleTeamIndex === 0} aria-label="Previous slide">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="team-slider-container" {...teamSwipeHandlers}>
              <div 
                className="team-track"
                style={{ 
                  transform: getSliderTranslate(visibleTeamIndex, getVisibleTeamCount()),
                  transition: 'transform 0.4s ease'
                }}
              >
                {/* Member 1 */}
                <div className="team-member-card" style={{ flex: `0 0 calc((100% - ${(getVisibleTeamCount() - 1) * 24}px) / ${getVisibleTeamCount()})` }}>
                  <div className="member-photo-box">
                    <img src="assets/team_lidia.png" alt="Раймм Лидия Вячеславовна" className="member-photo" loading="lazy" />
                  </div>
                  <h4 className="member-name">Раймм Лидия Вячеславовна</h4>
                  <p className="member-role">Генеральный директор</p>
                </div>

                {/* Member 2 */}
                <div className="team-member-card" style={{ flex: `0 0 calc((100% - ${(getVisibleTeamCount() - 1) * 24}px) / ${getVisibleTeamCount()})` }}>
                  <div className="member-photo-box">
                    <img src="assets/team_gennady.png" alt="Золотов Геннадий Борисович" className="member-photo" loading="lazy" />
                  </div>
                  <h4 className="member-name">Золотов Геннадий Борисович</h4>
                  <p className="member-role">Руководитель отдела делопроизводства</p>
                </div>

                {/* Member 3 */}
                <div className="team-member-card" style={{ flex: `0 0 calc((100% - ${(getVisibleTeamCount() - 1) * 24}px) / ${getVisibleTeamCount()})` }}>
                  <div className="member-photo-box">
                    <img src="assets/team_ekaterina.png" alt="Осоргина Екатерина Александровна" className="member-photo" loading="lazy" />
                  </div>
                  <h4 className="member-name">Осоргина Екатерина Александровна</h4>
                  <p className="member-role">Патентный поверенный РФ</p>
                </div>

                {/* Member 4 */}
                <div className="team-member-card" style={{ flex: `0 0 calc((100% - ${(getVisibleTeamCount() - 1) * 24}px) / ${getVisibleTeamCount()})` }}>
                  <div className="member-photo-box">
                    <img src="assets/team_yulia.png" alt="Рачеева Юлия Геннадьевна" className="member-photo" loading="lazy" />
                  </div>
                  <h4 className="member-name">Рачеева Юлия Геннадьевна</h4>
                  <p className="member-role">Патентный поверенный РФ</p>
                </div>

                {/* Member 5 */}
                <div className="team-member-card" style={{ flex: `0 0 calc((100% - ${(getVisibleTeamCount() - 1) * 24}px) / ${getVisibleTeamCount()})` }}>
                  <div className="member-photo-box">
                    <img src="assets/team_alina.png" alt="Пахоменко Алина Аликовна" className="member-photo" loading="lazy" />
                  </div>
                  <h4 className="member-name">Пахоменко Алина Аликовна</h4>
                  <p className="member-role">Адвокат</p>
                </div>

                {/* Member 6 */}
                <div className="team-member-card" style={{ flex: `0 0 calc((100% - ${(getVisibleTeamCount() - 1) * 24}px) / ${getVisibleTeamCount()})` }}>
                  <div className="member-photo-box">
                    <img src="assets/team_alexandr.png" alt="Смирнов Александр Игоревич" className="member-photo" loading="lazy" />
                  </div>
                  <h4 className="member-name">Смирнов Александр Игоревич</h4>
                  <p className="member-role">Ведущий эксперт по IT-решениям</p>
                </div>

                {/* Member 7 */}
                <div className="team-member-card" style={{ flex: `0 0 calc((100% - ${(getVisibleTeamCount() - 1) * 24}px) / ${getVisibleTeamCount()})` }}>
                  <div className="member-photo-box">
                    <img src="assets/team_maria.png" alt="Ковалева Мария Сергеевна" className="member-photo" loading="lazy" />
                  </div>
                  <h4 className="member-name">Ковалева Мария Сергеевна</h4>
                  <p className="member-role">Специалист по международному праву</p>
                </div>

                {/* Member 8 */}
                <div className="team-member-card" style={{ flex: `0 0 calc((100% - ${(getVisibleTeamCount() - 1) * 24}px) / ${getVisibleTeamCount()})` }}>
                  <div className="member-photo-box">
                    <img src="assets/team_dmitry.png" alt="Морозов Дмитрий Владимирович" className="member-photo" loading="lazy" />
                  </div>
                  <h4 className="member-name">Морозов Дмитрий Владимирович</h4>
                  <p className="member-role">Судебный адвокат по авторским правам</p>
                </div>
              </div>
            </div>

            <button className="carousel-control next" onClick={handleNextTeam} disabled={visibleTeamIndex >= getMaxTeamIndex()} aria-label="Next slide">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Forums Section */}
      <section className="forum-section" id="forums">
        <div className="container">
          <div className="forum-header">
            <h2 className="section-title">Мы на форумах</h2>
            <div className="forum-tabs">
              <button className={`forum-tab-btn ${forumTab === 'upcoming' ? 'active' : ''}`} onClick={() => setForumTab('upcoming')}>Будущие</button>
              <button className={`forum-tab-btn ${forumTab === 'past' ? 'active' : ''}`} onClick={() => setForumTab('past')}>Прошедшие</button>
            </div>
          </div>

          <div className="forum-list-container">
            {forumTab === 'upcoming' ? (
              <div className="forum-tab-content active" id="upcoming-events">
                {/* Event Item 1 */}
                <div className="forum-event-item">
                  <div className="forum-expert-info">
                    <img src="assets/team_lidia.png" alt="Раймм Лидия" className="forum-expert-img" />
                    <div>
                      <h4 className="forum-expert-name">Раймм Лидия Вячеславовна</h4>
                      <p className="forum-expert-role">Генеральный директор IPhub</p>
                    </div>
                  </div>
                  <div className="forum-event-details">
                    <h3 className="forum-event-title">Менторская гостиная</h3>
                    <p className="forum-event-desc">Индивидуальная 30-ти минутная сессия с разбором вашего кейса в области защиты товарных знаков и патентования.</p>
                  </div>
                  <div className="forum-event-time">
                    <div className="date-badge">9–10 ноября</div>
                    <div className="time-label">18:00</div>
                  </div>
                </div>

                {/* Event Item 2 */}
                <div className="forum-event-item">
                  <div className="forum-expert-info">
                    <img src="assets/team_gennady.png" alt="Золотов Геннадий" className="forum-expert-img" />
                    <div>
                      <h4 className="forum-expert-name">Золотов Геннадий Борисович</h4>
                      <p className="forum-expert-role">Руководитель отдела делопроизводства</p>
                    </div>
                  </div>
                  <div className="forum-event-details">
                    <h3 className="forum-event-title">Семинар: Защита IT-решений в России</h3>
                    <p className="forum-event-desc">Практический разбор процесса патентования алгоритмов и баз данных. Ошибки и успешные стратегии.</p>
                  </div>
                  <div className="forum-event-time">
                    <div className="date-badge">14 декабря</div>
                    <div className="time-label">14:00</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="forum-tab-content active" id="past-events">
                {/* Past Event 1 */}
                <div className="forum-event-item">
                  <div className="forum-expert-info">
                    <img src="assets/team_gennady.png" alt="Золотов Геннадий" className="forum-expert-img" />
                    <div>
                      <h4 className="forum-expert-name">Золотов Геннадий Борисович</h4>
                      <p className="forum-expert-role">Руководитель отдела делопроизводства</p>
                    </div>
                  </div>
                  <div className="forum-event-details">
                    <h3 className="forum-event-title">WIPO SUMMER SCHOOL — 2021 RUSSIA</h3>
                    <p className="forum-event-desc">Летняя школа Всемирной организации интеллектуальной собственности. Лекция по международным патентным заявкам.</p>
                  </div>
                  <div className="forum-event-time">
                    <div className="date-badge">28 июня – 9 июля</div>
                    <div className="time-label">15:30</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Consultation CTA Section */}
      <section className="consultation-section" id="consultation">
        <div className="container consultation-container">
          <div className="consultation-content">
            <h2 className="consult-title">Оставьте заявку на консультацию и мы вам поможем!</h2>
            <p className="consult-desc">У нас есть решения для всех ваших потребностей в сфере защиты и регистрации интеллектуальной собственности</p>
            
            {!isSuccess ? (
              <form className="consult-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                    <input 
                      type="text" 
                      id="form-name" 
                      value={consultName} 
                      onChange={(e) => setConsultName(e.target.value)}
                      required 
                      placeholder=" "
                    />
                    <label htmlFor="form-name">Ваше имя</label>
                    {errors.name && <span className="form-error-msg">{errors.name}</span>}
                  </div>
                  <div className={`form-group ${errors.phone ? 'has-error' : ''}`}>
                    <input 
                      type="tel" 
                      id="form-phone" 
                      value={consultPhone} 
                      onChange={(e) => setConsultPhone(e.target.value)}
                      required 
                      placeholder=" "
                    />
                    <label htmlFor="form-phone">Номер телефона</label>
                    {errors.phone && <span className="form-error-msg">{errors.phone}</span>}
                  </div>
                </div>
                <div className="form-agreement">
                  <input 
                    type="checkbox" 
                    id="form-agree" 
                    checked={consultAgree}
                    onChange={(e) => setConsultAgree(e.target.checked)}
                    required 
                  />
                  <label htmlFor="form-agree" className={errors.agree ? 'text-error' : ''}>
                    Соглашаюсь на обработку персональных данных в соответствии с политикой конфиденциальности
                  </label>
                  {errors.agree && <span className="form-error-msg" style={{ marginTop: '4px' }}>{errors.agree}</span>}
                </div>
                <button type="submit" className="btn btn-primary form-submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Отправка...' : 'Получить индивидуальную консультацию'}
                </button>
              </form>
            ) : (
              <div className="success-message" id="form-success" style={{ display: 'flex' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#FF4B26"/>
                </svg>
                <div>
                  <h4>Спасибо за заявку!</h4>
                  <p>Наш эксперт свяжется с вами в течение 15 минут.</p>
                </div>
              </div>
            )}
          </div>

          <div className="consultation-visual">
            <img src="assets/cta_chrome_shell.png" alt="Abstract chrome fan" className="chrome-3d-image animated-float" />
          </div>
        </div>
      </section>
    </>
  );
}
