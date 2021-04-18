import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProductsList from '../features/products/components/ProductsList';

export default function ProductListScreen(): JSX.Element {
  return (
    <View style={styles.screen}>
      <ProductsList />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#f5f6fa',
    flex: 1,
  },
});
