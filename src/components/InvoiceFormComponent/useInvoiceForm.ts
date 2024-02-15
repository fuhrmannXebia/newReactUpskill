import { useEffect, useState } from 'react';
import { useForm, useFieldArray, UseFormReturn } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { postInvoice, fetchInvoice, updateInvoice } from '../../services/api';
import { routes } from '../../routes.config';
import { InvoiceFormData } from '../models/InvoiceForm';

const defaultContactInfo = {
  companyName: "",
  city: "",
  street: "",
  postCode: "",
  nip: "",
  tel: "",
  email: "",
  bankAccount: "",
};

export const useInvoiceForm = () => {
  const navigate = useNavigate();
  const { invoiceId } = useParams();
  const isEditing = invoiceId != null;
  const [isLoading, setIsLoading] = useState(false);

  const form: UseFormReturn<InvoiceFormData> = useForm<InvoiceFormData>({
    defaultValues: {
      invoiceNumber: "",
      createdDate: null,
      validUntilDate: null,
      items: [{ name: "", amount: 1, tax: 0, price: 0 }],
      sender: { ...defaultContactInfo },
      receiver: { ...defaultContactInfo },
    },
  });

  const { control,  reset } = form;

  const fieldArray = useFieldArray({
    control,
    name: "items",
  });

  const onSubmit = async (data: InvoiceFormData) => { //todo - interface for data
    setIsLoading(true);
    try {
      if (isEditing) {
        const response = await updateInvoice(invoiceId, data);
        console.log("Invoice updated", response);
      } else {
        const response = await postInvoice(data);
        console.log("Invoice saved", response);
      }
      navigate(routes[0].path);
    } catch (error) {
      console.error("Error saving the invoice", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchAndSetInvoice = async () => {
      try {
        const invoiceData = await fetchInvoice(invoiceId);
        invoiceData.createdDate = new Date(invoiceData.createdDate);
        invoiceData.validUntilDate = new Date(invoiceData.validUntilDate);
        reset(invoiceData);
      } catch (error) {
        console.error("Error fetching invoice:", error);
      }
    };

    if (isEditing) {
      fetchAndSetInvoice();
    }
  }, [isEditing, invoiceId, reset]);

  return {
    form,
    fieldArray,
    onSubmit: form.handleSubmit(onSubmit),
    isLoading
  };
};
