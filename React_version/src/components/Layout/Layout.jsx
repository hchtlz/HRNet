import './Layout.css';
import Logo from "../Logo/Logo";

const Layout = ({ children }) => {
  return (
    <>
    <Logo />
    <div className="layout">
      {children}
    </div>
    </>
  );
};

export default Layout;