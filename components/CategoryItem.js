import { View, Text, StyleSheet, Pressable } from "react-native";

export default function CategoryItem({ title, color, onPress }) {
  return (
    <View style={styles.categoryItem}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.button, { backgroundColor: color, opacity: 0.7 }]
            : [styles.button, { backgroundColor: color }]
        }
        onPress={onPress}
        android_ripple={{ color: "#ccc" }}
      >
        <View style={[styles.titleContainer]}>
          <Text style={styles.categoryTitle}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryItem: {
    flex: 1,
    margin: 8,
    borderRadius: 8,
    overflow: "hidden",
  },
  button: {
    flex: 1,
    borderRadius: 8,
    overflow: "hidden",
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    borderRadius: 8,
    padding: 16,
    overflow: "hidden",
  },

  categoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
