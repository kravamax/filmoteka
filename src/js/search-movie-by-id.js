const axios = require('axios').default;
export async function getMovieDetails(movie_id, language) {
  try {
    const serverResponse = await axios(l);

    if (serverResponse.statusText != 'OK' && serverResponse.status != 200) {
      throw new ServerError(
        `Unable to get movie data from TMDB. Request: ${l}. TMDB response: ${serverResponse.statusText}. TMDB RESPONSE STATUS: ${serverResponse.status}`,
      );
    }

    return serverResponse.data;
  } catch (error) {
    console.log(error.message);
  }
  return false;
}
