import React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '@api/products';
import { Colors, Shadows } from '@utils/constants';
import {
  addItem,
  itemsSelector as cartItemsSelector,
  removeItem,
} from '@features/shoppingCart/shoppingCartSlice';

type Props = { product: Product };

export default function ProductView({ product }: Props): JSX.Element {
  const dispatch = useDispatch();
  const shoppingCart = useSelector(cartItemsSelector);
  const isInCart: boolean = shoppingCart.some((item: Product) => item.id === product.id);

  const [buttonColorStyle, textAction, action] = isInCart
    ? [styles.redButton, 'Remover', () => removeItem(product.id)]
    : [styles.greenButton, 'Adicionar', () => addItem(product)];

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{ uri: product.image }} />
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
      <TouchableHighlight
        onPress={() => dispatch(action())}
        underlayColor="white"
        accessibilityRole="button"
      >
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
