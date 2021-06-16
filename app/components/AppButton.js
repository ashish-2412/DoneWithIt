import React from 'react';
import {StyleSheet,TouchableOpacity,Text,} from 'react-native';
import colors from "../config/colors"
function AppButton({title,onPress,color="primary"}) {
    return (
        <TouchableOpacity style={[styles.button,{backgroundColor:colors[color]}]} onPress={onPress}>
            <Text style={styles.text} >{title}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button:{

        width:"100%",
        backgroundColor:colors.primary,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:25,
        padding:10,
        marginVertical:5
    },
    text:{
        color:colors.white,
        fontSize:18,
        fontWeight:"bold",
        textTransform:"uppercase"
    }
})
export default AppButton;