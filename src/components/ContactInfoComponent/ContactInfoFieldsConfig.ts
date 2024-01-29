export const formFieldsConfig = [
    {
      label: "Company Name",
      id: "companyName",
      variant: "standard",
      InputLabelProps: { shrink: true }
    },
    {
      label: "City",
      id: "city",
      variant: "standard",
      InputLabelProps: { shrink: true }
    },
    {
      label: "Street",
      id: "street",
      variant: "standard",
      InputLabelProps: { shrink: true }
    },
    {
      label: "Postcode",
      id: "postCode",
      variant: "standard",
      InputLabelProps: { shrink: true }
    },
    {
      label: "NIP",
      id: "nip",
      variant: "standard",
      InputLabelProps: { shrink: true }
    },
    {
      label: "Tel",
      id: "tel",
      variant: "standard",
      InputLabelProps: { shrink: true }
    },
    {
      label: "E-mail",
      id: "email",
      variant: "standard",
      InputLabelProps: { shrink: true },
      validation: {
        required: "Email is required",
        pattern: {
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: 'Invalid email format'
        }
      }
    },
    {
      label: "Bank account",
      id: "bankAccount",
      variant: "standard",
      InputLabelProps: { shrink: true }
    }
  ];