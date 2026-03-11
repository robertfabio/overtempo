import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

export function ButtonSmall({ onPress, title }) {
  return (
    <Pressable style={styles.wrapper} onPress={onPress}>
      {({ pressed }) => (
        <>
          <View style={[styles.outerBox, pressed && styles.outerBoxPressed]}>
            <View style={styles.innerBox}>
              <MaterialIcons name="checklist" size={20} color="#94a3b8" />
            </View>
          </View>

          <Text style={styles.label}>{title}</Text>
        </>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    gap: 4,
  },
  outerBox: {
    width: 56,
    height: 40,
    backgroundColor: "#e2e8f0",
    borderRadius: 8,
    padding: 4,
    borderBottomWidth: 4,
    borderColor: "#cbd5e1",
  },
  outerBoxPressed: {
    borderBottomWidth: 0,
    transform: [{ translateY: 4 }],
  },
  innerBox: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#94a3b8",
    textTransform: "uppercase",
    letterSpacing: 2,
    marginTop: 4,
  },
});
