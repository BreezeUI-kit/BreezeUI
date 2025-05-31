import { Input } from './Input';

export default {
  title: 'Form/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: 'A basic input field with support for error and disabled states.',
      },
    },
  },
  
};

export const Default = () => <Input label="Name" placeholder="Enter name" />;
export const Error = () => (
  <Input label="Name" error helperText="Required field" />
);
export const Success = () => (
  <Input label="Name" success helperText="Looks good!" />
);
