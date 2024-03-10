import { createContext, useReducer, ReactNode, Dispatch } from 'react'
import { AppReducer, ActionTypes } from '@Context/AppReducer'
import { Product, AppState, GlobalStateContextProps } from '@Data/types'

const initialState: AppState = {
  products: [],
  favorites: [],
  cart: []
}

export const GlobalContext = createContext<GlobalStateContextProps>({
  products: [],
  favorites: [],
  cart: [],
  isOnFavorite: () => false,
  toggleFavorite: () => {},
  deleteAllFromFavorites: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  deleteAllFromCart: () => {}
})

interface GlobalStateProps {
  children: ReactNode
}

export const GlobalProvider = ({ children }: GlobalStateProps) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const isOnFavorite = (id: string) => {
    return state.favorites.some((product) => product.id === id)
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
  const removeFromCart = (id: string) => {
    dispatch({
      type: ActionTypes.REMOVE_FROM_CART,
      payload: id
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
        isOnFavorite,
        toggleFavorite,
        deleteAllFromFavorites,
        addToCart,
        removeFromCart,
        deleteAllFromCart
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
