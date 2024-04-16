import "./Layout.css";
import Logo from "../Logo/Logo";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };
  return (
    <>
      <Logo />
      <div className="layout">{children}</div>
    </>
  );
};

export default Layout;
