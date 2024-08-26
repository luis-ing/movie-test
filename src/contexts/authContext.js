import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { auth } from "../firebaseConfig";

export const authContext = createContext();

export function AuthProvider({ children }) {
    const [dataSession, setDataSession] = useState(() => {
        const sessionData = localStorage.getItem("authSession");
        return sessionData ? JSON.parse(sessionData) : null;
    });

    const register = async ({ email, password }) => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log("response register ", response);
        } catch (error) {
            console.log("Error al registrar ", error);
        }
    }

    const login = async ({ email, password }) => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log("response login ", response);
        } catch (error) {
            console.log("Error al login ", error);
        }
    }

    const loginWithGoogle = async () => {
        try {
            const responseGoogle = new GoogleAuthProvider();
            const dataResponse = await signInWithPopup(auth, responseGoogle);
            localStorage.setItem("authSession", JSON.stringify(dataResponse));
            setDataSession(dataResponse);
            return dataResponse;
        } catch (error) {
            console.log("Error en loginGoogle ", error);
        }
    }

    const logout = async () => {
        const response = await signOut(auth);
        console.log("Cerrar sesión", response)
        localStorage.removeItem("authSession");
        setDataSession(null);
    }

    useEffect(() => {
        const suscribed = onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser) {
                setDataSession(null);
            }
        });
        return () => suscribed();
    }, [])

    return (
        <authContext.Provider
            value={{
                register,
                login,
                loginWithGoogle,
                signOut,
                logout,
                dataSession
            }}
        >
            {children}
        </authContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) {
        console.log("Error al crear context");
    }

    return context;
};