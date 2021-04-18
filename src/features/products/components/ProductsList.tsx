import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import ProductView from './ProductView';
import withMissingElements from '@utils/withMissingElements';

export default function ProductsList(): JSX.Element {
  const products = [
    {
      id: 1,
      name: 'Gato fofinho',
      description: 'Uma besta que não passa de um besta',
      image: 'https://i.pinimg.com/474x/6b/86/74/6b867435a30b4a0014ac476733bc79f4.jpg',
    },
    {
      id: 2,
      name: 'Gato sedutor',
      description: 'Nem sexy, nem vulgar',
      image: 'https://i.pinimg.com/474x/60/fb/53/60fb5367c092e79e58eddab67d25ccb3.jpg',
    },
  ];

  const isLoading = false;

  if (isLoading) return <Text>Loading...</Text>;

  const numColumns = 2;
  const data = withMissingElements(products, numColumns);
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.value.id.toString()}
      numColumns={numColumns}
      style={styles.listContainer}
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
    backgroundColor: '#f5f6fa',
    padding: 8,
  },
  emptyItem: {
    flex: 1,
    margin: 8,
    padding: 16,
  },
});
