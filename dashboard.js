// Get data from localStorage
const favs = JSON.parse(localStorage.getItem("favorites")) || [];
const viewed = JSON.parse(localStorage.getItem("viewed")) || [];
const searches = JSON.parse(localStorage.getItem("searches")) || [];

// Show counts
document.getElementById("favCount").innerText = favs.length;
document.getElementById("viewCount").innerText = viewed.length;
document.getElementById("searchCount").innerText = searches.length;

// Show recent searches (last 5)
const searchList = document.getElementById("searchList");
searchList.innerHTML = "";

if (searches.length === 0) {
  searchList