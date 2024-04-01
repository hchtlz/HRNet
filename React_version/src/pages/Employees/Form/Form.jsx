import Layout from "../../../components/Layout/Layout";
import Title from "../../../components/Title/Title";
import Button from "../../../components/Button/Button";
import Formulaire from "../../../components/Form/Form";

export default function Form() {
  return (
    <Layout>
      <Title title="Create Employee" />
      <Button title="View current employees" link="/employees/list" noBackground/>
      <Formulaire />
    </Layout>
  )
}