import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Home from './screens/Home';
import List from './screens/List';
import Todo from './screens/Todo';
import Product from './screens/Product';
import MyForm from './screens/Form';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='light' backgroundColor='blue' />
      <MyForm />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',

  },
  box: {
    marginTop: 50,
    marginHorizontal: 10,
    borderWidth: 3,
    borderColor: 'green',
    padding: 10

  },
  box2: {
    marginTop: 10,
    marginHorizontal: 10,

    elevation: 10,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: 'gray'


  }
})
