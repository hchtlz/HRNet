import React, { useEffect, useState } from 'react';
import Layout from "../../../components/Layout/Layout";
import Title from "../../../components/Title/Title";
import formDataFields from "../../../datas/data";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "./List.css";

const List = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
  }, []);

  return (
    <Layout>
      <Title title="Current Employees" />
      <div className="datatable-responsive">
        <DataTable value={employees} tableStyle={{ maxWidth: '100%' }} className="p-datatable-custom">
          {formDataFields.map((field, index) => (
            <Column key={index} field={field.name} header={field.label}></Column>
          ))}
        </DataTable>
      </div>
    </Layout>
  );
};

export default List;
