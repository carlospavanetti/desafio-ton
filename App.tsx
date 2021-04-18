import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import ProductListScreen from '@screens/ProductListScreen';
import ShoppingCartScreen from '@screens/ShoppingCartScreen';
import HeaderCart from '@features/shoppingCart/components/HeaderCart';
import useHitAccess from '@features/hitAccesses';

import { Provider } from 'react-redux';
import store from '@store';

const Stack = createStackNavigator();

export default function App(): JSX.Element {
  useHitAccess();

  return (
    <Provider store={store}>
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
    </Provider>
  );
}
