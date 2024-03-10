import { Product, AppState } from '@Data/types'

const initialState: AppState = {
  products: [],
  favorites: [],
  cart: []
}

export enum ActionTypes {
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  ADD_PRODUCT = 'ADD_PRODUCT',
  EDIT_PRODUCT = 'EDIT_PRODUCT',
  TOGGLE_FAVORITE = 'TOGGLE_FAVORITE',
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  DELETE_ALL_FROM_CART = 'DELETE_ALL_FROM_CART',
  DELETE_ALL_FROM_FAVORITES = 'DELETE_ALL_FROM_FAVORITES'
}

type Action =
  | { type: ActionTypes.REMOVE_PRODUCT; payload: string }
  | { type: ActionTypes.ADD_PRODUCT; payload: Product }
  | { type: ActionTypes.EDIT_PRODUCT; payload: Product }
  | { type: ActionTypes.TOGGLE_FAVORITE; payload: Product }
  | { type: ActionTypes.ADD_TO_CART; payload: Product }
  | { type: ActionTypes.REMOVE_FROM_CART; payload: string }
  | { type: ActionTypes.DELETE_ALL_FROM_CART }
  | { type: ActionTypes.DELETE_ALL_FROM_FAVORITES }

export const AppReducer = (
  state: AppState = initialState,
  action: Action
): AppState => {
  switch (action.type) {
    case ActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        )
      }
    case ActionTypes.ADD_PRODUCT:
      return {
        ...state,
        products: [action.payload, ...state.products]
      }
    case ActionTypes.EDIT_PRODUCT:
      const updatedProduct = action.payload
      const updatedProducts = state.products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
      return {
        ...state,
        products: updatedProducts
      }
    case ActionTypes.TOGGLE_FAVORITE:
      const toggleProduct = action.payload
      const isFavorite = state.favorites.some(
        (product) => product.id === toggleProduct.id
      )

      if (isFavorite) {
        return {
          ...state,
          favorites: state.favorites.filter(
            (product) => product.id !== toggleProduct.id
          )
        }
      } else {
        return {
          ...state,
          favorites: [...state.favorites, toggleProduct]
        }
      }
    case ActionTypes.DELETE_ALL_FROM_FAVORITES:
      return {
        ...state,
        favorites: []
      }
    case ActionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    case ActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload)
      }
    case ActionTypes.DELETE_ALL_FROM_CART:
      return {
        ...state,
        cart: []
      }

    default:
      return state
  }
}
