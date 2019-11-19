import React from "react";
import { GlobalStyle } from "./styles/global";

import Header from "./components/header/header.component";
import MovieCard from "./components/movie-card/movie-card.component";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <MovieCard />
    </div>
  );
}

export default App;
