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
  searchList.innerHTML = "<li>No searches yet</li>";
} else {
  searches.slice(-5).forEach(s => {
    const li = document.createElement("li");
    li.innerText = s;
    searchList.appendChild(li);
  });
}

// Show viewed movies (last 5)
const viewList = document.getElementById("viewList");
viewList.innerHTML = "";

if (viewed.length === 0) {
  viewList.innerHTML = "<li>No viewed movies yet</li>";
} else {
  viewed.slice(-5).forEach(v => {
    const li = document.createElement("li");
    li.innerText = v;
    viewList.appendChild(li);
  });
}

// Clear all data button
function clearData() {
  localStorage.clear();
  location.reload();
}