import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import PropTypes from "prop-types";
import { useState } from "react";
import "./Table.css";

const CustomTable = ({ data, columns }) => {
  CustomTable.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
  };

  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const tableData = data.map((item, index) => ({
    ...item,
    state: item.state.name,
    dateOfBirth: new Date(item.dateOfBirth).toLocaleDateString(
      "en-US",
      options
    ),
    startDate: new Date(item.startDate).toLocaleDateString("en-US", options),
    department: item.department.name,
    id: index,
  }));

  const renderHeader = () => {
    return (
      <div className="flex justify-content-end">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={globalFilterValue}
            onChange={(e) => setGlobalFilterValue(e.target.value)}
            placeholder="Search..."
          />
        </span>
      </div>
    );
  };

  return (
    <DataTable
      value={tableData}
      paginator
      rows={10}
      rowsPerPageOptions={[5, 10, 25, 50]}
      dataKey="id"
      header={renderHeader()}
      emptyMessage="No data found."
      globalFilter={globalFilterValue}
    >
      {columns.map((column, index) => (
        <Column
          key={index}
          sortable
          field={column.field}
          header={column.header}
        />
      ))}
    </DataTable>
  );
};

export default CustomTable;
