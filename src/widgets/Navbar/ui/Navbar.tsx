import { classNames } from 'shared/aliases/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/ui/AppLink';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme, CategoryVariants } from 'shared/ui/Button/ui/Button';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?:string
}
export const Navbar = ({ className }:NavbarProps) => {
    const { theme, toggleTheme } = useTheme();
    const { t, i18n } = useTranslation();
    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    useEffect(() => {
    }, []);
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>

            <AppLink to="/">
                <Button category={CategoryVariants.ALL_CATEGORIES}>
                    Все
                </Button>
            </AppLink>
            <AppLink to="/news">
                <Button category={CategoryVariants.NEWS_CATEGORY}>
                    Новости
                </Button>
            </AppLink>
            <AppLink to="/teachers">
                <Button category={CategoryVariants.TEACHER_CATEGORY}>
                    Преподаватели
                </Button>
            </AppLink>
            <AppLink to="tasks">
                <Button category={CategoryVariants.HELP_CATEGORY}>
                    Help
                </Button>
            </AppLink>
            <Button
                theme={ButtonTheme.OUTLINE}
                onClick={() => {
                    toggleTheme();
                }}
            >
                click
            </Button>
            <Button
                theme={ButtonTheme.OUTLINE}
                onClick={() => {
                    toggleLang();
                }}
            >
                {t('Translate')}
            </Button>
        </div>
    );
};
