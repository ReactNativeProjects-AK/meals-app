import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function FavouriteMeal({ icon, color, onPress }) {
  return (
    <Pressable
      onPressOut={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}

export default FavouriteMeal;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
