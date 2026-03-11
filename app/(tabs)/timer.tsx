import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components/ui/Button';

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.container}>
            <Text> Home</Text>
            <Text> Bem-vindo à página inicial! </Text>
            <Button title="Clique aqui" onPress={() => console.log("Botão pressionado!")} style={styles.button} />
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  window: {
    position: 'absolute',
    alignContent: 'center',
    justifyContent: 'center',
    top: 0,
    left: 0,
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
  button: {
    marginTop: 20,
  },
});
