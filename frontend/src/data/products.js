/**
 * Sample product data
 * In a real application, this would come from an API
 */
export const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    description: "High-quality wireless headphones with noise cancellation. Perfect for music lovers and professionals.",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    description: "Feature-rich smartwatch with fitness tracking, heart rate monitor, and smartphone connectivity.",
    category: "Electronics"
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    description: "Comfortable and durable running shoes with excellent cushioning and support.",
    category: "Fashion"
  },
  {
    id: 4,
    name: "Laptop Backpack",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    description: "Stylish and functional backpack designed for laptops up to 15 inches with multiple compartments.",
    category: "Accessories"
  },
  {
    id: 5,
    name: "Coffee Maker",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1517668808823-f8c76b4e1962?w=500",
    description: "Programmable coffee maker with thermal carafe. Makes up to 12 cups of delicious coffee.",
    category: "Home"
  },
  {
    id: 6,
    name: "Wireless Mouse",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
    description: "Ergonomic wireless mouse with precision tracking and long battery life.",
    category: "Electronics"
  },
  {
    id: 7,
    name: "Desk Lamp",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
    description: "Modern LED desk lamp with adjustable brightness and color temperature.",
    category: "Home"
  },
  {
    id: 8,
    name: "Water Bottle",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500",
    description: "Insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
    category: "Accessories"
  }
]

/**
 * Get a product by its ID
 */
export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id))
}

/**
 * Get all unique categories
 */
export const getCategories = () => {
  return [...new Set(products.map(product => product.category))]
}

