import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Check } from './Check';
import cls from './Check.module.scss';

const meta = {
    title: 'shared/Check',
    component: Check,
    argTypes: {},
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Check>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        className: cls.Check,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
export const Dark: Story = {
    args: {
        className: cls.Check,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const Checked: Story = {
    args: {
        className: cls.Check,
        defaultChecked: true,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
