/**
 * Local Storage Utilities
 * Handles saving and retrieving cart data from browser's local storage
 */

const CART_STORAGE_KEY = 'ecommerce_cart'

/**
 * Get cart items from local storage
 * @returns {Array} Array of cart items with product id and quantity
 */
export const getCartFromStorage = () => {
  try {
    const cartData = localStorage.getItem(CART_STORAGE_KEY)
    return cartData ? JSON.parse(cartData) : []
  } catch (error) {
    console.error('Error reading cart from storage:', error)
    return []
  }
}

/**
 * Save cart items to local storage
 * @param {Array} cart - Array of cart items
 */
export const saveCartToStorage = (cart) => {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
  } catch (error) {
    console.error('Error saving cart to storage:', error)
  }
}

/**
 * Clear cart from local storage
 */
export const clearCartFromStorage = () => {
  try {
    localStorage.removeItem(CART_STORAGE_KEY)
  } catch (error) {
    console.error('Error clearing cart from storage:', error)
  }
}

