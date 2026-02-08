# React JS with a CSS Framework (Tailwind + React)

A small React project that demonstrates how to **integrate Tailwind CSS with Vite**, then **style a component using utility classes**, make it **responsive**, and finally add **hover interactions + smooth transitions**.

**Repository:** `alx-fe-reactjs`  
**Project directory:** `tailwind-react-integration`

---

## Project Goals

This project is designed to help you become comfortable with **utility-first styling** in React using Tailwind CSS:

- Install and configure Tailwind CSS in a Vite + React app
- Style React components using Tailwind utility classes
- Make UI responsive with Tailwind breakpoints (`sm:`, `md:`…)
- Add interactivity (hover effects) and smooth transitions

---

## Tech Stack

- **React** (Vite)
- **Tailwind CSS** (via `@tailwindcss/vite`)
- **JavaScript**

---

## Project Structure

```text
tailwind-react-integration/
├─ src/
│ ├─ components/
│ │ └─ UserProfile.jsx
│ ├─ App.jsx
│ ├─ main.jsx
│ └─ index.css
├─ vite.config.js
├─ package.json
└─ ...
```


---

## Tasks Overview

### Task 0 — Tailwind Setup (Vite + React)
You create the app, install Tailwind and the Vite plugin, configure Vite, and enable Tailwind in CSS.

**Key checks:**
- `tailwindcss()` plugin exists in `vite.config.js`
- `@import "tailwindcss";` exists in `src/index.css`

---

### Task 1 — Style a Provided Component (UserProfile)
You add Tailwind classes to match the required design:

**Required styling includes**
- Card container: `bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg`
- Avatar: `rounded-full w-36 h-36 mx-auto`
- Heading: `text-xl text-blue-800 my-4`
- Paragraph: `text-gray-600 text-base`

---

### Task 2 — Make It Responsive
You adjust spacing, width, typography, and image sizing depending on screen size:

**Examples**
- Container padding: `p-4 md:p-8`
- Max width: `max-w-xs md:max-w-sm`
- Heading: `text-lg md:text-xl`
- Paragraph: `text-sm md:text-base`
- Image: `w-24 h-24 md:w-36 md:h-36`

---

### Task 3 — Add Interactivity + Transitions
You enhance UI feedback using hover + transition utilities:

**Examples**
- Image hover scale:
  - `hover:scale-110 transition-transform duration-300 ease-in-out`
- Heading hover color:
  - `hover:text-blue-500`
- Card hover shadow:
  - `hover:shadow-xl`

---

## Getting Started

### 1) Create the project
```bash
npm create vite@latest tailwind-react-integration -- --template react
cd tailwind-react-integration
```

## Author

Mayo Takémsi Norris KADANGA
ALX Front-End Program