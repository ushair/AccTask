import {SafeAreaView, ScrollView} from 'react-native';

import React from 'react';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';
import ShopGrid from '../components/ShopGrid';
import Trending from '../components/Trending';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fafafa'}}>
      <Header />
      <SearchInput />
      <ScrollView>
        <ShopGrid />
        <Trending />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
