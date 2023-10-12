import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native'; // Importe 'Image' de 'react-native'.

export default function App() {
  const numA = 2;
  const numB = 2;
  const numbers = [1, 2, 3, 4, 5];
  let numC = numbers.join(', '); // Use o método 'join' para converter a matriz em uma string separada por vírgulas.

 

  return (
    <View style={styles.container}>
      <Text>Bem-Vindo ao Meu App!</Text>
      <Text>Esse app é pra dizer que {numA} + {numB} pode ser igual a {numA + numB} (às vezes não é).</Text>
      <Text>{numC}</Text>
      <Image
        source={require('./assets/Pato.png')}
        style={styles.imagem}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    fontSize: 30,
  },
});
