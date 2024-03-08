import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import MessagesScreen from './screens/MessagesScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ShopAllScreen from './screens/ShopAllScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Messages') {
            iconName = 'message';
          }
          return (
            <MaterialIcons name={iconName as string} size={20} color={color} />
          );
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <Stack.Navigator initialRouteName="MainTab">
          <Stack.Screen
            name="MainTab"
            component={MainTabNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ShopAll"
            component={ShopAllScreen}
            options={{
              title: 'Shop All',
              headerStyle: {
                backgroundColor: '#fafafa',
              },
            }}
          />
        </Stack.Navigator>
        <TouchableOpacity style={styles.floatingButton}>
          <MaterialIcons name="camera-alt" size={20} color="#fff" />
          <Text style={styles.cameraText}>Post AD</Text>
        </TouchableOpacity>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 30,
    alignSelf: 'center',
    backgroundColor: '#FBCF7B',
    borderRadius: 30,
    width: 110,
    height: 40,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    zIndex: 1,
  },
  cameraText: {
    color: '#000',
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default App;
