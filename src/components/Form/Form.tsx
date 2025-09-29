import { useTranslation } from "react-i18next";
import './Form.css';

interface FormProps {
    preselectedService?: string;
}

const Form: React.FC<FormProps> = ({ preselectedService }) => {
    const { t } = useTranslation('general');

    return (
        <form className="form">
            <div className="form-description">
                <h3 className="form-description__title">{t('contacts.form.title')}</h3>
                <p className="form-description__text">{t('contacts.form.subtitle')}</p>
            </div>
            <input type="text" className="form-input" placeholder={`${t('contacts.form.name')}*`} required aria-required="true" />
            <input type="tel" className="form-input" placeholder={`${t('contacts.form.phone')}*`} required aria-required="true" />
            <select className="form-select" defaultValue={preselectedService || ""} required aria-required="true">
                <option value="" disabled hidden>{t('contacts.form.services.placeholder')}</option>
                <option value="transfer">{t('contacts.form.services.transfer')}</option>
                <option value="vacancy">{t('contacts.form.services.vacancy')}</option>
                <option value="other">{t('contacts.form.services.other')}</option>
            </select>
            <textarea className="form-textarea" rows={4} placeholder={t('contacts.form.message')}></textarea>
            <button type="submit" className="form-submit btn btn--primary btn--large">{t('contacts.form.submitButton')}</button>
        </form>
    )
}

export default Form;