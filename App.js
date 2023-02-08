import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Modal, Linking, Pressable, SafeAreaView, TextInput, ScrollView, RefreshControl, SectionList, TouchableOpacity, TouchableHighlight, Alert } from 'react-native';

import React, {useState} from 'react';

export default function App() {
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [showWarning, setShowWarning] = useState(false)

  const onPressHandler = () => {
    if(name.length>3){
      setSubmitted(!submitted)
    } else {
      // Alert.alert('Warning','The name must be longer than 3 characters',[
      //   {text:'Do not show again',onPress:()=>console.warn('Do not show again'),style:'destructive'},
      //   {text:'cancel',onPress:()=>console.warn('Cancel Pressed'),style:'destructive'},
      //   {text:'OK',onPress:()=>console.warn('OK Pressed'),style:'destructive'},
      // ],{cancelable:true, onDismiss:()=>console.warn('Alert dismissed')})
      setShowWarning(true)
    }
  }

   return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Modal
          visible={showWarning}
          transparent
          onRequestClose={()=>
          setShowWarning(false)
        }
        >
          <View style={styles.centered_view}>
            <View style={styles.warning_modal}>
              <View style={styles.warning_title}>
                <Text>WARNING</Text>
              </View>
              <View style={styles.warning_body}>
                <Text style={styles.text}>The name must be longer than 3 characters</Text>
              </View>
              <Pressable
                onPress={()=>setShowWarning(false)}
                style={styles.warning_button}
              >
                <Text style={styles.text}>OK</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Text style={styles.text}>Please write your name</Text>
        <TextInput 
        multiline
        // maxLength={2}
        // editable={false}
        // secureTextEntry
        // keyboardType='phone-pad' // numeric
        style={styles.input} 
        placeholder='e.g. John' 
        onChangeText={(name)=>setName(name)}/>
{/*         
        <Button 
        title={submitted ? 'Clear' : 'Submit'}
        style={styles.input}
        onPress={onPressHandler}
        // disabled={submitted}
        color='#00f'
        /> */}

        {/* <TouchableHighlight // TouchableOpacity, TouchableWithoutFeedback, Pressable
        style={styles.button}
        onPress={onPressHandler}
        activeOpacity={0.2}
        underlayColor='#dddddd'
        >
          <Text
          style={styles.text}>
            {submitted ? 'Clear' : 'Submit'}
          </Text>
        </TouchableHighlight> */}

        <Pressable
          onPress={onPressHandler}
          hitSlop={{top:10,bottom:10,right:10,left:10}}
          android_ripple={{color:'#00f'}}
          style={({pressed})=>[
            {backgroundColor:pressed?'#dddddd':'#00ff00'},
            styles.button
          ]}
        >
           <Text
          style={styles.text}>
            {submitted ? 'Clear' : 'Submit'}
          </Text>
        </Pressable>
        <Text>submitted : {submitted}</Text>

      {submitted ?
        <Text style={styles.text}>
        You are registered as {name}
        </Text>
        :
        null
        }
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
    fontSize:'25px',
    textAlign:'center'
  },
  input:{
    borderWidth:1,
    backgroundColor:'#00ffff',
    width:'100%',
    borderColor:'#555',
    borderRadius:5,
    textAlign:'center',
    fontSize:20,
    marginBottom:10
  },
  button:{
    width:150,
    height:50,
    backgroundColor:'#00ff00',
    alignItems:'center',
    justifyContent:'center'
  },
  warning_modal:{
    width:300,
    height:300,
    backgroundColor:'#ffffff',
    borderWidth:1,
    borderColor:'#000',
    borderRadius:20,
  },
  centered_view:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#00000099' // transparent 99
  },
  warning_title:{
    hieght:50,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#ff0',
    borderRadius:20,
    borderTopRightRadius:20,
    borderTopLeftRadius:20
  },
  warning_body:{
    height:200,
    justifyContent:'center',
    alignItems:'center'
  },
  warning_button:{
    backgroundColor:'#00ffff',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20
  }
});

