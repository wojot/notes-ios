import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  DynamicColorIOS,
} from 'react-native';
import ItemDetails from './components/ItemDetails.js';
import Colors from './components/Colors.js';

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
    {
      id: getId(),
      content: 'Chleb',
    },
    {
      id: getId(),
      content: 'Banany',
    },
    {
      id: getId(),
      content: 'Mleko',
    },
  ]);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          data={items}
          renderItem={({item}) => <ItemDetails item={item} />}
        />
      </SafeAreaView>
    </View>
  );
};

const dynamicBackground = DynamicColorIOS({
  light: Colors.cream,
  dark: Colors.black,
});

const styles = StyleSheet.create({
  container: {backgroundColor: dynamicBackground},
});

export default App;
