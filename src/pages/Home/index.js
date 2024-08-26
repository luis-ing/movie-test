import React, { useEffect, useState } from 'react';
import { CarouselComponent } from '../../components';
import { getTrendingMovies } from '../../services/api.services';

const Home = () => {
    const [trendringMovies, setTrendringMovies] = useState({});

    const getTrendingMoviesServices = async () => {
        const response = await getTrendingMovies();
        setTrendringMovies(response);
    }

    useEffect(() => {
        getTrendingMoviesServices();
    }, [])

    return (
        <div>
            <div style={{ height: "55vh" }}>
                <CarouselComponent data={trendringMovies.results} />
            </div>
        </div>
    )
}

export default Home;
