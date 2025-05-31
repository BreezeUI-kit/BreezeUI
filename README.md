# BreezeUI

BreezeUI is a sleek, accessible, and customizable React + Tailwind CSS component library designed for data dashboards and modern web applications. Built with performance and developer experience in mind, it includes a growing collection of UI primitives and advanced components.

![BreezeUI Preview](./preview.png)
> _Lightweight, elegant UI components made for dashboards._

## ✨ Features

- ⚛️ **React + TypeScript** — Type-safe components with modern patterns.
- 🎨 **Tailwind CSS** — Utility-first styling with dark mode and theme support.
- ♿ **Accessible** — WCAG-compliant and keyboard-navigable components.
- 🧩 **Modular** — Import only what you need. No global styles or side effects.
- 📦 **Radix Primitives** — Headless, accessible UI under the hood.
- 📚 **Storybook** — Fully documented with live examples and a11y checks.
- 🚀 **Ready to Use** — Just plug into any React + Tailwind project.

## 📦 Installation

```bash
npm install breeze-ui
# or
yarn add breeze-ui
```

Then configure Tailwind CSS with the required plugin and tokens.

## 🔧 Usage

```tsx
import { Button } from 'breeze-ui';

export default function App() {
  return <Button variant="primary">Click me</Button>;
}
```

See the [Storybook](https://your-storybook-link.com) for full examples and documentation.

## 🧱 Components

- Buttons, Badges, Avatars
- Forms: Inputs, Textareas, Toggles, Selects, Sliders
- Overlays: Dialog, Tooltip, Popover, AlertDialog
- Menus: DropdownMenu, CommandPalette, Menubar, NavigationMenu
- Navigation: Breadcrumbs, Pagination, Tabs

…and more being added weekly.

## 🗂 Folder Structure

```
/components/ui
  ├── Button/
  ├── Input/
  ├── Dialog/
  └── ...

/lib
  └── utils.ts
```

## 🚨 Accessibility

Every component is tested with [@storybook/addon-a11y](https://storybook.js.org/addons/@storybook/addon-a11y) and built using semantic markup, keyboard support, and WAI-ARIA standards.

## 🧪 Local Development

```bash
pnpm install
pnpm dev     # Start Storybook
pnpm lint    # Run ESLint
pnpm format  # Prettier
```

## 🛠 Tech Stack

- React + TypeScript
- Tailwind CSS
- Vite
- Storybook
- Radix UI

## 🧾 License

MIT © 2025 BreezeUI Authors