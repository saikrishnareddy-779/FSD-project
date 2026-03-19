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
        <p><strong>⭐ 