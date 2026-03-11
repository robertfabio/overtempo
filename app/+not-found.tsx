import { Link } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function NotFound() {
  return (
    <View style={styles.container}>
      <Text> Você está perdido? </Text>
      <Text> Essa página não existe!!! Retorne a página inicial </Text>
      <Image
        source={require('../assets/welcome.png')}
        style={styles.image}
      />
      <Link href="/(tabs)/home" style={styles.link}>
        <Text>Vai logo estudar!</Text>
      </Link>
      
      <Link href="https://portal-cacc-frontend.vercel.app" style={styles.link}>
        <Text>Entre no portal para relatar o erro</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});
