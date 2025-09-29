import React from 'react';
import { useTranslation } from '../../../hooks/useTranslation';
import './About.css';

const About: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="about" id="about">
            <div className="container">
                <div className="about__header">
                    <h2 className="about__title">{t('about.title')}</h2>
                </div>

                <div className="about__content">
                    <div className="about__text">
                        <div className="about__description">
                            <p>{t('about.paragraph1')}</p>
                            <p>{t('about.paragraph2')}</p>
                            <p>{t('about.paragraph3')}</p>
                        </div>
                    </div>

                    <div className="about__features">
                        <div className="about__feature">
                            <div className="about__feature-icon">
                                <i className="fas fa-shield-alt" aria-hidden="true"></i>
                            </div>
                            <div className="about__feature-content">
                                <h3 className="about__feature-title">{t('about.features.quality.title')}</h3>
                                <p className="about__feature-description">{t('about.features.quality.description')}</p>
                            </div>
                        </div>

                        <div className="about__feature">
                            <div className="about__feature-icon">
                                <i className="fas fa-clock" aria-hidden="true"></i>
                            </div>
                            <div className="about__feature-content">
                                <h3 className="about__feature-title">{t('about.features.punctuality.title')}</h3>
                                <p className="about__feature-description">{t('about.features.punctuality.description')}</p>
                            </div>
                        </div>

                        <div className="about__feature">
                            <div className="about__feature-icon">
                                <i className="fas fa-handshake" aria-hidden="true"></i>
                            </div>
                            <div className="about__feature-content">
                                <h3 className="about__feature-title">{t('about.features.reliability.title')}</h3>
                                <p className="about__feature-description">{t('about.features.reliability.description')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;