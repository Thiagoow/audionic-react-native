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
