// src/components/ShopItem.tsx

import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Product} from '../interfaces/product';

const DEFAULT_IMAGE = require('../assets/defaultProduct.png');

interface ShopItemProps {
  item: Product;
  count: number;
  handleIncrement: (id: number) => void;
  handleDecrement: (id: number) => void;
}

const ShopItem: React.FC<ShopItemProps> = ({
  item,
  count,
  handleIncrement,
  handleDecrement,
}) => (
  <View style={styles.itemContainer}>
    <TouchableOpacity style={styles.heartIconContainer}>
      <Ionicons name="heart-outline" size={18} color="#FBCF7B" />
    </TouchableOpacity>
    <Image
      source={item.image ? {uri: item.image} : DEFAULT_IMAGE}
      style={styles.itemImage}
    />
    <View style={styles.itemDetails}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>${item.price}</Text>
    </View>
    <View style={styles.addButton}>
      {count === 0 ? (
        <TouchableOpacity
          onPress={() => handleIncrement(item.id)}
          style={styles.addTextContainer}>
          <Text>ADD</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => handleDecrement(item.id)}>
            <Ionicons name="remove-circle" size={24} color="green" />
          </TouchableOpacity>
          <Text style={styles.quantity}>{count}</Text>
          <TouchableOpacity onPress={() => handleIncrement(item.id)}>
            <Ionicons name="add-circle" size={24} color="green" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  </View>
);

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'column',
    width: '45%',
    marginBottom: 20,
    backgroundColor: '#fff',
    marginLeft: 10,
    marginRight: 10,
    borderColor: '#c2c2c2',
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
  },
  itemImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  itemDetails: {
    padding: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  itemPrice: {
    fontSize: 14,
    color: '#000',
    marginBottom: 5,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addTextContainer: {
    paddingHorizontal: 40,
    paddingVertical: 2,
    borderRadius: 30,
    backgroundColor: 'green',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  heartIconContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
});

export default ShopItem;
