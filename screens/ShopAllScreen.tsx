import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, StyleSheet, FlatList} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {fetchShopItems} from '../services/shopService';
import ShopItem from '../components/ShopItem';
import {Product} from '../interfaces/product';

const ShopAllScreen = () => {
  const [counts, setCounts] = useState<{[key: number]: number}>({});
  const [items, setItems] = useState<Product[]>([]);

  const handleIncrement = (id: number) => {
    setCounts(prevCounts => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 0) + 1,
    }));
  };

  const handleDecrement = (id: number) => {
    setCounts(prevCounts => ({
      ...prevCounts,
      [id]: Math.max(0, (prevCounts[id] || 0) - 1),
    }));
  };

  const fetchData = async () => {
    try {
      const data = await fetchShopItems();
      await AsyncStorage.setItem('shopItems', JSON.stringify(data));
      setItems(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const loadItemsFromLocalStorage = async () => {
    try {
      const data = await AsyncStorage.getItem('shopItems');
      if (data !== null) {
        setItems(JSON.parse(data));
      } else {
        fetchData();
      }
    } catch (error) {
      console.error('Error loading data from local storage:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.isConnected) {
        fetchData();
      } else {
        loadItemsFromLocalStorage();
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const renderItem = ({item}: {item: Product}) => (
    <ShopItem
      item={item}
      count={counts[item.id] || 0}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});

export default ShopAllScreen;
