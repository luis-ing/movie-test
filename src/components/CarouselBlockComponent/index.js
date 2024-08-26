import React from "react";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import MovieCard from "../MovieCard";

const CarouselBlockComponent = ({ data }) => {
    return (
        <>
            <Swiper
                slidesPerView={5}
                spaceBetween={5}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 2,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 5,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 5,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {data?.map((movie) => (
                    <SwiperSlide key={movie.id} className="swiper-slide-horizontal" style={{ backgroundColor: "rgba(255, 255, 255, 0)", paddingTop: "15px", paddingBottom: "15px" }}>
                        <MovieCard
                            image={movie.poster_path}
                            title={movie.title}
                            year={movie.release_date}
                            genre={movie.media_type}
                            id={movie.id}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default CarouselBlockComponent;
