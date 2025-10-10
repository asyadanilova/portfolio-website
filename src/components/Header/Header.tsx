import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "../../hooks/useTranslation";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import "./Header.css";

const Header: React.FC = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [pendingScrollTarget, setPendingScrollTarget] = useState<string | null>(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const scrollToSection = (targetId: string) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const headerHeight = 90;
            const elementPosition = targetElement.offsetTop - headerHeight;

            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        closeMobileMenu();

        if (location.pathname !== '/') {
            setPendingScrollTarget(targetId);
            navigate('/');
        } else {
            scrollToSection(targetId);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (location.pathname === '/' && pendingScrollTarget) {
            const timer = setTimeout(() => {
                scrollToSection(pendingScrollTarget);
                setPendingScrollTarget(null);
            }, 300);

            return () => clearTimeout(timer);
        }
    }, [location.pathname, pendingScrollTarget]);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <header className={`header ${isMobileMenuOpen ? 'header--mobile-open' : ''}`}>
                <div className="container header__container">
                    {/* Mobile burger menu - left side */}
                    <button
                        className={`burger-menu ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={toggleMobileMenu}
                        aria-label={isMobileMenuOpen ? t('closeMobileMenu') : t('openMobileMenu')}
                        aria-expanded={isMobileMenuOpen}
                    >
                        <i className="fas fa-bars burger-icon" aria-hidden="true"></i>
                    </button>

                    {/* Desktop navigation and logo - center/left */}
                    <Link to="/" className="logo desktop-logo">
                        <img
                            src="/logo/logo.webp"
                            alt={t('logoAlt')}
                            className="logo__img"
                            width="100"
                            height="20"
                        />
                    </Link>

                    <nav className="nav desktop-nav" aria-label={t('mainMenuAriaLabel')}>
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a
                                    href="#about"
                                    className="nav__link"
                                    onClick={(e) => handleNavLinkClick(e, 'about')}
                                >
                                    {t('nav.about')}
                                </a>
                            </li>
                            <li className="nav__item">
                                <a
                                    href="#services"
                                    className="nav__link"
                                    onClick={(e) => handleNavLinkClick(e, 'services')}
                                >
                                    {t('nav.services')}
                                </a>
                            </li>
                            <li className="nav__item">
                                <a
                                    href="#cars"
                                    className="nav__link"
                                    onClick={(e) => handleNavLinkClick(e, 'cars')}
                                >
                                    {t('nav.fleet')}
                                </a>
                            </li>
                            <li className="nav__item">
                                <a
                                    href="#drivers"
                                    className="nav__link"
                                    onClick={(e) => handleNavLinkClick(e, 'drivers')}
                                >
                                    {t('nav.drivers')}
                                </a>
                            </li>
                            <li className="nav__item">
                                <a
                                    href="#vacancies"
                                    className="nav__link"
                                    onClick={(e) => handleNavLinkClick(e, 'vacancies')}
                                >
                                    {t('nav.vacancies')}
                                </a>
                            </li>
                            <li className="nav__item">
                                <a
                                    href="#contact"
                                    className="nav__link"
                                    onClick={(e) => handleNavLinkClick(e, 'contact')}
                                >
                                    {t('nav.contact')}
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {/* Desktop header right section */}
                    <div className="header-right">
                        <div className="phone desktop-phone">
                            <i className="fas fa-phone phone__icon" aria-hidden="true"></i>
                            <a href="tel:+375297041455" className="phone__link">+375 (29) 704-14-55</a>
                        </div>

                        <div className="social-icons desktop-social">
                            <a
                                href="https://t.me/Yana_BVetra"
                                className="social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Telegram"
                            >
                                <i className="fab fa-telegram" aria-hidden="true"></i>
                            </a>
                            <a
                                href="https://instagram.com/bvet.ra"
                                className="social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <i className="fab fa-instagram" aria-hidden="true"></i>
                            </a>
                            <a
                                href="https://tiktok.com/@bvetra.by"
                                className="social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="TikTok"
                            >
                                <i className="fab fa-tiktok" aria-hidden="true"></i>
                            </a>
                        </div>

                        <div className="desktop-language-switcher">
                            <LanguageSwitcher />
                        </div>
                    </div>

                    {/* Mobile logo - right side */}
                    <Link to="/" className="logo mobile-logo" onClick={closeMobileMenu}>
                        <img
                            src="/logo/logo.webp"
                            alt={t('logoAlt')}
                            className="logo__img"
                            width="100"
                            height="20"
                        />
                    </Link>
                </div>
            </header>

            <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
                <nav className="mobile-nav-content" aria-label={t('mobileMenuAriaLabel')}>
                    <ul className="mobile-nav__list">
                        <li className="mobile-nav__item">
                            <a
                                href="#about"
                                className="mobile-nav__link"
                                onClick={(e) => handleNavLinkClick(e, 'about')}
                            >
                                {t('nav.about')}
                            </a>
                        </li>
                        <li className="mobile-nav__item">
                            <a
                                href="#services"
                                className="mobile-nav__link"
                                onClick={(e) => handleNavLinkClick(e, 'services')}
                            >
                                {t('nav.services')}
                            </a>
                        </li>
                        <li className="mobile-nav__item">
                            <a
                                href="#cars"
                                className="mobile-nav__link"
                                onClick={(e) => handleNavLinkClick(e, 'cars')}
                            >
                                {t('nav.fleet')}
                            </a>
                        </li>
                        <li className="mobile-nav__item">
                            <a
                                href="#drivers"
                                className="mobile-nav__link"
                                onClick={(e) => handleNavLinkClick(e, 'drivers')}
                            >
                                {t('nav.drivers')}
                            </a>
                        </li>
                        <li className="mobile-nav__item">
                            <a
                                href="#vacancies"
                                className="mobile-nav__link"
                                onClick={(e) => handleNavLinkClick(e, 'vacancies')}
                            >
                                {t('nav.vacancies')}
                            </a>
                        </li>
                        <li className="mobile-nav__item">
                            <a
                                href="#contact"
                                className="mobile-nav__link"
                                onClick={(e) => handleNavLinkClick(e, 'contact')}
                            >
                                {t('nav.contact')}
                            </a>
                        </li>
                    </ul>

                    <div className="mobile-contact-info">
                        <div className="mobile-phone">
                            <i className="fas fa-phone phone__icon" aria-hidden="true"></i>
                            <a href="tel:+375297041455" className="phone__link">+375 (29) 704-14-55</a>
                        </div>

                        <div className="mobile-social-icons">
                            <a
                                href="https://t.me/your_telegram"
                                className="social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Telegram"
                            >
                                <i className="fab fa-telegram" aria-hidden="true"></i>
                            </a>
                            <a
                                href="https://instagram.com/bvet.ra"
                                className="social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <i className="fab fa-instagram" aria-hidden="true"></i>
                            </a>
                            <a
                                href="https://tiktok.com/@bvetra.by"
                                className="social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="TikTok"
                            >
                                <i className="fab fa-tiktok" aria-hidden="true"></i>
                            </a>
                        </div>

                        <div className="mobile-language-switcher">
                            <LanguageSwitcher />
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;