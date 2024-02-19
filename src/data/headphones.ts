interface Product {
  index: number
  id: string
  name: string
  description: string
  image_link: any
  colors: HeadphoneColor[]
  average_rating: number
  favorite: boolean
  type: 'Beats' | 'JBL'
}

interface HeadphoneColor {
  color: string
  price: number
  available: boolean
}

const headphonesData: Product[] = [
  {
    index: 0,
    id: 'beats-pro',
    name: 'Beats Pro Headset',
    description: `Input Type: 3.5mm stereo jack
    Other Features: Bluetooth, Foldable, Noise Isolation, Stereo, Stereo Bluetooth, Wireless
    Form Factor: On-Ear
    Connections: Bluetooth, Wireless
    Speaker Configurations: Stereo`,
    image_link: require('../assets/headphones/beats-pro.png'),
    colors: [
      { color: 'red', price: 249.9, available: true },
      { color: 'black', price: 249.9, available: true },
      { color: 'pink', price: 249.9, available: false }
    ],
    average_rating: 5,
    favorite: true,
    type: 'Beats'
  },
  {
    index: 1,
    id: 'beats-solo',
    name: 'Beats Solo Headphone',
    description: `Input Type: 3.5mm stereo jack
    Other Features: Bluetooth, Foldable, Noise Isolation, Stereo, Stereo Bluetooth, Wireless
    Form Factor: On-Ear
    Connections: Bluetooth, Wireless
    Speaker Configurations: Stereo`,
    image_link: require('../assets/headphones/beats-solo.png'),
    colors: [
      { color: 'blue', price: 225, available: true },
      { color: 'green', price: 225, available: false },
      { color: 'yellow', price: 225, available: false }
    ],
    average_rating: 4,
    favorite: false,
    type: 'Beats'
  },
  {
    index: 2,
    id: 'beats-sport-2',
    name: 'Beats Sport 2 Headphone',
    description: `Input Type: 3.5mm stereo jack
    Other Features: Bluetooth, Foldable, Noise Isolation, Stereo, Stereo Bluetooth, Wireless
    Form Factor: On-Ear
    Connections: Bluetooth, Wireless
    Speaker Configurations: Stereo`,
    image_link: require('../assets/headphones/beats-sport-2.png'),
    colors: [
      { color: 'purple', price: 160, available: true },
      { color: 'red', price: 160, available: false },
      { color: 'cyan', price: 160, available: false }
    ],
    average_rating: 3,
    favorite: true,
    type: 'Beats'
  },
  {
    index: 3,
    id: 'beats-basic',
    name: 'Beats Basic Headphone',
    description: `Input Type: 3.5mm stereo jack
    Other Features: Bluetooth, Foldable, Noise Isolation, Stereo, Stereo Bluetooth, Wireless
    Form Factor: On-Ear
    Connections: Bluetooth, Wireless
    Speaker Configurations: Stereo`,
    image_link: require('../assets/headphones/beats-basic.png'),
    colors: [
      { color: 'pink', price: 129.9, available: true },
      { color: 'black', price: 129.9, available: false },
      { color: 'blue', price: 129.9, available: true }
    ],
    average_rating: 2,
    favorite: false,
    type: 'Beats'
  },
  {
    index: 3,
    id: 'jbl-tune-510',
    name: 'JBL Tune 510 Headphone',
    description: `Input Type: 3.5mm stereo jack
    Other Features: Bluetooth, Foldable, Noise Isolation, Stereo, Stereo Bluetooth, Wireless
    Form Factor: On-Ear
    Connections: Bluetooth, Wireless
    Speaker Configurations: Stereo`,
    image_link: require('../assets/headphones/jbl-tune-510.png'),
    colors: [
      { color: 'grey', price: 129.9, available: true },
      { color: 'black', price: 129.9, available: false }
    ],
    average_rating: 5,
    favorite: false,
    type: 'JBL'
  },
  {
    index: 3,
    id: 'jbl-endurance-sprint',
    name: 'JBL Endurance Sprint',
    description: `Bluetooth In Ear Headphones
    Other Features: Bluetooth, Foldable, Noise Isolation, Stereo, Stereo Bluetooth, Wireless
    Form Factor: On-Ear
    Connections: Bluetooth, Wireless
    Speaker Configurations: Stereo`,
    image_link: require('../assets/headphones/jbl-endurance-sprint.png'),
    colors: [{ color: 'unique', price: 300, available: true }],
    average_rating: 2,
    favorite: false,
    type: 'JBL'
  }
]

export default headphonesData
