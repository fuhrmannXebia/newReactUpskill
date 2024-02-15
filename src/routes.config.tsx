import InvoiceList from './components/InvoiceListComponent/InvoiceList';
import InvoiceForm from './components/InvoiceFormComponent/InvoiceForm';

export const routes = [
  {
    name: 'HOME',
    path: '/',
    element: <InvoiceList />,
    isInMenu: true,
    translationKey: 'invoices',
  },
  {
    name: ' NEW_INVOICE',
    path: '/new-invoice',
    element: <InvoiceForm />,
    isInMenu: true,
    translationKey: 'addNewInvoice',
  },
  {
    name: 'INVOICE',
    path: '/invoice/:invoiceId',
    element: <InvoiceForm />,
    isInMenu: false,
  },
];