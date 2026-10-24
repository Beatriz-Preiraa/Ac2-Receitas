import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';

const Navegacao = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navegacao.Navigator initialRouteName="Home">
        <Navegacao.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Receitas de Frango' }} 
        />
        <Navegacao.Screen 
          name="Detail" 
          component={DetailScreen} 
          options={{ title: 'Detalhes da Receita' }} 
        />
      </Navegacao.Navigator>
    </NavigationContainer>
  );
}