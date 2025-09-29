import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './NotFound.css';

const NotFound: React.FC = () => {
    const { t } = useTranslation('general');

    return (
        <div className="notFound">
            <div className="NotFound__container">
                <h1 className="title">{t('notFound.title')}</h1>

                <p className="message">
                    {t('notFound.message')}
                </p>

                <p className="description">
                    {t('notFound.description')}
                </p>

                <Link to="/" className="homeLink">
                    <i className="fas fa-home homeIcon" aria-hidden="true"></i>
                    {t('notFound.homeButton')}
                </Link>
            </div>
        </div>
    );
};

export default NotFound;