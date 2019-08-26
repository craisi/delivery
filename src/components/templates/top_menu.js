import React from "react";

function TopMenu() {
  return (
    <div className="top-menu">
      <div className="navbar-centered">
        <div className="top-menu-container">
          <div className="top-menu-left">
            <div className="menu-item">
              <a href="#" className="menu-item-link">
                Inicio
              </a>
            </div>
            <div className="menu-item">
              <a href="#" className="menu-item-link">
                Ofertas
              </a>
            </div>
            <div className="menu-item">
              <a href="#" className="menu-item-link">
                Balance
              </a>
            </div>
            <div className="menu-item">
              <a href="#" className="menu-item-link">
                Historial de busqueda
              </a>
            </div>
            <div className="menu-item">
              <a href="#" className="menu-item-link">
                Contacto
              </a>
            </div>
          </div>
          <div className="top-menu-right">
            <div className="menu-item">
              <a href="#" className="user-icon" uk-icon="location">
                San Cristóbal
              </a>
            </div>
            <div className="menu-item">
              <a href="#" className="user-icon" uk-icon="user" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopMenu;
