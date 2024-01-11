import React, { useEffect, useState } from "react";
import { Invoice } from "./models/invoice";
import { fetchInvoices, deleteInvoice } from "../services/api";
import styles from './InvoiceList.module.css'
import InvoiceItem from "./InvoiceItem";


const InvoiceList: React.FC = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  useEffect(() => {
    const getInvoices = async () => {
      try {
        const data = await fetchInvoices();
        setInvoices(data);
      } catch (error) {
        console.log(error);
      }
    };

    getInvoices();
  }, []);

  const handleDelete = async(id: number) => {
    await deleteInvoice(id);
    setInvoices(invoices.filter((invoice) => invoice.id !== id));
  }
  return (
    <div className={styles.invoiceListContainer}>
      <div className={styles.invoiceTableHeader}>
        <div>No.</div>
        <div>Created</div>
        <div>Valid until</div>
        <div>Amount</div>
        <div>Actions</div>
      </div>
      {invoices.map((invoice) => {
        return <InvoiceItem key={invoice.id} invoice={invoice} onDelete={handleDelete}></InvoiceItem>;
      })}
    </div>
  );
};

export default InvoiceList;
