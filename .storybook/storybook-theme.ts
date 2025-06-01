// .storybook/storybook-theme.ts
import { create } from '@storybook/theming';

export default create({
  base: 'light', // or 'dark'
  brandTitle: '',
  brandUrl: 'https://breezeui.vercel.app', 
  brandImage: 'http://localhost:6006/logo/logo.png', 
  brandTarget: '_self',
});
