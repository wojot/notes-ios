import React, {useState} from 'react';
import {TextInput, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Colors from './Colors';

export default function NewItem({newItem}) {
  const [text, setText] = useState('');

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Add new item..."
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <TouchableOpacity style={styles.button} onPress={() => newItem(text)}>
        <Text style={styles.buttonTxt}>Add</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  input: {padding: 20},
  button: {
    backgroundColor: Colors.black,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTxt: {color: Colors.yellow, fontWeight: 'bold', fontSize: 20},
});
