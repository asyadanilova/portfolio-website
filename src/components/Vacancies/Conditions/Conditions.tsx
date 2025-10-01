import React from 'react';
import { useTranslation } from 'react-i18next';
import './Conditions.css';

const Conditions: React.FC = () => {
    const { t } = useTranslation('general');

    return (
        <section className="vacancies-conditions">
            <div className="container">
                <h2 className="section-title conditions__title">{t('conditions.title')}</h2>
                <div className="conditions-grid">
                    <div className="condition-card">
                        <div className="condition-card__icon">
                            <i className="fas fa-money-bill-wave"></i>
                        </div>
                        <h3 className="condition-card__title">{t('conditions.financial.title')}</h3>
                        <ul className="condition-card__list">
                            <li className="condition-card__item">{t('conditions.financial.income')}</li>
                            <li className="condition-card__item">{t('conditions.financial.daily')}</li>
                            <li className="condition-card__item">{t('conditions.financial.bonuses')}</li>
                            <li className="condition-card__item">{t('conditions.financial.records')}</li>
                        </ul>
                    </div>
                    <div className="condition-card">
                        <div className="condition-card__icon">
                            <i className="fas fa-car"></i>
                        </div>
                        <h3 className="condition-card__title">{t('conditions.work.title')}</h3>
                        <ul className="condition-card__list">
                            <li className="condition-card__item">{t('conditions.work.schedule')}</li>
                            <li className="condition-card__item">{t('conditions.work.cars')}</li>
                            <li className="condition-card__item">{t('conditions.work.corporate')}</li>
                            <li className="condition-card__item">{t('conditions.work.support')}</li>
                        </ul>
                    </div>
                    <div className="condition-card">
                        <div className="condition-card__icon">
                            <i className="fas fa-clipboard-list"></i>
                        </div>
                        <h3 className="condition-card__title">{t('conditions.social.title')}</h3>
                        <ul className="condition-card__list">
                            <li className="condition-card__item">{t('conditions.social.employment')}</li>
                            <li className="condition-card__item">{t('conditions.social.insurance')}</li>
                            <li className="condition-card__item">{t('conditions.social.vacation')}</li>
                            <li className="condition-card__item">{t('conditions.social.training')}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Conditions;