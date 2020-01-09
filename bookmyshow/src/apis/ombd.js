import axios from "axios";
const url = "http://www.omdbapi.com/?s=Batman&page=2&apikey=8d9f24de";

export const movieList = axios.get(url);