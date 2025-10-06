import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import bitrix24Service from "../../services/bitrix24";
import CustomSelect from "./CustomSelect";
import './Form.css';

interface FormProps {
    preselectedService?: string;
    restrictedServices?: string[];
    contextInfo?: string;
}

type FormData = {
    name: string;
    phone: string;
    service: string;
    workExperience?: string;
    message?: string;
}

const Form: React.FC<FormProps> = ({ preselectedService, restrictedServices, contextInfo }) => {
    const { t, i18n } = useTranslation('general');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    const createValidationSchema = () => z.object({
        name: z.string()
            .min(1, t('contacts.form.validation.nameRequired'))
            .min(2, t('contacts.form.validation.nameMinLength')),
        phone: z.string()
            .min(1, t('contacts.form.validation.phoneRequired'))
            .regex(/^[\+]?[1-9][\d]{0,15}$/, t('contacts.form.validation.phoneInvalid')),
        service: z.string()
            .min(1, t('contacts.form.validation.serviceRequired')),
        workExperience: z.string().optional(),
        message: z.string().optional()
    }).refine((data) => {
        if (data.service === 'vacancy') {
            if (!data.workExperience || data.workExperience.trim() === '') {
                return false;
            }
            if (!/^\d+$/.test(data.workExperience)) {
                return false;
            }
        }
        return true;
    }, {
        message: t('contacts.form.validation.workExperienceRequired'),
        path: ['workExperience']
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset,
        control,
        setValue
    } = useForm<FormData>({
        resolver: zodResolver(createValidationSchema()),
        defaultValues: {
            service: preselectedService || ""
        }
    });

    const selectedService = watch('service');
    const isVacancySelected = selectedService === 'vacancy';

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            const enhancedData = { ...data };
            if (contextInfo) {
                const contextPrefix = contextInfo;
                enhancedData.message = enhancedData.message
                    ? `${contextPrefix}\n\n${enhancedData.message}`
                    : contextPrefix;
            }

            const result = await bitrix24Service.handleFormSubmission(
                enhancedData,
                i18n.language
            );

            if (result.success) {
                setSubmitStatus({
                    type: 'success',
                    message: result.sentToBitrix
                        ? t('contacts.form.success.bitrix')
                        : t('contacts.form.success.local')
                });
                reset();
            } else {
                throw new Error('Failed to submit form');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus({
                type: 'error',
                message: t('contacts.form.error.submission')
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
        if (e.key === 'Enter' && !isSubmitting) {
            // Only trigger if Enter is pressed outside of textarea
            if (e.target !== e.currentTarget.querySelector('textarea')) {
                e.preventDefault();
                handleSubmit(onSubmit)();
            }
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)} onKeyDown={handleKeyDown}>
            <div className="form-description">
                <h3 className="form-description__title">{t('contacts.form.title')}</h3>
                <p className="form-description__text">{t('contacts.form.subtitle')}</p>
            </div>

            <div className="form-field">
                <input
                    type="text"
                    className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                    placeholder={`${t('contacts.form.name')}*`}
                    {...register('name')}
                    aria-required="true"
                />
                {errors.name && <span className="form-error">{errors.name.message}</span>}
            </div>

            <div className="form-field">
                <input
                    type="tel"
                    className={`form-input ${errors.phone ? 'form-input--error' : ''}`}
                    placeholder={`${t('contacts.form.phone')}*`}
                    {...register('phone')}
                    aria-required="true"
                />
                {errors.phone && <span className="form-error">{errors.phone.message}</span>}
            </div>

            <div className="form-field">
                <Controller
                    name="service"
                    control={control}
                    render={({ field }) => {
                        const options = [
                            { value: "", label: t('contacts.form.services.placeholder'), disabled: true, hidden: true },
                            ...((!restrictedServices || restrictedServices.includes('transfer')) ?
                                [{ value: "transfer", label: t('contacts.form.services.transfer') }] : []),
                            ...((!restrictedServices || restrictedServices.includes('vacancy')) ?
                                [{ value: "vacancy", label: t('contacts.form.services.vacancy') }] : []),
                            ...((!restrictedServices || restrictedServices.includes('other')) ?
                                [{ value: "other", label: t('contacts.form.services.other') }] : [])
                        ];

                        return (
                            <CustomSelect
                                value={field.value}
                                onChange={field.onChange}
                                placeholder={t('contacts.form.services.placeholder')}
                                options={options}
                                error={!!errors.service}
                                aria-required={true}
                            />
                        );
                    }}
                />
                {errors.service && <span className="form-error">{errors.service.message}</span>}
            </div>

            {isVacancySelected && (
                <div className="form-field">
                    <input
                        type="number"
                        className={`form-input ${errors.workExperience ? 'form-input--error' : ''}`}
                        placeholder={`${t('contacts.form.workExperience')}*`}
                        {...register('workExperience')}
                        aria-required="true"
                        min="0"
                        max="50"
                    />
                    {errors.workExperience && <span className="form-error">{errors.workExperience.message}</span>}
                </div>
            )}

            <div className="form-field">
                <textarea
                    className="form-textarea"
                    rows={4}
                    placeholder={t('contacts.form.message')}
                    {...register('message')}
                ></textarea>
            </div>

            {submitStatus.type && (
                <div className={`form-status form-status--${submitStatus.type}`}>
                    {submitStatus.message}
                </div>
            )}

            <button
                type="submit"
                className="form-submit btn btn--primary btn--large"
                disabled={isSubmitting}
            >
                {isSubmitting ? t('contacts.form.submitting') : t('contacts.form.submitButton')}
            </button>
        </form>
    )
}

export default Form;