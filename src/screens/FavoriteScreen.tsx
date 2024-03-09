import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome6'
import allProducts from '@Data/data'
import { colors } from '@Theme/colors'
import AppLayout from '@ComponentsAppLayout'
import FavoriteCard from '@ComponentsFavoriteCard'
import { Product } from '@src/data/types'

export default function FavoriteScreen() {
  const favorites: Product[] = allProducts.filter((product) => product.favorite)

  function deleteAllFavorites() {
    console.log('delete all favorites')
  }

  function deleteFavorite(index: number) {
    console.log('delete favorite', index)
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
        <ScrollView
          contentContainerStyle={styles.itemsScroll}
          showsVerticalScrollIndicator={false}
        >
          {favorites.map((product) => (
            <FavoriteCard
              {...product}
              {...{
                key: product.id,
                liked: product.favorite,
                setLiked: () => deleteFavorite(product.index),
                imgUrl: product.image_link,
                productColors: product.colors,
                averageRating: product.average_rating
              }}
            />
          ))}
        </ScrollView>
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
  },
  itemsScroll: {
    width: '100%',
    rowGap: 20,
    paddingBottom: 20,
    paddingHorizontal: 35,
    alignSelf: 'center'
  }
})
