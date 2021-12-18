import React, {useState} from 'react';
import {View, Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import ItemDetails from './components/ItemDetails.js';

const App = () => {
  const getId = () => {
    return Math.random().toString(36).replace('0.', '');
  };

  const [items, setItems] = useState([
    {
      id: getId(),
      content: 'Ser',
    },
    {
      id: getId(),
      content: 'Szynka',
    },
    {
      id: getId(),
      content: 'Jogurt',
    },
  ]);

  return (
    <SafeAreaView>
      <FlatList
        data={items}
        renderItem={({item}) => <ItemDetails item={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
