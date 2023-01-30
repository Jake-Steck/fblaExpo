import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const BackButton = ({ onPress, navigation }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Ionicons name="ios-arrow-back" size={30} color="#000" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default BackButton;
