import React from 'react';
import { useFormikContext } from 'formik';

import AppPicker from '../AppPicker'
import ErrorMessage from './ErrorMessage';


function AppFormPicker({items,name,placehodler,PickerItemCompoennt,width,numberOfColumns}) {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    return (
        <>
         <AppPicker
            items={items}
            numberOfColumns={numberOfColumns}
            onSelectItem={(item)=>setFieldValue(name,item)}
            placeholder={placehodler}
            PickerItemComponent={PickerItemCompoennt}
            selectedItem={values[name]}
            width={width}
         />   
         <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormPicker;