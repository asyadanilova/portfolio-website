import React from 'react';
import { useTranslation } from 'react-i18next';
import './HeroSection.css';

const VacanciesHero: React.FC = () => {
    const { t } = useTranslation('general');

    const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const formElement = document.getElementById('vacancy-form');
        if (formElement) {
            const headerHeight = 90;
            const elementPosition = formElement.offsetTop - headerHeight;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="vacancies-hero">
            <div className="vacancies-hero__background"></div>
            <div className="vacancies-hero__overlay"></div>

            <div className="container">
                <div className="vacancies-hero__content">
                    <div className="vacancies-hero__logo">
                        <img
                            src="/logo/logo-gold.webp"
                            alt={t('vacanciesHero.logoAlt')}
                            className="vacancies-hero__logo-img"
                        />
                    </div>

                    <h1 className="vacancies-hero__title">
                        {t('vacanciesHero.title')}
                    </h1>

                    <p className="vacancies-hero__subtitle">
                        {t('vacanciesHero.subtitle')}
                    </p>

                    <a
                        href="#vacancy-form"
                        className="hero__btn vacancies-hero__btn"
                        onClick={handleScrollToForm}
                    >
                        {t('vacanciesHero.applyButton')}
                    </a>
                </div>
            </div>
        </section>
    )
}

export default VacanciesHero;