import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Card from '../components/Card/Card';
import { FaUser } from 'react-icons/fa';

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="grid grid-cols-1 gap-6 bg-gray-50 p-8 dark:bg-gray-900 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          title="Users"
          value="1,024"
          icon={<FaUser />}
          description="Active this week"
        />
        <Card title="Revenue" value="$8,430" />
        <Card title="Tasks" value="76%" />
      </main>
    </div>
  );
};

export default DashboardPage;
