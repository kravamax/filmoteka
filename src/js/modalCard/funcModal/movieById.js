import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "067f291d21ed1c6d30bd9ade17d843cc";

const movieById = async (id) => {
    const response = await axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`);
    return response;
}

export default movieById;