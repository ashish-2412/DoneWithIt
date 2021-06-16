import React from 'react';
import { FlatList,StyleSheet } from 'react-native';

import Screen from './Screen';
import Card from './Card'
import colors from '../config/colors';
const listings = [
    {
        id:1,
        title:"Red Jacket for sale",
        price:599,
        image:require('../assets/jacket.jpg')
    },
    {
        id:2,
        title:"Couch for sale",
        price:2999,
        image:require('../assets/couch.jpg')
    },
]
function ListingsScreen(props) {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={(listing=>listing.id.toString())}
                renderItem={({item})=>
                    <Card title={item.title} subTitle={"Rs "+item.price} image={item.image}></Card>
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen:{
        padding:20,
        backgroundColor:colors.light,
        flex:1
    }
})
export default ListingsScreen;
