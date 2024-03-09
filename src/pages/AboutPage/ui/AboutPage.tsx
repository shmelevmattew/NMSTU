import React from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';

const AboutPage = () => {
    const { t, i18n } = useTranslation();
    return (
        <div>
            {t('About page')}
            <Modal />
        </div>
    );
};

export default AboutPage;
