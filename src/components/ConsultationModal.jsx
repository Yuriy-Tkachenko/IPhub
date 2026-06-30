'use client';
import React, { useState } from 'react';

export default function ConsultationModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [agree, setAgree] = useState(true);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!name.trim()) {
      errs.name = 'Имя обязательно';
    } else if (name.trim().length < 2) {
      errs.name = 'Имя должно быть не менее 2 символов';
    } else if (!/^[a-zA-Zа-яА-ЯёЁ\s\-]+$/.test(name)) {
      errs.name = 'Только буквы';
    }

    const digitsOnly = phone.replace(/\D/g, '');
    if (!phone.trim()) {
      errs.phone = 'Телефон обязателен';
    } else if (digitsOnly.length < 10) {
      errs.phone = 'Некорректный номер телефона';
    }

    if (!agree) {
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
        setName('');
        setPhone('');
        setAgree(true);
        setErrors({});
        onClose();
      }, 3000);
    }, 1200);
  };

  return (
    <div className="modal active" id="consultation-modal">
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-body">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">&times;</button>
        
        {!isSuccess ? (
          <>
            <h3 className="modal-title">Заявка на индивидуальную консультацию</h3>
            <p className="modal-desc">Оставьте свои контакты, и наш юрист свяжется с вами для подробного разбора вашего вопроса.</p>
            <form className="modal-form" onSubmit={handleSubmit}>
              <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                <input 
                  type="text" 
                  id="modal-name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder=" " 
                />
                <label htmlFor="modal-name">Ваше имя</label>
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              <div className={`form-group ${errors.phone ? 'has-error' : ''}`}>
                <input 
                  type="tel" 
                  id="modal-phone" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder=" " 
                />
                <label htmlFor="modal-phone">Номер телефона</label>
                {errors.phone && <span className="error-text">{errors.phone}</span>}
              </div>

              <div className="form-agreement">
                <input 
                  type="checkbox" 
                  id="modal-agree" 
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                />
                <label htmlFor="modal-agree">Соглашаюсь на обработку персональных данных</label>
                {errors.agree && <span className="error-text" style={{ display: 'block', color: '#ff4b26', fontSize: '12px', marginTop: '4px' }}>{errors.agree}</span>}
              </div>

              <button type="submit" className="btn btn-primary form-submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
              </button>
            </form>
          </>
        ) : (
          <div className="success-message" style={{ display: 'flex' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#FF4B26"/>
            </svg>
            <div>
              <h4>Успешно отправлено!</h4>
              <p>Наш менеджер свяжется с вами в течение нескольких минут.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
