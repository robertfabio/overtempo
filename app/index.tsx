import { Link } from 'expo-router';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Colors, Fonts } from '../constants/theme';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>SAFE PLACE</Text>
      <Text style={styles.text}> Bem vindo! O safe place é um espaço seguro para você dedicar tempo na suas atividades.</Text>
      <Image
        source={require('../assets/welcome.png')}
        style={styles.image}
      />
      <ImageBackground
        source={require('../assets/backgrounds/orange.jpg')}
        style={styles.background}
      />
      <Link href="/(tabs)/home" style={styles.button}>
        <Text>Go to home screen!</Text>
      </Link>
      <Text style={styles.textTerms}>
        Continuando você concorda com os nossos{' '}
        <Link href="/+not-found" style={{ color: 'blue' }}>
          Termos de Uso
        </Link>{' '}
        e a nossa{' '}
        <Link href="/+not-found" style={{ color: 'blue' }}>
          Política de Privacidade
        </Link>
        .
      </Text>
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
  tittle: {
    fontSize: 64,
    marginBottom: 20,
    
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    color: Colors.light.background,
    fontFamily: Fonts.rubik,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderRadius: 5,
  },
  textTerms: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderRadius: 5,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 40,
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: -1,
  },
  button: {
    backgroundColor: Colors.light.tint,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    color: Colors.light.background,
  },
});
