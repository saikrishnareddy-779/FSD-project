const movie = JSON.parse(localStorage.getItem("selectedMovie"));
const container = document.getElementById("movieDetails");

if (movie) {
  container.innerHTML = `
    <div class="row">
      <div class="col-md-4">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="img-fluid">
      </div>
      <div class="col-md-8">
        <h2>${movie.title}</h2>
        <p><strong>⭐ Rating:</strong> ${movie.vote_average}</p>
        <p><strong>📅 Release:</strong> ${movie.release_date}</p>
        <p>${movie.overview}</p>

        <button class="btn btn-danger mt-3" onclick="watchMovie('${movie.title}')">
          ▶ Watch Now
        </button>
      </div>
    </div>
  `;
}

function goBack() {
  window.history.back();
}

function watchMovie(title) {
  window.open(`https://www.google.com/search?q=${title}+watch+online`, "_blank");
}