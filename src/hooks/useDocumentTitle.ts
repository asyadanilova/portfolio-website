import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useDocumentTitle = (titleKey: string = 'title') => {
    const { t } = useTranslation('general');

    useEffect(() => {
        const title = t(titleKey);
        if (title && title !== titleKey) {
            document.title = title;
        }
    }, [t, titleKey]);
};

export default useDocumentTitle;