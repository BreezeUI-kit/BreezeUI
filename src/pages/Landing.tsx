import React from 'react';
import { FaCube, FaBolt, FaPalette } from 'react-icons/fa';

const features = [
  {
    icon: <FaCube />,
    title: 'Component-Driven',
    desc: 'Reusable and composable React components.',
  },
  {
    icon: <FaBolt />,
    title: 'Powered by Tailwind',
    desc: 'Fast styling with full dark mode support.',
  },
  {
    icon: <FaPalette />,
    title: 'Themeable',
    desc: 'Custom themes via Tailwind config.',
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
      <header className="py-16 text-center">
        <h1 className="text-5xl font-bold">BreezeUI</h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
          The modern component library for data dashboards.
        </p>
      </header>

      <section className="mx-auto grid max-w-4xl grid-cols-1 gap-8 px-4 sm:grid-cols-3">
        {features.map((f, i) => (
          <div
            key={i}
            className="rounded-xl bg-gray-100 p-6 text-center shadow-md dark:bg-gray-800"
          >
            <div className="mb-2 text-3xl text-brand-500">{f.icon}</div>
            <h3 className="mb-1 text-lg font-semibold">{f.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{f.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
