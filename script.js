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

      let viewed = JSON.parse(localStorage.getItem("viewed")) || [];
      viewed.push(movie.title);
      localStorage.setItem("viewed", JSON.stringify(viewed));

      window.location.href = "details.html";
    };

    moviesDiv.appendChild(div);
  });
}

// Favorites
function addToFavorites(movie) {
  let favs = JSON.parse(localStorage.getItem("favorites")) || [];

  if (!favs.find(m => m.id === movie.id)) {
    favs.push(movie);
    localStorage.setItem("favorites", JSON.stringify(favs));
    alert("Added to favorites ❤️");
  }
}

function showFavorites() {
  const favs = JSON.parse(localStorage.getItem("favorites")) || [];
  displayMovies(favs);
}

// Filters + Search
searchInput.addEventListener("keyup", applyFilters);
yearFilter.addEventListener("change", applyFilters);
ratingFilter.addEventListener("change", applyFilters);

async function applyFilters() {
  const query = searchInput.value.trim();

  let url = `${BASE_URL}/discover/movie?api_key=${API_KEY}`;

  if (query.length > 2) {
    url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;

    let searches = JSON.parse(localStorage.getItem("searches")) || [];
    searches.push(query);
    localStorage.setItem("searches", JSON.stringify(searches));
  }

  if (yearFilter.value) {
    url += `&primary_release_year=${yearFilter.value}`;
  }

  const res = await fetch(url);
  let movies = (await res.json()).results;

  if (ratingFilter.value) {
    movies = movies.filter(m => m.vote_average >= ratingFilter.value);
  }

  displayMovies(movies);
}

// Initial load
getMovies();