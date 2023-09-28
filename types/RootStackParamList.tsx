// Import necessary types from React Navigation
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

// Define your RootStackParamList
export type RootStackParamList = {
  MealsCategories: undefined
  MealsOverview: { categoryId: string }
  MealDetail: { mealId: string }
}
