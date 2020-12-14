$(document).ready(function(){

const API_KEY = '9033c1b2b1a8df6282b474400f1a9935';
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=API_KEY&query"`
const IMG_PATH = `https://image.tmdb.org/t/p/w1280`;
fetch(`https://api.themoviedb.org/3/movie/550?api_key=API_KEY`)
.then(response => response.json())
.then(data => console.log(data));

});


