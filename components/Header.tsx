import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
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
        <View style={styles.locationContainer}>
          <IonicIcons name="location" size={24} style={styles.locationIcon} />
          <Text style={styles.locationText}>Thane</Text>
        </View>
        <IonicIcons name="notifications" size={24} color="#000" />
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'transparent',
    height: 200,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 15,
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
});
export default Header;
