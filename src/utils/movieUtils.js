// Formata o ano de lançamento provindo da api AAAA/MM/DD para DD/MM/AAAA
export const formatYear = year => {
  const FormatedYear = year
    .split("-")
    .reverse()
    .toString()
    .replace(/,/g, "/");
  return FormatedYear;
};

//Formato o vote_average da api, para apresentar como porcentagem
export const formatVote = vote => {
  const strVote = vote.toString();
  if (!strVote.includes(".")) {
    return `${strVote}0%`;
  }

  return strVote.replace(".", "") + "%";
};

//converte o texto da busca para uma id de genero, necessário para buscar um filme por genero
export const convertSearchToGenre = (search, genres) => {
  const formatedSearch = search.trim().toLowerCase();
  const genreId = genres.find(genre => {
    return formatedSearch === genre.name.toLowerCase();
  });
  if (genreId) {
    return genreId.id;
  }
  return;
};

//converte id de genero para o nome(string format)
export const convertGenreToString = (id, genres) => {
  const convertedGenre = genres.filter(genre => id === genre.id);
  return convertedGenre[0].name;
};
