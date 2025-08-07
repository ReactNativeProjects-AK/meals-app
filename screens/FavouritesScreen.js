import { View, Text } from "react-native";
import { useContext } from "react";
import { FavouriteContext } from "../store/FavouriteStore";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList";
import { StyleSheet } from "react-native";

export default function FavouritesScreen() {
  const { ids } = useContext(FavouriteContext);
  const meals = MEALS.filter((meal) => ids.includes(meal.id));

  if (meals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Favourites Found</Text>
      </View>
    );
  }

  return <MealsList meals={meals} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
