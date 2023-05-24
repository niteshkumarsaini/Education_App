import { StyleSheet, Text, View,Image,TouchableOpacity,Alert} from 'react-native'
import React from 'react';
import Courses from '../api/courses';


const MoreDemo = ({route,navigation}) => {
  const {data}=route.params;
  const id=data[0].id
  const CourseName=data[1].CourseName;
  const Detail=data[2].Detail;
  const Price=data[3].Price;
  const duration=data[4].Duration;
  const imagePath=data[5].imagePath;



  return (
    <View style={Styles.mainContainer} >
        <View style={Styles.secondContainer}>
        <View style={Styles.imageContainer}>
  <Image style={Styles.imageStyle} source={require("../../assets/courses/java.jpg")} />
</View>
<View style={Styles.textContainer}>
  <Text style={Styles.textstyle}>Course Name</Text>
  <Text style={Styles.textstyle2}>{CourseName}</Text>
</View>
<View style={Styles.textContainer}>
  <Text style={Styles.textstyle}>Total Fees Required</Text>
  <Text style={Styles.textstyle2}>{Price}</Text>
</View>
<View style={Styles.textContainer}>
  <Text style={Styles.textstyle}>Course Duration</Text>
  <Text style={Styles.textstyle2}>{duration}</Text>
</View>
<View style={Styles.paracontainer}>
  <Text style={Styles.parastyle}>{String(Detail).split(".")[0]+String(Detail).split(".")[1]}</Text>
</View>
<View style={Styles.buttonContainer}>
  <TouchableOpacity style={Styles.touchStyle} onPress={()=>{
    Alert.alert("Enter Your Details..")
    navigation.navigate("Contact")
  }}>
    <Text style={Styles.buttonText}>Enroll Now</Text>
  </TouchableOpacity>
</View>

        </View>
      
    </View>
  )
}
const Styles = StyleSheet.create({
    mainContainer:{
        
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    secondContainer:{
        marginVertical:4,
       
        width:340,
      
        
    },
    StudentBox: {
      height: 580,
      backgroundColor: "#F9F6EE",
      borderRadius: 25,
      marginVertical: 20,
     
      width:375,
      
      borderColor:"#FFFDD0",
      marginVertical:50
  
    },
    imageStyle: {
      height: 200,
      width: 300,
      borderRadius: 20
    }
    , imageContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 5
    }
    ,
    textContainer: {
      marginTop: 10,
      display: "flex",
      alignItems: "center"
  
  
    },
    textstyle: {
      fontSize: 24,
      fontWeight: "500"
      ,color:"darkgreen"
  
    },
    textstyle2:{
      fontSize:28,
      color:"red",
fontWeight:"800"

    },
    outerContainer:{display:"flex",
    justifyContent:"center",
    alignItems:"center"
    
    },
    touchStyle: {
      borderWidth: 1,
      height: 50,
      width: 200,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 17,
      backgroundColor: "skyblue"
      
  
    }
    , buttonContainer: {
      display: "flex"
      , alignItems: "center",
      marginTop: 5,
  
  
  
    },
    buttonText: {
      fontSize: 22,
      color: "black",
      fontWeight: "500"
    },
    paracontainer: {
  
      marginTop: 3
    },
    parastyle: {
      fontSize: 20,
      padding: 12,
      textAlign:"center",
      paddingTop: 2,
      paddingBottom: 3
  
    }
  
  

})

export default MoreDemo
