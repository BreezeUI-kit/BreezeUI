import React from 'react';
import { Meta } from '@storybook/react';
import { Breadcrumbs } from './Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'UI/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    docs: {
      description: {
        component: 'A navigation aid showing the current page’s location within a hierarchy.',
      },
    },
  },  
};

export default meta;

export const Basic = () => (
  <Breadcrumbs
    items={[
      { label: 'Home', href: '/' },
      { label: 'Library', href: '/library' },
      { label: 'Data' },
    ]}
  />
);
