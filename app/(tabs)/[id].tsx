import { Text, View } from 'react-native';

export function IdSesson({ id, streak, totalHours }: { id: string, streak: number, totalHours: number }) {
  return (
    <View>
      <Text>Sessão de estudo: {id}</Text>
       <Text>streak: {streak}</Text>
        <Text>Total de horas: {totalHours}</Text>
         <Text>Timer</Text>
    </View>
  );
}
