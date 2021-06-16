import React from 'react';
import {StyleSheet, Image, View } from 'react-native';
import AppText from '../components/AppText';
import colors from '../config/colors';

import ListItem from '../components/ListItem'
function ListingDetailsScreen(props) {
    return (
      <View>
        <Image
          style={styles.image}
          source={require("../assets/jacket.jpg")}
        ></Image>
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>My Jacket</AppText>
          <AppText style={styles.price}>Rs 599</AppText>
          <View style={styles.userContainer}>
            <ListItem image={require("../assets/ashish.jpg")} title="Ashish Singh" subTitle="5 Listings" ></ListItem>
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:300,
    },
    detailsContainer:{
        padding:20
    },
    title:{
        fontSize:24,
        fontWeight:"500",
    },
    price:{
        color:colors.secondary,
        fontWeight:"bold",
        fontSize:20,
        marginVertical:10,
    },
    userContainer:{
        marginVertical:40
    }

})
export default ListingDetailsScreen;