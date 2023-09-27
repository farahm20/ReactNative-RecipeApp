import { View, Text, StyleSheet, FlatList } from 'react-native'

import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'
import { useLayoutEffect } from 'react'

function MealsOverviewScreen({ route, navigation }) {
  const cateId = route.params.categoryId
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(cateId) >= 0 //(greater than 0 then returns true otherwise returns -1 for false)
  })

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === cateId)
      .title

    navigation.setOptions({ title: categoryTitle })
  }, [cateId, navigation])

  function renderMealItem(itemData) {
    const item = itemData.item
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    }
    return <MealItem {...mealItemProps} />
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})
