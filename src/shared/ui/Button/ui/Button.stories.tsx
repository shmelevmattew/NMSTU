import type { Meta, StoryObj } from '@storybook/react';
import { Button } from 'shared/ui/Button/ui/Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

const meta = {
    title: 'shared/Button',
    component: Button,
    argTypes: {
    },
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
    args: {
        className: 'Button',
    },
};
export const TestDark: Story = {
    args: {
        className: 'Button',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
