import { Product, Order, AppState } from '@Data/types'

const initialState: AppState = {
  products: [],
  favorites: [],
  cart: [],
  orders: []
}

export enum ActionTypes {
  TOGGLE_FAVORITE = 'TOGGLE_FAVORITE',
  ADD_TO_CART = 'ADD_TO_CART',
  BUY_NOW = 'BUY_NOW',
  INCREASE_QTY = 'INCREASE_QTY',
  DECREASE_QTY = 'DECREASE_QTY',
  DELETE_ALL_FROM_CART = 'DELETE_ALL_FROM_CART',
  DELETE_ALL_FROM_FAVORITES = 'DELETE_ALL_FROM_FAVORITES'
}

type Action =
  | { type: ActionTypes.TOGGLE_FAVORITE; payload: Product }
  | { type: ActionTypes.ADD_TO_CART; payload: Product }
  | { type: ActionTypes.BUY_NOW; payload: Order }
  | { type: ActionTypes.INCREASE_QTY; payload: { id: string; color: string } }
  | { type: ActionTypes.DECREASE_QTY; payload: { id: string; color: string } }
  | { type: ActionTypes.DELETE_ALL_FROM_CART }
  | { type: ActionTypes.DELETE_ALL_FROM_FAVORITES }

export const AppReducer = (
  state: AppState = initialState,
  action: Action
): AppState => {
  switch (action.type) {
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
      const { payload } = action
      const productExists = state.cart.some(
        (product) =>
          product.id === payload.id &&
          product.colors[0].color === payload.colors[0].color
      )

      if (productExists) {
        return {
          ...state,
          cart: state.cart.map((product) =>
            product.id === payload.id
              ? {
                  ...product,
                  colors: [
                    {
                      ...product.colors[0],
                      quantity: product.colors[0].quantity + 1
                    }
                  ]
                }
              : product
          )
        }
      } else {
        return {
          ...state,
          cart: [...state.cart, payload]
        }
      }
    case ActionTypes.BUY_NOW:
      return {
        ...state,
        orders: [...state.orders, action.payload]
      }
    case ActionTypes.INCREASE_QTY:
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === action.payload.id &&
          product.colors[0].color === action.payload.color
            ? {
                ...product,
                colors: [
                  {
                    ...product.colors[0],
                    quantity: product.colors[0].quantity + 1
                  }
                ]
              }
            : product
        )
      }
    case ActionTypes.DECREASE_QTY:
      const { id, color } = action.payload
      const isQuantityOne = state.cart.some(
        (product) =>
          product.id === id &&
          product.colors[0].color === color &&
          product.colors[0].quantity === 1
      )

      if (isQuantityOne) {
        return {
          ...state,
          cart: state.cart.filter(
            (product) =>
              !(product.id === id && product.colors[0].color === color)
          )
        }
      } else {
        return {
          ...state,
          cart: state.cart.map((product) =>
            product.id === id && product.colors[0].color === color
              ? {
                  ...product,
                  colors: [
                    {
                      ...product.colors[0],
                      quantity: product.colors[0].quantity - 1
                    }
                  ]
                }
              : product
          )
        }
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
