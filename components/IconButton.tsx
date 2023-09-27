import { Ionicons } from '@expo/vector-icons'
import { Pressable, StyleSheet } from 'react-native'
import React from 'react'

interface IconButtonProps {
  icon: string
  color: string
  onPress: () => void
}

const IconButton: React.FC<IconButtonProps> = ({ icon, color, onPress }) => {
  console.log('In the ts file: ', icon, color, onPress)
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
})