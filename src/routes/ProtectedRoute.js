import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';

const ProtectedRoute = ({ children }) => {
    const { dataSession } = useAuth();

    if (!dataSession) {
        return <Navigate to="/login" replace={true} />;
    }

    return children;
}

export default ProtectedRoute;