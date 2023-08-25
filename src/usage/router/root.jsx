import { Outlet } from "react-router-dom";
import NavbarRouter from "../../components/navbar/Navbar";

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
