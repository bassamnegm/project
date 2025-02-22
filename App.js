import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Login from './pages/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Reg from './pages/Reg';
import MyTab from './Tab';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false, animation: "fade_from_bottom", animationDuration: 3000 }} name='register' component={Reg} />
        <Stack.Screen options={{ headerBackVisible: false, animation: "fade_from_bottom" }} name='login' component={Login} />
        <Stack.Screen options={{ headerShown: false }} component={MyTab} name='home' />
      </Stack.Navigator>


    </NavigationContainer>
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
