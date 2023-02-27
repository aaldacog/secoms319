
async function fetchMovies() {
    const resp = await fetch("07_1_20_Callback_Functions_6_async_movies.json");
    const moviesArray = await resp.json();
    loadMovies(moviesArray);
    console.log("Just loaded and showed movies.");
}

function loadMovies(myMovies) {
    var mainContainer = document.getElementById("goodmovies");

    for (var i = 0; i<myMovies.movies.length; i++){
        let title = myMovies.movies[i].title;
        let year = myMovies.movies[i].year;
        let url = myMovies.movies[i].url;

        let div = document.createElement("div");
        div.innerHTML = `
        <h3>${title}</h3>
        ${year} <br>
        <img src=${url} width="200">  <br> <br>
        `; 
        mainContainer.appendChild(div);
    }
}

// FIRST - We run fetchMovies <- We expect to see its message
fetchMovies();

// SECOND - We show this message to console
console.log("After showing movies Web page.")