import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react';
import {useNavigation} from '@react-navigation/native'

const Menu = ({Styles}) => {
    const navigation=useNavigation();
    return (
        <View style={Styles.mainfooter}>
        <View style={Styles.footer}>
            <View style={Styles.footerBox}>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate("Course");
                }}>
                    <Image style={Styles.imageStyle} source={require("../../assets/Menu/course2.png")}/>
                   
                </TouchableOpacity>
            </View>
            <View style={Styles.footerBox}>
            <TouchableOpacity onPress={()=>{
                navigation.navigate("Students");
            }}>
                   <Image style={Styles.imageStyle} source={require("../../assets/Menu/course.png")}/>
                </TouchableOpacity>
            </View>
            <View style={Styles.footerBox}>
            <TouchableOpacity onPress={()=>{
                navigation.navigate("About")
            }}>
                     <Image style={Styles.imageStyle} source={require("../../assets/Menu/about.png")}/>
                </TouchableOpacity>
            </View>

            <View style={Styles.footerBox}>
            <TouchableOpacity onPress={()=>{
                navigation.navigate("Contact")
            }}>
                               <Image style={Styles.imageStyle} source={require("../../assets/Menu/contact.png")}/>
                </TouchableOpacity>
            </View>
        </View>
    </View>

    )
}

export default Menu;

