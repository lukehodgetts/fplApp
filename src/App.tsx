import React from "react";

import { Main, Header, Body } from "./App.styles";

import Player from "./components/Player";
import Search from "./components/Search";
import Stat from "./components/Stat";

function App() {

  const names: string[] = ["steve", "clagnut", "bonk", "jeff"]

  return (
    <Main>
      <Search watermark="clagnut steve" />
    </Main>
  );
}

export default App;
