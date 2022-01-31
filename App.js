import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";
const Stack = createNativeStackNavigator()
const App = props => {
  return(
   <NavigationContainer>
     <Stack.Navigator screenOptions={{
       headerShown:false
     }}>
       <Stack.Screen name="LoginScreen" component={LoginScreen}/>
       <Stack.Screen name="HomeScreen" component={HomeScreen}/>
     </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App
