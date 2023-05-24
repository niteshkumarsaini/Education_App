import { StyleSheet, Text, View ,Image, TouchableOpacity,Linking} from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.outerContainer}>
<View style={styles.mainContainer}>
  <View style={styles.imageContainer}>
    <Image style={styles.imageStyle} source={require("../../assets/home/im.jpg")} />
  </View>
  <View style={styles.textContainer}>
    <Text style={styles.textStyle}>Nitesh Kumar Saini</Text>

  </View>
  <View style={styles.paraContainer}>
    <Text style={styles.paraText}>I am a beginner Web Developer and Java Developer working for the 
past few years. I am always enthusiastic about new creative projects 
for which I use my imagination and skill to provide an elegant solution 
for any project. My main objective is to create beautiful digital 
products and provide unique design solutions. Always open for 
challenges that will keep me learning. Looking forward to work on 
exciting upcoming projects with innovative people.</Text>

  </View>
  <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.touchButton} onPress={()=>{
Linking.openURL("https://www.instagram.com/mr_nitesh_saini_/?igshid=YmMyMTA2M2Y%3D")
   }}>
   <Image style={styles.logoStyle} source={require("../../assets/logo/insta.png")} />
   </TouchableOpacity>
   <TouchableOpacity style={styles.touchButton}  onPress={()=>{
Linking.openURL("https://github.com/niteshkumarsaini")
   }}>
   <Image style={styles.logoStyle} source={require("../../assets/logo/github.png")}/>
   </TouchableOpacity>
   <TouchableOpacity style={styles.touchButton} onPress={()=>{
Linking.openURL("https://www.linkedin.com/in/niteshkumar--/")
   }}>
   <Image style={styles.logoStyle} source={require("../../assets/logo/linkdin.png")} />
   </TouchableOpacity>
   <TouchableOpacity style={styles.touchButton} onPress={()=>{
Linking.openURL("https://niteshkumarsaini.github.io/My-Portfolio/")
   }}>
   <Image style={styles.logoStyle} source={require("../../assets/logo/portfolio.png")} />
   </TouchableOpacity>
  </View>



</View>
    </View>
  )
}
const styles = StyleSheet.create({
  mainContainer:{
    height:645,
    width:328,
    marginVertical:30,
    borderRadius:30,
    backgroundColor:"#EDEADE",
    shadowColor:"black",
    shadowOffset:{width:2,height:5},
    shadowOpacity:0.8,
    shadowRadius:8,
    elevation:8

  },
  imageContainer:{
display:"flex",
justifyContent:"center",
alignItems:"center",
marginTop:22,

  },
  outerContainer:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  imageStyle:{
height:240,
width:250,borderRadius:20,



  },
  textContainer:{
display:"flex",
alignItems:"center",
marginVertical:6,
marginBottom:0


  },
  textStyle:{
    fontSize:32,
    color:"black",
    color:"red",
    fontFamily:"Playball-regular"

  },
  paraContainer:{
marginVertical:0
  },
  paraText:{
    padding:18,
    paddingLeft:42,
    paddingRight:30,
    lineHeight:24,
    
    paddingTop:3,
    fontSize:16,
    paddingBottom:0,
    fontFamily:"Oswald"


  },
  
  touchButton:{

  },
  buttonContainer:{
  marginTop:14,
    height:40,
    flexDirection:"row",
    justifyContent:"space-around"

  },
  logoStyle:{
    borderWidth:2,
   maxHeight:35,
   maxWidth:35,
   aspectRatio:1
  }
,
touchButton:{
  
}
})

export default About;
