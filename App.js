import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [number, setNumber] = useState(0)
  const [times, setTimes] = useState(0)

  const onClickPlus = () => {
    setNumber(number+5)
    setTimes(times+1)
  }

  const onClickMinus = () => {
    setNumber(number-5)
    setTimes(times+1)
  }

  return (
   <View style={style.body}>
    <Text style={style.text}>{number}</Text>
    <Button title={'PLUS'} onPress={onClickPlus} style={style.button} color={style.button.color}></Button>
    <Button title={'MINUS'} onPress={onClickMinus}></Button>
    <Text style={style.text}>you clicked: {times} times</Text>
   </View>
  );
}

const style = StyleSheet.create({
  body: {
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 1,
    borderWidth: 10,
    borderColor: '#ff00ff',
    borderRadius: 10,
    margin: 40,
  },
  text: {
    color: '#000000',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
    textTransform: 'uppercase'
  },
  button: {
    width:150,
    height:50,
    color: 'red'
  }
});

