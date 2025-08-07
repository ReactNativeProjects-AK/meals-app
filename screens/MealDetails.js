import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealInfo from "../components/MealInfo";
import SubHeader from "../components/SubHeader";
import List from "../components/List";
import { useLayoutEffect } from "react";
import { useContext } from "react";
import { FavouriteContext } from "../store/FavouriteStore";
import FavouriteMeal from "../components/FavouriteMeal";

export default function MealDetailsScreen({ route, navigation }) {
  const { addFavourite, removeFavourite, ids } = useContext(FavouriteContext);
  const mealId = route.params.mealId;

  const {
    title,
    imageUrl,
    ingredients,
    steps,
    complexity,
    affordability,
    duration,
  } = MEALS.find((meal) => meal.id === mealId);

  const isFavourite = ids.includes(mealId);

  function handleFavouritePress() {
    if (isFavourite) {
      removeFavourite(mealId);
    } else {
      addFavourite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
      headerRight() {
        return (
          <FavouriteMeal
            onPress={handleFavouritePress}
            icon={isFavourite ? "star" : "star-outline"}
            color="white"
          />
        );
      },
    });
  }, [navigation, handleFavouritePress]);

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
