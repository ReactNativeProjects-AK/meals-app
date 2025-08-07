import { createContext, useState } from "react";

export const FavouriteContext = createContext({
  ids: [],
  addFavourite: () => {},
  removeFavourite: () => {},
});

export default function FavouriteContextProvider({ children }) {
  const [favouriteMeals, setFavouriteMeals] = useState([]);

  const addFavourite = (mealId) =>
    setFavouriteMeals((prevMeals) => [...prevMeals, mealId]);

  const removeFavourite = (mealId) =>
    setFavouriteMeals((prevMeals) =>
      prevMeals.filter((prevMealId) => prevMealId !== mealId)
    );

  const value = {
    ids: favouriteMeals,
    addFavourite,
    removeFavourite,
  };

  return (
    <FavouriteContext.Provider value={value}>
      {children}
    </FavouriteContext.Provider>
  );
}
