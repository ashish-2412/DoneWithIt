import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import colors from '../config/colors';
import defaultStyles from '../config/styles'
function AppTextInput({icon,width="100%",...otherProps}) {
    return (
        <View style={[styles.container,{width:width}]}>
            {icon && <MaterialCommunityIcons size={20} color={colors.medium} style={styles.icon} name={icon} />}
            <TextInput  style={styles.textInput} {...otherProps} placeholderTextColor={colors.mediumex} />
        </View>
    );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    alignItems:"center"

  },
  icon:{
    marginRight:10
  },
  textInput: defaultStyles.text,
});
export default AppTextInput;