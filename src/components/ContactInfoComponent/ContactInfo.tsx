import React from "react";
import styles from "./ContactInfo.module.css";
import { useFormContext } from "react-hook-form";
import { TextField } from "@mui/material";

// Assuming formFieldsConfig is imported from another file
import { formFieldsConfig } from './ContactInfoFieldsConfig'; // Update the path as necessary

function getNestedError(errors, path) {
  return path.split('.').reduce((acc, segment) => acc?.[segment], errors);
}

const ContactInfo = ({ type }) => {
  const { register, formState: { errors } } = useFormContext();
  
  const renderTextField = (fieldConfig) => {
    const { id, label, variant, InputLabelProps, validation } = fieldConfig;
    const fieldName = `${type}.${id}`;
    const isError = getNestedError(errors, fieldName);
    const errorProps = id === 'email' ? {
      error: Boolean(isError),
      helperText: isError?.message || ''
    } : {};

    return (
      <TextField
        key={fieldName}
        {...register(fieldName, validation)}
        label={label}
        id={id}
        variant={variant}
        InputLabelProps={InputLabelProps}
        {...errorProps}
      />
    );
  };

  const componentHeader = type === 'sender' ? 'Sender' : 'Receiver';

  return (
    <>
      <div className={styles.contactInfoContainer}>
        <h1>{componentHeader}</h1>
        {formFieldsConfig.map(fieldConfig => renderTextField(fieldConfig))}
      </div>
    </>
  );
};

export default ContactInfo;