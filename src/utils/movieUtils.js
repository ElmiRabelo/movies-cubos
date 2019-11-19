// Formata o ano de lançamento provindo da api AAAA/MM/DD para DD/MM/AAAA
export const FormatYear = year => {
  const FormatedYear = year
    .split("-")
    .reverse()
    .toString()
    .replace(/,/g, "/");
  return FormatedYear;
};

//Formato o vote_average da api, para apresentar como porcentagem
export const FormatVote = vote => {
  const FormatedVote = vote.toString().replace(".", "") + "%";
  return FormatedVote;
};
