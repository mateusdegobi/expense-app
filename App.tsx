import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'expo-status-bar';
import Home from './src/pages/Home';
import Transfer from './src/pages/Transfer';
import Transaction from './src/pages/Transaction';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabsView() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: '#2F1155',
          position: 'absolute',
          bottom: 10,
          left: 15,
          right: 15,
          borderRadius: 30,
          height: 80,
          elevation: 20,
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Transfer" component={Transfer} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeView" component={TabsView} />
        <Stack.Screen name="Transaction" component={Transaction} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
