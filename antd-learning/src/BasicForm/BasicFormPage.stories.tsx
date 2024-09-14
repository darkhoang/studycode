import type { Meta, StoryObj } from '@storybook/react';

import { BasicFormPage } from './BasicFormPage';

const meta = {
  title: 'Antd Learning/Basic Form Page',
  component: BasicFormPage,

  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BasicFormPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultBasicFormPage: Story = {};
