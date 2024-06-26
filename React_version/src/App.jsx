import { Routes, Route, Navigate } from "react-router-dom";
import Form from "./pages/Employees/Form/Form";
import List from "./pages/Employees/List/List";
import NotFound from "./pages/404/404";
import "primereact/resources/themes/lara-light-indigo/theme.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/employees/new" />} />
      <Route path="/employees/new" element={<Form />} />
      <Route path="/employees/list" element={<List />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
