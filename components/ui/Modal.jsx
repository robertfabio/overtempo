import { View, Stylesheet } from "react-native";



export function Modal({ visible, onClose, children }) {
  if (!visible) return null;
  return (
    <View>
        <View style={styles.overlay} />
    </View>
  );
}

const styles = Stylesheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    