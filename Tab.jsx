import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/Home';
import About from './pages/About';
import Ionicons from '@expo/vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

function MyTab() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ color, focused, size }) => {
                let iconName;
                console.log(route)
                if (route.name == 'home')
                    iconName = focused ? 'home' : 'home-outline';
                else if (route.name == 'cart')
                    iconName = 'cart'
                else {
                    iconName = 'settings';
                }

                return <Ionicons name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'black'

        })}>
            <Tab.Screen name='home' component={Home} />
            <Tab.Screen name='about' component={About} />
            <Tab.Screen name='cart' component={About} />


        </Tab.Navigator>
    );
}

export default MyTab;