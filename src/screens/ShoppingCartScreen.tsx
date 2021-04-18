import React from 'react';
import { StyleSheet, View } from 'react-native';
import ShoppingCartList from '@features/shoppingCart/components/ShoppingCartList';
import { Colors } from '@utils/constants';

export default function ShoppingCartScreen(): JSX.Element {
  return (
    <View style={styles.screen}>
      <ShoppingCartList />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.BACKGROUND_COLOR,
    flex: 1,
  },
});
