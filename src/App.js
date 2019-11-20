import React from "react";
import { GlobalStyle } from "./styles/global";

import Header from "./components/header/header.component";
import Search from "./pages/Search/Search.page";
function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Search />
    </div>
  );
}

export default App;
