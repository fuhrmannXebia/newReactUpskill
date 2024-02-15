import styles from "./InvoiceForm.module.css";
import ContactInfo from "../ContactInfoComponent/ContactInfo";
import { TextField, Button } from "@mui/material";
import InvoiceProductItem from "../InvoiceProductItemComponent/InvoiceProductItem";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import SaveIcon from "@mui/icons-material/Save";
import { Link } from "react-router-dom";
import { routes } from "../../routes.config";
import { useInvoiceForm } from "./useInvoiceForm";
import { FormProvider } from "react-hook-form";

const InvoiceForm = () => {
  const {
    form,
    form: {
      formState: { errors },
      register,
      getValues,
      setValue,
    },
    isLoading,
    fieldArray: { append, remove, fields },
    onSubmit
  } = useInvoiceForm();

  return (
    <FormProvider {...form}>
      <div className={styles.formContainer}>
        <form onSubmit={onSubmit} noValidate>
          <div className={styles.invoiceFormTop}>
            <div className={styles.topInputsContainer}>
              <TextField
                {...register("invoiceNumber", {
                  required: "Invoice number is required",
                })}
                label="No."
                variant="outlined"
                className={styles.invoiceNumber}
                error={Boolean(errors.invoiceNumber)}
                helperText={errors.invoiceNumber?.message}
                InputLabelProps={{ shrink: true }}
              />

              <div className={styles.datesContainer}>
                <DatePicker
                  label="Created date"
                  value={getValues("createdDate")}
                  onChange={(date) => setValue("createdDate", date)}

                  className={styles.datePicker}
                />
                <DatePicker
                  label="Valid until date"
                  value={getValues("validUntilDate")}
                  onChange={(date) => setValue("validUntilDate", date)}
                  className={styles.datePicker}
                />
              </div>
            </div>
            <div className={styles.topButtons}>
              <Link to={routes[0].path}>
                <Button variant="outlined" color="secondary">
                  Cancel
                </Button>
              </Link>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isLoading}
                startIcon={<SaveIcon />}
              >
                Save
              </Button>
            </div>
          </div>

          <div className={styles.contactInfo}>
            <ContactInfo type="sender" />
            <ContactInfo type="receiver" />
          </div>

          <div className={styles.productItemsContainer}>
            {fields.map((item, index) => (
              <InvoiceProductItem
                key={item.id}
                item={item}
                index={index}
                remove={remove}
                items={fields}
                // control={control}
              />
            ))}
          </div>

          <div className={styles.addItemContainer}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => append({ name: "", amount: 1, tax: 0, price: 0 })}
            >
              Add Item
            </Button>
          </div>
        </form>
      </div>
    </FormProvider>
  );
};

export default InvoiceForm;
