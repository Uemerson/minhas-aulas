import { StyleSheet, TextInput } from 'react-native';

export default function MyTextInput(props) {
  const { onChangeText, text } = props;
  return (
    <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    margin: 10,
    marginBottom: 0
  },
});
