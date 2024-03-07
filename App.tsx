/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import ShopGrid from './components/ShopGrid';
import Trending from './components/Trending';

function App(): React.JSX.Element {
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
}

export default App;
