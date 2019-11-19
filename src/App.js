import React from "react";
import { GlobalStyle } from "./styles/global";

import Header from "./components/header/header.component";
import MovieGenres from "./components/movie-genres/movie-genres.component";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <MovieGenres />
    </div>
  );
}

export default App;
