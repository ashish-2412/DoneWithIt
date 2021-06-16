import React from 'react';
import { View, StyleSheet  } from 'react-native';

import Icon from './Icon'
import AppText from './AppText';
function CategoryPickerItem({onPress,item}) {
    return (
        <View style={styles.container}>
            <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80}></Icon>
            <AppText style={styles.label}>{item.category}</AppText>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        marginTop:20,
        justifyContent:"space-between",
        alignItems:"center",
        width:"33%",

    },
    label:{
        marginTop:5,
        textAlign:"center"
    }
})
export default CategoryPickerItem;