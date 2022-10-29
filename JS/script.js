const APIKEY = '8df6a2c90857066608d64708f59e05e7'
const BASEURL = 'https://api.themoviedb.org/3/'







methods: {
    getPopular(){
        const URL = '${BASEURL}/discover/movie?sort_by=popularity.desc&api_key=${APIKEY}'
        fetch(URL)
        .then(Response)
    }
} 
