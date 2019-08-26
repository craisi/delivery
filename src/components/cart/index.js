import React from "react";

function Cart() {
  return (
    <div id="offcanvas-flip" uk-offcanvas="flip: true; overlay: true">
      <div class="uk-offcanvas-bar">
        <button class="uk-offcanvas-close" type="button" uk-close="true" />

        <h3 className="cart-title">Articulos en la canasta</h3>

        <ul className="uk-list uk-list-divider">
          <li class="cart-item-list">
            <span>Sandwish parmelini</span>
            {/* <span>description of the item</span> */}
            <span className="cart-price">RD $50.00</span>
          </li>
        </ul>
        <botton className="uk-button uk-button-default uk-width-1-1 ">
          Ordenar
        </botton>
      </div>
    </div>
  );
}

export default Cart;
