import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/HomeDemo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './src/screens/About';
import Contacts from './src/screens/Contacts';
import Course from './src/screens/Course';
import Students from './src/screens/Students';
import MoreDemo from './src/screens/More';


export default function App() {
  const Stack=createNativeStackNavigator()
  return (
    <NavigationContainer style={styles.container}>
 <Stack.Navigator initialRouteName='Home'>
  <Stack.Screen name='Home' component={Home} options={{
    headerShown:false}} /> 
  <Stack.Screen name='Course' component={Course} options={{headerTitle:"About Courses",headerTitleAlign:"center",headerTitleStyle:{
    fontSize:22,fontFamily:"Roboto-bold"
  }}}/>
    <Stack.Screen name='Moreabout' component={MoreDemo} options={{headerTitle:"More About Course",headerTitleAlign:"center",headerTitleStyle:{
    fontSize:22,fontFamily:"Roboto-bold"
  }}}/>
  <Stack.Screen name='Students' component={Students} options={{headerTitle:"Our Students",headerTitleAlign:"center",headerTitleStyle:{
    fontSize:22,fontFamily:"Roboto-bold"
  }}}/>
  <Stack.Screen name='About' component={About} options={{headerTitle:"About Us",headerTitleAlign:"center",headerTitleStyle:{
    fontSize:20,fontFamily:"Roboto-bold"
  }}}/>
  <Stack.Screen name='Contact' component={Contacts} options={{headerTitle:"Contact Us",headerTitleAlign:"center",headerTitleStyle:{
    fontSize:22,fontFamily:"Roboto-bold"
  }}}/>



  
 </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
