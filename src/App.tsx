import React from "react";

import { Main, Header, Body } from "./App.styles";

import Player from "./components/Player";
import Search from "./components/Search";
import Stat from "./components/Stat";

function App() {
  const name = "kane";



  return (
    <Main>
      <Search />
    </Main>
  );
}

export default App;
