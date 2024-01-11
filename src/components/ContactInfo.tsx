import React from "react";
import styles from "./ContactInfo.module.css";
import { useFormContext } from "react-hook-form";
import { TextField } from "@mui/material";

function getNestedError(errors, path) {
  console.log('PATH:' , path, errors)
  return path.split('.').reduce((acc, segment) => acc?.[segment], errors);
}

const ContactInfo = ({type}) => {
  const { register, formState } = useFormContext();
  const errors = formState.errors;
  const fieldName = `${type}.email`;
  const emailError = getNestedError(errors, fieldName);
  const componentHeader = type === 'sender' ? 'Sender' : 'Receiver'

  return (
    <>
    <div className={styles.contactInfoContainer}>
    <h1>{componentHeader}</h1>
      <TextField
        {...register(`${type}.companyName`)}
        label="Company Name"
        id="companyName"
        variant="standard"
        InputLabelProps={{ shrink: true }} 
      />
      <TextField
        {...register(`${type}.city`)}
        label="City"
        id="city"
        variant="standard"
        InputLabelProps={{ shrink: true }} 
      />
      <TextField
        {...register(`${type}.street`)}
        label="Street"
        id="street"
        variant="standard"
        InputLabelProps={{ shrink: true }} 
      />
      <TextField
        {...register(`${type}.postCode`)}
        label="Postcode"
        id="postcode"
        variant="standard"
        InputLabelProps={{ shrink: true }} 
      />
      <TextField
        {...register(`${type}.nip`)}
        label="NIP"
        id="nip"
        variant="standard"
        InputLabelProps={{ shrink: true }} 
      />
      <TextField
        {...register(`${type}.tel`)}
        label="Tel"
        id="tel"
        variant="standard"
        InputLabelProps={{ shrink: true }} 
      />
      <TextField
      {...register(fieldName, {
        required: "Email is required",
        pattern: {
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: 'Invalid email format'
        }
      })}
      label="E-mail"
      id="email"
      variant="standard"
      error={Boolean(emailError)}
      helperText={emailError?.message || ''}
      InputLabelProps={{ shrink: true }} 
    />
      <TextField
        {...register(`${type}.bankAccount`)}
        label="Bank account"
        id="bankAccount"
        variant="standard"
        InputLabelProps={{ shrink: true }} 
      />
    </div>
    </>
  );
};

export default ContactInfo;
