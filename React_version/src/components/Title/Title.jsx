import PropTypes from "prop-types";
import "./Title.css";

export default function Title(props) {
  Title.propTypes = {
    title: PropTypes.string.isRequired,
  };

  const { title } = props;

  return <h1 className="title">{title}</h1>;
}
