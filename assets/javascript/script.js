

// const API_KEY = '9033c1b2b1a8df6282b474400f1a9935';

// brad's key 
//const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
// my key 9033c1b2b1a8df6282b474400f1a9935
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const api = 'https://api.themoviedb.org/3/movie/550?api_key=3fd2be6f0c70a2a598f084ddfb75487'

const form = $('#form')
const search = $('#search')
const main = $('#main')



getMovies(API_URL)


async function getMovies(url){
    const res = await fetch(url)
    const data = await res.json()
    console.log(data.results)
    
}


form.on('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})