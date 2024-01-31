import './movie-item.js';
import DataSource from '../../data/data-source';

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
                movie-item {
                    margin-bottom: 100px;
                    flex: 0 0 calc(25% - 20px); /* Adjust the width as needed */
                }
            </style>
            `;
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
