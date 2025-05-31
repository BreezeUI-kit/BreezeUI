import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'UI/Tabs',
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component: 'A component for organizing content into sections displayed one at a time.',
      },
    },
  },  
};

export default meta;

export const Basic = () => {
  const [activeTab, setActiveTab] = useState('overview');
  return (
    <Tabs
      tabs={[
        { id: 'overview', label: 'Overview' },
        { id: 'settings', label: 'Settings' },
        { id: 'activity', label: 'Activity' },
      ]}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );
};
