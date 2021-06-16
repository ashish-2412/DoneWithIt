import React from "react";
import ErrorMessage from "./ErrorMessage";
import AppTextInput from "../AppTextInput";
import { useFormikContext } from "formik";

function AppFormField({ name,icon,width, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        icon={icon}
        {...otherProps}
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        width={width}
        {...otherProps}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
}

export default AppFormField;
