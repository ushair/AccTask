import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const shopItems = [
  {name: 'Electronics', image: require('../assets/gadget.png')},
  {name: 'Properties', image: require('../assets/house.png')},
  {name: 'Jobs', image: require('../assets/jobSearch.png')},
  {name: 'Furniture', image: require('../assets/sofa.png')},
  {name: 'Cars', image: require('../assets/car.png')},
  {name: 'Bikes', image: require('../assets/bike.png')},
  {name: 'Mobiles', image: require('../assets/smartphone.png')},
  {name: 'Pets', image: require('../assets/pets.png')},
];

const ShopGrid = () => {
  const navigation = useNavigation();

  const handleShopAllPress = () => {
    navigation.navigate('ShopAll');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.shopForText}>Shop for</Text>
        <TouchableOpacity onPress={handleShopAllPress}>
          <Text style={styles.showAllText}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.gridContainer}>
        {shopItems.map((item, index) => (
          <View style={styles.gridItem} key={index}>
            <Image source={item.image} style={styles.image} />

            <Text style={styles.shopItemText}>{item.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
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
  shopForText: {
    fontSize: 16,
    color: '#000',
  },
  showAllText: {
    fontSize: 16,
    color: '#FBCF7B',
  },
  shopItemText: {
    fontSize: 11,
    color: '#000',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 1,
  },
  gridItem: {
    width: '21%',
    padding: 10,
    gap: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  image: {
    width: 35,
    height: 35,
    marginBottom: 10,
  },
});

export default ShopGrid;
