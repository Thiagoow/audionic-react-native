import { useMemo } from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { colors } from '@Theme/colors'
import Icon from 'react-native-vector-icons/FontAwesome6'

type CartButtonProps = {} & TouchableOpacityProps

const CartButton = ({ hitSlop, onPress, ...rest }: CartButtonProps) => {
  return useMemo(
    () => (
      <TouchableOpacity {...{ hitSlop, onPress }}>
        <Icon name="cart-shopping" size={16} color={colors.txtDarkColor} />
      </TouchableOpacity>
    ),
    [hitSlop, onPress, Object.keys(rest)]
  )
}

export default CartButton
