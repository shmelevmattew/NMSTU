import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';

const AboutPage = () => {
    const { t, i18n } = useTranslation('about');

    useEffect(() => {
        import(`../../../../public/locales/${i18n.language}/about.json`).then((about) => {
            i18n.addResourceBundle(i18n.language, 'about', about);
        });
    }, [i18n.language]);

    return (
        <div>
            {t('About page')}
            <Button
                theme={ButtonTheme.OUTLINE}
                clickEvent={(e) => {
                    console.log(e);
                }}
            >
                валуе
            </Button>
        </div>
    );
};

export default AboutPage;
