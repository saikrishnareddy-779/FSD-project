# 🎬 Movie App

A responsive front-end web application that allows users to discover, search, and keep track of their favorite movies. Built with vanilla web technologies and powered by the [TMDB (The Movie Database) API](https://www.themoviedb.org/).

## ✨ Features

- **Discover Movies**: View a grid of popular and trending movies on the home page.
- **Search & Filter**: Search for specific titles or filter results by release year and average user rating.
- **Movie Details**: View deeper information about a movie, including release date, overview, and a shortcut to find where to watch it online.
- **Favorites System**: Save your favorite movies to your personal list and view them dynamically.
- **Analytics Dashboard**: Keep track of your user statistics, including total numbers of favorites, recently viewed movies, and recent search queries.
- **Local Storage Sync**: All your preferences, favorites, and history are saved persistently in your browser using `localStorage`.

## 🚀 Tech Stack

- **HTML5**
- **CSS3** (with [Bootstrap 5.3](https://getbootstrap.com/) for layout structure)
- **Vanilla JavaScript** (ES6+)
- **TMDB API** for retrieving live movie data

## ⚙️ Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/saikrishnareddy-779/FSD-project.git
   ```
2. Navigate to the project directory:
   ```bash
   cd FSD-project
   ```
3. Open `index.html` in your favorite web browser. 
   *(Alternatively, use tools like VS Code Live Server for a smoother development experience).*

> **Note**: This application uses a TMDB API key which is included in the source for demonstration purposes.

## 🗂️ Project Structure

- `index.html` & `script.js` - Main application logic, movie grid, and search/filter implementation.
- `dashboard.html` & `dashboard.js` - User statistics, history tracking, and lists.
- `details.html` & `details.js` - Deeper insights into a single selected movie.
- `style.css` - Custom thematic styling built on top of Bootstrap.
