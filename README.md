# StackShop – E-commerce Frontend

**StackShop** is a modern, responsive e-commerce frontend built using **React**, **TypeScript**, **Zustand**, **Tailwind CSS**, and **React Query**. It features dynamic product listings, detail modals, shopping cart management, and a mobile-friendly layout.

## 🚀 Features

- 🛍️ Product Listing with Pagination & Sorting  
- 🔍 Product Details Modal  
- 🛒 Shopping Cart with Zustand State Management  
- 📦 Checkout Flow with Order Summary  
- 📱 Responsive UI (Mobile & Desktop)  
- 🌐 404 Page Handling  
- ⚡ Vite + TypeScript + TailwindCSS  



## 🎨 Design Approach

- **Layout:** Built with a responsive mobile-first layout using Tailwind CSS's utility-first classes. Components are structured around reusable layout elements such as `NavBar`, `Footer`, and modal/dialog interfaces for product detail viewing.
- **Color Scheme:** A minimalist palette focused on black, white, and accent reds (`#ff334c`) for branding emphasis and clear call-to-actions.
- **Responsiveness:** Fully responsive using Tailwind’s breakpoint utilities (`md`, `lg`, `xl`). Tables collapse into cards on mobile for better UX.
- **Typography:** Clean sans-serif fonts styled with Tailwind classes like `text-lg`, `font-bold` for legibility and hierarchy.

## 🛠️ Tools & Techniques

- **Libraries:**
  - `React`, `React Router DOM`, `Zustand` (state), `React Query` (data fetching), `Tailwind CSS`, `React Icons`
- **Code Patterns:**
  - Modular component-based structure
  - Zustand for centralized global state (e.g., cart and modals)
  - React Query for caching & background updates
- **Testing:** *(Not implemented, but can integrate)* `Jest`, `React Testing Library`
- **CI/CD:** *(Not configured in this repo, but ready for Netlify/Vercel deployment)*

## 🔍 SEO Strategy

- **Meta Tags:** Can be extended in `index.html` with custom `<meta>` for title, description, OpenGraph, etc.
- **Performance:** Built with Vite for blazing-fast builds and hot module replacement.
- **Image Optimization:** Uses CDN-hosted images (from dummyjson.com) and `object-contain` or `object-cover` for fast rendering.
- **Structured Data:** *(Optional but not yet implemented)* Schema.org markup for products and reviews can be added to improve search visibility.

## ⚠️ Error Handling Strategy

- **Data Fetching Errors:** Handled via `isError` and `error` states in `useQuery()` (React Query).
- **UI Failures:** Fallbacks like `"Loading..."`, empty states, and error boundaries can be added per component.
- **Global Recovery:** Modal states, quantity updates, and cart persistence recover from refresh via Zustand with `localStorage` middleware.
- **Logging:** Currently uses browser console. For production, integration with services like Sentry or LogRocket is recommended.


## 📁 Folder Structure


StsckBuld_Assessment/
├── public/ # Static assets
├── src/ # Source code
│ ├── components/ # Reusable components (Navbar, Product, Cart, etc.)
│ ├── pages/ # Pages (Home, Shop, Cart, Checkout, 404)
│ ├── store/ # Zustand store
│ ├── App.tsx # Root app setup
│ └── main.tsx # Vite entry point
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts



## 📦 Installation

```bash
# Clone the project
git clone https://github.com/yourusername/StsckBuld_Assessment.git
cd StsckBuld_Assessment

# Install dependencies
npm install
