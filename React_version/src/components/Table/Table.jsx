import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import "./Table.css";

const CustomTable = ({ data, columns }) => {
  const [globalFilterValue, setGlobalFilterValue] = useState('');

  const renderHeader = () => {
    return (
      <div className="flex justify-content-end">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText value={globalFilterValue} onChange={(e) => setGlobalFilterValue(e.target.value)} placeholder="Search..." />
        </span>
      </div>
    );
  };

  return (
    <DataTable value={data} paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50]} dataKey="id" header={renderHeader()} emptyMessage="No data found." globalFilter={globalFilterValue}>
      {columns.map((column, index) => (
        <Column key={index} sortable field={column.field} header={column.header} />
      ))}
    </DataTable>
  );
};

export default CustomTable;
