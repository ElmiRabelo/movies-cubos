import React from "react";
import { GlobalStyle } from "./styles/global";

import Routes from "./routes/routes";
import Header from "./components/header/header.component";
import ErrorBox from "./components/error-box/error-box.component";
function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <ErrorBox />
      <Routes />
    </div>
  );
}

export default App;
