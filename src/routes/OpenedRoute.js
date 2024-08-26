import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';

const OpenedRoute = ({ children }) => {
    const { dataSession } = useAuth()

    if (dataSession) {
        return <Navigate to="/" replace={true} />;
    }

    return children;
}

export default OpenedRoute;