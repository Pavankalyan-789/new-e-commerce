import React, { createContext, useContext, useState, useEffect } from 'react'
import { getCartFromStorage, saveCartToStorage } from '../utils/localStorage'

/**
 * Cart Context
 * Manages global cart state and provides cart operations to all components
 */
const CartContext = createContext()

/**
 * Custom hook to use cart context
 */
export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

/**
 * Cart Provider Component
 * Wraps the app and provides cart state management
 */
export const CartProvider = ({ children }) => {
  // Initialize cart from local storage on mount
  const [cart, setCart] = useState(() => getCartFromStorage())

  // Save cart to local storage whenever it changes
  useEffect(() => {
    saveCartToStorage(cart)
  }, [cart])

  /**
   * Add a product to the cart
   * If product already exists, increment quantity
   */
  const addToCart = (productId) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === productId)
      if (existingItem) {
        // Increment quantity if item already exists
        return prevCart.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        // Add new item with quantity 1
        return [...prevCart, { id: productId, quantity: 1 }]
      }
    })
  }

  /**
   * Remove a product from the cart
   */
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }

  /**
   * Update quantity of a product in the cart
   */
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    )
  }

  /**
   * Get total number of items in cart
   */
  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  /**
   * Clear the entire cart
   */
  const clearCart = () => {
    setCart([])
  }

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartItemCount,
    clearCart
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

