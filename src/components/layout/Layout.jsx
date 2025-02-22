import React from "react";
import { Menu } from "../menu/Menu";
import { Outlet } from "react-router-dom";
import "./Layout.css";

export const Layout = () => {
  return (
    <div className="app-main">
      <Menu />

      <div className="container-app">
        {/* El Outlet aquí es donde se renderizarán las rutas hijas */}
        <div className="outlet">
          {/*se utiliza dentro de un componente de ruta padre para indicar dónde deben renderizarse los componentes secundarios asociados con rutas hijas*/}
          <Outlet />
        </div>
      </div>
    </div>
  );
};
