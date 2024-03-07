import {View, StyleSheet, TextInput} from 'react-native';
import IonicIcons from 'react-native-vector-icons/Ionicons';

const SearchInput = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBtn}>
        <IonicIcons name="search" size={24} color="#FBCF7B" />
        <TextInput
          style={{color: '#5E5D5E'}}
          placeholder="What're you looking for?"
          placeholderTextColor="#5E5D5E"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBtn: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
    marginTop: -30,
    paddingVertical: 5,
    borderRadius: 20,
    gap: 10,
    padding: 14,
    elevation: 13,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
  },
});
export default SearchInput;
