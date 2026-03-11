import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonSmall } from '../../components/ui/ButtonSmall';

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.background}>
          <View style={styles.container}>
            <Text> Home</Text>
            <Text> Bem-vindo à página inicial! </Text>
            <View style={styles.rowButtons}>
            <ButtonSmall title="Compartilhar" onPress={() => console.log("Botão pressionado!")} />
            </View>
          </View>
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
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  background: {
    backgroundColor: 'rgba(2, 1, 1, 0.8)',
    position: 'absolute',
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
  rowButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
    }
});
