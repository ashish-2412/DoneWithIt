import React, { useState } from "react";
import { TextInput, View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from './AppText'
import colors from "../config/colors";
import defaultStyles from "../config/styles";
import Screen from "./Screen";
import PickerItem from "./PickerItem";
function AppPicker({ icon,items,placeholder,onSelectItem,selectedItem,width="100%" ,PickerItemComponent=PickerItem,numberOfColumns=1}) {
    const [modalVisible,setModalVisible]=useState(false)
    
    return (
      <React.Fragment>
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
          <View style={[styles.container,{width:width}]}>
            {icon && (
              <MaterialCommunityIcons
                size={20}
                color={colors.medium}
                style={styles.icon}
                name={icon}
              />
            )}
            {selectedItem ? (
              <AppText style={styles.text}>{selectedItem.label}</AppText>
            ) : (
              <AppText style={styles.placeholder}>
                  {placeholder}
              </AppText>
            )}

            <MaterialCommunityIcons
              size={20}
              color={colors.medium}
              name="chevron-down"
            />
          </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType="slide">
          <Screen>
            <Button title="Close" onPress={() => setModalVisible(false)} />
            <FlatList
              data={items}
              keyExtractor={(item) => item.value.toString()}
              numColumns={numberOfColumns}
              renderItem={({ item }) => (
                <PickerItemComponent
                  item={item}
                  label={item.category}
                  onPress={() => {
                    onSelectItem(item);
                    setModalVisible(false);
                  }}
                />
              )}
            />
          </Screen>
        </Modal>
      </React.Fragment>
    );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  placeholder:{
    color:colors.medium,
    flex:1
  },
  text:{
    flex:1
  },    
  textInput: defaultStyles.text,
  
});
export default AppPicker;
