import Icon from 'react-native-vector-icons/FontAwesome6'
import { colors } from '../theme/colors'
import { Product } from '../data/types'

type StarsRatingProps = {
  averageRating: Product['average_rating']
  size?: number
}

const StarsRating = ({ averageRating, size }: StarsRatingProps) => {
  return Array.from({ length: 5 }, (item, index) => (
    <Icon
      key={index}
      solid={index < Math.round(averageRating)}
      name="star"
      size={size || 8}
      style={{ color: colors.starsColor }}
    />
  ))
}

export default StarsRating
