import type { Preview } from "@storybook/react";
import '../src/index.css';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    docs: {
      story: { inline: false },
    },
  },
};

export default preview;