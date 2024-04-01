import Layout from "../../components/Layout/Layout";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import Icon from "../../assets/home.svg";
import "./404.css";

export default function NotFoundPage() {
  return (
    <Layout>
      <Title title="404 Page Not Found" />
      <p className="errors-info">Sorry, the page you are looking for does not exist.</p>
      <Button title="Go back to home" link="/" icon={Icon} />
    </Layout>
  )
}