import React from 'react';
import { useTranslation } from './../../hooks/useTranslation';
import './Footer.css';

const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__col">
                        <h4 className="footer__title">{t('footer.companyName')}</h4>
                        <p>{t('footer.unp')}</p>
                        <p>{t('footer.okpo')}</p>
                    </div>
                    <div className="footer__col">
                        <h4 className="footer__title">{t('footer.serviceTitle')}</h4>
                        <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;