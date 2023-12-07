// "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

//  "https://image.tmdb.org/t/p/w1280";

// "https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query=";
const container = document.getElementById("whole")

const getmoviedata = async (api) => {
    const response = await fetch(api);
    const data = await response.json()
    console.log(data)
    showmovies(data.results)
};

getmoviedata("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1")

const showmovies = (data) => {

    container.innerHTML = "";

    for (let movie of data) {
        const innerbox = document.createElement("div");
        innerbox.classList.add("box");

        const image = document.createElement("img");
        image.classList.add("image");
        image.src = "https://image.tmdb.org/t/p/w1280" + movie.poster_path;
        innerbox.appendChild(image);

        const model = document.createElement("div");
        model.classList.add("overlay");

        const title = document.createElement("h3")
        title.classList.add("title")
        title.textContent = movie.original_title
        model.appendChild(title)

        const Overview = document.createElement("h4")
        Overview.classList.add("overview")
        Overview.textContent = "Overview"
        model.appendChild(Overview)

        const ratingContainer = document.createElement("div");
        ratingContainer.classList.add("rating-container");

        const rating = document.createElement("span");
        rating.classList.add("Points");
        rating.innerHTML = movie.vote_average;
        ratingContainer.appendChild(rating);

        model.appendChild(ratingContainer);

        const overview_value = document.createElement("p")
        overview_value.classList.add("value")
        overview_value.textContent = movie.overview
        model.appendChild(overview_value)

        innerbox.appendChild(model)

        container.appendChild(innerbox);
    }
};
document.querySelector("#inbox").addEventListener("keyup",function(event){
    if (event.target.value != "") {
        getmoviedata("https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query=" + event.target.value)
    }else{
        getmoviedata("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1")
    }
})



