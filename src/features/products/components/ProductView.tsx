import React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Product } from '@api/products';
import { Colors, Shadows } from '@utils/constants';

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

    ...Shadows.DEFAULT_BOX_SHADOW,
  },
  image: {
    borderRadius: 8,
    aspectRatio: 1,
  },
  name: {
    color: Colors.STRONG_TEXT,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  description: {
    color: Colors.DARK_GRAY,
  },
  button: {
    borderRadius: 8,
    marginTop: 16,
    paddingVertical: 12,
  },
  redButton: {
    backgroundColor: Colors.RED,
  },
  greenButton: {
    backgroundColor: Colors.GREEN,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    lineHeight: 16,
    textAlign: 'center',
  },
});
