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
export const convertGenreIdToString = (id, state) => {
  const convertedGenre = state.filter(genre => id === genre.id);
  return convertedGenre[0].name;
};

//obter array de ids de generos quando generos são passados como um array de objetos com id e name
export const getGenresIds = genres => {
  const genresIds = genres.map(genre => genre.id);
  return genresIds;
};

//converte o runtime em minutes para hora, em formato de apresentação
export const convertToHour = time => {
  const totalMinutes = time;
  const hours = Math.floor(totalMinutes / 60);
  let minutes = totalMinutes % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return `${hours}h ${minutes}m`;
};

//converte os numeros de orçamento, receita e lucro em decimais
export const makeDecimal = number => {
  number = number + ""; // Converte o número para string
  number = number
    .split("")
    .reverse()
    .join(""); // Reverte
  let result = "";
  for (let i = 0; i <= number.length; i += 3) {
    result = result + number.substring(i, i + 3) + ".";
  }
  result = result
    .split("")
    .reverse()
    .join(""); //Reverte novamente
  if (!isFinite(result.substring(0, 1)))
    result = result.substring(1, result.length); // Remove o primeiro ponto, se tiver.
  if (!isFinite(result.substring(0, 1)))
    result = result.substring(1, result.length); // Remove o primeiro ponto, se tiver.
  if (!isFinite(result.substring(0, 1)))
    result = result.substring(1, result.length); // Remove o primeiro ponto, se tiver.
  return result;
};

//obter idioma original em String extendida. ex: en para English

export const getOriginalLanguage = data => {
  const originalLanguage = data.original_language;
  const spokenName = data.spoken_languages.find(
    language => originalLanguage === language.iso_639_1
  );
  return spokenName.name;
};
