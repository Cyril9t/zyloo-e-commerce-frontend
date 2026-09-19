<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://api.iconify.design/lucide:store.svg?color=%23ffffff">
  <img src="https://api.iconify.design/lucide:store.svg?color=%23000000" width="40" height="40" alt="" />
</picture>

# Zyloo

A modern e-commerce frontend built with React, TypeScript, and Tailwind CSS, focused on a clean and responsive shopping experience.

![React](https://img.shields.io/badge/React-000000?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-000000?style=flat-square&logo=typescript&logoColor=3178C6)
![Vite](https://img.shields.io/badge/Vite-000000?style=flat-square&logo=vite&logoColor=646CFF)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-000000?style=flat-square&logo=tailwindcss&logoColor=06B6D4)

</div>

---

## Features

- Product browsing, search, and categories
- Product details and wishlist
- Shopping cart management
- User authentication and protected routes
- Customer profile and order history
- Checkout and payment flow
- Responsive UI
- Admin dashboard interface

## Tech Stack

React · TypeScript · Vite · React Router · Tailwind CSS · shadcn/ui · Lucide React · Axios · SWR

## Architecture

Zyloo uses a feature-based architecture to keep the codebase modular and maintainable.

```text
src/
├── features/
│   ├── products/
│   ├── cart/
│   ├── wishlist/
│   ├── checkout/
│   ├── orders/
│   ├── profile/
│   └── admin/
├── components/
├── layouts/
├── routes/
└── mock/
```

## Getting Started

```bash
git clone <repository-url>
cd zyloo
pnpm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:8000
```

Run the development server:

```bash
pnpm dev
```

The application will be available at:

```text
http://localhost:5173
```

## Deployment

The frontend is deployed with Vercel and connects to the Zyloo API through `VITE_API_URL`.

*Add Zyloo UI screenshots here*

## Author

**Cyril** — Software & Web Developer
GitHub: [@cyril9t](https://github.com/cyril9t)
