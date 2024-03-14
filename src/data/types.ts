import { ImageProps } from 'react-native'

export interface GlobalStateContextProps extends AppState {
  products: Product[]
  favorites: Product[]
  cart: Product[]
  orders: Order[]
  isOnFavorite: (id: string) => boolean
  toggleFavorite: (product: Product) => void
  deleteAllFromFavorites: () => void
  addToCart: (product: Product) => void
  buyNow: (products: Product[]) => void
  increaseQty: (id: string, color: string) => void
  decreaseQty: (id: string, color: string) => void
  getTotalCartPrice: () => number
  deleteAllFromCart: () => void
}
export interface AppState {
  products: Product[]
  favorites: Product[]
  cart: Product[]
  orders: Order[]
}

export interface ProductCardProps
  extends Omit<Product, 'image_link' | 'colors' | 'average_rating'> {
  imgUrl: ImageProps['source']
  productColors: Product['colors']
  averageRating: Product['average_rating']
}

export interface Order {
  id: string
  date: string
  total: number
  products: Product[]
}

export interface Product {
  index: number
  id: string
  name: string
  description: string
  image_link: any
  colors: ProductColor[]
  average_rating: number
  favorite: boolean
  type: 'Headphones' | 'Speakers'
  brand: 'Beats' | 'JBL' | 'AKG'
}

export interface ProductColor {
  color: string
  quantity: number
  price: number
  available: boolean
  blobBg:
    | 'redCardBg'
    | 'blueCardBg'
    | 'purpleCardBg'
    | 'pinkCardBg'
    | 'blackCardBg'
    | 'greyCardBg'
}
