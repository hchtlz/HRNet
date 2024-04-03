import { useEffect, useState } from 'react';
import Layout from "../../../components/Layout/Layout";
import Title from "../../../components/Title/Title";
import Button from "../../../components/Button/Button";
import formDataFields from "../../../datas/data";
import Table from "../../../components/Table/Table";
import Icon from "../../../assets/home.svg";

const List = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
  }, []);

  const columns = formDataFields.map(field => ({
    field: field.name,
    header: field.label
  }));

  return (
    <>
      <Layout>
        <Title title="Current Employees" />
        <div className="datatable-responsive">
          <Table data={employees} columns={columns} />
        </div>
      </Layout>
      <div className='go_back_button'>
        <Button title="Go back to home" link="/" icon={Icon}/>
      </div>
    </>
  );
};

export default List;
