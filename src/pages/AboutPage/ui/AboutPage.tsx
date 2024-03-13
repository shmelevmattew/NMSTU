import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';

const AboutPage = () => {
    const { t, i18n } = useTranslation();
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
