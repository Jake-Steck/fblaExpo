import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import StackNav from './components/StackNav';
import NotificationTask from './components/NotificationTask';



// Font Imports
import {
  useFonts,
  OpenSans_300Light,
  OpenSans_300Light_Italic,
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
  OpenSans_600SemiBold,
  OpenSans_600SemiBold_Italic,
  OpenSans_700Bold,
  OpenSans_700Bold_Italic,
  OpenSans_800ExtraBold,
  OpenSans_800ExtraBold_Italic,
} from '@expo-google-fonts/open-sans';

import {
  OpenSansCondensed_300Light,
  OpenSansCondensed_300Light_Italic,
  OpenSansCondensed_700Bold,
} from '@expo-google-fonts/open-sans-condensed';



// Main App Function
export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_300Light_Italic,
    OpenSans_400Regular,
    OpenSans_400Regular_Italic,
    OpenSans_600SemiBold,
    OpenSans_600SemiBold_Italic,
    OpenSans_700Bold,
    OpenSans_700Bold_Italic,
    OpenSans_800ExtraBold,
    OpenSans_800ExtraBold_Italic,
    OpenSansCondensed_300Light,
    OpenSansCondensed_300Light_Italic,
    OpenSansCondensed_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
      <NotificationTask />
    </>



    // <View style={styles.container}>
    //   {/* <Text style={{ fontFamily: 'OpenSans_300Light' }}>Open Sans 300 Light</Text> */}
    //   <Home />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

