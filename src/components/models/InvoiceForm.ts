import { ContactInfo, InvoiceItem } from "./InvoiceItemProps";

export interface InvoiceFormData {
    invoiceNumber: string;
    createdDate: Date | null;
    validUntilDate: Date | null;
    items: InvoiceItem[];
    sender: ContactInfo;
    receiver: ContactInfo;
  }