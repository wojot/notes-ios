import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Colors from './Colors.js';

export default function Header() {
  return <Text style={styles.header}>Notes iOS</Text>;
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    textAlign: 'center',
    padding: 25,
    color: Colors.black,
  },
});
