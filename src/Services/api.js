import axios from "axios";

// Base da Url
// URL API /movie/now_playing?api_key=39e6e37b15446628485b7b2ca96d6732&language=pt-BR

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
