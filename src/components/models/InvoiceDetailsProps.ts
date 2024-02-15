export type InvoiceDetailsProps = {
    details: {
      number: string;
      createdDate: string;
      validUntilDate: string;
    };
    setDetails: (details: {
      number: string;
      createdDate: string;
      validUntilDate: string;
    }) => void;
  };