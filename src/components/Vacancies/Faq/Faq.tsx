import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Faq.css';

const Faq: React.FC = () => {
    const { t } = useTranslation();
    const [activeItem, setActiveItem] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setActiveItem(activeItem === index ? null : index);
    };

    const faqData = [
        {
            question: t('Faq.questions.documents.question'),
            answer: t('Faq.questions.documents.answer')
        },
        {
            question: t('Faq.questions.probation.question'),
            answer: t('Faq.questions.probation.answer')
        },
        {
            question: t('Faq.questions.vehicle.question'),
            answer: t('Faq.questions.vehicle.answer')
        },
    ];

    return (
        <section className="vacancies-faq">
            <div className="container">
                <h2>{t('Faq.title')}</h2>
                <div className="faq-list">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeItem === index ? 'active' : ''}`}
                        >
                            <h3
                                className="faq-question"
                                onClick={() => toggleItem(index)}
                            >
                                <span>{item.question}</span>
                                <button className="faq-toggle" aria-label="Toggle answer">
                                    <i className="fas fa-chevron-down"></i>
                                </button>
                            </h3>
                            <div className="faq-answer">
                                <div className="faq-answer-content">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Faq;