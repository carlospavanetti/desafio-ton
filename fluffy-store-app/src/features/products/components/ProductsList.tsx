import React, { useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Fade, Placeholder, PlaceholderLine, PlaceholderMedia } from 'rn-placeholder';

import ProductView from './ProductView';
import { Colors } from '@utils/constants';
import withMissingElements from '@utils/withMissingElements';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store';
import { loadProducts } from '../productsSlice';

export default function ProductList(): JSX.Element {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.values);
  const isLoading = useSelector((state: RootState) => state.products.loading);

  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  if (isLoading) return <LoadingPlaceholder />;

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

function LoadingPlaceholder() {
  return (
    <Placeholder Animation={(props) => <Fade {...props} duration={250} />}>
      {[1, 2, 3].map((i) => (
        <View key={i} style={styles.placeholderContainer}>
          {[1, 2].map((i) => (
            <View key={i}>
              <PlaceholderMedia style={styles.placeholderImage} size={124} />
              <PlaceholderLine />
              <PlaceholderLine width={80} />
              <PlaceholderLine />
              <PlaceholderLine height={40} />
            </View>
          ))}
        </View>
      ))}
    </Placeholder>
  );
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
  placeholderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 32,
    marginTop: 20,
    marginBottom: -24,
  },
  placeholderImage: {
    marginVertical: 12,
  },
});
