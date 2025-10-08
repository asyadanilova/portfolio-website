import React from 'react'
import { useTranslation } from 'react-i18next'
import Form from '../../Form/Form'
import './Contacts.css'

const Contacts: React.FC = () => {
    const { t } = useTranslation('general')

    return (
        <section id="contact" className="section contact" aria-labelledby="contact-heading">
            <div className="container">
                <h2 id="contact-heading" className="section-title">{t('contacts.title')}</h2>

                <div className="contact__wrapper">
                    <div className="contact__form">
                        <Form preselectedService="transfer" />
                    </div>

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
                        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac47c5af594a72f7807a83c541b76c3e94d016ad0113033e556aa96870807e189&amp;source=constructor"
                            width="100%"
                            height="300"
                            frameBorder="0"></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts;