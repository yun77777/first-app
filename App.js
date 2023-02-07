import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Linking, SafeAreaView } from 'react-native';

import React, {useState} from 'react';

export default function App() {
  return (
  <SafeAreaView style={style.container}>
    {/* <StatusBar style="light" /> */}
      <View style={style.outer1}>
        <View style={style.view1}>
          <Text style={style.text}>1</Text>
        </View>
        <View style={style.view2}>
          <Text style={style.text}>2</Text>
        </View>
        <View style={style.view3}>
          <Text style={style.text}>3</Text>
        </View>
      </View>
      <View style={style.outer2}>
        <View style={style.view4}>
          <Text style={style.text}>4</Text>
        </View>
        <View style={style.view5}>
          <Text style={style.text}>5</Text>
        </View>
      </View>
      <View style={style.outer3}>
        <View style={style.view6}>
          <Text style={style.text}>6</Text>
        </View>
        <View style={style.view7}>
        <Text style={style.text}>7</Text>
      </View>
     </View>
   </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex:1,
    alignContent:'center'
  },
  text:{
    // alignContent:'center',
    justifyContent:'center',
    // textAlign:'center',
    alignSelf:'center',
    alignItems:'center',
    // textAlignVertical:'center', // only for android
    fontSize:'25px'
  },
  body: {
    backgroundColor: '#888888',
    alignItems: 'center', // flex-start, stretch
    justifyContent: 'center', //space-around, space-evenly
    flex: 1,
    // flexDirection:'column-reverse' // row, column-reverse
  },
  outer1: {
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    flex:1,
  },
  view1: {
    backgroundColor:'#00ffff',
    flex:1,
    justifyContent:'center',
    height:'100%'
  },
  view2: {
    backgroundColor:'#ff00ff',
    flex:2,
    justifyContent:'center',
    height:'100%',
  },
  view3: {
    backgroundColor:'#ffff00',
    flex:3,
    justifyContent:'center',
    height:'100%'
  },
  outer2: {
    backgroundColor:'#000000',
    width:'100%',
    flex:2,
  },
  view4:{
    backgroundColor:'#ff0000',
    flex:1,
    justifyContent:'center'
  },
  view5:{
    backgroundColor:'#00ff00',
    flex:1,
    justifyContent:'center'
  },
  outer3: {
    backgroundColor:'#0000ff',
    width:'100%',
    flexDirection:'row',
    flex:8
  },
  view6:{
    backgroundColor:'#ffffff',
    flex:1,
    justifyContent:'center'
  },
  view7:{
    backgroundColor:'#0000ff',
    flex:1,
    justifyContent:'center'
  }
});

