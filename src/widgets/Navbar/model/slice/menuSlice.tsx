import { createSlice } from '@reduxjs/toolkit';
import { CategoryVariants } from 'shared/ui/Button/ui/Button';
import { MenuItem, MenuSchema } from '../types/menuSchema';

const initialState: MenuSchema = {
    list: [
        {
            link: '/',
            title: 'all',
            category: CategoryVariants.ALL_CATEGORIES,
        },
        {
            link: '/teachers',
            title: 'teachers',
            category: CategoryVariants.TEACHER_CATEGORY,
        },
        {
            link: '/help',
            title: 'help with tasks',
            category: CategoryVariants.HELP_CATEGORY,
        },
        {
            link: '/news',
            title: 'News',
            category: CategoryVariants.NEWS_CATEGORY,
        },
    ],
    selected: null,
};

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setSelectedMenu: (state, action : {payload:MenuItem, type:string}) => {
            state.selected = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: menuActions } = menuSlice;
export const { reducer: menuReducer } = menuSlice;
