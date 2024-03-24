import { Navbar } from 'widgets/Navbar/ui/Navbar';
import { getMenuList } from 'widgets/Navbar/model/selector/getMenuList/getMenuList';
import { getMenuListValue } from 'widgets/Navbar/model/selector/getMenuListValue/getMenuListValue';
import { getSelectedMenuListValue } from 'widgets/Navbar/model/selector/getSelectedMenuValue/getSelectedMenuValue';
import { menuSlice } from 'widgets/Navbar/model/slice/menuSlice';

export {
    Navbar, getMenuList, getMenuListValue, getSelectedMenuListValue, menuSlice,
};
