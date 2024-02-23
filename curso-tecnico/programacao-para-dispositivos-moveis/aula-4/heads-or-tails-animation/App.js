import React, { useState, useRef, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  View,
  Animated,
  Easing,
} from 'react-native';

export default function App() {
  const [coinSide, setCoinSide] = useState('Heads');
  const [headsCount, setHeadsCount] = useState(0);
  const [tailsCount, setTailsCount] = useState(0);
  const flipAnimation = useRef(new Animated.Value(0)).current;
  const [updateCoinCount, setUpdateCoinCount] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);
  useEffect(() => {
    if (updateCoinCount) {
      if (coinSide === 'Heads') setHeadsCount(headsCount + 1);
      else setTailsCount(tailsCount + 1);
      setUpdateCoinCount(false);
      setDisabledButton(false);
    }
  }, [coinSide, updateCoinCount, headsCount, tailsCount]);

  const flipCoin = (randomFlips) => {
    flipAnimation.setValue(0);
    setDisabledButton(true);

    Animated.timing(flipAnimation, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      setCoinSide((prevCoinSide) =>
        prevCoinSide === 'Heads' ? 'Tails' : 'Heads'
      );
      if (randomFlips > 0) {
        flipCoin(randomFlips - 1);
      } else setUpdateCoinCount(true);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./assets/logo.png')} />
      <View style={styles.coinContainer}>
        {coinSide && (
          <Animated.Image
            source={
              coinSide === 'Heads'
                ? require('./assets/heads.png')
                : require('./assets/tails.png')
            }
            style={[
              styles.coin,
              {
                transform: [
                  {
                    rotateY: flipAnimation.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '180deg'],
                    }),
                  },
                ],
              },
            ]}
          />
        )}
      </View>

      <View style={styles.countContainer}>
        <View style={styles.count}>
          <Text style={styles.countText}>Cara: {headsCount}</Text>
        </View>
        <View style={styles.count}>
          <Text style={styles.countText}>Coroa: {tailsCount}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={{ ...styles.button, opacity: disabledButton ? 0.1 : 1 }}
        onPress={() => flipCoin(Math.floor(Math.random() * 10) + 1)}
        disabled={disabledButton}>
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
  coinContainer: {
    marginBottom: 30,
  },
});
