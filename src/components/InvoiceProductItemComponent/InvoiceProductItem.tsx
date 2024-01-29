import React from "react";
import { useFormContext } from "react-hook-form";
import { TextField, IconButton, TextFieldVariants } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./InvoiceProductItem.module.css";
import { itemFieldsConfig } from "./ItemsFieldsConfig";

const InvoiceProductItem = ({ item, index, remove, items }) => {
  const { register } = useFormContext();
  return (
    <div className={styles.itemInputsContainer}>
      {itemFieldsConfig.map(({ label, type, variant, className }) => (
        <TextField
          key={label}
          label={label}
          type={type}
          variant={variant as TextFieldVariants}
          {...register(`items[${index}].${label.toLowerCase()}`)}
          className={className ? styles[className] : ''}
        />
      ))}
      <IconButton onClick={() => remove(index)} disabled={items.length === 1}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default InvoiceProductItem;
