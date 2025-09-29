import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './Contacts.css'

const Contacts: React.FC = () => {
    const { t } = useTranslation('general')
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: '',
        message: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
    }

    return (
        <section id="contact" className="section contact" aria-labelledby="contact-heading">
            <div className="container">
                <h2 id="contact-heading" className="section-title">{t('contacts.title')}</h2>

                <div className="contact__wrapper">
                    <form id="mainFeedbackForm" className="form contact__form" onSubmit={handleSubmit} aria-labelledby="form-heading">
                        <h3 id="form-heading" className="form-title">{t('contacts.form.title')}</h3>

                        <div className="form-group">
                            <label htmlFor="name" className="form-group__label sr-only">{t('contacts.form.name')}</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-group__input"
                                placeholder={`${t('contacts.form.name')}*`}
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                aria-required="true"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone" className="form-group__label sr-only">{t('contacts.form.phone')}</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="form-group__input"
                                placeholder={`${t('contacts.form.phone')}*`}
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                                aria-required="true"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="service" className="form-group__label sr-only">{t('contacts.form.service')}</label>
                            <select
                                id="service"
                                name="service"
                                className="form-group__select"
                                value={formData.service}
                                onChange={handleInputChange}
                                required
                                aria-required="true"
                            >
                                <option value="" disabled hidden>{t('contacts.form.services.placeholder')}</option>
                                <option value="transfer">{t('contacts.form.services.transfer')}</option>
                                <option value="vacancy">{t('contacts.form.services.vacancy')}</option>
                                <option value="other">{t('contacts.form.services.other')}</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message" className="form-group__label sr-only">{t('contacts.form.message')}</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="form-group__textarea"
                                placeholder={t('contacts.form.message')}
                                value={formData.message}
                                onChange={handleInputChange}
                                aria-label={t('contacts.form.message')}
                            ></textarea>
                        </div>

                        <div className="form-submit">
                            <button type="submit" aria-label={t('contacts.form.submit')}>
                                {t('contacts.form.submit')}
                            </button>
                        </div>
                    </form>

                    <aside className="contact__info" aria-labelledby="info-heading">
                        <h3 id="info-heading" className="info-title">{t('contacts.info.title')}</h3>

                        <address className="contact__details">
                            <div className="info-item">
                                <span className="info-item__icon" aria-hidden="true">
                                    <i className="fas fa-map-marker-alt"></i>
                                </span>
                                <p className="info-item__text">{t('contacts.info.address')}</p>
                            </div>

                            <div className="info-item">
                                <span className="info-item__icon" aria-hidden="true">
                                    <i className="fas fa-phone"></i>
                                </span>
                                <p className="info-item__text">
                                    <a href="tel:+375297041455" className="contact-link">{t('contacts.info.phone.general')}</a> - {t('contacts.info.phone.generalLabel')}
                                </p>
                            </div>

                            <div className="info-item">
                                <span className="info-item__icon" aria-hidden="true">
                                    <i className="fas fa-envelope"></i>
                                </span>
                                <p className="info-item__text">
                                    <a href="mailto:info@bvetra.by" className="contact-link">{t('contacts.info.email')}</a>
                                </p>
                            </div>

                            <div className="info-item">
                                <span className="info-item__icon" aria-hidden="true">
                                    <i className="fas fa-share-alt"></i>
                                </span>
                                <div className="contact__social">
                                    <span className="contact__social-text">{t('contacts.info.social.text')}</span>
                                    <div className="contact__social-icons">
                                        <a href="https://t.me/bvetra_by" className="contact__social-link" target="_blank" rel="noopener noreferrer" aria-label={t('contacts.info.social.telegram')}>
                                            <i className="fab fa-telegram"></i>
                                        </a>
                                        <a href="https://instagram.com/bvet.ra" className="contact__social-link" target="_blank" rel="noopener noreferrer" aria-label={t('contacts.info.social.instagram')}>
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                        <a href="https://tiktok.com/@bvetra.by" className="contact__social-link" target="_blank" rel="noopener noreferrer" aria-label={t('contacts.info.social.tiktok')}>
                                            <i className="fab fa-tiktok"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="info-item">
                                <span className="info-item__icon" aria-hidden="true">
                                    <i className="fas fa-clock"></i>
                                </span>
                                <p className="info-item__text">{t('contacts.info.hours')}</p>
                            </div>
                        </address>
                    </aside>
                </div>

                <div className="contact__map-section">
                    <div className="map" aria-label="Карта расположения офиса">
                        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A1a2b3c4d5e6f7g8h9i0j&amp;source=constructor"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            title="Карта расположения офиса компании"
                            aria-label="Интерактивная карта с расположением офиса">
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts;