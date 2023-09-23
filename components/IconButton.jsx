import { Pressable, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function IconButton({ icon, onPress, color }) {
  return (
    <Pressable
      style={({ pressed }) => {
        pressed === true ? styles.pressed : null;
      }}
      onPress={onPress}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});
