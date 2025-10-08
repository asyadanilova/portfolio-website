import React, { useState, useEffect } from 'react';
import { useTranslation } from '../../../hooks/useTranslation';
import Modal from '../../Modal/Modal';
import './HeroSection.css';

const HeroSection: React.FC = () => {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openFeedbackForm = (): void => {
        setIsModalOpen(true);
    };

    const closeModal = (): void => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isModalOpen) {
                closeModal();
            }
        };

        if (isModalOpen) {
            document.addEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        e.preventDefault();
        openFeedbackForm();
    };

    return (
        <section className="hero">
            <div className="hero__background">
                <div className="hero__overlay"></div>
            </div>
            <div className="container">
                <div className="hero__wrapper">
                    <div className="hero__content">
                        <h1 className="hero__title">{t('hero.title')}</h1>
                        <p className="hero__description">{t('hero.description')}</p>
                        <div className="hero__actions">
                            <a
                                href="#contact"
                                className="btn hero__btn hero__btn--primary"
                                onClick={handleContactClick}
                            >
                                {t('hero.orderTransfer')}
                            </a>
                            <a
                                href="tel:+375297041455"
                                className="btn hero__btn hero__btn--secondary"
                            >
                                <i className="fas fa-phone" aria-hidden="true"></i>
                                {t('hero.callNow')}
                            </a>
                        </div>
                        <div className="hero__features">
                            <div className="hero__feature">
                                <i className="fas fa-clock" aria-hidden="true"></i>
                                <span>{t('hero.feature24h')}</span>
                            </div>
                            <div className="hero__feature">
                                <i className="fas fa-shield-alt" aria-hidden="true"></i>
                                <span>{t('hero.featureReliable')}</span>
                            </div>
                            <div className="hero__feature">
                                <i className="fas fa-car" aria-hidden="true"></i>
                                <span>{t('hero.featureComfort')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={isModalOpen} preselectedService="transfer" onClose={closeModal} />
        </section>
    )
};

export default HeroSection;