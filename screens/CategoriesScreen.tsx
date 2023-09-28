import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import CategoryGridTile from '../components/CategoryGridTile'

import { CATEGORIES } from '../data/dummy-data'

interface Category {
  id: string
  title: string
  color: string
}

interface CategoriesScreenProps {
  navigation: any
}

function CategoriesScreen({ navigation }: CategoriesScreenProps) {
  const renderCategoryItem = ({ item }: { item: Category }) => {
    const pressHandler = () => {
      navigation.navigate('MealsOverview', { categoryId: item.id })
    }

    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        whenPressed={pressHandler}
      />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#rgb(255 255 255)',
  },
})

export default CategoriesScreen
