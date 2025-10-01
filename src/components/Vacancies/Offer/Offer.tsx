import { useTranslation } from 'react-i18next';
import './Offer.css';

const Offer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="vacancy-form" className="vacancy-form-section">
            <div className="container">
                <div className="form-container">
                    <div className="form-info">
                        <h2>{t('Offer.title')}</h2>
                        <p>{t('Offer.description')}</p>
                        <div className="contact-details">
                            <p><strong>{t('Offer.hrDepartment')}:</strong></p>
                            <p><i className="fas fa-phone"></i> +375 (29) 704-14-55</p>
                            <p><i className="fas fa-envelope"></i> hr@bvetra.by</p>
                            <p><i className="fas fa-map-marker-alt"></i> {t('Offer.address')}</p>
                        </div>
                    </div>
                    <div className="form-content">
                        <form id="vacancyForm" className="vacancy-form">
                            <h3>{t('Offer.formTitle')}</h3>
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="vacancy-name"
                                    name="name"
                                    placeholder={t('Offer.namePlaceholder')}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="tel"
                                    id="vacancy-phone"
                                    name="phone"
                                    placeholder={t('Offer.phonePlaceholder')}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="number"
                                    id="vacancy-exp"
                                    name="experience"
                                    placeholder={t('Offer.experiencePlaceholder')}
                                    min="0"
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    id="vacancy-message"
                                    name="message"
                                    placeholder={t('Offer.messagePlaceholder')}
                                    rows={4}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn--form">
                                {t('Offer.submitButton')}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offer;