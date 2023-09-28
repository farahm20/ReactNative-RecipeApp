import React, { useLayoutEffect } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { RouteProp, NavigationProp } from '@react-navigation/native'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'
import { RootStackParamList } from '../types/RootStackParamList'

// interface MealsOverviewScreenProps {
//   route: { params: { categoryId: string } }
//   navigation: any
// }

interface MealsOverviewScreenProps {
  route: RouteProp<RootStackParamList, 'MealsOverview'> // Replace 'RootStackParamList' with your actual param list
  navigation: NavigationProp<RootStackParamList, 'MealsOverview'> // Replace 'RootStackParamList' with your actual param list
}

const MealsOverviewScreen: React.FC<MealsOverviewScreenProps> = ({
  route,
  navigation,
}) => {
  const cateId = route.params.categoryId
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.includes(cateId)
  })

  useLayoutEffect(() => {
    const categoryTitle =
      CATEGORIES.find((category) => category.id === cateId)?.title || ''

    navigation.setOptions({ title: categoryTitle })
  }, [cateId, navigation])

  const renderMealItem = ({ item }: { item: typeof MEALS[0] }) => {
    return (
      <MealItem
        id={item.id}
        title={item.title}
        imageUrl={item.imageUrl}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
        mealId={item.id}
      />
    )
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})

export default MealsOverviewScreen
