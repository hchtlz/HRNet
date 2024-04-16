import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Button.css";

export default function Button({ title, link, icon, noBackground }) {
  const buttonClass = noBackground ? "button button-no-background" : "button";
  <button className={buttonClass}>{title}</button>;
  return (
    <div className="button-wrapper">
      <Link to={link} className={buttonClass}>
        {title}
        {icon && <img src={icon} alt="icon" className="button-icon" />}
      </Link>
    </div>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.string,
  noBackground: PropTypes.bool,
};
