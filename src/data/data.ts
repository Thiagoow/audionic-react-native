import { Product } from '@Data/types'

const allProducts: Product[] = [
  {
    index: 0,
    id: 'beats-pro',
    name: 'Beats Pro Headset',
    description: `Input Type: 3.5mm stereo jack\nOther Features: Bluetooth, Foldable, Noise Isolation, Stereo, Stereo Bluetooth, Wireless\nForm Factor: On-Ear\nConnections: Bluetooth, Wireless\nSpeaker Configurations: Stereo`,
    image_link: require('../assets/headphones/beats-pro.png'),
    colors: [
      { color: 'red', blobBg: 'redCardBg', price: 249.9, available: true },
      { color: 'black', blobBg: 'blackCardBg', price: 249.9, available: true },
      { color: 'pink', blobBg: 'pinkCardBg', price: 249.9, available: false }
    ],
    average_rating: 5,
    favorite: true,
    type: 'Headphones',
    brand: 'Beats'
  },
  {
    index: 1,
    id: 'beats-solo',
    name: 'Beats Solo Headphone',
    description: `Input Type: 3.5mm stereo jack\nOther Features: Bluetooth, Foldable, Noise Isolation, Stereo, Stereo Bluetooth, Wireless\nForm Factor: On-Ear\nConnections: Bluetooth, Wireless\nSpeaker Configurations: Stereo`,
    image_link: require('../assets/headphones/beats-solo.png'),
    colors: [
      { color: 'blue', blobBg: 'blueCardBg', price: 225, available: true },
      { color: 'green', blobBg: 'blackCardBg', price: 225, available: false },
      { color: 'yellow', blobBg: 'blackCardBg', price: 225, available: false }
    ],
    average_rating: 4,
    favorite: false,
    type: 'Headphones',
    brand: 'Beats'
  },
  {
    index: 2,
    id: 'beats-sport-2',
    name: 'Beats Sport 2 Headphone',
    description: `Input Type: 3.5mm stereo jack\nOther Features: Bluetooth, Foldable, Noise Isolation, Stereo, Stereo Bluetooth, Wireless\nForm Factor: On-Ear\nConnections: Bluetooth, Wireless\nSpeaker Configurations: Stereo`,
    image_link: require('../assets/headphones/beats-sport-2.png'),
    colors: [
      { color: 'purple', blobBg: 'purpleCardBg', price: 160, available: true },
      { color: 'red', blobBg: 'redCardBg', price: 160, available: false },
      { color: 'cyan', blobBg: 'blueCardBg', price: 160, available: false }
    ],
    average_rating: 3,
    favorite: false,
    type: 'Headphones',
    brand: 'Beats'
  },
  {
    index: 3,
    id: 'beats-basic',
    name: 'Beats Basic Headphone',
    description: `Input Type: 3.5mm stereo jack\nOther Features: Bluetooth, Foldable, Noise Isolation, Stereo, Stereo Bluetooth, Wireless\nForm Factor: On-Ear\nConnections: Bluetooth, Wireless\nSpeaker Configurations: Stereo`,
    image_link: require('../assets/headphones/beats-basic.png'),
    colors: [
      { color: 'pink', blobBg: 'pinkCardBg', price: 129.9, available: true },
      { color: 'black', blobBg: 'blackCardBg', price: 129.9, available: false },
      { color: 'blue', blobBg: 'blueCardBg', price: 129.9, available: true }
    ],
    average_rating: 2,
    favorite: false,
    type: 'Headphones',
    brand: 'Beats'
  },
  {
    index: 4,
    id: 'jbl-endurance-sprint',
    name: 'JBL Endurance Sprint',
    description: `Input Type: 3.5mm stereo jack\nOther Features: Bluetooth, Foldable, Noise Isolation, Stereo, Stereo Bluetooth, Wireless\nForm Factor: On-Ear\nConnections: Bluetooth, Wireless\nSpeaker Configurations: Stereo`,
    image_link: require('../assets/headphones/jbl-endurance-sprint.png'),
    colors: [
      { color: 'unique', blobBg: 'blackCardBg', price: 300, available: true }
    ],
    average_rating: 2,
    favorite: true,
    type: 'Headphones',
    brand: 'JBL'
  },
  {
    index: 5,
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
    index: 6,
    id: 'jbl-flip-5',
    name: 'JBL Flip 5 Speaker',
    description: `Speaker Type: Bluetooth Speaker\nConnections: Bluetooth, Wireless`,
    image_link: require('../assets/speakers/jbl-flip-5.png'),
    colors: [
      { color: 'unique', blobBg: 'redCardBg', price: 500, available: true }
    ],
    average_rating: 3,
    favorite: false,
    type: 'Speakers',
    brand: 'JBL'
  },
  {
    index: 7,
    id: 'jbl-tune-510',
    name: 'JBL Tune 510 Headphone',
    description: `Input Type: 3.5mm stereo jack\nOther Features: Bluetooth, Foldable, Noise Isolation, Stereo, Stereo Bluetooth, Wireless\nForm Factor: On-Ear\nConnections: Bluetooth, Wireless\nSpeaker Configurations: Stereo`,
    image_link: require('../assets/headphones/jbl-tune-510.png'),
    colors: [
      { color: 'grey', blobBg: 'greyCardBg', price: 129.9, available: true },
      { color: 'black', blobBg: 'blackCardBg', price: 129.9, available: false }
    ],
    average_rating: 5,
    favorite: false,
    type: 'Headphones',
    brand: 'JBL'
  }
]

export default allProducts
