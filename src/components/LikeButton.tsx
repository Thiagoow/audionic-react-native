import { useMemo } from 'react'
import { TouchableOpacityProps } from 'react-native'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome6'
import { colors } from '@Theme/colors'

type LikeButtonProps = {
  liked: boolean
  setLiked: (value: boolean) => void
  size?: number
  iconSize?: number
  position?: {
    top?: number
    right?: number
    bottom?: number
    left?: number
  }
} & TouchableOpacityProps

const LikeButton = ({
  liked,
  setLiked,
  size,
  iconSize,
  position,
  ...rest
}: LikeButtonProps) => {
  return useMemo(
    () => (
      <TouchableOpacity
        hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
        activeOpacity={0.8}
        style={[
          styles.likeButton,
          {
            backgroundColor: liked ? colors.heartColor : colors.greyColor,
            width: size || 18,
            height: size || 18,
            top: position?.top || 12,
            right: position?.right || 12,
            bottom: position?.bottom,
            left: position?.left
          }
        ]}
        onPress={() => setLiked(!liked)}
      >
        <Icon
          solid
          name="heart"
          size={iconSize || 10}
          style={{ color: colors.whiteColor }}
        />
      </TouchableOpacity>
    ),
    [liked, setLiked, size, iconSize, Object.keys(rest)]
  )
}

export default LikeButton

const styles = StyleSheet.create({
  likeButton: {
    zIndex: 1,
    position: 'absolute',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
