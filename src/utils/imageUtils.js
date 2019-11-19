// link padrão para request de poster de filmes
export const baseImgUrl = "https://image.tmdb.org/t/p/";

//tamanho de imagens em formato banner
export const backdropSizes = {
  small: "w300",
  medium: "w780",
  large: "w1280",
  original: "original"
};

//tamanho de imagens em formato de poster
export const posterSizes = {
  tiny: "w154",
  small: "w185",
  medium: "w342",
  large: "w500",
  extraLarge: "w780",
  orignal: "original"
};

//obtem imagem combinando informações das apis
export const getImage = (baseUrl = baseImgUrl, imgSize, imageUrl) => {
  return `${baseUrl + imgSize + imageUrl}`;
};
