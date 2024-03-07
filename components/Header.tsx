import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const Header = () => {
  return (
    <>
      <LinearGradient
        colors={['#FFB989', '#FE858B', '#FC8DAC']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.header}>
        <IonicIcons name="menu" size={24} color="#000" />
        <IonicIcons name="notifications" size={24} color="#000" />
      </LinearGradient>
      <View style={styles.locationContainer}>
        <IonicIcons name="location" size={24} style={styles.locationIcon} />
        <Text style={styles.locationText}>Thane</Text>
      </View>
      <View style={styles.searchBtn}>
        <IonicIcons name="search" size={24} color="#FBCF7B" />
        <TextInput
          style={{color: '#000'}}
          placeholder="What're you looking for?"
          placeholderTextColor="#5E5D5E"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'transparent',
    height: 200,
  },
  locationContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: 15,
    left: 150,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#DE767A',
    zIndex: 1,
  },
  locationIcon: {
    marginRight: 5,
    color: '#fff',
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  searchBtn: {
    backgroundColor: '#fff',
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    top: 170,
    left: 50,
    width: 300,
    paddingVertical: 5,
    borderRadius: 20,
    gap: 10,
    padding: 14,
    flex: 1,
    elevation: 13,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
});
export default Header;
