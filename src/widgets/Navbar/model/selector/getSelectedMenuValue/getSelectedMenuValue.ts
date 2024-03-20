import { createSelector } from '@reduxjs/toolkit';
import { getMenuList } from 'widgets/Navbar/model/selector/getMenuList/getMenuList';
import { MenuSchema } from 'widgets/Navbar/model/types/menuSchema';

export const getSelectedMenuListValue = createSelector(
    getMenuList,
    (menuList: MenuSchema) => menuList.selected,
);
