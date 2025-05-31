import React from 'react';
import { Meta } from '@storybook/react';
import { TabsWithPanels } from './TabsWithPanels';

const meta: Meta<typeof TabsWithPanels> = {
  title: 'UI/Tabs/TabsWithPanels',
  component: TabsWithPanels,
  parameters: {
    docs: {
      description: {
        component: 'Tabs component with associated panels and keyboard navigation.',
      },
    },
  },
};

export default meta;

export const WithContentPanels = () => (
  <TabsWithPanels
    tabs={[
      {
        id: 'overview',
        label: 'Overview',
        content: <div>This is the overview content.</div>,
      },
      {
        id: 'settings',
        label: 'Settings',
        content: <div>Here are your settings.</div>,
      },
      {
        id: 'activity',
        label: 'Activity',
        content: <div>Recent activity goes here.</div>,
      },
    ]}
  />
);
