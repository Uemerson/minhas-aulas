import {
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [coinSide, setCoinSide] = useState('Heads');
  const [headsCount, setHeadsCount] = useState(0);
  const [tailsCount, setTailsCount] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./assets/logo.png')} />

      <Image
        style={styles.coin}
        source={
          coinSide === 'Heads'
            ? require('./assets/heads.png')
            : require('./assets/tails.png')
        }
      />

      <View style={styles.countContainer}>
        <View style={styles.count}>
          <Text style={styles.countText}>Cara: {headsCount}</Text>
        </View>
        <View style={styles.count}>
          <Text style={styles.countText}>Coroa: {tailsCount}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          const randomCoin = Math.floor(Math.random() * 2);
          setCoinSide(randomCoin == 0 ? 'Heads' : 'Tails');

          if (coinSide === 'Heads') setHeadsCount(headsCount + 1);
          else setTailsCount(tailsCount + 1);
        }}>
        <Text style={styles.buttonText}>Jogar moeda</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#61bd8c',
  },
  coin: {
    marginTop: 10,
    width: 150,
    height: 150,
  },
  countContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  count: {
    marginRight: 20,
  },
  countText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
