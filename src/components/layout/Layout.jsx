import React from "react";
import { Menu } from "../menu/Menu";
import { Outlet } from "react-router-dom";
import "./Layout.css";
import { Suggestions } from "../sugerencias/Suggestions";

export const Layout = () => {
  return (
    <>
      <header className="app-header">
        <Menu />
      </header>
      <main className="app-main">
        {/* El Outlet aquí es donde se renderizarán las rutas hijas */}
        <div className="outlet">
          {/*se utiliza dentro de un componente de ruta padre para indicar dónde deben renderizarse los componentes secundarios asociados con rutas hijas*/}
          <Outlet />
        </div>
        <Suggestions />
      </main>
    </>
  );
};
