import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import TrendingItemCard from './TrendingItemCart';
const DATA = [
  {
    id: 1,
    name: 'Laptop',
    image:
      'https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg',
    price: 1200,
    details: 'High-performance laptop with the latest technology.',
    category: 'electronics',
  },
  {
    id: 2,
    name: 'House',
    image:
      'https://png.pngtree.com/thumb_back/fh260/background/20230618/pngtree-modern-house-visualized-in-stunning-3d-render-image_3630772.jpg',
    price: 250000,
    details: 'Spacious 4-bedroom house with a garden.',
    category: 'properties',
  },
];

const Trending = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.trendingText}>Trending</Text>
        <TouchableOpacity onPress={() => console.log('See all clicked')}>
          <Text style={styles.showAllText}>Show all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true}>
        {DATA.map(item => (
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
    paddingVertical: 5,
    borderBottomColor: '#EEEEED',
    borderBottomWidth: 0.5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 30,
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
