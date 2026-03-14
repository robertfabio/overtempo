import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '../../components/ui/Card';


export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
          <Card style={styles.container}>
            <Text style={styles.text}> Bem-vindo à página inicial! </Text>
            <Text> </Text>
            <Card style={styles.card}> Conteúdo do cartão </Card>
          </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  window: {
    flex: 1,
    justifyContent: 'space-evenly',
    padding: 12,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  text: {
    fontFamily: "londrinaShadow",
    fontSize: 32,
    width: '110%',
    textAlign: 'center',
  },
  tittle: {
    fontFamily: "ComicNeue",
    fontSize: 24,
    width: '110%',
    marginBottom: 100,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  button: {
    marginTop: 20,
  },
  rowButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  card: {
    marginTop: 20,
    width: '100%',
  },
});
