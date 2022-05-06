import createsFilmCardMarkup from './card-markup'
import { buttonHandler } from './modalCard/modalCard';
export default function loadTrendMovies() {
    fetchTrendMovies().then(fetchTrendMoviesResponse);
}

const backdropSizes = {
    w300: "w300", 
    w780: "w780",
    w1280: "w1280", 
    original: "original"
}

const posterSizes = {
    w92: "w92",
    w154: "w154", 
    w185: "w185", 
    w342: "w342", 
    w500: "w500", 
    w780: "w780", 
    original: "original"
} 
const key = '067f291d21ed1c6d30bd9ade17d843cc';
const url = 'https://api.themoviedb.org/3/trending/movie/week';
const movies = document.getElementById('movies');
const pictureUrl = `https://image.tmdb.org/t/p/${posterSizes.w342}`;


function fetchTrendMovies() {
    return fetch(`${url}?api_key=${key}`).then(response => {
        return response.json();
    })
}

function fetchTrendMoviesResponse(movies) {
    const moviesTrendList = createsFilmCardMarkup(movies, pictureUrl);
    insertList(moviesTrendList);
    document.querySelector("#movies").addEventListener("click", buttonHandler);
}

function insertList(moviesTrendList) {
    movies.insertAdjacentHTML('beforeend', moviesTrendList);
}

//  function getGenres() {
//       return  fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`).then(response => {
//           return response.json().then(console.dir);
//       })
//   }

//  const movie = getGenres();
  
//   console.log(movie);


//  function getPictureSize() {
//       return  fetch(`https://api.themoviedb.org/3/configuration?api_key=${key}`).then(response => {
//           return response.json();
//       })
//   }



