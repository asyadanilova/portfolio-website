import { useTranslation } from 'react-i18next';
import Form from '../../Form/Form';
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
                        <Form preselectedService="vacancy" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offer;