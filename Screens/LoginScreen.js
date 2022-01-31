import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity, Alert,
} from "react-native";
import { COLORS, FONTS, SIZES } from "../Constants/theme";

const LoginScreen = props => {
  const [password,setPassword] = useState('၂၀၂၀')
  const [pwValue,setPwValue] = useState("")
  const login = (value) => {
    if(value !== "" && value === "၂၀၂၀"){
      props.navigation.navigate("HomeScreen")
    }else {
      Alert.alert("Password မှားနေပါတယ်။")
    }
  }
  return(
    <SafeAreaView style={{flex:1}}>
       <View style={styles.container}>
         <Image style={styles.logoImage} source={require('../Image/logo.png')}/>
         <TextInput onChangeText={(value)=>setPwValue(value)} style={styles.pwField} placeholder="Password" secureTextEntry={true}/>
         <TouchableOpacity onPress={()=>login(pwValue)} activeOpacity={.7} style={styles.loginBtn}>
             <Text style={styles.loginBtnText}>Login</Text>
         </TouchableOpacity>
         <Text style={styles.ownerText}>Powered by Plugin</Text>
       </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    paddingVertical:SIZES.padding * 5,
    paddingHorizontal:SIZES.padding
  },
  headerText:{
    ...FONTS.h2
  },
  logoImage:{
    width:120,
    height:120,
    marginBottom:SIZES.padding
  },
  pwField:{
    borderWidth:1,
    height:40,
    borderColor:COLORS.primary,
    width:'80%',
    padding:SIZES.padding,
    marginVertical:SIZES.padding * 3,
    borderRadius:SIZES.radius
  },
  loginBtn:{
    backgroundColor:COLORS.primary,
    width:'40%',
    padding:SIZES.padding,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:SIZES.radius,
  },
  loginBtnText:{
    color:COLORS.white,
    fontWeight:"bold"
  },
  ownerText:{
    position:"absolute",
    bottom:10,
    ...FONTS.body3,
  }
})

export default LoginScreen
