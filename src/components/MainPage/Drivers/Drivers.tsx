import React from 'react';
import { useTranslation } from '../../../hooks/useTranslation';
import './Drivers.css';

const Drivers: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="drivers" className="drivers">
            <div className="container">
                <div className="drivers__header">
                    <h2 className="drivers__title">{t('drivers.title')}</h2>
                </div>

                <div className="drivers__content">
                    <div className="drivers__description">
                        <p>{t('drivers.description1')}</p>
                        <p>{t('drivers.description2')}</p>
                    </div>

                    <div className="drivers__features">
                        <h3 className="drivers__features-title">{t('drivers.featuresTitle')}</h3>
                        <ul className="drivers__features-list">
                            <li className="drivers__feature">
                                <i className="fas fa-check-circle" aria-hidden="true"></i>
                                <span>{t('drivers.features.training')}</span>
                            </li>
                            <li className="drivers__feature">
                                <i className="fas fa-check-circle" aria-hidden="true"></i>
                                <span>{t('drivers.features.experience')}</span>
                            </li>
                            <li className="drivers__feature">
                                <i className="fas fa-check-circle" aria-hidden="true"></i>
                                <span>{t('drivers.features.standards')}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="drivers__team">
                    <h3 className="drivers__team-title">{t('drivers.teamTitle')}</h3>

                    <div className="drivers__grid">
                        <div className="driver-card">
                            <div className="driver-card__image-wrapper">
                                <img
                                    src="/drivers/driver1.webp"
                                    alt={`${t('drivers.drivers.mikhail')} - Driver`}
                                    className="driver-card__image"
                                    width="150"
                                    height="150"
                                    loading="lazy"
                                />
                            </div>
                            <div className="driver-card__content">
                                <h4 className="driver-card__name">{t('drivers.drivers.mikhail')}</h4>
                                <p className="driver-card__stats">
                                    <span>12 {t('drivers.years')}</span> | <span>5.0★</span>
                                </p>
                            </div>
                        </div>

                        <div className="driver-card">
                            <div className="driver-card__image-wrapper">
                                <img
                                    src="/drivers/driver2.webp"
                                    alt={`${t('drivers.drivers.dmitry')} - Driver`}
                                    className="driver-card__image"
                                    width="150"
                                    height="150"
                                    loading="lazy"
                                />
                            </div>
                            <div className="driver-card__content">
                                <h4 className="driver-card__name">{t('drivers.drivers.dmitry')}</h4>
                                <p className="driver-card__stats">
                                    <span>8 {t('drivers.years')}</span> | <span>4.9★</span>
                                </p>
                            </div>
                        </div>

                        <div className="driver-card">
                            <div className="driver-card__image-wrapper">
                                <img
                                    src="/drivers/driver1.webp"
                                    alt={`${t('drivers.drivers.anna')} - Driver`}
                                    className="driver-card__image"
                                    width="150"
                                    height="150"
                                    loading="lazy"
                                />
                            </div>
                            <div className="driver-card__content">
                                <h4 className="driver-card__name">{t('drivers.drivers.anna')}</h4>
                                <p className="driver-card__stats">
                                    <span>8 {t('drivers.years')}</span> | <span>5.0★</span>
                                </p>
                            </div>
                        </div>

                        <div className="driver-card">
                            <div className="driver-card__image-wrapper">
                                <img
                                    src="/drivers/driver4.webp"
                                    alt={`${t('drivers.drivers.sergey')} - Driver`}
                                    className="driver-card__image"
                                    width="150"
                                    height="150"
                                    loading="lazy"
                                />
                            </div>
                            <div className="driver-card__content">
                                <h4 className="driver-card__name">{t('drivers.drivers.sergey')}</h4>
                                <p className="driver-card__stats">
                                    <span>8 {t('drivers.years')}</span> | <span>4.9★</span>
                                </p>
                            </div>
                        </div>

                        <div className="driver-card">
                            <div className="driver-card__image-wrapper">
                                <img
                                    src="/drivers/driver2.webp"
                                    alt={`${t('drivers.drivers.aleksey')} - Driver`}
                                    className="driver-card__image"
                                    width="150"
                                    height="150"
                                    loading="lazy"
                                />
                            </div>
                            <div className="driver-card__content">
                                <h4 className="driver-card__name">{t('drivers.drivers.aleksey')}</h4>
                                <p className="driver-card__stats">
                                    <span>7 {t('drivers.years')}</span> | <span>4.8★</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Drivers;