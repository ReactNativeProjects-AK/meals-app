import { View, Text, StyleSheet } from "react-native";

export default function MealInfo({ duration, affordability, complexity }) {
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.infoItem}>{duration}m</Text>
      <Text style={styles.infoItem}>{affordability.toUpperCase()}</Text>
      <Text style={styles.infoItem}>{complexity.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  infoItem: {
    fontSize: 12,
    color: "black",
  },
});
