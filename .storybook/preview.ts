import type { Preview } from '@storybook/react';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    docs: {
      story: { inline: false },
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
