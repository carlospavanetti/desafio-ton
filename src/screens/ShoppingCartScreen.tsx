import React from 'react';
import { StyleSheet, View } from 'react-native';
import ShoppingCartList from '@features/shoppingCart/components/ShoppingCartList';

export default function ShoppingCartScreen(): JSX.Element {
  return (
    <View style={styles.screen}>
      <ShoppingCartList />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#f5f6fa',
    flex: 1,
  },
});
