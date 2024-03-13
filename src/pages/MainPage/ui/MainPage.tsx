import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t, i18n } = useTranslation('main');

    useEffect(() => {
        import(`../../../../public/locales/${i18n.language}/main.json`).then((main) => {
            i18n.addResourceBundle(i18n.language, 'main', main);
        });
    }, [i18n.language]);

    return (
        <div>
            {t('MPageD')}
        </div>
    );
};

export default MainPage;
