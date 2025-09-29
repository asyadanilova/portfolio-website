import React, { useState } from 'react';
import { useTranslation } from '../../../hooks/useTranslation';
import Modal from '../../Modal/Modal';
import './Services.css';

const Services: React.FC = () => {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOrderClick = (service: string): void => {
        console.log(`Ordering service: ${service}`);
        setIsModalOpen(true);
    };

    const handleCloseModal = (): void => {
        setIsModalOpen(false);
    };

    return (
        <section id="services" className="services">
            <div className="container">
                <div className="services__header">
                    <h2 className="services__title">{t('services.title')}</h2>
                    <p className="services__subtitle">{t('services.subtitle1')}</p>
                    <p className="services__subtitle services__subtitle--accent">{t('services.subtitle2')}</p>
                </div>
                <div className="services__grid">
                    <div className="service-card">
                        <div className="service-card__image-wrapper">
                            <img
                                src="/services/corporate.webp"
                                alt={t('services.employeeTransport.title')}
                                className="service-card__image"
                                width="300"
                                height="200"
                                loading="lazy"
                            />
                        </div>
                        <div className="service-card__content">
                            <h3 className="service-card__title">{t('services.employeeTransport.title')}</h3>
                            <p className="service-card__description">{t('services.employeeTransport.description')}</p>
                            <button
                                className="service-card__btn btn btn--primary"
                                onClick={() => handleOrderClick(t('services.employeeTransport.title'))}
                            >
                                {t('services.employeeTransport.order')}
                            </button>
                        </div>
                    </div>

                    <div className="service-card">
                        <div className="service-card__image-wrapper">
                            <img
                                src="/services/airport1.webp"
                                alt={t('services.guestTransfer.title')}
                                className="service-card__image"
                                width="300"
                                height="200"
                                loading="lazy"
                            />
                        </div>
                        <div className="service-card__content">
                            <h3 className="service-card__title">{t('services.guestTransfer.title')}</h3>
                            <p className="service-card__description">{t('services.guestTransfer.description')}</p>
                            <button
                                className="service-card__btn btn btn--primary"
                                onClick={() => handleOrderClick(t('services.guestTransfer.title'))}
                            >
                                {t('services.guestTransfer.order')}
                            </button>
                        </div>
                    </div>

                    <div className="service-card">
                        <div className="service-card__image-wrapper">
                            <img
                                src="/services/events1.webp"
                                alt={t('services.businessEvents.title')}
                                className="service-card__image"
                                width="300"
                                height="200"
                                loading="lazy"
                            />
                        </div>
                        <div className="service-card__content">
                            <h3 className="service-card__title">{t('services.businessEvents.title')}</h3>
                            <p className="service-card__description">{t('services.businessEvents.description')}</p>
                            <button
                                className="service-card__btn btn btn--primary"
                                onClick={() => handleOrderClick(t('services.businessEvents.title'))}
                            >
                                {t('services.businessEvents.order')}
                            </button>
                        </div>
                    </div>

                    <div className="service-card">
                        <div className="service-card__image-wrapper">
                            <img
                                src="/services/intercity.webp"
                                alt={t('services.intercityTrips.title')}
                                className="service-card__image"
                                width="300"
                                height="200"
                                loading="lazy"
                            />
                        </div>
                        <div className="service-card__content">
                            <h3 className="service-card__title">{t('services.intercityTrips.title')}</h3>
                            <p className="service-card__description">{t('services.intercityTrips.description')}</p>
                            <button
                                className="service-card__btn btn btn--primary"
                                onClick={() => handleOrderClick(t('services.intercityTrips.title'))}
                            >
                                {t('services.intercityTrips.order')}
                            </button>
                        </div>
                    </div>

                    <div className="service-card">
                        <div className="service-card__image-wrapper">
                            <img
                                src="/services/v-class.webp"
                                alt={t('services.corporateEvents.title')}
                                className="service-card__image"
                                width="300"
                                height="200"
                                loading="lazy"
                            />
                        </div>
                        <div className="service-card__content">
                            <h3 className="service-card__title">{t('services.corporateEvents.title')}</h3>
                            <p className="service-card__description">{t('services.corporateEvents.description')}</p>
                            <button
                                className="service-card__btn btn btn--primary"
                                onClick={() => handleOrderClick(t('services.corporateEvents.title'))}
                            >
                                {t('services.corporateEvents.order')}
                            </button>
                        </div>
                    </div>

                    <div className="service-card">
                        <div className="service-card__image-wrapper">
                            <img
                                src="/services/rental.webp"
                                alt={t('services.carRental.title')}
                                className="service-card__image"
                                width="300"
                                height="200"
                                loading="lazy"
                            />
                        </div>
                        <div className="service-card__content">
                            <h3 className="service-card__title">{t('services.carRental.title')}</h3>
                            <p className="service-card__description">{t('services.carRental.description')}</p>
                            <button
                                className="service-card__btn btn btn--primary"
                                onClick={() => handleOrderClick(t('services.carRental.title'))}
                            >
                                {t('services.carRental.order')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                preselectedService="transfer"
            />
        </section>
    )
}

export default Services;