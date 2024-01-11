import React from "react";
import { useFormContext } from "react-hook-form";
import { TextField, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./InvoiceProductItem.module.css";

const InvoiceProductItem = ({ item, index, remove, items }) => {
  const { register } = useFormContext();
    console.log(items)
  return (
    <div className={styles.itemInputsContainer}>
      <TextField
        className={styles.nameInput}
        label="Name"
        {...register(`items[${index}].name`)}
        variant="standard"
      />
      <TextField
        label="Amount"
        type="number"
        variant="standard"
        {...register(`items[${index}].amount`)}
      />
      <TextField
        label="Tax"
        type="number"
        {...register(`items[${index}].tax`)}
        variant="standard"
      />
      <TextField
        label="Price"
        type="number"
        {...register(`items[${index}].price`)}
        variant="standard"
      />

      <IconButton onClick={() => remove(index)} disabled={items.length === 1}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default InvoiceProductItem;
