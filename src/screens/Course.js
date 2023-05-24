import { StyleSheet, Text, View, Image, TouchableOpacity,FlatList,ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react';
import { useState } from 'react';
import Courses from '../api/courses';


const Course = ({navigation}) => {
  const [Course,setCourses]=useState([])
  const[isLoaded,setIsLoaded]=useState(true)
  useEffect(()=>{
    setCourses(Courses)
    setIsLoaded(false)

  },[])
  
  return (
    <View style={Styles.outerContainer} >
      {
        isLoaded?(<View><ActivityIndicator/></View>):(<View>
     <FlatList  data={Course} renderItem={(element)=>{
     return(
      <View style={Styles.StudentBox}>
<View style={Styles.imageContainer}>
  <Image source={element.item.image} style={Styles.imageStyle} />
</View>
<View style={Styles.textContainer}>
  <Text style={Styles.textstyle}>{element.item.CourseName}</Text>
</View>
<View style={Styles.paracontainer}>
  <Text style={Styles.parastyle}>{String(element.item.Detail).split(".")[0]+String(element.item.Detail).split(".")[1]}</Text>
</View>
<View style={Styles.buttonContainer}>
  <TouchableOpacity style={Styles.touchStyle} onPress={()=>{
    navigation.navigate("Moreabout",{"data":[
      {id:element.item.id},{CourseName:element.item.CourseName},{Detail:element.item.Detail},{Price:element.item.Price},{Duration:element.item.duration},{imagePath:element.item.image}
    ]})

  }}>
    <Text style={Styles.buttonText}>See More</Text>
  </TouchableOpacity>
</View>
</View>
     )
     }}/>
     </View>) }
    </View>
  )
}
const Styles = StyleSheet.create({
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
    height: 250,
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
    fontSize: 25,
    fontFamily:"Oswald",
   

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
   
    alignItems: "center",
    borderRadius: 17,
    backgroundColor: "#C41E3A"

  }
  , buttonContainer: {
    display: "flex"
    , alignItems: "center",
    marginTop: 18,



  },
  buttonText: {
    fontSize: 23,
    color: "black",
    fontFamily:"Oswald",
    color:"white",
    marginTop:3
   
  },
  paracontainer: {

    marginTop: 10
  },
  parastyle: {
    fontSize: 18,
    padding: 25,
    paddingTop: 5,
    lineHeight:22,
    paddingBottom: 3,
    

  }

})
export default Course;

