import Layout from "../../../components/Layout/Layout";
import Title from "../../../components/Title/Title";
import Button from "../../../components/Button/Button";
import Formulaire from "../../../components/Form/Form";
import arrow from "../../../assets/arrow-long-right.svg";

export default function Form() {
  return (
    <Layout>
      <Title title="Create Employee" />
      <Button title="View current employees" link="/employees/list" icon={arrow} noBackground/>
      <Formulaire />
    </Layout>
  )
}