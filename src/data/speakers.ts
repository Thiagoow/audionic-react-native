import { Product } from './types'

const speakersData: Product[] = [
  {
    index: 3,
    id: 'jbl-pulse-3',
    name: 'JBL Pulse 3',
    description: `Speaker Type: Bluetooth Speaker
    Connections: Bluetooth, Wireless`,
    image_link: require('../assets/speakers/jbl-pulse-3.png'),
    colors: [
      { color: 'unique', blobBg: 'pinkCardBg', price: 400, available: true }
    ],
    average_rating: 3,
    favorite: false,
    type: 'JBL'
  },
  {
    index: 3,
    id: 'jbl-flip-5',
    name: 'JBL Flip 5',
    description: `Speaker Type: Bluetooth Speaker
    Connections: Bluetooth, Wireless`,
    image_link: require('../assets/speakers/jbl-flip-5.png'),
    colors: [
      { color: 'unique', blobBg: 'redCardBg', price: 500, available: true }
    ],
    average_rating: 4,
    favorite: false,
    type: 'JBL'
  }
]

export default speakersData
