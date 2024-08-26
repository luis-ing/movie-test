import { API_URL, API_KEY_AUTH } from "./api.credentials";

const getSearch = (param) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY_AUTH}`
        }
    };
    return fetch(`${API_URL}/3/search/multi?query=${param}&include_adult=false&language=en-US&page=1`, options)
        .then(res => res.json())
        .then(json => json)
        .catch(err => console.error('error:' + err));
}

const getTrendingAll = () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY_AUTH}`
        }
    };
    return fetch(`${API_URL}/3/trending/all/week?language=en-US`, options)
        .then(res => res.json())
        .then(json => json)
        .catch(err => console.error('error:' + err));
}

const getTrendingMovies = () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY_AUTH}`
        }
    };
    return fetch(`${API_URL}/3/trending/movie/week?language=en-US`, options)
        .then(res => res.json())
        .then(json => json)
        .catch(err => console.error('error:' + err));
}

export {
    getSearch,
    getTrendingAll,
    getTrendingMovies,
}