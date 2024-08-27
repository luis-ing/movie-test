import React, { useEffect, useState, useMemo } from 'react'
import { getSearch, getTrendingAll } from '../../services/api.services';
import MovieCard from '../../components/MovieCard';

const Search = () => {
    const [wordToSearch, setWordToSearch] = useState("");
    const [movies, setMovies] = useState({});
    const [trendringMovies, setTrendringMovies] = useState({});

    const getDataToSearch = async (data) => {
        const response = await getSearch(data);
        console.log("seacrh ", response);
        setMovies(response);
    }

    const getTrendingMoviesServices = async () => {
        const response = await getTrendingAll();
        setTrendringMovies(response);
    }


    useEffect(() => {
        if (wordToSearch.length > 0) {
            getDataToSearch(wordToSearch);
        }
    }, [wordToSearch]);

    useEffect(() => {
        getTrendingMoviesServices();
    }, []);

    const moviesToRender = useMemo(() => {
        if (wordToSearch.length > 0) {
            return movies || [];
        } else {
            return trendringMovies || [];
        }
    }, [wordToSearch, movies, trendringMovies]);

    return (
        <div>
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <input
                    type="text"
                    name="search"
                    value={wordToSearch}
                    onChange={(e) => setWordToSearch(e.target.value)}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Buscar película, serie de TV o persona"
                    autoComplete='off'
                    style={{
                        height: "100px",
                        width: "100%",
                        background: "#4B4E5A",
                        border: "none",
                        paddingLeft: "2rem",
                        paddingRight: "2rem",
                        fontSize: "44px",
                        fontWeight: 600
                    }}
                />
            </div>
            {wordToSearch.length === 0 &&
                <div className="flex min-h-full flex-1">
                    <h1 class="m-8 text-3xl font-bold tracking-tight sm:text-5xl" style={{ width: "100%" }}>Popular</h1>
                </div>
            }
            {moviesToRender.length > 0 &&
                <div className='flex min-h-full flex-1'>
                    <button className='bg-white text-black'>Siguiente</button>
                </div>
            }
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                    gap: "16px",
                    padding: "20px 40px"
                }}
            >
                {moviesToRender.length > 0 ?
                    movies?.results?.map((movie, index) => (
                        <MovieCard
                            key={index}
                            image={movie.poster_path ? movie.poster_path : movie.profile_path}
                            title={movie.title ? movie.title : movie.original_name}
                            year={movie.release_date}
                            genre={movie.media_type}
                            id={movie.id}
                        />
                    )) :
                    moviesToRender?.results?.map((movie, index) => (
                        <MovieCard
                            key={index}
                            image={movie.poster_path ? movie.poster_path : movie.profile_path}
                            title={movie.title ? movie.title : movie.original_name}
                            year={movie.release_date}
                            genre={movie.media_type}
                            id={movie.id}
                        />
                    ))
                }
            </div>
        </div >
    )
}

export default Search;
