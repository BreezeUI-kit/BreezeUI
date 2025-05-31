import React from 'react';
import Button from './components/Button';
import Badge from './components/Badge';
import { Tabs } from './components/ui/tabs';
import { FaGithub } from 'react-icons/fa';

const tabs = [
  { id: 'components', label: 'Components' },
  { id: 'docs', label: 'Docs' },
  { id: 'github', label: 'GitHub' },
];

export default function App() {
  const [activeTab, setActiveTab] = React.useState('components');
  const [isDarkMode, setIsDarkMode] = React.useState(() =>
    document.documentElement.classList.contains('dark')
  );

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-12 text-gray-800 dark:bg-zinc-950 dark:text-white relative">
      {/* Dark Mode Toggle */}
      <div className="absolute right-6 top-6">
        <Button variant="outline" onClick={toggleDarkMode} className={isDarkMode ? "dark:bg-zinc-950 dark:border-white dark:text-white" : ""}>
          {isDarkMode ? '☀️' : '🌙'}
        </Button>
      </div>

      {/* Hero Section */}
      <section className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">BreezeUI</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          A sleek, modern component library for building beautiful data dashboards with React & Tailwind CSS.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="https://your-storybook-url.com" target="_blank" rel="noopener noreferrer">
            <Button>📚 View Docs</Button>
          </a>
          <a href="https://github.com/BreezeUI-kit/react-breezeui" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="flex border dark:bg-zinc-950 dark:border-white dark:text-white">
              <FaGithub className="pt-0.5 mr-1" size={"20px"} /> GitHub
            </Button>
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto mt-16 max-w-3xl text-center">
        <h2 className="text-2xl font-semibold">What's Inside</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 text-sm sm:grid-cols-3">
          {['Button', 'Badge', 'Tabs', 'Dialog', 'Tooltip', 'Select', 'CommandPalette', 'Pagination', 'Breadcrumbs'].map(
            (item) => (
              <Badge key={item} variant="outline" text={item} className="justify-center" />
            )
          )}
        </div>
      </section>

      {/* Preview Tabs */}
      <section className="mx-auto mt-16 max-w-3xl">
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="mt-8 rounded-lg border p-6 dark:border-zinc-800">
          {activeTab === 'components' && <p>Explore 20+ accessible UI components.</p>}
          {activeTab === 'docs' && <p>Documentation coming soon. Stay tuned!</p>}
          {activeTab === 'github' && <p>Check out the full code on GitHub.</p>}
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="mt-24 text-center text-sm text-gray-500 dark:text-gray-500">
        <p>
          Built with Dedication by <a className="underline" href="https://github.com/CruzChua2001/CruzChua2001">@Cruz Chua</a>
        </p>
      </footer>
    </div>
  );
}
