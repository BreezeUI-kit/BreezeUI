import React from 'react';
import { Meta } from '@storybook/react';
import { NavigationMenuDemo } from './NavigationMenu';

export default {
  title: 'Components/NavigationMenu',
  component: NavigationMenuDemo,
  parameters: {
    docs: {
      description: {
        component: 'A large, accessible menu for site-wide navigation.',
      },
    },
  },  
} as Meta;

export const Default = () => <NavigationMenuDemo />;
