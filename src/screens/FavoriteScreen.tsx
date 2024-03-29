import { useContext } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome6'
import { colors } from '@Theme/colors'
import AppLayout from '@ComponentsAppLayout'
import FavoriteCard from '@ComponentsFavoriteCard'
import { GlobalContext } from '@Context/GlobalState'

export default function FavoriteScreen() {
  const { favorites, deleteAllFromFavorites, toggleFavorite, isOnFavorite } =
    useContext(GlobalContext)

  return (
    <AppLayout fullHeight>
      <TouchableOpacity
        disabled={!favorites.length}
        onPress={deleteAllFromFavorites}
        style={[
          styles.deleteAllBtn,
          {
            backgroundColor: favorites.length
              ? colors.txtDarkColor
              : colors.blackCardBg
          }
        ]}
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
                liked: isOnFavorite(product.id),
                setLiked: () => toggleFavorite(product),
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
    paddingVertical: 12,
    marginBottom: 20
  },
  deleteAllLabel: {
    color: colors.whiteColor,
    fontFamily: 'Poppins_400Regular',
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
    textAlign: 'center',
    fontFamily: 'Poppins_600SemiBold',
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
