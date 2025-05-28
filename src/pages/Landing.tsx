import React from "react";
import { FaCube, FaBolt, FaPalette } from "react-icons/fa";

const features = [
  {
    icon: <FaCube />,
    title: "Component-Driven",
    desc: "Reusable and composable React components.",
  },
  {
    icon: <FaBolt />,
    title: "Powered by Tailwind",
    desc: "Fast styling with full dark mode support.",
  },
  {
    icon: <FaPalette />,
    title: "Themeable",
    desc: "Custom themes via Tailwind config.",
  },
];

export default function Landing() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen">
      <header className="text-center py-16">
        <h1 className="text-5xl font-bold">BreezeUI</h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
          The modern component library for data dashboards.
        </p>
      </header>

      <section className="max-w-4xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-3 px-4">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 text-center shadow-md"
          >
            <div className="text-3xl mb-2 text-brand-500">{f.icon}</div>
            <h3 className="text-lg font-semibold mb-1">{f.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{f.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
