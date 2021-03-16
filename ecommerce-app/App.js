import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './screens/HomeScreen'
import CartScreen from './screens/CartScreen'
import DetailProductScreen  from './screens/DetailProductScreen'



const stack = createStackNavigator();
const globalScreenOptions ={
  headerStyle : {backgroundColor: "lightblue"},
  headerTitleStyle :{color: "white"},
  headerTinStyle: "white",
}
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home" screenOptions={globalScreenOptions}>
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="Cart" component={CartScreen} />
        <stack.Screen name="DetailProduct" component={DetailProductScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

