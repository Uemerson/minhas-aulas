import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MyButton from './components/MyButton';
import MyTextInput from './components/MyTextInput';
import MyScrollView from './components/MyScrollView';

export default function App() {
  const [text, onChangeText] = React.useState('');
  const [items, setItems] = React.useState([]);

  const handleAdd = () => {
    if (text !== '') {
      setItems((current) => [...current, text]);
      onChangeText('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <MyTextInput onChangeText={onChangeText} text={text} />
      <MyButton onPress={handleAdd} title="Adicionar" />
      <MyScrollView items={items} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
