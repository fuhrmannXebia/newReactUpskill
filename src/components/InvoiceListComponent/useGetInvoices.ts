import { useState, useEffect } from "react";
import { fetchInvoices, deleteInvoice } from "../../services/api";
import { Invoice } from "../models/invoice";

const useGetInvoices = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  useEffect(() => {
    const getInvoices = async () => {
      try {
        const data = await fetchInvoices();
        setInvoices(data);
      } catch (error) {
        console.error("Failed to fetch invoices:", error);
      }
    };

    getInvoices();
  }, []);

  const handleDelete = async (id: number) => {
    await deleteInvoice(id);
    setInvoices(invoices.filter((invoice) => invoice.id !== id));
  };

  return [invoices, handleDelete] as const;
};

export default useGetInvoices;