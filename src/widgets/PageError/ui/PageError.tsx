import React, {useEffect} from 'react';
import { classNames } from 'shared/aliases';
import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?:string
}
export const PageError = ({ className }:PageErrorProps) => {
    const { t, i18n } = useTranslation('error');

    useEffect(() => {
        import(`../../../../public/locales/${i18n.language}/error.json`).then(error => {
            i18n.addResourceBundle(i18n.language, 'error', error);
        });
    }, [i18n.language]);

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            {t('Error')}
            <button onClick={reloadPage}>
                {t('ErrorButton')}
            </button>
        </div>
    );
};
