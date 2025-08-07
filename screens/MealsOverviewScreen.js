import MealsList from "../components/MealsList";
import { MEALS } from "../data/dummy-data";
import { CATEGORIES } from "../data/dummy-data";
import { useLayoutEffect } from "react";

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

  return <MealsList meals={meals} />;
}
