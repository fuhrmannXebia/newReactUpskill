import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import InvoiceList from './components/InvoiceListComponent/InvoiceList';
import InvoiceForm from './components/InvoiceForm';
import Header from './components/Header';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import ROUTES from './routes';


function App() {

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
   <Router>
    <Header />
     <Routes>
        <Route path={ROUTES.HOME} element={<InvoiceList />} />
        <Route path={ROUTES.NEW_INVOICE} element={<InvoiceForm />} />
        <Route path={ROUTES.INVOICE} element={<InvoiceForm />} />
      </Routes>
   </Router>
   </LocalizationProvider>
  )
}

export default App
