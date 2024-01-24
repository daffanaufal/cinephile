import './movie-item.js';
import DataSource from '../data/data-source.js';
import '../../styles/main.css'

class MovieList extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        try {
            const popularMovies = await DataSource.getPopularMovies();
            this.movies = popularMovies.results.slice(0, 4); // Ambil 4 film pertama
        } catch (error) {
            this.renderError(error.message);
        }
    }

    set movies(movies) {
        this._movies = movies;
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                movie-list {
                    width: 100%;
                    display: flex;
                    justify-content: space-around; /* Adjust as needed */
                    flex-wrap: wrap;
                }
            </style>`;
        this._movies.forEach(movie => {
            const movieItemElement = document.createElement("movie-item");
            movieItemElement.movie = movie;
            this.appendChild(movieItemElement);
        });
    }
    

    renderError(message) {
        this.innerHTML = "";
        this.innerHTML += `<h2 class="placeholder text-center">${message}</h2>`;
    }
}

customElements.define("movie-list", MovieList);
