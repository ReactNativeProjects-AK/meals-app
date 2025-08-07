import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetails";
import FavouritesScreen from "./screens/FavouritesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      style={styles.container}
      screenOptions={{
        headerStyle: { backgroundColor: "#f54242" },
        headerTintColor: "white",
        headerTitleStyle: { color: "white" },
        sceneStyle: { backgroundColor: "#df9a9a" },
        drawerActiveTintColor: "#f54242",
        drawerActiveBackgroundColor: "#fff",
        drawerInactiveTintColor: "#fff",
        drawerStyle: { backgroundColor: "#f54242" },
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          title: "Favourites",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator
          style={styles.container}
          screenOptions={{
            headerStyle: { backgroundColor: "#f54242" },
            headerTintColor: "white",
            headerTitleStyle: { color: "white" },
            contentStyle: { backgroundColor: "#df9a9a" },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{ title: "All Categories", headerShown: false }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
