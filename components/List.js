import { View, Text, StyleSheet } from "react-native";

export default function List({ data }) {
  return data.map((item) => (
    <View style={styles.item} key={item}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  item: {
    padding: 8,
    backgroundColor: "#e2e2e2",
    margin: 4,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
