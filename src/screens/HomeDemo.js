import { StyleSheet, Text, View, Image } from 'react-native';

import React from 'react';
import { useFonts } from 'expo-font';
import Menu from '../components/menu';
const Home = () => {
    const [fontsLoaded] = useFonts({
        "Baloo2": require('../../assets/fonts/Baloo2-VariableFont_wght.ttf'),
        "Oswald": require('../../assets/fonts/Oswald-VariableFont_wght.ttf'),
        "Playball-regular": require('../../assets/fonts/Playball-Regular.ttf'),
        "Rajdhani-Bold": require('../../assets/fonts/Rajdhani-Bold.ttf'),
        "Rajdhani-light": require('../../assets/fonts/Rajdhani-Light.ttf'),
        "Rajdhani-medium": require('../../assets/fonts/Rajdhani-Medium.ttf'),
        "Rajdhani-regular": require('../../assets/fonts/Rajdhani-Regular.ttf'),
        "Rajdhani-semibold": require('../../assets/fonts/Rajdhani-SemiBold.ttf'),
        "Roboto-black": require('../../assets/fonts/Roboto-Black.ttf'),
        "Roboto-blackitalic": require('../../assets/fonts/Roboto-BlackItalic.ttf'),
        "Roboto-bold": require('../../assets/fonts/Roboto-Bold.ttf'),
        "Roboto-bolditalic": require('../../assets/fonts/Roboto-BoldItalic.ttf'),
        "Roboto-italic": require('../../assets/fonts/Roboto-Italic.ttf'),
        "Roboto-light": require('../../assets/fonts/Roboto-Light.ttf'),
        "Roboto-lightitalic": require('../../assets/fonts/Roboto-LightItalic.ttf'),
        "Roboto-medium": require('../../assets/fonts/Roboto-Medium.ttf'),
        "Roboto-mediumitalic": require('../../assets/fonts/Roboto-MediumItalic.ttf'),
        "Roboto-regular": require('../../assets/fonts/Roboto-Regular.ttf'),
        "Roboto-thin": require('../../assets/fonts/Roboto-Thin.ttf'),
        "Roboto-thinitalic": require('../../assets/fonts/Roboto-ThinItalic.ttf'),
        "JosefinSans-italic": require('../../assets/fonts/JosefinSans-Italic-VariableFont_wght.ttf'),
        "JosefinSans-variable": require('../../assets/fonts/JosefinSans-VariableFont_wght.ttf'),
        "JosefinSans-bold": require('../../assets/fonts/static/JosefinSans-Bold.ttf'),
        "JosefinSans-bolditalic": require('../../assets/fonts/static/JosefinSans-BoldItalic.ttf'),
        "JosefinSans-extralight": require('../../assets/fonts/static/JosefinSans-ExtraLight.ttf'),
        "JosefinSans-extralightitalic": require('../../assets/fonts/static/JosefinSans-ExtraLightItalic.ttf'),
        "JosefinSans-italic": require('../../assets/fonts/static/JosefinSans-Italic.ttf'),
        "JosefinSans-lightitalic": require('../../assets/fonts/static/JosefinSans-LightItalic.ttf'),
        "JosefinSans-medium": require('../../assets/fonts/static/JosefinSans-Medium.ttf'),
        "JosefinSans-regular": require('../../assets/fonts/static/JosefinSans-Regular.ttf'),
        "JosefinSans-semibold": require('../../assets/fonts/static/JosefinSans-SemiBold.ttf'),
        "JosefinSans-semibolditalic": require('../../assets/fonts/static/JosefinSans-SemiBoldItalic.ttf'),
        "JosefinSans-thin": require('../../assets/fonts/static/JosefinSans-Thin.ttf'),
        "JosefinSans-thinitalic": require('../../assets/fonts/static/JosefinSans-ThinItalic.ttf'),





    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={Styles.mainContainer}>
            <View style={Styles.imageContainer}>
                <Image source={require("../../assets/home/Homeimg.png")} style={Styles.homeImage} resizeMode="stretch" />

            </View>
            <View style={Styles.textContainer}>
                <Text style={Styles.textStyle}>Welcome To</Text>
                <Text style={Styles.textStyle2}>Education App</Text>
            </View>
            <View style={Styles.paraContainer}>
                <Text style={Styles.textpara}>
                    Education is the basic necessity of life. It is an integral tool that aids the overall growth and development. Education has a plethora of meanings and educates and empowers you within the four walls of the classroom as well as imbibe in your environment. Learning is an education that makes sense, and it needs awareness to reach the remote corners of the country.
                </Text>

            </View>
            <Menu Styles={Styles} />
    
        </View>
    )
}

const Styles = StyleSheet.create({
    homeImage: {
       height:190,
       width:"100%",
        borderRadius: 20,
        aspectRatio:1
    },
    imageStyle:{
        height:55,width:50,marginBottom:2,
        marginLeft:18,
    }
    , imageContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",marginTop:25
    }, mainContainer: {
        marginTop: 20
    }
    , textContainer: {
        // borderWidth:2

    },
    textStyle: {
        fontSize: 55
        , textAlign: "center",
        fontWeight: "500",
        fontFamily: "",
        color: "red",
fontFamily:"JosefinSans-bold",
        marginTop: 18,


    },
    textStyle2: {
        fontSize: 40,
        textAlign: "center",
        fontWeight: "500",
        fontFamily: "Playball-regular",


        marginTop: -10,
        color: "green"
    },
    paraContainer: {
        // borderWidth:2
    }
    , textpara: {
        fontSize: 20,
        fontFamily: "Playball-regular",
        color: "#808080",
        padding: 28, paddingTop:14,
        paddingBottom: 0
    },
    footer: {

        display: "flex",
        flexDirection: "row",
       
        
     
        
        // marginTop:35,
      
     
 

    },
    menuText:{
fontSize:16.8
    },
    footerBox: {
        // borderWidth:2,
        // borderColor:"red"
        
        
        width: 98.1
    },
    mainfooter:{
        // display:"flex",
        // alignItems:"center"
        position:"relative",
        
        marginVertical:68,
       
    },
 
})
export default Home