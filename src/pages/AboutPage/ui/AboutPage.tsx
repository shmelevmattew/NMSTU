import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { LoginModal } from 'features/AuthByEmail';

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
            <LoginModal />
        </div>
    );
};

export default AboutPage;
