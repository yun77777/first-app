import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Linking, SafeAreaView, ScrollView, RefreshControl, SectionList } from 'react-native';

import React, {useState} from 'react';

export default function App() {

  const [DATA, setDATA] = useState([
    {
      title:'Title 1',
      data: ['Item 1-1', 'Item 1-2']
    },
  ])

  const [refreshing, setRefreshing] = useState(false)
  const onRefresh = () => {
    setRefreshing(true)
    setDATA([...DATA,{
      title:'Title '+(DATA.length+1),
      data:['Item '+(DATA.length+1)+'-1', 'Item '+(DATA.length+1)+'-2']
    }])
    setRefreshing(false)
  }
  return (
    <SafeAreaView style={styles.body}>
      <SectionList
      style={styles.section}
      sections={DATA}
      renderItem={({item})=>(
        <View style={styles.contents}>
          <Text style={styles.text}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section})=>(
        <View style={styles.header}>
          <Text style={{fontSize:'35px', fontStyle:'italic'}}>{section.title}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
        />
      }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    backgroundColor:'#ff00ff',
    justifyContent:'center',
    alignItems:'center',
  },
  section:{
    width:'100%',
    // height:'10%'
  },
  header:{
    backgroundColor:'#00ffff',
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
    padding:15
  },
  contents:{
    backgroundColor:'#ffffff',
    // borderStyle:'solid',
    borderWidth:0.5,
    justifyContent:'center',
    alignItems:'center',
    padding:10
  },
  text:{
    justifyContent:'center',
    fontSize:'25px'
  }
});

