import React from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginModal } from 'features/AuthByEmail/ui/LoginModal/LoginModal';

const AboutPage = () => {
    const { t, i18n } = useTranslation();
    return (
        <div>
            {t('About page')}
            <LoginModal />
        </div>
    );
};

export default AboutPage;
