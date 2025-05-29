import { Input } from './Input';

export default {
  title: 'Form/Input',
  component: Input,
};

export const Default = () => <Input label="Name" placeholder="Enter name" />;
export const Error = () => <Input label="Name" error helperText="Required field" />;
export const Success = () => <Input label="Name" success helperText="Looks good!" />;