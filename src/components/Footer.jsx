'use client';
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand-column">
          <Link href="/" className="logo footer-logo">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" stroke="url(#logo-grad-f)" strokeWidth="2.5"/>
              <path d="M14 11H19.5C21.9853 11 24 13.0147 24 15.5C24 17.9853 21.9853 20 19.5 20H16V29H14V11ZM16 13V18H19.5C20.8807 18 22 16.8807 22 15.5C22 14.1193 20.8807 13 19.5 13H16Z" fill="white"/>
              <rect x="25" y="11" width="2" height="18" fill="#FF4B26"/>
              <defs>
                <linearGradient id="logo-grad-f" x1="2" y1="2" x2="38" y2="38" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF4B26" />
                  <stop offset="1" stopColor="#FF8A71" />
                </linearGradient>
              </defs>
            </svg>
            <span className="logo-text">IP<span>hub</span></span>
          </Link>
          <p className="footer-company-desc">Общество с ограниченной ответственностью «Центр интеллектуальной собственности и инноваций „АйПиХаб“»</p>
          <div className="footer-requisites">
            <p>123317, г. Москва, Пресненская наб., д.8, стр. 1, эт. 3, п. 1, оф. 10</p>
            <p className="requisites-numbers"><span>ИНН: 7703472433</span> <span>КПП: 770301001</span></p>
          </div>
        </div>

        <div className="footer-links-columns">
          {/* Nav */}
          <div className="footer-column">
            <h4 className="footer-col-title">Навигация по сайту</h4>
            <ul className="footer-links-list">
              <li><Link href="/services">Услуги</Link></li>
              <li><Link href="/cases">Кейсы</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="footer-column">
            <h4 className="footer-col-title">Наши контакты</h4>
            <ul className="footer-links-list">
              <li><a href="mailto:example@iphub.com" className="contact-link">example@iphub.com</a></li>
              <li><a href="tel:+78888888888" className="contact-link phone">+7 (888) 888 88 88</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="footer-column">
            <h4 className="footer-col-title">Мы в соцсетях</h4>
            <ul className="footer-links-list">
              <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>

          {/* Map / Location */}
          <div className="footer-column">
            <h4 className="footer-col-title">Как добраться</h4>
            <ul className="footer-links-list">
              <li><a href="https://yandex.ru/maps" target="_blank" rel="noopener noreferrer" className="map-link">Схема проезда</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <span className="copyright">© 2021 IPhub. Все права защищены.</span>
          <div className="footer-legal-links">
            <a href="#">Публичная оферта</a>
            <a href="#">Пользовательское соглашение</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
