import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/routers';
import { Colors } from '@utils/constants';

type Props = {
  navigation: StackNavigationProp<ParamListBase>;
};

export default function HeaderCart({ navigation }: Props): JSX.Element {
  const itemsCount = 10;
  const emptyCart = itemsCount === 0;

  return (
    <TouchableOpacity onPress={() => navigation.navigate('ShoppingCart')}>
      <View style={styles.container}>
        <AntDesign name="shoppingcart" style={styles.icon} />
        <View style={[styles.botton, emptyCart && styles.emptyBotton]}>
          <Text style={styles.number}>{itemsCount}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 8,
    padding: 16,
  },
  icon: {
    fontSize: 28,
  },
  botton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.RED,
    borderRadius: 10,
    color: 'white',
    flexGrow: 1,
    height: 20,
    marginLeft: -12,
    marginTop: -6,
    paddingHorizontal: 6,
  },
  emptyBotton: {
    opacity: 0,
  },
  number: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
