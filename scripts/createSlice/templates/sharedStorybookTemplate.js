module.exports = (layer, componentName) => `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ${componentName}Storybook } from 'shared/ui/${componentName}/ui/${componentName}';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import cls from './${componentName}.module.scss';

const meta = {
    title: '${layer}/${componentName}',
    component: ${componentName}Storybook,
}satisfies Meta<typeof ${componentName}Storybook>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        className: cls.${componentName},
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
`;
