import type { Preview } from '@storybook/react';
import '../src/index.css';
import breezeTheme from './storybook-theme';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    docs: {
      story: { inline: false },
      theme: breezeTheme,
    },
  },
  decorators: [
    (Story, context) => {
      const isDark = context.parameters.backgrounds?.default === 'dark';
      document.documentElement.classList.toggle('dark', isDark);
      return Story();
    },
  ]
};

export default preview;
