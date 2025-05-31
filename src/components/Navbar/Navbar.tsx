import React from 'react';
import Button from '../Button';

interface NavbarProps {
  title?: string;
}

/**
 * Navbar component providing a top navigation bar with branding and actions.
 */
const Navbar: React.FC<NavbarProps> = ({ title = 'BreezeUI' }) => {
  return (
    <nav className="w-full border-b bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="flex w-full items-center justify-between px-6 py-4">
        <div className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">Login</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </nav>
  );
};

Navbar.displayName = 'Navbar';
export default Navbar;
