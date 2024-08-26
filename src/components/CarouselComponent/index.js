import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { HOSTNAME_IMG1280 } from '../../services/api.credentials';

const CarouselComponent = ({ data }) => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                slidesPerView={1.15}
                grabCursor={true}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {data?.map((item) => (
                    <SwiperSlide>
                        <img src={HOSTNAME_IMG1280 + item.backdrop_path} alt={item.title} loading="lazy" />
                        <div className="title" data-swiper-parallax="-300">
                            {item.title}
                        </div>
                        <div className="text" data-swiper-parallax="-100">
                            <p>
                                {item.overview}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default CarouselComponent
