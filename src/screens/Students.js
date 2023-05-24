import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react';
import Courses from '../api/courses';
import StudentsData from '../api/studentsData';


const Students = ({ navigation }) => {
  return (
    <View style={Styles.outerContainer}>
      <FlatList data={StudentsData} renderItem={(element)=>{
        return(
          <View style={Styles.mainBox}>
        <View style={Styles.imageContainer}>
          <Image style={Styles.imageStyle} source={element.item.image} resizeMode="contain"/>
        </View>
        <View style={Styles.textContainer}>
          <Text style={Styles.textStyle}>{element.item.Name}</Text>
          <Text style={Styles.textStyle}>Batch : {element.item.Batch}</Text>
          <Text style={Styles.textStyle}>Profile : {element.item.Position}</Text>
          <Text style={Styles.textStyle}>Package : 4 LPA</Text>
        </View>
      </View>
        )
      }}/>

    </View>
  )
}
const Styles = StyleSheet.create({
  outerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  mainBox: {
    marginVertical: 30,
    height: 400,
    width: 320,
    // borderWidth:2,
    alignItems: "center",
    backgroundColor: "#EDEADE",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 8,
    borderRadius:30


  }
  ,
  imageStyle: {
    height: 220,
    width: 260,
    borderRadius: 18,marginTop:5,

  },
  textStyle: {
    fontSize: 22,
    fontFamily: "Oswald",
    color: "#880808"

  },
  textContainer: {
    marginTop: 10
  }
})
export default Students;

