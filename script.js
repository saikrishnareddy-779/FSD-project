const API_KEY = "b2b607ab641b7e6ac341a045d32befbb";
const BASE_URL = "https://api.themoviedb.org/3";

const moviesDiv = document.getElementById("movies");
const searchInput = document.getElementById("search");
const yearFilter = document.getElementById("year");
const ratingFilter = document.getElementById("rating");

// Load movies
async function getMovies() {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await res.json();
  displayMovies(data.results);
}

// Rating color
function getColor(vote) {
  if (vote >= 7) return "green";
  if (vote >= 5) return "orange";
  return "red";
}

// Display movies
function displayMovies(movies) {
  moviesDiv.innerHTML = "";

  if (movies.length === 0) {
    moviesDiv.innerHTML = "<h3>No movies found 😢</h3>";
    return;
  }

  movies.forEach(movie => {
    if (!movie.poster_path) return;

    const div = document.createElement("div");
    div.classList.add("col-md-3");

    div.innerHTML = `
      <div class="card mb-3">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
        <div class="card-body">
          <h6>${movie.title}</h6>
          <p class="${getColor(movie.vote_average)}">⭐ ${movie.vote_average}</p>
          <button class="btn btn-sm btn-outline-danger" onclick='addToFavorites(${JSON.stringify(movie)})'>❤️</button>
        </div>
      </div>
    `;

    div.onclick = () => {
      localStorage.setItem("selectedMovie", JSON.stringify(movie));

      let viewed
// Initial load
getMovies();