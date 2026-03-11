import { Pressable, StyleSheet, Text } from "react-native";

export function Button({ title, onPress, style }) {
  return (
    <Pressable onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "darkgray",
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
  },
});
