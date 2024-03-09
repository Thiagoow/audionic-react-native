import { useMemo } from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { colors } from '@Theme/colors'
import Icon from 'react-native-vector-icons/FontAwesome6'

type CartButtonProps = {
  iconSize?: number
} & TouchableOpacityProps

const CartButton = ({ iconSize, ...rest }: CartButtonProps) => {
  return useMemo(
    () => (
      <TouchableOpacity
        hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
        {...rest}
      >
        <Icon
          name="cart-shopping"
          size={iconSize || 16}
          color={colors.txtDarkColor}
        />
      </TouchableOpacity>
    ),
    [iconSize, Object.keys(rest)]
  )
}

export default CartButton
