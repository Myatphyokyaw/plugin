import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { WebView } from 'react-native-webview';

const HomeScreen = props => {
  return(
    <SafeAreaView style={{flex:1}}>
      <WebView source={{uri:"https://myfavouritemanhwamanhuacollection.blogspot.com/"}}/>
    </SafeAreaView>
  )
}

export default HomeScreen
