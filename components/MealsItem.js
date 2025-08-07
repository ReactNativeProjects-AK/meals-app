import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealInfo from "./MealInfo";

export default function MealsItem({
  id,
  title,
  imageUrl,
  duration,
  affordability,
  complexity,
}) {
  const navigation = useNavigation();

  const onPressHandler = () => {
    navigation.navigate("MealDetails", { mealId: id });
  };

  return (
    <View style={styles.item}>
      <Pressable
        onPress={onPressHandler}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.pressed : undefined)}
      >
        <View style={styles.container}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealInfo
          duration={duration}
          affordability={affordability}
          complexity={complexity}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#ffffff",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  container: {
    flex: 1,
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.7,
  },
});
