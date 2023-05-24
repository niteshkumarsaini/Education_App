import { StyleSheet, Text, TextInput, TouchableOpacity, View,Alert } from 'react-native'
import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
const Contacts = ({navigation}) => {
  const [email,setEmail]=useState("")
  const [name,setName]=useState("")
  const [confirm,setConfirm]=useState(false);
  const [message,setMessage]=useState("")
  const submitData=()=>{
    if(!String(email).endsWith("@gmail.com") && name.length<4 && message.length<10){
Alert.alert("Please Enter a valid Data !");
    }
    else{
      Alert.alert("Thanks..We will Contact you soon !")
      setEmail("")
      setName("")
      setMessage("")
      navigation.navigate("Home")
    }
  }
  return (
    <View style={styles.outerContainer}>
      <View style={styles.mainContainer}>
        <Text style={styles.textStyle}>Enter your Email</Text>
        <TextInput style={styles.inputTextStyle} placeholder='Write your Email..' value={email} onChangeText={(value)=>{
          setEmail(value)

        }} cursorColor={"black"}/>
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.textStyle}>Enter your Name</Text>
        <TextInput style={styles.inputTextStyle} value={name} onChangeText={(value)=>{
          setName(value)
        }} cursorColor={"black"} placeholder='Write your Name..'/>
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.textStyle} value={message} onChangeText={(value)=>{
          setMessage(value)
        }}>Message</Text>
        <TextInput style={styles.inputTextStyle2} cursorColor={"black"} placeholder='Write your Query..'  numberOfLines={8} multiline={true}/>
      </View>
      <View style={styles.checkContainer}>
       <Checkbox value={confirm} onValueChange={()=>{
        setConfirm(!confirm)
       }} style={styles.checkboxStyle} color={"red"}/>
       <Text style={styles.confirmText}>Confirm</Text>
      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={[styles.touchStyle,confirm?{backgroundColor:"red"}:{backgroundColor:"grey"}]} disabled={!confirm} onPress={()=>submitData()}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  outerContainer:{
display:"flex",
marginTop:45,
justifyContent:"center",
alignItems:"center"
  },
  mainContainer:{

marginVertical:7
  },
  textStyle:{
fontSize:22,
fontWeight:"500",
  },
  inputTextStyle:{
    borderWidth:1,
    marginTop:9,
    height:39,
    borderRadius:9,
    width:300,
    padding:8,
    fontSize:18

  },
  confirmText:{
fontSize:20,marginLeft:12,marginTop:3.4
  },
  inputTextStyle2:{
    borderWidth:1,
    marginTop:9,
    width:300,
    
    borderRadius:8,

    padding:8,
    paddingTop:2,

    fontSize:18
  },
  checkboxStyle:{
    height:35,
    width:35,
    borderRadius:5
    
  },
  checkContainer:{
    marginTop:15,
    alignSelf:"flex-start",
    marginLeft:60,
    display:"flex",
    flexDirection:"row"
  },

  touchStyle:{
  
    height:42,
    width:150,
    borderRadius:12,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"

  },
  buttonContainer:{
    marginTop:25,
  },
  buttonText:{
    fontSize:23,
    color:"white",
    fontWeight:"600"

  }
  
})

export default Contacts;
