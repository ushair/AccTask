/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import MessagesScreen from './screens/MessagesScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
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
              <MaterialIcons
                name={iconName as string}
                size={20}
                color={color}
              />
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
      <TouchableOpacity style={styles.floatingButton}>
        <MaterialIcons name="camera-alt" size={20} color="#fff" />
        <Text style={styles.cameraText}>Post AD</Text>
      </TouchableOpacity>
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
