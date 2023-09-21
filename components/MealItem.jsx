import { StyleSheet, Text, View, Pressable, Image, Platform } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function MealItem({id, title, imageUrl, duration, affordability, complexity }) {

   const navigation = useNavigation();
   function onPressHandler() {
        navigation.navigate('MealDetailScreen',{mealId: id})
    }

    return (
        <View style={styles.mealItem}>
            <Pressable onPress={onPressHandler} android_ripple={{ color: '#ccc' }} style={({ pressed }) => [styles.buttonStyle, pressed ? styles.buttonPressed : null]}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: imageUrl, duration, complexity, affordability }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailItem} >{duration} m</Text>
                        <Text style={styles.detailItem} >{complexity.toUpperCase()}</Text>
                        <Text style={styles.detailItem} >{affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        backgroundColor: 'white',
        overflow: Platform.OS === "android" ? "hidden" : "visible"
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    buttonPressed: {
        opacity: 0.5,
    }
});