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
import Header from './components/Header.js';
import NewItem from './components/NewItem.js';

const App = () => {
  const getId = () => {
    return Math.random().toString(36).replace('0.', '');
  };

  const [items, setItems] = useState([]);

  const newItem = content => {
    setItems([
      {
        id: getId(),
        content,
        switched: false,
        timeAdded: Date().toLocaleString(),
      },
      ...items,
    ]);

    console.log(items);

    //TODO:
    // const sorted = [...items].sort((x, y) => {
    //   return x === y ? 0 : x ? 1 : -1;
    // });
    // console.log(sorted);
  };

  const toggleSwitch = id => {
    setItems(prevItems => {
      return prevItems.map(item =>
        item.id === id ? {...item, switched: !item.switched} : item,
      );
    });
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header />
        <NewItem newItem={newItem} />
        <FlatList
          data={items}
          renderItem={({item}) => (
            <ItemDetails item={item} toggleSwitch={toggleSwitch} />
          )}
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
