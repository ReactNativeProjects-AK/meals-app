import { FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryItem from "../components/CategoryItem";

export default function CategoriesScreen({ navigation }) {
  const renderCategoryItem = ({ item }) => {
    return (
      <CategoryItem
        title={item.title}
        color={item.color}
        onPress={() => {
          navigation.navigate("MealsOverview", { categoryId: item.id });
        }}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
