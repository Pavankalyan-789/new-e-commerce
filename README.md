# Modern E-Commerce Web Application
A clean, modern, and responsive frontend-only e-commerce web application.
This project showcases a product listing page, product details view, shopping cart, and checkout page — all without requiring any backend or database. Cart state is managed using browser localStorage, and the UI is built with a modern design approach using reusable components.

## Project Structure

```
e-commerce/
├── src/
│   ├── components/          # React components
│   │   ├── Layout.jsx       # Main layout wrapper (Navbar + Footer)
│   │   ├── Navbar.jsx       # Modern navigation with cart badge
│   │   ├── Footer.jsx       # Footer component
│   │   ├── Homepage.jsx     # Homepage with hero and product grid
│   │   ├── ProductCard.jsx  # Reusable product card component
│   │   ├── ProductDetails.jsx # Product detail page
│   │   ├── Cart.jsx         # Shopping cart page
│   │   ├── CartItem.jsx     # Reusable cart item component
│   │   └── Checkout.jsx     # Checkout form page
│   ├── context/
│   │   └── CartContext.jsx  # Global cart state management
│   ├── data/
│   │   └── products.js      # Sample product data
│   ├── utils/
│   │   └── localStorage.js  # Local storage utilities
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # Application entry point
│   └── index.css            # TailwindCSS imports and custom styles
├── index.html               # HTML template with Google Fonts
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # TailwindCSS configuration
├── postcss.config.js        # PostCSS configuration
└── README.md                # This file
```

## Getting Started

### Prerequisites
- **Node.js** (version 14 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   The application will automatically open at `http://localhost:3000`

### Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

To preview the production build:

```bash
npm run preview
```

## Technologies Used

- **React 18** - Modern UI library
- **React Router DOM 6** - Client-side routing
- **TailwindCSS 3** - Utility-first CSS framework
- **Vite** - Next-generation build tool
- **Google Fonts** - Inter & Poppins typography
- **PostCSS** - CSS processing






`

