import { StyleSheet, Text, View } from "react-native";

export default function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    margin: 4,
    padding: 6,
    borderBottomColor: "#e2b497",
    marginHorizontal: 24,
    marginVertical: 4,
    borderBottomWidth: 2,
  },
});
