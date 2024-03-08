import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Product} from '../interfaces/product';

const TrendingItemCard = ({
  id,
  name,
  image,
  price,
  details,
  category,
}: Product) => {
  return (
    <View style={styles.card}>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.priceCategoryContainer}>
          <Text style={styles.price}>${price || ' NA'}</Text>
          <Text style={styles.category}>{category}</Text>
        </View>
        <Text style={styles.details}>{details}</Text>
        <View style={styles.infoContainer}>
          <Icon name="heart-outline" size={20} color="#000" />
          <Text style={styles.address}>XYZ Town</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '35%',
    flexDirection: 'row',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 5,
    marginHorizontal: 2,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 130,
    height: 150,
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 2,
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  priceCategoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  category: {
    fontSize: 14,
    textTransform: 'capitalize',
    backgroundColor: '#EEEEEE',
    color: '#000',
    padding: 3,
  },
  details: {
    fontSize: 14,
    marginBottom: 5,
    color: '#000',
    width: 150,
    flexWrap: 'wrap',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  address: {
    marginLeft: 5,
    fontSize: 14,
    color: '#000',
  },
});

export default TrendingItemCard;
