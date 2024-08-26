import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Search, Movies, Login } from "../pages";
import { FooterComponent, HeaderComponent } from "../components";
import ProtectedRoute from "./ProtectedRoute";
import OpenedRoute from "./OpenedRoute";
import { useAuth } from "../contexts/authContext";

const AppRoutes = () => {
    const { dataSession } = useAuth()

    return (
        <Router>
            {dataSession && <HeaderComponent />}
            <Routes>
                <Route path="/login" element={
                    <OpenedRoute>
                        <Login />
                    </OpenedRoute>
                } />
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/search"
                    element={
                        <ProtectedRoute>
                            <Search />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/movies"
                    element={
                        <ProtectedRoute>
                            <Movies />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/series"
                    element={
                        <ProtectedRoute>
                            <Movies />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/detail/:id"
                    element={
                        <ProtectedRoute>
                            <Movies />
                        </ProtectedRoute>
                    }
                />
            </Routes>
            <FooterComponent />
        </Router>
    )
};

export default AppRoutes;