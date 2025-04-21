import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './HomeScreen';
import ScanScreen from './ScanScreen';
import CartScreen from './CartScreen';
import PaymentScreen from "./PaymentScreen";
import SuccessScreen from "./SuccessScreen";
import ExploreScreen from './ExploreScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Stack chứa Home, Scan, Cart, Payment, Success
const MainStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Scan" component={ScanScreen} />
    <Stack.Screen name="Cart" component={CartScreen} />
    <Stack.Screen name="Payment" component={PaymentScreen} />
    <Stack.Screen name="Success" component={SuccessScreen} />
  </Stack.Navigator>
);

// Bottom Tabs Navigator
<Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ color, size }) => {
      let iconName;
      if (route.name === 'Home') {
        iconName = 'home-outline';
      } else if (route.name === 'Cart') {
        iconName = 'cart-outline';
      } else if (route.name === 'Explore') {
        iconName = 'search-outline';
      }
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarStyle: { backgroundColor: '#fff', paddingBottom: 5, height: 60 },
    tabBarActiveTintColor: '#007AFF',
    tabBarInactiveTintColor: 'gray',
  })}
>
  <Tab.Screen name="Home" component={MainStack} options={{ headerShown: false }} />
  <Tab.Screen name="Explore" component={ExploreScreen} options={{ headerShown: false }} />
  <Tab.Screen name="Cart" component={CartScreen} options={{ headerShown: false }} />
</Tab.Navigator>


// Main App
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={Tabs} /> 
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
