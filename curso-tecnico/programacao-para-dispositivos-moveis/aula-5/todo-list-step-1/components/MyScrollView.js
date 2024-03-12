import { ScrollView, View, StyleSheet } from 'react-native';

export default function MyScrollView(props) {
  const { items } = props;
  return (
    <ScrollView>
      {items.map((item, index) => (
        <View style={styles.container}>
          {item}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});
