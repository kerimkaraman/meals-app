import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function MealDetailScreen({route}) {
    const id  = route.params.mealId;

  return (
    <View>
      <Text>MealScreen - {id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})