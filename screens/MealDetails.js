import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealInfo from "../components/MealInfo";
import SubHeader from "../components/SubHeader";
import List from "../components/List";
import { useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function MealDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  const {
    id,
    title,
    imageUrl,
    ingredients,
    steps,
    complexity,
    affordability,
    duration,
  } = MEALS.find((meal) => meal.id === mealId);

  const handleFavouritePress = () => {
    console.log("Favourite Pressed");
  };

  useLayoutEffect(() => {
    const meal = MEALS.find((meal) => meal.id === mealId);
    navigation.setOptions({
      title: meal.title,
      headerRight: () => (
        <Pressable onPress={handleFavouritePress}>
          <Ionicons name="star" size={24} color="white" />
        </Pressable>
      ),
    });
  }, [navigation, mealId]);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <MealInfo
        duration={duration}
        affordability={affordability}
        complexity={complexity}
      />
      <View style={styles.infoOuterContainer}>
        <View style={styles.infoContainer}>
          <SubHeader title="Ingredients" />
          <List data={ingredients} />
          <SubHeader title="Steps" />
          <List data={steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  container: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
  },
  infoOuterContainer: {
    flex: 1,
    alignItems: "center",
  },
  infoContainer: {
    flex: 1,
    padding: 8,
    margin: 8,
    width: "80%",
    justifyContent: "center",
  },
});
