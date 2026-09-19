<div align="center">

<img src="https://unpkg.com/lucide-static/icons/shopping-bag.svg" width="56" height="56" alt="Zyloo logo" />

# Zyloo

**A modern e-commerce frontend built with React, TypeScript, and Tailwind CSS**
focused on a clean and responsive shopping experience.

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/status-in--development-lightgrey?style=flat)

</div>

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Author](#author)

---

## Features

<table>
<tr>
<td width="40"><img src="https://unpkg.com/lucide-static/icons/search.svg" width="24" height="24" /></td>
<td>Product browsing, search, and categories</td>
</tr>
<tr>
<td><img src="https://unpkg.com/lucide-static/icons/heart.svg" width="24" height="24" /></td>
<td>Product details and wishlist</td>
</tr>
<tr>
<td><img src="https://unpkg.com/lucide-static/icons/shopping-cart.svg" width="24" height="24" /></td>
<td>Shopping cart management</td>
</tr>
<tr>
<td><img src="https://unpkg.com/lucide-static/icons/shield-check.svg" width="24" height="24" /></td>
<td>User authentication and protected routes</td>
</tr>
<tr>
<td><img src="https://unpkg.com/lucide-static/icons/user-round.svg" width="24" height="24" /></td>
<td>Customer profile and order history</td>
</tr>
<tr>
<td><img src="https://unpkg.com/lucide-static/icons/credit-card.svg" width="24" height="24" /></td>
<td>Checkout and payment flow</td>
</tr>
<tr>
<td><img src="https://unpkg.com/lucide-static/icons/smartphone.svg" width="24" height="24" /></td>
<td>Responsive UI</td>
</tr>
<tr>
<td><img src="https://unpkg.com/lucide-static/icons/layout-dashboard.svg" width="24" height="24" /></td>
<td>Admin dashboard interface</td>
</tr>
</table>

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React |
| Language | TypeScript |
| Build Tool | Vite |
| Routing | React Router |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui |
| Icons | Lucide React |
| HTTP Client | Axios |
| Data Fetching | SWR |

---

## Architecture

Zyloo uses a **feature-based architecture** to keep the codebase modular and maintainable.

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

---

## Getting Started

### Clone and install

```bash
git clone <repository-url>
cd zyloo
pnpm install
```

### Configure environment variables

Create a `.env` file in the project root:

```env
VITE_API_URL=http://localhost:8000
```

### Run the development server

```bash
pnpm dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## Deployment

The frontend is deployed with **Vercel** and connects to the Zyloo API through the `VITE_API_URL` environment variable.

<div align="center">
<img src="https://unpkg.com/lucide-static/icons/image.svg" width="20" height="20" />
<br />
<sub><em>Add Zyloo UI screenshots here</em></sub>
</div>

---

## Author

<img src="https://unpkg.com/lucide-static/icons/user-round.svg" width="20" height="20" valign="middle" /> **Cyril**
Software & Web Developer

<img src="https://unpkg.com/lucide-static/icons/github.svg" width="18" height="18" valign="middle" /> [@cyril9t](https://github.com/cyril9t)