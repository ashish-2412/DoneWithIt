import React from "react";
import { Image, StyleSheet, View } from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import colors from "../config/colors"
function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" size={35} color="white" />
      </View>
      <View style={styles.openIcon}>
        <MaterialCommunityIcons name="trash-can-outline" size={35} color="white" />
      </View>

      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/mountain.jpg")}
      />
    </View>
  );
  
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  container:{
    backgroundColor:colors.black,
    flex:1,
  },
  closeIcon:{
    
    position:"absolute",
    top:40,
    left:30,

  },
  openIcon:{
    
    position:"absolute",
    top:40,
    right:30,
    
     
  }
});
export default ViewImageScreen;
