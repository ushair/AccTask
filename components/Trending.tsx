import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import TrendingItemCard from './TrendingItemCart';
import {fetchShopItems} from '../services/shopService';
import {Product} from '../interfaces/product';

const Trending = () => {
  const [trendingItems, setTrendingItems] = useState<Product[]>([]);

  useEffect(() => {
    fetchTrendingItemsFromAPI();
  }, []);

  const fetchTrendingItemsFromAPI = async () => {
    try {
      const data = await fetchShopItems();
      setTrendingItems(data.slice(0, 3));
    } catch (error) {
      console.error('Error fetching trending items:', error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.trendingText}>Trending</Text>
        <TouchableOpacity onPress={() => console.log('See all clicked')}>
          <Text style={styles.showAllText}>Show all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true}>
        {trendingItems.map(item => (
          <TrendingItemCard key={item.id} {...item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    paddingHorizontal: 10,
    borderBottomColor: '#EEEEED',
    borderBottomWidth: 0.5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  trendingText: {
    fontSize: 16,
    color: '#000',
  },
  showAllText: {
    fontSize: 16,
    color: '#FBCF7B',
  },
});

export default Trending;
