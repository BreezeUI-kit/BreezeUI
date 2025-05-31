import { HoverCard } from './HoverdCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HoverCard> = {
  component: HoverCard,
  title: 'Components/HoverCard',
  parameters: {
    docs: {
      description: {
        component: 'A card that appears on hover for extra information.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof HoverCard>;

/** Default example: simple trigger + content */
export const Default: Story = {
  render: () => (
    <HoverCard
      trigger={
        <button className="rounded bg-purple-600 px-4 py-2 text-white">
          Hover
        </button>
      }
      content={<div>This is a hover card content</div>}
    />
  ),
};

/** Rich content: with image, title, and paragraph */
export const WithRichContent: Story = {
  render: () => (
    <HoverCard
      trigger={<span className="underline cursor-pointer">Hover me</span>}
      content={
        <div className="w-80 max-w-sm space-y-2">
          <img
            src="https://placehold.co/320x120"
            alt="Preview"
            className="rounded"
          />
          <div className="font-semibold">Product Preview</div>
          <p className="text-sm text-gray-600">
            A lightweight component to show more info on hover. Includes support for images and rich text.
          </p>
        </div>
      }
    />
  ),
};


/** Edge positioning: near screen right edge */
export const NearEdge: Story = {
  render: () => (
    <div className="flex justify-end p-4">
      <HoverCard
        trigger={
          <button className="rounded bg-blue-600 px-4 py-2 text-white">
            Hover edge
          </button>
        }
        content={
          <div className="w-56">
            This content should reposition to stay visible near screen edge.
          </div>
        }
      />
    </div>
  ),
};

/** Dark mode hover card */
export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-gray-900 p-4">
      <HoverCard
        trigger={
          <button className="rounded px-4 py-2 text-white">
            Hover Dark
          </button>
        }
        content={
          <div className="w-64 rounded p-3 text-gray-100">
            <strong>Dark Mode</strong>
            <p className="text-sm text-gray-400">
              This card adapts to dark mode styling.
            </p>
          </div>
        }
      />
    </div>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
