import type { Meta, StoryObj } from '@storybook/react';
import { UserImage, CategoryVariants } from './UserImage';

const meta = {
    title: 'shared/UserImage',
    component: UserImage,
    argTypes: {},
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof UserImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BigImage: Story = {
    args: {
        imageUrl: 'context.png',
        category: CategoryVariants.SMALL__IMAGE,
    },
};

export const SmallImage: Story = {
    args: {
        imageUrl: 'context.png',
        category: CategoryVariants.BIG__IMAGE,
    },
};
