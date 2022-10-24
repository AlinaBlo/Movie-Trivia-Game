prefix = "https://images-na.ssl-images-amazon.com/images/M";
function init() {
    posterArr = [];
    for (var i = 0; i < posters.length; i++) {
        posterArr[posters[i].imdbId] = posters[i].Poster;
    }
    handleData(movies, posterArr);
}

function handleData(movies, posterArr) {
    str = "";
    for (var i = 0; i < movies.length; i++) {
        if (movies[i].imdb_title_id[2] == 0) {
            var id = movies[i].imdb_title_id.substring(3, movies[i].imdb_title_id.length);
        }
        else {
            var id = movies[i].imdb_title_id.substring(2, movies[i].imdb_title_id.length);
        }
        movies[i].poster_path = prefix + posterArr[id];
    }
}