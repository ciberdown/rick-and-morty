import { Outlet } from "react-router-dom";
import NavbarRouter from "../../components/Navbar";

const Root = () => {
  return (
    <>
      <NavbarRouter />

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Root;
