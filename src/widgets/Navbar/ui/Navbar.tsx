import { classNames } from 'shared/aliases/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import React from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?:string
}
export const Navbar = ({ className }:NavbarProps) => {
    const { t, i18n } = useTranslation();
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <AppLink to="/about" theme={AppLinkTheme.PRIMARY}>{t('About')}</AppLink>
            <AppLink to="/" theme={AppLinkTheme.SECONDARY}>{t('Main')}</AppLink>
        </div>
    );
};
