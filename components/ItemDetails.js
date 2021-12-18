import React from 'react';
import {Text, StyleSheet} from 'react-native';

const ItemDetails = ({item}) => {
  return <Text>{item.content}</Text>;
};

const styles = StyleSheet.create({});

export default ItemDetails;
