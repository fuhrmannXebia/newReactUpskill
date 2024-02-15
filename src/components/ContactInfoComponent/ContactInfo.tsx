import styles from "./ContactInfo.module.css";
import { useFormContext } from "react-hook-form";
import { TextField } from "@mui/material";

import { formFieldsConfig } from "./ContactInfoFieldsConfig"; 
import { ContactInfoProps, FieldConfig } from "./ContactInfo.models";

function getNestedError(errors, path) {
  return path.split(".").reduce((acc, segment) => acc?.[segment], errors);
}

const ContactInfo: React.FC<ContactInfoProps> = ({ type }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const renderTextField = (fieldConfig: FieldConfig) => {
    const { id, label, variant, InputLabelProps, validation } = fieldConfig;
    const fieldName = `${type}.${id}`;
    const isError = getNestedError(errors, fieldName);
    const errorProps =
      id === "email"
        ? {
            error: Boolean(isError),
            helperText: isError?.message || "",
          }
        : {};

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

  const componentHeader = type === "sender" ? "Sender" : "Receiver";

  return (
    <div className={styles.contactInfoContainer}>
      <h1>{componentHeader}</h1>
      {formFieldsConfig.map((fieldConfig) => {
        console.log(fieldConfig)
        return renderTextField(fieldConfig)})}
    </div>
  );
};

export default ContactInfo;
