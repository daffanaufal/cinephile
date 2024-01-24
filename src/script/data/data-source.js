class DataSource {
    static searchMovie(keyword) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=f4cad3ca5afa8146ae803714adbf265b&query=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`${keyword} is not found`);
                }
            });
    }

    static getPopularMovies() {
        // Ganti API endpoint dan key sesuai dengan API TMDB untuk mendapatkan film populer
        return fetch('https://api.themoviedb.org/3/movie/popular?api_key=f4cad3ca5afa8146ae803714adbf265b')
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson);
                } else {
                    return Promise.reject('Failed to get popular movies');
                }
            });
    }
}

export default DataSource;
