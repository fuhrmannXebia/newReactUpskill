export interface InvoiceItemProps {
    invoice: {
      createdDate: Date | null;
      id: number;
      invoiceNumber: string;
      items: InvoiceItem[];
      receiver: ContactInfo;
      sender: ContactInfo;
      validUntilDate: Date | null;
    };
    onDelete: (id: number) => void; 
  }

  export interface InvoiceItem {
    amount: number;
    name: string;
    price: number;
    tax: number;
  }
  
  export interface ContactInfo {
    bankAccount: string;
    city: string;
    companyName: string;
    email: string;
    nip: string;
    postCode: string;
    street: string;
    tel: string;
  }