import React from "react";
import { deleteInvoice } from "../../services/api";
import styles from './InvoiceList.module.css'
import InvoiceItem from "../InvoiceItem";
import useGetInvoices from "./useGetInvoices";


const InvoiceList: React.FC = () => {
  const [invoices, setInvoices] = useGetInvoices();

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
