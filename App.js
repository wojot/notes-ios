import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  DynamicColorIOS,
  TouchableOpacity,
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

  function compare(a, b) {
    if (a.switched < b.switched) {
      return -1;
    }
    if (a.switched > b.switched) {
      return 1;
    }
    return 0;
  }

  const sortItems = () => {
    const sorted = [...items];
    sorted.sort(compare);
    setItems(sorted);
  };

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
  };

  const toggleSwitch = (id, previousState) => {
    setItems(prevItems => {
      return prevItems.map(item =>
        item.id === id ? {...item, switched: !previousState} : item,
      );
    });
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header />
        <NewItem newItem={newItem} />

        <TouchableOpacity style={styles.button} onPress={() => sortItems()}>
          <Text style={styles.buttonTxt}>Sort</Text>
        </TouchableOpacity>

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
  button: {
    backgroundColor: Colors.black,
    padding: 10,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTxt: {color: Colors.yellow, fontWeight: 'bold', fontSize: 20},
});

export default App;
