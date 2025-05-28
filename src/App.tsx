import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';

function App() {
  const [page, setPage] = useState<'landing' | 'dashboard'>('landing');

  return (
    <div className={page === 'dashboard' ? 'dark' : ''}>
      <nav className="flex justify-center gap-6 p-4 bg-gray-200 dark:bg-gray-800">
        <button onClick={() => setPage('landing')}>Landing</button>
        <button onClick={() => setPage('dashboard')}>Dashboard</button>
      </nav>
      {page === 'landing' ? <Landing /> : <Dashboard />}
    </div>
  );
}

export default App;