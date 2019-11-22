import React from "react";
import { GlobalStyle } from "./styles/global";

import Routes from "./routes/routes";
import Header from "./components/header/header.component";
function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Routes />
    </div>
  );
}

export default App;
