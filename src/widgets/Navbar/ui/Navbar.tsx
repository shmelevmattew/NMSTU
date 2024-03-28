import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/ui/AppLink';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme, CategoryVariants } from 'shared/ui/Button/ui/Button';
import ToggleSwitch from 'shared/ui/ToggleSwitch/ToggleSwitch';
import { useTheme } from 'app/providers/ThemeProvider';
import { useDispatch, useSelector } from 'react-redux';
import { MenuItem } from 'widgets/Navbar/model/types/menuSchema';
import { getSelectedMenuListValue } from 'widgets/Navbar/model/selector/getSelectedMenuValue/getSelectedMenuValue';
import { getMenuListValue } from 'widgets/Navbar/model/selector/getMenuListValue/getMenuListValue';
import { getMenuList } from 'widgets/Navbar';
import { StateSchema } from 'app/providers/StoreProvider';
import { menuActions } from '../model/slice/menuSlice';

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?:string
}
export const Navbar = ({ className }:NavbarProps) => {
    const { theme, toggleTheme } = useTheme();
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();

    // ЭТО ТАК КАК ДОЛЖНО БЫТЬ - ПОЧЕМУ НЕ РАБОТАЕТ НЕ ЕБУ
    const selectedMenu = useSelector(getSelectedMenuListValue);
    const menuList = useSelector(getMenuListValue);

    // ЭТО ВРЕМЕННО - ТОЖЕ ТАК ТО НОРМ РЕШЕИЕ НО ЛУЧШЕ ЧЕРЕЗ CREATE SELECTOR
    const menu = useSelector((state: StateSchema) => state.menu);
    const setSelectedMenuValue = (value: MenuItem) => {
        dispatch(menuActions.setSelectedMenu(value));
    };
    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    useEffect(() => {
        console.log(menu);
        console.log(menu.list);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div>
                {
                    menu.list.map((el) => (
                        <AppLink to={el.link}>
                            <Button
                                isSelected={menu.selected === el}
                                category={el.category}
                                onClick={() => setSelectedMenuValue(el)}
                            >
                                {el.title}
                            </Button>
                        </AppLink>
                    ))
                }
            </div>
            <ToggleSwitch
                checked={theme === 'dark'}
                onChange={toggleTheme}
                theme={theme}
            />
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
