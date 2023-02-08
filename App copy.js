import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Linking, SafeAreaView, TextInput, ScrollView, RefreshControl, SectionList } from 'react-native';

import React, {useState} from 'react';

export default function App() {
  const [name, setName] = useState('')

   return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.text}>Please write your name</Text>
        <TextInput 
        multiline
        keyboardType='phone-pad' // numeric
        style={styles.input} 
        placeholder='e.g. John' 
        onChangeText={(name)=>setName(name)}/>
        <Text style={styles.text}>Your name is {name}</Text>
      </View>
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    // backgroundColor:'#000000',
    justifyContent:'center',
    alignItems:'center',
  },
  body:{
    // flex:1,
    backgroundColor:'#ff00ff',
    justifyContent:'center',
    alignItems:'center',
    width:'100%'
  },
  text:{
    justifyContent:'center',
    fontSize:'25px'
  },
  input:{
    borderWidth:1,
    backgroundColor:'#00ffff',
    width:'100%',
    borderColor:'#555',
    borderRadius:5,
    textAlign:'center',
    fontSize:20,
  }
});

