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

    const register = async (email, password) => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            const user = response.user;
            return { error: false, message: "Usuario registrado correctamente", user: user };
        } catch (error) {
            console.log("auiiii ", error)
            if (error.message == "Firebase: Password should be at least 6 characters (auth/weak-password).") {
                return { error: true, message: "La contraseña debe tener al menos 6 caracteres." }
            } else if (error.message == "Firebase: Error (auth/email-already-in-use).") {
                return { error: true, message: "El correo que intenta registrar, ya se encuentra en uso." }
            } else {

                return { error: true, message: error.message }
            }
        }
    }

    const login = async (email, password) => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            localStorage.setItem("authSession", JSON.stringify(response));
            setDataSession(response);
        } catch (error) {
            return { error: "Credenciales invalidas o usuario no registrado." }
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