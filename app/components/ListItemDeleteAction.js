import React from 'react';
import { StyleSheet,TouchableWithoutFeedback,View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function ListItemDeleteAction({onPress}) {
    return (
    <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.redBox}>
            <MaterialCommunityIcons name="trash-can" size={35} color="white" ></MaterialCommunityIcons>
        </View>
    </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
  redBox: {
    backgroundColor: "red",
    width: 70,
    justifyContent:"center",
    alignItems:"center"
  },
});
export default ListItemDeleteAction;