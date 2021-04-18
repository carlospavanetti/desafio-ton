import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { Product } from '@api/products';
import { Colors, Shadows } from '@utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { itemsSelector, removeItem } from '../shoppingCartSlice';

export default function ShoppingCartList(): JSX.Element {
  const shoppingCart = useSelector(itemsSelector);
  const productsCount = shoppingCart.length;
  const headerText = productsCount === 1 ? 'produto adicionado' : 'produtos adicionados';

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {productsCount} {headerText}
      </Text>
      <FlatList
        data={shoppingCart}
        keyExtractor={(item) => item.id.toString()}
        style={styles.listContainer}
        renderItem={({ item }) => <CartItem product={item} />}
      />
    </View>
  );
}

function CartItem({ product }: { product: Product }) {
  const dispatch = useDispatch();

  return (
    <View style={styles.block}>
      <Image style={styles.image} source={{ uri: product.image }} />
      <View style={styles.content}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
      <TouchableOpacity onPress={() => dispatch(removeItem(product.id))}>
        <AntDesign name="close" style={styles.close} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 8,
    marginBottom: 8,
  },
  listContainer: {
    backgroundColor: Colors.BACKGROUND_COLOR,
  },
  block: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row',
    marginHorizontal: 8,
    marginVertical: 8,

    ...Shadows.DEFAULT_BOX_SHADOW,
  },
  image: {
    aspectRatio: 1,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
    width: 80,
  },
  content: {
    flexGrow: 1,
    flexShrink: 1,
    paddingLeft: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    color: Colors.DARK_GRAY,
  },
  close: {
    color: Colors.RED,
    fontSize: 32,
    padding: 20,
  },
});
