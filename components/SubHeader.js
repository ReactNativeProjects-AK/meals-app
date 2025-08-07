import { Text, StyleSheet } from "react-native";

export default function SubHeader({ title }) {
  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 8,
    margin: 8,
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,
    textAlign: "center",
  },
});
