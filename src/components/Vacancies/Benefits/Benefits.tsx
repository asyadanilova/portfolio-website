import React from 'react';
import { useTranslation } from 'react-i18next';
import './Benefits.css';

const Benefits: React.FC = () => {
    const { t } = useTranslation('general');

    return (
        <section className="vacancies-benefits">
            <div className="container">
                <h2 className="section-title benefits__title">{t('benefits.title')}</h2>
                <div className="benefits-grid">
                    <div className="benefit-card">
                        <div className="benefit-icon">
                            <i className="fas fa-money-bill-wave"></i>
                        </div>
                        <h3 className="benefit-card__title">{t('benefits.income.title')}</h3>
                        <p className="benefit-card__description">{t('benefits.income.description')}</p>
                    </div>
                    <div className="benefit-card">
                        <div className="benefit-icon">
                            <i className="fas fa-car"></i>
                        </div>
                        <h3 className="benefit-card__title">{t('benefits.cars.title')}</h3>
                        <p className="benefit-card__description">{t('benefits.cars.description')}</p>
                    </div>
                    <div className="benefit-card">
                        <div className="benefit-icon">
                            <i className="fas fa-shield-alt"></i>
                        </div>
                        <h3 className="benefit-card__title">{t('benefits.employment.title')}</h3>
                        <p className="benefit-card__description">{t('benefits.employment.description')}</p>
                    </div>
                    <div className="benefit-card">
                        <div className="benefit-icon">
                            <i className="fas fa-chart-line"></i>
                        </div>
                        <h3 className="benefit-card__title">{t('benefits.career.title')}</h3>
                        <p className="benefit-card__description">{t('benefits.career.description')}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefits;