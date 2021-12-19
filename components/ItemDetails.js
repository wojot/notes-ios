import React, {useState} from 'react';
import {View, Text, StyleSheet, DynamicColorIOS, Switch} from 'react-native';
import Colors from './Colors.js';

const ItemDetails = ({item}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.row}>
      <Switch
        style={styles.toggler}
        trackColor={{true: Colors.black}}
        thumbColor={isEnabled ? Colors.yellow : Colors.cream}
        ios_backgroundColor={Colors.black}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text style={styles.contentText}> {item.content}</Text>
    </View>
  );
};

const dynamicRowBackground = DynamicColorIOS({
  light: Colors.white,
  dark: Colors.smokedGray,
});
const dynamicBorderColor = DynamicColorIOS({
  light: Colors.yellow,
  dark: Colors.yellow,
});
const dynamicFontColor = DynamicColorIOS({
  light: Colors.black,
  dark: Colors.cream,
});

const styles = StyleSheet.create({
  row: {
    backgroundColor: dynamicRowBackground,
    color: dynamicFontColor,
    padding: 10,
    textAlign: 'left',
    margin: 2,
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: dynamicBorderColor,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 20,
  },
  toggler: {justifyContent: 'center'},
});

export default ItemDetails;
