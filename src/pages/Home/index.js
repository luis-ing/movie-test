import React, { useEffect, useState, useMemo } from 'react';
import { CarouselBlockComponent, CarouselComponent } from '../../components';
import { getTrendingAll } from '../../services/api.services';

const Home = () => {
    const [trendringMovies, setTrendringMovies] = useState({});

    const getTrendingMoviesServices = async () => {
        const response = await getTrendingAll();
        setTrendringMovies(response);
    }

    useEffect(() => {
        getTrendingMoviesServices();
    }, []);

    const moviesToRenderTrending = useMemo(() => {
        return trendringMovies || [];
    }, [trendringMovies]);

    return (
        <div>
            <div className="height-carousel">
                <CarouselComponent data={moviesToRenderTrending.results} />
            </div>
            <div style={{ minHeight: "20vh", padding: "40px" }}>
                <CarouselBlockComponent data={moviesToRenderTrending.results} />
            </div>
        </div>
    )
}

export default Home;
