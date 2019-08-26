import React from "react";

import TopMenu from "./components/templates/top_menu";
import Header from "./components/templates/header";
import Card from "./components/cards";
import Ads from "./components/advertisement";

function App() {
  return (
    <>
      <TopMenu />
      <Header />
      <div class="uk-container uk-margin">
        <Ads />
      </div>
    </>
  );
}

export default App;
