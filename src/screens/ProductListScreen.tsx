import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProductsList from '@features/products/components/ProductsList';
import { Colors } from '@utils/constants';

export default function ProductListScreen(): JSX.Element {
  return (
    <View style={styles.screen}>
      <ProductsList />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.BACKGROUND_COLOR,
    flex: 1,
  },
});
