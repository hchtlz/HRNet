import { Link } from "react-router-dom";
import "./Button.css";

export default function Button({ title, link, icon, noBackground }) {
  const buttonClass = noBackground ? "button button-no-background" : "button";

  return (
    <div className="button-wrapper">
      <Link to={link} className={buttonClass}>
        {title}
        {icon && <img src={icon} alt="icon" className="button-icon" />}
      </Link>
    </div>
  );
}
