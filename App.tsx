import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'expo-status-bar';
import Home from './src/pages/Home';
import Transfer from './src/pages/Transfer';
import Transaction from './src/pages/Transaction';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabsView() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let req;

          if (route.name === 'Home') {
            req = focused
              ? require('./src/assets/icons/nav/wallet_on.png')
              : require('./src/assets/icons/nav/wallet_off.png');
          }
          if (route.name === 'Stats') {
            req = focused
              ? require('./src/assets/icons/nav/chart_on.png')
              : require('./src/assets/icons/nav/chart_off.png');
          }
          if (route.name === 'Notification') {
            req = focused
            ? require('./src/assets/icons/nav/notification_off.png')
            : require('./src/assets/icons/nav/notification_off.png');
          }
          if (route.name === 'Settings') {
            req = focused
              ? require('./src/assets/icons/nav/setting_off.png')
              : require('./src/assets/icons/nav/setting_off.png');
          }

          return <Image source={req} />;
        },
      })}
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
      <Tab.Screen name="Stats" component={Home} />
      <Tab.Screen name="Notification" component={Home} />
      <Tab.Screen name="Settings" component={Home} />
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
