export interface Product {
  index: number
  id: string
  name: string
  description: string
  image_link: any
  colors: ProductColor[]
  average_rating: number
  favorite: boolean
  type: 'Beats' | 'JBL'
}

export interface ProductColor {
  color: string
  price: number
  available: boolean
}
