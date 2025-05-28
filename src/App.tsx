// src/App.tsx
import React, { useState } from "react";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? 'dark' : ''}>
      
      <Dashboard />
      <button
        className="m-4 p-2 rounded bg-gray-200 dark:bg-gray-700"
        onClick={() => setDark(!dark)}
      >
        Toggle {dark ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}
