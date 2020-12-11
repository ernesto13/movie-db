$(document).ready(function(){

const API_KEY = '9033c1b2b1a8df6282b474400f1a9935';

fetch(`https://api.themoviedb.org/3/movie/550?api_key=API_KEY`)
.then(response => response.json())
.then(data => console.log(data));

});


