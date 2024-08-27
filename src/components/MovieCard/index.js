import React from "react";
import "./MovieCard.css";
import { Link } from 'react-router-dom';
import { HOSTNAME_IMG500 } from "../../services/api.credentials";

const MovieCard = ({ image, title, year, genre, id }) => {

    return (
        <Link className="movie-card" to={`/detail/${id}/${genre}`}>
            <img src={HOSTNAME_IMG500 + image} alt={title} className="movie-image" loading="lazy" />
            <div className="movie-info">
                <h3 className="movie-title">{title}</h3>
                <p className="movie-year-genre">{year} • {genre}</p>
            </div>
        </Link>
    )
}

export default MovieCard
