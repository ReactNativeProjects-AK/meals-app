import { StyleSheet, FlatList } from "react-native";
import MealsItem from "../components/MealsItem";
import { MEALS } from "../data/dummy-data";
import { CATEGORIES } from "../data/dummy-data";
import { useLayoutEffect } from "react";

const renderMealItem = ({ item }) => {
  return (
    <MealsItem
      id={item.id}
      title={item.title}
      imageUrl={item.imageUrl}
      duration={item.duration}
      affordability={item.affordability}
      complexity={item.complexity}
    />
  );
};

export default function MealsOverviewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;

  const meals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    )?.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return (
    <FlatList
      data={meals}
      renderItem={renderMealItem}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({});
