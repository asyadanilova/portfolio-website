import React from 'react';
import { useTranslation } from 'react-i18next';
import './Requirements.css';

const Requirements: React.FC = () => {
    const { t } = useTranslation('general');

    return (
        <section className="vacancies-requirements">
            <div className="container">
                <div className="requirements-content">
                    <div className="requirements-info">
                        <h2 className="section-title requirements__title">{t('requirements.title')}</h2>
                        <div className="requirements-list">
                            <div className="requirement-item">
                                <i className="fas fa-check-circle requirement-icon"></i>
                                <span className="requirement-text">{t('requirements.license')}</span>
                            </div>
                            <div className="requirement-item">
                                <i className="fas fa-check-circle requirement-icon"></i>
                                <span className="requirement-text">{t('requirements.violations')}</span>
                            </div>
                            <div className="requirement-item">
                                <i className="fas fa-check-circle requirement-icon"></i>
                                <span className="requirement-text">{t('requirements.experience')}</span>
                            </div>
                            <div className="requirement-item">
                                <i className="fas fa-check-circle requirement-icon"></i>
                                <span className="requirement-text">{t('requirements.personality')}</span>
                            </div>
                            <div className="requirement-item">
                                <i className="fas fa-check-circle requirement-icon"></i>
                                <span className="requirement-text">{t('requirements.appearance')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Requirements;