import { Outlet } from "react-router-dom";
import { Navbar } from "../component";

export const MainLayout = () => {
  return (
    <>
      <Navbar title="Cadastro de Clientes" />
      <Outlet />
    </>
  );
};
