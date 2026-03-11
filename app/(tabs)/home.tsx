import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonSmall } from '../../components/ui/ButtonSmall';
import { Card } from '../../components/ui/Card';


export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
          <Card style={styles.container}>
            <Text style={styles.text}> Bem-vindo à página inicial! </Text>
            <Text> </Text>
            <Card style={styles.card}> Conteúdo do cartão </Card>
         
  
              <View style={styles.rowButtons}>
                <ButtonSmall title="Tarefas" onPress={() => console.log("Botão pressionado!")} />
                <ButtonSmall title="Clique aqui" onPress={() => console.log("Botão pressionado!")} />
              </View>
               
          </Card>
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
    backgroundColor: 'rgba(2, 1, 1, 0.8)',
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
    fontFamily: "rubik",
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
