import React from "react";

import Cart from "./../cart";

function Header() {
  return (
    <div
      className="navbar-parent"
      uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar ;"
    >
      <nav
        className="uk-navbar navbar-centered"
        uk-navbar="dropbar: true; dropbar-mode: slide; delay-hide: 200"
      >
        <div className="uk-navbar-left">
          <a className="uk-navbar-item uk-logo uk-padding-remove-left" href="#">
            <span className="logo-p-1">man</span>
            <span className="logo-p-2">dao</span>
          </a>
        </div>
        <div className="uk-navbar-right search">
          <form className="uk-search uk-search-default main-search uk-width-1-1">
            <a href="" className="uk-search-icon-flip" uk-search-icon="true" />
            <input
              className="uk-search-input"
              type="search"
              placeholder="Search..."
            />
          </form>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li>
              <a
                href="#"
                className="menu-item-w-icon"
                uk-icon="icon: chevron-down"
              >
                Categoría
              </a>
              <div className="uk-navbar-dropdown uk-navbar-dropdown-width-2">
                <div
                  className="uk-navbar-dropdown-grid uk-child-width-1-2"
                  uk-grid="true"
                >
                  <div>
                    <ul className="uk-nav uk-navbar-dropdown-nav">
                      <li className="uk-active">
                        <a href="#">Active</a>
                      </li>
                      <li>
                        <a href="#">Item</a>
                      </li>
                      <li className="uk-nav-header">Header</li>
                      <li>
                        <a href="#">Item</a>
                      </li>
                      <li>
                        <a href="#">Item</a>
                      </li>
                      <li className="uk-nav-divider" />
                      <li>
                        <a href="#">Item</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="uk-nav uk-navbar-dropdown-nav">
                      <li className="uk-active">
                        <a href="#">Active</a>
                      </li>
                      <li>
                        <a href="#">Item</a>
                      </li>
                      <li className="uk-nav-header">Header</li>
                      <li>
                        <a href="#">Item</a>
                      </li>
                      <li>
                        <a href="#">Item</a>
                      </li>
                      <li className="uk-nav-divider" />
                      <li>
                        <a href="#">Item</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className="uk-navbar-item" id="cart-container">
            <a href="#" uk-icon="cart" uk-toggle="target: #offcanvas-flip" />
          </div>
        </div>
      </nav>

      <div class="uk-navbar-dropbar" />
      <Cart />
    </div>
  );
}

export default Header;
