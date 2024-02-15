import { useFormContext } from "react-hook-form";
import styles from "./InvoiceDetails.module.css";
import { TextField } from "@mui/material";

const InvoiceDetails = () => {
  const { register } = useFormContext();

  return (
    <div className={styles.invoiceDetailsWrapper}>
      <div className={styles.invoiceDetailsTop}>
        <TextField
          {...register("invoiceNumber")}
          label="InvoiceNumber"
          id="invoiceNumber"
          variant="standard"
        />
      </div>
      <div className={styles.invoiceDetailsBottom}>
        <TextField
          {...register("date")}
          label="Date"
          id="date"
          variant="standard"
        />
         <TextField
          {...register("validUntil")}
          label="ValidUntil"
          id="validUntil"
          variant="standard"
        />
      </div>
    </div>
  );
};

export default InvoiceDetails;
