import React, { useEffect } from "react";
import styles from "./InvoiceForm.module.css";
import { postInvoice, fetchInvoice, updateInvoice } from "../services/api";
import ContactInfo from "./ContactInfo";
import { useForm, useFieldArray, FormProvider } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import { DevTool } from "@hookform/devtools";
import InvoiceProductItem from "./InvoiceProductItem";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import SaveIcon from "@mui/icons-material/Save";
import { Link, useParams } from "react-router-dom";
import ROUTES from "../routes";

const InvoiceForm = () => {
  const { invoiceId } = useParams();
  const isEditing = invoiceId != null;
  const form = useForm({
    defaultValues: {
      invoiceNumber: "",
      createdDate: null,
      validUntilDate: null,
      items: [
        {
          name: "",
          amount: 1,
          tax: 0,
          price: 0,
        },
      ],
      sender: {
        companyName: "",
        city: "",
        street: "",
        postCode: "",
        nip: "",
        tel: "",
        email: "",
        bankAccount: "",
      },
      receiver: {
        companyName: "",
        city: "",
        street: "",
        postCode: "",
        nip: "",
        tel: "",
        email: "",
        bankAccount: "",
      },
    },
  });

  const {
    register,
    control,
    handleSubmit,
    formState,
    setValue,
    getValues,
    reset,
  } = form;

  const { errors } = formState;

  const onSubmit = async (data: unknown) => {
    try {
      if (isEditing) {
        const response = await updateInvoice(invoiceId, data);
        console.log("Invoice updated", response);
      } else {
        const response = await postInvoice(data);
        console.log("Invoice saved", response);
      }
    } catch (error) {
      console.error("Error saving the invoice", error);
    }
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  useEffect(() => {
    if (isEditing) {
      const fetchExistingInvoice = async (id) => {
        try {
          const invoiceData = await fetchInvoice(id);
          invoiceData.createdDate = new Date(invoiceData.createdDate);
          invoiceData.validUntilDate = new Date(invoiceData.validUntilDate);
          reset(invoiceData);
        } catch (error) {
          console.error("Error fetching invoice:", error);
        }
      };

      fetchExistingInvoice(invoiceId);
    } else {
      reset({
        invoiceNumber: "",
        createdDate: null,
        validUntilDate: null,
        items: [{ name: "", amount: 1, tax: 0, price: 0 }],
        sender: {
          companyName: "",
          city: "",
          street: "",
          postCode: "",
          nip: "",
          tel: "",
          email: "",
          bankAccount: "",
        },
        receiver: {
          companyName: "",
          city: "",
          street: "",
          postCode: "",
          nip: "",
          tel: "",
          email: "",
          bankAccount: "",
        },
      });
    }
  }, [isEditing, invoiceId, reset]);
  return (
    <div className={styles.formContainer}>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className={styles.invoiceFormTop}>
            <div className={styles.topInputsContainer}>
              <TextField
                {...register("invoiceNumber", {
                  required: "Invoice number is required",
                })}
                InputLabelProps={{ shrink: true }} 
                label="No."
                variant="outlined"
                className={styles.invoiceNumber}
                error={Boolean(errors.invoiceNumber)}
                helperText={errors.invoiceNumber?.message}
              />
              <div className={styles.datesContainer}>
                <DatePicker
                  label="Created date"
                  value={getValues("createdDate")}
                  onChange={(date) => setValue("createdDate", date)}
                  slotProps={{ textField: { variant: "outlined" } }}
                  className={styles.datePicker}
                />
                <DatePicker
                  label="Valid until date"
                  value={getValues("validUntilDate")}
                  onChange={(date) => setValue("validUntilDate", date)}
                  slotProps={{ textField: { variant: "outlined" } }}
                  className={styles.datePicker}
                />
              </div>
            </div>
            <div className={styles.topButtons}>
              <Link to={ROUTES.HOME}>
                <Button variant="outlined" color="secondary">
                  Cancel
                </Button>
              </Link>

              <Button type="submit" variant="contained" color="primary">
                <SaveIcon className={styles.saveIconSpacing} />
                Save
              </Button>
            </div>
          </div>
          <div className={styles.contactInfo}>
            <ContactInfo type={"sender"} />
            <ContactInfo type={"receiver"} />
          </div>
          <div className={styles.productItemsContainer}>
            {fields.map((item, index) => (
              <InvoiceProductItem
                key={item.id}
                item={item}
                index={index}
                remove={remove}
                items={fields}
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
      </FormProvider>
      <DevTool control={control} />
    </div>
  );
};

export default InvoiceForm;