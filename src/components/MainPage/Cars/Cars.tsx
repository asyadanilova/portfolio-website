import React, { useState } from 'react';
import { useTranslation } from '../../../hooks/useTranslation';
import Modal from '../../Modal/Modal';
import './Cars.css';

const Cars: React.FC = () => {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCar, setSelectedCar] = useState<{ name: string; class: string }>({ name: '', class: '' });

    const handleOrderClick = (car: string, carClass: string): void => {
        console.log(`Ordering car: ${car} (${carClass})`);
        setSelectedCar({ name: car, class: carClass });
        setIsModalOpen(true);
    };

    const handleCloseModal = (): void => {
        setIsModalOpen(false);
        setSelectedCar({ name: '', class: '' });
    };

    return (
        <section id="cars" className="cars">
            <div className="container">
                <div className="cars__header">
                    <h2 className="cars__title">{t('cars.title')}</h2>
                    <p className="cars__subtitle">{t('cars.subtitle')}</p>
                </div>
                <div className="cars__grid">
                    <div className="car-card">
                        <div className="car-card__image-container">
                            <img
                                src="/cars/lada.webp"
                                alt={t('cars.vehicles.ladaVesta')}
                                className="car-card__image"
                                width="300"
                                height="200"
                                loading="lazy"
                            />
                        </div>
                        <div className="car-card__content">
                            <h3 className="car-card__title">{t('cars.vehicles.ladaVesta')}</h3>
                            <div className="car-card__class">{t('cars.classes.economy')}</div>
                            <button
                                className="car-card__btn btn btn--primary"
                                onClick={() => handleOrderClick(t('cars.vehicles.ladaVesta'), t('cars.classes.economy'))}
                            >
                                {t('cars.order')}
                            </button>
                        </div>
                    </div>

                    <div className="car-card">
                        <div className="car-card__image-container">
                            <img
                                src="/cars/skoda.webp"
                                alt={t('cars.vehicles.skodaRapid')}
                                className="car-card__image"
                                width="300"
                                height="200"
                                loading="lazy"
                            />
                        </div>
                        <div className="car-card__content">
                            <h3 className="car-card__title">{t('cars.vehicles.skodaRapid')}</h3>
                            <div className="car-card__class">{t('cars.classes.economy')}</div>
                            <button
                                className="car-card__btn btn btn--primary"
                                onClick={() => handleOrderClick(t('cars.vehicles.skodaRapid'), t('cars.classes.economy'))}
                            >
                                {t('cars.order')}
                            </button>
                        </div>
                    </div>

                    <div className="car-card">
                        <div className="car-card__image-container">
                            <img
                                src="/cars/peugeot.webp"
                                alt={t('cars.vehicles.peugeot308')}
                                className="car-card__image"
                                width="300"
                                height="200"
                                loading="lazy"
                            />
                        </div>
                        <div className="car-card__content">
                            <h3 className="car-card__title">{t('cars.vehicles.peugeot308')}</h3>
                            <div className="car-card__class">{t('cars.classes.comfort')}</div>
                            <button
                                className="car-card__btn btn btn--primary"
                                onClick={() => handleOrderClick(t('cars.vehicles.peugeot308'), t('cars.classes.comfort'))}
                            >
                                {t('cars.order')}
                            </button>
                        </div>
                    </div>

                    <div className="car-card">
                        <div className="car-card__image-container">
                            <img
                                src="/cars/kia.webp"
                                alt={t('cars.vehicles.kiaK5')}
                                className="car-card__image"
                                width="300"
                                height="200"
                                loading="lazy"
                            />
                        </div>
                        <div className="car-card__content">
                            <h3 className="car-card__title">{t('cars.vehicles.kiaK5')}</h3>
                            <div className="car-card__class">{t('cars.classes.comfort')}</div>
                            <button
                                className="car-card__btn btn btn--primary"
                                onClick={() => handleOrderClick(t('cars.vehicles.kiaK5'), t('cars.classes.comfort'))}
                            >
                                {t('cars.order')}
                            </button>
                        </div>
                    </div>

                    <div className="car-card">
                        <div className="car-card__image-container">
                            <img
                                src="/cars/bmw-5.webp"
                                alt={t('cars.vehicles.bmw5Series')}
                                className="car-card__image"
                                width="300"
                                height="200"
                                loading="lazy"
                            />
                        </div>
                        <div className="car-card__content">
                            <h3 className="car-card__title">{t('cars.vehicles.bmw5Series')}</h3>
                            <div className="car-card__class">{t('cars.classes.business')}</div>
                            <button
                                className="car-card__btn btn btn--primary"
                                onClick={() => handleOrderClick(t('cars.vehicles.bmw5Series'), t('cars.classes.business'))}
                            >
                                {t('cars.order')}
                            </button>
                        </div>
                    </div>

                    <div className="car-card">
                        <div className="car-card__image-container">
                            <img
                                src="/cars/mercedes-e.webp"
                                alt={t('cars.vehicles.mercedesEClass')}
                                className="car-card__image"
                                width="300"
                                height="200"
                                loading="lazy"
                            />
                        </div>
                        <div className="car-card__content">
                            <h3 className="car-card__title">{t('cars.vehicles.mercedesEClass')}</h3>
                            <div className="car-card__class">{t('cars.classes.business')}</div>
                            <button
                                className="car-card__btn btn btn--primary"
                                onClick={() => handleOrderClick(t('cars.vehicles.mercedesEClass'), t('cars.classes.business'))}
                            >
                                {t('cars.order')}
                            </button>
                        </div>
                    </div>

                    <div className="car-card">
                        <div className="car-card__image-container">
                            <img
                                src="/cars/mercedes-s.webp"
                                alt={t('cars.vehicles.mercedesSClass')}
                                className="car-card__image"
                                width="300"
                                height="200"
                                loading="lazy"
                            />
                        </div>
                        <div className="car-card__content">
                            <h3 className="car-card__title">{t('cars.vehicles.mercedesSClass')}</h3>
                            <div className="car-card__class">{t('cars.classes.premium')}</div>
                            <button
                                className="car-card__btn btn btn--primary"
                                onClick={() => handleOrderClick(t('cars.vehicles.mercedesSClass'), t('cars.classes.premium'))}
                            >
                                {t('cars.order')}
                            </button>
                        </div>
                    </div>

                    <div className="car-card">
                        <div className="car-card__image-container">
                            <img
                                src="/cars/bmw-7.webp"
                                alt={t('cars.vehicles.bmw7Series')}
                                className="car-card__image"
                                width="300"
                                height="200"
                                loading="lazy"
                            />
                        </div>
                        <div className="car-card__content">
                            <h3 className="car-card__title">{t('cars.vehicles.bmw7Series')}</h3>
                            <div className="car-card__class">{t('cars.classes.premium')}</div>
                            <button
                                className="car-card__btn btn btn--primary"
                                onClick={() => handleOrderClick(t('cars.vehicles.bmw7Series'), t('cars.classes.premium'))}
                            >
                                {t('cars.order')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                preselectedService="transfer"
                restrictedServices={['transfer']}
                contextInfo={selectedCar.name ? `Interested in: ${selectedCar.name} (${selectedCar.class})` : undefined}
            />
        </section>)
}

export default Cars;