/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react"

const CartContext = createContext({})

export function CartProvider({ children }) {
  const [ cart, setCart ] = useState([])
  const [ dishesOnCartCounter, setDishesOnCartCounter ] = useState(0)

  async function addDishToCart(newDish) {
    // Buscar pelos pratos existentes no carrinho
    const dishesOnCard = localStorage.getItem('@foodexplorer:cart')
    
    // Verifica se já existe pratos no carrinho 
    if (dishesOnCard) {
      const dishes = JSON.parse(dishesOnCard)
      
      // Verifica se o novo prato já existe no carrinho
      const dishAlreadyOnCart = dishes.find(dish => dish.name === newDish.name)
      
      if (dishAlreadyOnCart) {
        // Filtra o array de pratos excluindo o prato que já existe
        const newArrayOfDishes = dishes.filter(item => item !== dishAlreadyOnCart)
        
        // Atualiza a quantidade do novo prato somando a quantidade com
        // a quantidade do prato que já estava lá
        newDish.amount = newDish.amount + dishAlreadyOnCart.amount
        
        // Insere no local storage espalhando o novo array criado sem o prato com
        // o novo prato (mesmo prato, porém com o a quantidade atualizada)
        setCart([...newArrayOfDishes, newDish])
        return localStorage.setItem('@foodexplorer:cart', JSON.stringify([...newArrayOfDishes, newDish]))
      }
      
      // Insere no local storage os pratos existentes com o novo prato
      setCart([...dishes, newDish])
      return localStorage.setItem('@foodexplorer:cart', JSON.stringify([...dishes, newDish]))
    }
    
    // Insere no local storage o primeiro prato
    setCart([newDish])
    localStorage.setItem('@foodexplorer:cart', JSON.stringify([newDish]))
  }

  useEffect(() => {
    const dishesOnCart = localStorage.getItem('@foodexplorer:cart')

    if (dishesOnCart) {
      setCart(JSON.parse(dishesOnCart))
    }
  }, [])

  return (
    <CartContext.Provider value={{
      cart,
      addDishToCart,
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