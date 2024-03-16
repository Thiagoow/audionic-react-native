import { createContext, useReducer, ReactNode, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AppReducer, ActionTypes } from '@Context/AppReducer'
import { Product, Order, AppState, GlobalStateContextProps } from '@Data/types'
import allProducts from '@Data/data'

const initialState: AppState = {
  products: allProducts,
  favorites: [],
  cart: [],
  orders: []
}

export const GlobalContext = createContext<GlobalStateContextProps>({
  products: [],
  favorites: [],
  cart: [],
  orders: [],
  isOnFavorite: () => false,
  toggleFavorite: () => {},
  deleteAllFromFavorites: () => {},
  addToCart: () => {},
  buyNow: () => {},
  increaseQty: () => {},
  decreaseQty: () => {},
  getTotalCartPrice: () => 0,
  deleteAllFromCart: () => {}
})

interface GlobalStateProps {
  children: ReactNode
}

export const GlobalProvider = ({ children }: GlobalStateProps) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  useEffect(() => {
    const loadState = async () => {
      try {
        const storedState = await AsyncStorage.getItem('appState')
        if (storedState !== null) {
          dispatch({
            type: ActionTypes.RESTORE_STATE,
            payload: JSON.parse(storedState)
          })
        }
      } catch (error) {
        console.error('Error loading state from AsyncStorage:', error)
      }
    }

    loadState()
  }, [])

  useEffect(() => {
    const saveState = async () => {
      try {
        await AsyncStorage.setItem('appState', JSON.stringify(state))
      } catch (error) {
        console.error('Error saving state to AsyncStorage:', error)
      }
    }

    saveState()
  }, [state])

  const isOnFavorite = (id: string) => {
    return state.favorites.some((product) => product.id === id)
  }
  const getTotalCartPrice = () => {
    return state.cart.reduce((acc, product) => {
      return acc + product.colors[0].price * product.colors[0].quantity
    }, 0)
  }
  const buyNow = (products: Product[]) => {
    const order: Order = {
      id: Math.random().toString(36).substring(2),
      date: new Date().toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }),
      total:
        products.length === 1
          ? products[0].colors[0].price
          : getTotalCartPrice(),
      products
    }

    dispatch({
      type: ActionTypes.BUY_NOW,
      payload: order
    })
  }
  const toggleFavorite = (product: Product) => {
    dispatch({
      type: ActionTypes.TOGGLE_FAVORITE,
      payload: product
    })
  }
  const deleteAllFromFavorites = () => {
    dispatch({
      type: ActionTypes.DELETE_ALL_FROM_FAVORITES
    })
  }

  const addToCart = (product: Product) => {
    dispatch({
      type: ActionTypes.ADD_TO_CART,
      payload: product
    })
  }
  const increaseQty = (id: string, color: string) => {
    dispatch({
      type: ActionTypes.INCREASE_QTY,
      payload: { id, color }
    })
  }
  const decreaseQty = (id: string, color: string) => {
    dispatch({
      type: ActionTypes.DECREASE_QTY,
      payload: { id, color }
    })
  }
  const deleteAllFromCart = () => {
    dispatch({
      type: ActionTypes.DELETE_ALL_FROM_CART
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        products: state.products,
        favorites: state.favorites,
        cart: state.cart,
        orders: state.orders,
        isOnFavorite,
        toggleFavorite,
        deleteAllFromFavorites,
        addToCart,
        buyNow,
        increaseQty,
        decreaseQty,
        getTotalCartPrice,
        deleteAllFromCart
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
