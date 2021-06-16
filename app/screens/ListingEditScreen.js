import React from 'react';
import { StyleSheet, } from 'react-native';
import * as Yup from 'yup';
import CategoryPickerItem from '../components/CategoryPickerItem';

import {
    AppForm,
    AppFormField,
    SubmitButton,
    AppFormPicker
} from "../components/forms"
import Screen from '../components/Screen';

const validationSchema=Yup.object().shape({
    title:Yup.string().required().min(1).label("Title"),
    price:Yup.number().required().min(1).max(10000).label("Price"),
    description:Yup.string().label("Description"),
    category:Yup.object().required().nullable().label("Category")
})

const categories = [
  { category: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
  { category: "Clothing", value: 2, backgroundColor: "green", icon: "email" },
  { category: "Electronics", value: 3, backgroundColor: "blue", icon: "lock" },
];

function ListingEditScreen(props) {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title:"",
                    price:"",
                    description:"",
                    category:null,

                }}
                onSubmit={(values)=>console.log(values)}
                validationSchema={validationSchema}
                
            >
                <AppFormField maxlength={255} name="title" placeholder="Title"></AppFormField>
                <AppFormField
                    keyboardType="numeric"
                    maxlength={8}
                    name="price"
                    placeholder="Price"
                    width={120}
                />
                <AppFormPicker
                    items={categories}
                    name="category"
                    placehodler="Category"
                    width="50%"
                    PickerItemCompoennt={CategoryPickerItem}
                    numberOfColumns={3}
                />
                <AppFormField
                    maxlength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="Post" />
            </AppForm>

        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:15
    }
})
export default ListingEditScreen;