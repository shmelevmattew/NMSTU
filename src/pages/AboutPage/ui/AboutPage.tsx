import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';

const AboutPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            {t('About page')}
            <Button
                theme={ButtonTheme.OUTLINE}
                clickEvent={(e) => {
                }}
            >
                валуе
            </Button>
        </div>
    );
};

export default AboutPage;
