// .storybook/manager.ts
import { addons } from '@storybook/manager-api';
import breezeTheme from './storybook-theme';

addons.setConfig({
  theme: breezeTheme,
});
