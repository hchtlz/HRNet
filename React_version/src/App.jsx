import { Routes, Route, Navigate } from "react-router-dom"
import Form from "./pages/Employees/Form/Form"
import List from "./pages/Employees/List/List"
import NotFound from "./pages/404/404"
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';



export default function App() {
  return (
    <PrimeReactProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/employees/new" />} />
        <Route path="/employees/new" element={<Form />} />
        <Route path="/employees/list" element={<List />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PrimeReactProvider>
  )
}