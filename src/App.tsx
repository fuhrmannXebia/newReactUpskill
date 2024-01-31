import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import Header from './components/Header';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { routes } from './routes.config';

function App() {

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
   <Router>
    <Header />
     <Routes>
     {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
      </Routes>
   </Router>
   </LocalizationProvider>
  )
}

export default App
