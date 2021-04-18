import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import ProductView from './ProductView';
import { Colors } from '@utils/constants';
import withMissingElements from '@utils/withMissingElements';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store';
import { loadProducts } from '../productsSlice';

export default function ProductsList(): JSX.Element {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.values);
  const isLoading = useSelector((state: RootState) => state.products.loading);

  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  if (isLoading) return <Text>Loading...</Text>;

  const numColumns = 2;
  const data = withMissingElements(products, numColumns);
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.value.id.toString()}
      numColumns={numColumns}
      style={styles.listContainer}
      onRefresh={() => dispatch(loadProducts())}
      refreshing={isLoading}
      renderItem={({ item }) =>
        item.empty ? <EmptyBox /> : <ProductView product={item.value} key={item.value.id} />
      }
    />
  );
}

function EmptyBox() {
  return <View style={styles.emptyItem} />;
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: Colors.BACKGROUND_COLOR,
    padding: 8,
  },
  emptyItem: {
    flex: 1,
    margin: 8,
    padding: 16,
  },
});
