import { createSelector } from '@reduxjs/toolkit';
import { getMenuList } from 'widgets/Navbar/model/selector/getMenuList/getMenuList';

export const getMenuListValue = createSelector(
    getMenuList,
    (menuList) => menuList.list,
);
