import React from "react";
import { GlobalStyle } from "./styles/global";

import Header from "./components/header/header.component";
import Search from "./pages/Search/Search.page";
// import MovieDetails from "./pages/MovieDetails/MovieDetails.page";
function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Search />
      {/* <MovieDetails /> */}
    </div>
  );
}

export default App;
