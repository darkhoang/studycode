import type { Meta, StoryObj } from '@storybook/react';

import { LoginPage } from './LoginPage';

const meta = {
  title: 'Antd Learning/Pratice Login Page',
  component: LoginPage,

  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultLoginPage: Story = {};
