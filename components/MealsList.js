import { FlatList } from "react-native";
import MealsItem from "./MealsItem";

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

export default function MealsList({ meals }) {
  return (
    <FlatList
      data={meals}
      renderItem={renderMealItem}
      keyExtractor={(item) => item.id}
    />
  );
}
