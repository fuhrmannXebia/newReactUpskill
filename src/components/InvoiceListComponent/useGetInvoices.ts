import { useState, useEffect } from "react";
import { fetchInvoices } from "../../services/api";
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

  return [invoices, setInvoices] as const; // Ensures a readonly tuple is returned
};

export default useGetInvoices;