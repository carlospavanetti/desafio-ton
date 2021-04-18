import React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Product } from '../../../api/products';

type Props = { product: Product };

export default function ProductView({ product }: Props): JSX.Element {
  const shoppingCart = [{ id: 1 }];
  const isInCart: boolean = shoppingCart.some((item: Partial<Product>) => item.id === product.id);

  const [buttonColorStyle, textAction] = isInCart
    ? [styles.redButton, 'Remover']
    : [styles.greenButton, 'Adicionar'];

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{ uri: product.image }} />
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
      <TouchableHighlight underlayColor="white" accessibilityRole="button">
        <View style={[styles.button, buttonColorStyle]}>
          <Text style={styles.buttonText}>{textAction}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    flex: 1,
    justifyContent: 'space-between',
    margin: 8,
    padding: 16,

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
    borderRadius: 8,
    aspectRatio: 1,
  },
  name: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  description: {
    color: '#717579',
  },
  button: {
    borderRadius: 8,
    marginTop: 16,
    paddingVertical: 12,
  },
  redButton: {
    backgroundColor: '#d91d50',
  },
  greenButton: {
    backgroundColor: '#1cb44b',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    lineHeight: 16,
    textAlign: 'center',
  },
});
