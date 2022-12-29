const movies = require('./somefile.json')
const services = require('./services')

export function fetchMovies(){
    const resolveFunction = () => movies;
    return services.fetchWithTimeout(1000).then(resolveFunction)
}

const moviePromise = fetchMovies();
moviePromise.then((results)=>{
    console.log(results);
})
