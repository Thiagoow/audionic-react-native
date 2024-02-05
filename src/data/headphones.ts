const headphonesData = [
  {
    index: 0,
    id: 'beats-pro',
    name: 'Beats Pro Headset',
    description: `Input Type: 3.5mm stereo jack
    Other Features: Bluetooth, Foldable, Noise Isolation, Stereo, Stereo Bluetooth, Wireless
    Form Factor: On-Ear
    Connections: Bluetooth, Wireless
    Speaker Configurations: Stereo`,
    image_link: require('../assets/coffee_assets/americano/square/americano_pic_1_square.png'),
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
    image_link: require('../assets/coffee_assets/americano/square/americano_pic_1_square.png'),
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
    id: 'beats-solo-2',
    name: 'Beats Solo 2 Headphone',
    description: `Input Type: 3.5mm stereo jack
    Other Features: Bluetooth, Foldable, Noise Isolation, Stereo, Stereo Bluetooth, Wireless
    Form Factor: On-Ear
    Connections: Bluetooth, Wireless
    Speaker Configurations: Stereo`,
    image_link: require('../assets/coffee_assets/americano/square/americano_pic_1_square.png'),
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
    image_link: require('../assets/coffee_assets/americano/square/americano_pic_1_square.png'),
    colors: [
      { color: 'pink', price: 129.9, available: true },
      { color: 'black', price: 129.9, available: false },
      { color: 'blue', price: 129.9, available: true }
    ],
    average_rating: 2,
    favorite: false,
    type: 'Beats'
  }
]

export default headphonesData
