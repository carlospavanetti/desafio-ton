import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { Product } from '@api/products';

export default function ShoppingCartList(): JSX.Element {
  const shoppingCart = [
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
  return (
    <View style={styles.block}>
      <Image style={styles.image} source={{ uri: product.image }} />
      <View style={styles.content}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
      <TouchableOpacity>
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
    backgroundColor: '#f5f6fa',
  },
  block: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row',
    marginHorizontal: 8,
    marginVertical: 8,

    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
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
    color: '#717579',
  },
  close: {
    color: '#d91d50',
    fontSize: 32,
    padding: 20,
  },
});
