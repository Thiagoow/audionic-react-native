import { Product } from './types'

const speakersData: Product[] = [
  {
    index: 0,
    id: 'jbl-pulse-3',
    name: 'JBL Pulse 3 Speaker',
    description: `Speaker Type: Bluetooth Speaker\nConnections: Bluetooth, Wireless`,
    image_link: require('../assets/speakers/jbl-pulse-3.png'),
    colors: [
      { color: 'unique', blobBg: 'pinkCardBg', price: 400, available: true }
    ],
    average_rating: 3,
    favorite: false,
    type: 'Speakers',
    brand: 'JBL'
  },
  {
    index: 1,
    id: 'jbl-flip-5',
    name: 'JBL Flip 5 Speaker',
    description: `Speaker Type: Bluetooth Speaker\nConnections: Bluetooth, Wireless`,
    image_link: require('../assets/speakers/jbl-flip-5.png'),
    colors: [
      { color: 'unique', blobBg: 'redCardBg', price: 500, available: true }
    ],
    average_rating: 4,
    favorite: false,
    type: 'Speakers',
    brand: 'JBL'
  }
]

export default speakersData
