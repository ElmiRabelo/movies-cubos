import React from "react";
import { GlobalStyle } from "./styles/global";

import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header title="Movies" />
    </div>
  );
}

export default App;
