import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native'
import { colors } from '../theme/colors'
import { useMemo } from 'react'

type CategoryCardProps = {
  children: React.ReactNode
} & TouchableOpacityProps

const CategoryCard = ({ children, ...rest }: CategoryCardProps) => {
  return useMemo(
    () => (
      <TouchableOpacity style={styles.categoryCard} {...rest}>
        {children}
      </TouchableOpacity>
    ),
    [children, Object.keys(rest)]
  )
}

const styles = StyleSheet.create({
  categoryCard: {
    alignSelf: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 10,
    backgroundColor: colors.whiteColor,
    shadowColor: colors.blackColor,
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.25
  }
})

export default CategoryCard
