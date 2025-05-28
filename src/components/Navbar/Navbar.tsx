// import React from "react";
// import "../../index.css";

// /**
//  * Navbar component for the top application navigation.
//  * Includes dark mode toggle and placeholder for links or branding.
//  *
//  * @param title - Title or brand text shown in the navbar.
//  */
// const Navbar: React.FC = () => {
//   return (
//     <nav className="bg-white border-b shadow-sm px-6 py-4 flex justify-between items-center">
//       <div className="text-xl font-bold text-blue-600">BreezeUI</div>
//       <div className="space-x-4 text-sm text-gray-600">
//         <a href="#" className="hover:text-blue-600">
//           Home
//         </a>
//         <a href="#" className="hover:text-blue-600">
//           Docs
//         </a>
//         <a href="#" className="hover:text-blue-600">
//           GitHub
//         </a>
//       </div>
//     </nav>
//   );
// };

// Navbar.displayName = "Navbar";

// export default Navbar;

import React from 'react';
import Button  from '../Button';

interface NavbarProps {
  title?: string;
}

/**
 * Navbar component providing a top navigation bar with branding and actions.
 */
const Navbar: React.FC<NavbarProps> = ({ title = 'BreezeUI' }) => {
  return (
    <nav className="w-full px-4 py-3 bg-white border-b dark:bg-gray-900 dark:border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">Login</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </nav>
  );
};

Navbar.displayName = 'Navbar';
export default Navbar;
