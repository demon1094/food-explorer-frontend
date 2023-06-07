/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react"

const CartContext = createContext({})

export function CartProvider({ children }) {
  const [ cart, setCart ] = useState([])
  const [ dishesOnCartCounter, setDishesOnCartCounter ] = useState(0)

  async function addDishToCart(newDish) {
    const dishesOnCart = localStorage.getItem('@foodexplorer:cart')
    
    if (dishesOnCart) {
      const dishes = JSON.parse(dishesOnCart)
      
      const dishAlreadyOnCart = dishes.find(dish => dish.name === newDish.name)
      
      if (dishAlreadyOnCart) {
        const newArrayOfDishes = dishes.filter(item => item !== dishAlreadyOnCart)
        
        newDish.amount = newDish.amount + dishAlreadyOnCart.amount
        
        setCart([...newArrayOfDishes, newDish])
        return localStorage.setItem('@foodexplorer:cart', JSON.stringify([...newArrayOfDishes, newDish]))
      }
      
      setCart([...dishes, newDish])
      setDishesOnCartCounter(prevState => prevState + 1)
      return localStorage.setItem('@foodexplorer:cart', JSON.stringify([...dishes, newDish]))
    }

    setCart([newDish])
    setDishesOnCartCounter(prevState => prevState + 1)
    localStorage.setItem('@foodexplorer:cart', JSON.stringify([newDish]))
  }

  async function removeDishFromCart(removedDish) {
    const cartWithRemovedDish = cart.filter(dish => dish !== removedDish)

    setCart(cartWithRemovedDish)
    setDishesOnCartCounter(prevState => prevState - 1)
    return localStorage.setItem('@foodexplorer:cart', JSON.stringify(cartWithRemovedDish))
  }

  useEffect(() => {
    const dishesOnCart = localStorage.getItem('@foodexplorer:cart')

    if (dishesOnCart) {
      setCart(JSON.parse(dishesOnCart))
    }

    setDishesOnCartCounter(JSON.parse(dishesOnCart).length)
  }, [])

  return (
    <CartContext.Provider value={{
      cart,
      addDishToCart,
      removeDishFromCart,
      dishesOnCartCounter,
      setDishesOnCartCounter,
      }}
    >
      { children }
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  return context
}