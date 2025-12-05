import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

/**
 * Product Card Component
 * Modern product card with hover effects and add to cart functionality
 */
const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product.id)
    // Show a subtle notification (you could use a toast library here)
    const button = e.target
    const originalText = button.textContent
    button.textContent = 'Added!'
    button.classList.add('bg-green-500', 'hover:bg-green-600')
    setTimeout(() => {
      button.textContent = originalText
      button.classList.remove('bg-green-500', 'hover:bg-green-600')
    }, 1000)
  }

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      {/* Product Image */}
      <div className="relative overflow-hidden bg-gray-100 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="mb-2">
          <span className="inline-block px-2 py-1 text-xs font-semibold text-primary-600 bg-primary-50 rounded-md">
            {product.category}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-2xl font-bold text-primary-600 mb-4">
          ${product.price.toFixed(2)}
        </p>
        <button
          onClick={handleAddToCart}
          className="w-full btn-primary text-sm py-2.5"
        >
          Add to Cart
        </button>
      </div>
    </Link>
  )
}

export default ProductCard
