import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { getAvailableLanguages, Language } from '../../i18n/utils';
import { SupportedLanguages } from '../../i18n';
import './LanguageSwitcher.css';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();
    const languages: Language[] = getAvailableLanguages();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

    const changeLanguage = (langCode: SupportedLanguages): void => {
        i18n.changeLanguage(langCode);
        setIsOpen(false);
    };

    const toggleDropdown = (): void => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="language-switcher" ref={dropdownRef}>
            <button
                className="lang-dropdown-btn"
                onClick={toggleDropdown}
                aria-haspopup="true"
                aria-expanded={isOpen}
                aria-label="Select language"
            >
                <span className="current-lang">
                    {currentLanguage.code.toUpperCase()}
                </span>
                <i className={`fas fa-chevron-down dropdown-arrow ${isOpen ? 'rotated' : ''}`}></i>
            </button>

            {isOpen && (
                <div className="lang-dropdown-menu">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            className={`lang-dropdown-item ${i18n.language === lang.code ? 'active' : ''}`}
                        >{lang.code.toUpperCase()}</button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;