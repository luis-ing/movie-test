import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { HOSTNAME_IMG1280 } from '../../services/api.credentials';
import { getDetailMovies } from '../../services/api.services';

const Detail = () => {
    const { id, type } = useParams();
    console.log("type ", type)
    const [dataDetail, setDataDetail] = useState({});

    const getDetail = async () => {
        const response = await getDetailMovies(id, type);
        setDataDetail(response);
    }

    useEffect(() => {
        getDetail();
    }, []);

    return (
        <div className="relative w-full h-screen">
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url('${HOSTNAME_IMG1280 + (dataDetail?.backdrop_path ? dataDetail?.backdrop_path : dataDetail?.profile_path)}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
            </div>

            <div className="relative z-10 flex flex-col justify-center h-full p-8 text-white">
                <h1 className="text-6xl font-bold mb-4">{dataDetail?.title ? dataDetail?.title : dataDetail?.name}</h1>
                {!dataDetail?.name &&
                    <div className="flex items-center mb-4">
                        <span className="mr-4">16+</span>
                        <span className="mr-4">HD</span>
                        <span className="mr-4">CC</span>
                        <span>Calificación: {dataDetail?.vote_average}</span>
                    </div>}
                <p className="text-xl mb-8">
                    {dataDetail?.overview}
                </p>
                <p className="text-xl mb-8">
                    {dataDetail?.tagline}
                </p>
                <p className="text-xl mb-8">
                    {dataDetail?.known_for_department}
                </p>
                <p className="text-xl mb-8">
                    {dataDetail?.place_of_birth}
                </p>
                <p className="text-xl mb-8">
                    {dataDetail?.biography}
                </p>
                {!dataDetail?.name &&
                    <div className="flex space-x-4">
                        <button className="px-6 py-2 bg-white text-black rounded-lg">VER AHORA</button>
                        <button className="px-6 py-2 bg-gray-700 rounded-lg">TRÁILER</button>
                        <button className="px-4 py-2 bg-gray-700 rounded-lg">+</button>
                    </div>}
            </div>
        </div>
    )
}

export default Detail;
