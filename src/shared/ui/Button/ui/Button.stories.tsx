import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonTheme, CategoryVariants } from 'shared/ui/Button/ui/Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import cls from './Button.module.scss';

const meta = {
    title: 'shared/Button',
    component: Button,
    argTypes: {},
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        className: cls.Button,
        children: 'Press me',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
export const Dark: Story = {
    args: {
        className: cls.Button,
        children: 'Press me',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const AllCategories: Story = {
    args: {
        className: cls.Button,
        children: 'Все',
        theme: ButtonTheme.PRIMARY,
        category: CategoryVariants.ALL_CATEGORIES,
    },
};
export const NewsCategory: Story = {
    args: {
        className: cls.Button,
        children: 'Новости',
        theme: ButtonTheme.PRIMARY,
        category: CategoryVariants.NEWS_CATEGORY,
    },
};
export const TeacherCategory: Story = {
    args: {
        className: cls.Button,
        children: 'Преподаватели',
        theme: ButtonTheme.PRIMARY,
        category: CategoryVariants.TEACHER_CATEGORY,
    },
};
export const HelpCategory: Story = {
    args: {
        className: cls.Button,
        children: 'Помощь с заданиями',
        theme: ButtonTheme.PRIMARY,
        category: CategoryVariants.HELP_CATEGORY,
    },
};
