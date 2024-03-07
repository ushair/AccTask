/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import ShopGrid from './components/ShopGrid';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Header />
      <SearchInput />
      <ShopGrid />
    </SafeAreaView>
  );
}

export default App;
