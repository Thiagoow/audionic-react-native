import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome6'
import { Product } from '@Data/types'
import { colors } from '@Theme/colors'
import AppLayout from '@ComponentsAppLayout'

export default function FavoriteScreen() {
  const favorites: Product[] = [] // allProducts.filter((product) => product.favorite)

  function deleteAllFavorites() {
    console.log('delete all favorites')
  }

  return (
    <AppLayout fullHeight>
      <TouchableOpacity
        onPress={deleteAllFavorites}
        style={styles.deleteAllBtn}
      >
        <Text style={styles.deleteAllLabel}>Delete All Favorites</Text>
      </TouchableOpacity>

      {favorites.length ? (
        favorites.map((product) => <Text key={product.id}>{product.name}</Text>)
      ) : (
        <View style={styles.emptyFavorites}>
          <View style={styles.emptyIcon}>
            <Icon
              solid
              name="heart"
              size={32}
              style={{ color: colors.containerColor }}
            />
          </View>

          <Text style={styles.emptyMessage}>
            The products you favorite will appear here
          </Text>
        </View>
      )}
    </AppLayout>
  )
}

const styles = StyleSheet.create({
  deleteAllBtn: {
    width: '85%',
    marginTop: 23,
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: colors.txtDarkColor,
    paddingVertical: 12,
    marginBottom: 20
  },
  deleteAllLabel: {
    color: colors.whiteColor,
    textAlign: 'center'
  },
  emptyFavorites: {
    flex: 1,
    rowGap: 12,
    marginBottom: 80,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyIcon: {
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blackCardBg,
    borderRadius: 50
  },
  emptyMessage: {
    fontSize: 14,
    maxWidth: 200,
    fontWeight: '600',
    textAlign: 'center',
    color: colors.blackCardBg
  }
})
