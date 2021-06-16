import React from "react";
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

import AppButton from "../components/AppButton"

function WelcomScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
      blurRadius={10}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo.png")}
        ></Image>
        <Text style={styles.tagLine}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={()=>{console.log("Cliked")}} color="primary" ></AppButton>
        <AppButton title="Register" onPress={()=>{console.log("Cliked")}} color="secondary" ></AppButton>
      </View>

      
      
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer:{
    padding:20,
    width:"100%",
  },
  logo: {
    width: 200,
    height: 200,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagLine:{
    fontSize:25,
    fontWeight:"bold",
    marginVertical:20,
  }
});
export default WelcomScreen;
