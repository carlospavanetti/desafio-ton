import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ProductListScreen from '@screens/ProductListScreen';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import ShoppingCartScreen from '@screens/ShoppingCartScreen';
import HeaderCart from '@features/shoppingCart/components/HeaderCart';

const Stack = createStackNavigator();

export default function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({ navigation }) => ({
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerRight: () => <HeaderCart navigation={navigation} />,
          })}
        >
          <Stack.Screen
            name="Home"
            options={{ title: 'Fluffy Store' }}
            component={ProductListScreen}
          />
          <Stack.Screen
            name="ShoppingCart"
            options={{ title: 'Carrinho' }}
            component={ShoppingCartScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
