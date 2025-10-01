import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '../../../hooks/useTranslation';
import './VacancyOffer.css';

const VacancyOffer: React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <section id="vacancies" className="vacancy">
            <div className="vacancy__background">
                <div className="vacancy__overlay"></div>
            </div>
            <div className="container">
                <div className="vacancy__content">
                    <div className="vacancy__info">
                        <h2 className="vacancy__title">{t('vacancy.title')}</h2>
                        <p className="vacancy__description">{t('vacancy.description')}</p>

                        <ul className="vacancy__benefits">
                            <li className="vacancy__benefit">
                                <i className="fas fa-check-circle" aria-hidden="true"></i>
                                <span>{t('vacancy.benefits.registration')}</span>
                            </li>
                            <li className="vacancy__benefit">
                                <i className="fas fa-check-circle" aria-hidden="true"></i>
                                <span>{t('vacancy.benefits.employment')}</span>
                            </li>
                            <li className="vacancy__benefit">
                                <i className="fas fa-check-circle" aria-hidden="true"></i>
                                <span>{t('vacancy.benefits.fleet')}</span>
                            </li>
                            <li className="vacancy__benefit">
                                <i className="fas fa-check-circle" aria-hidden="true"></i>
                                <span>{t('vacancy.benefits.schedule')}</span>
                            </li>
                            <li className="vacancy__benefit">
                                <i className="fas fa-check-circle" aria-hidden="true"></i>
                                <span>{t('vacancy.benefits.bonuses')}</span>
                            </li>
                        </ul>

                        <button
                            className="vacancy__btn btn btn--primary btn--large"
                            onClick={() => navigate('/vacancies')}
                        >
                            {t('vacancy.applyButton')}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default VacancyOffer;