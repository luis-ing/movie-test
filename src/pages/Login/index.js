import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../../contexts/authContext";
import { InputComponent, TabComponent, TabLayoutComponent } from "../../components";

const Login = () => {
    const { login, register, loginWithGoogle } = useAuth();
    const [selectedTab, setSelectedTab] = useState(0);
    const [dataLogin, setDataLogin] = useState({
        email: "",
        pass: "",
        error: false,
        message: ""
    });
    const [dataRegister, setDataRegister] = useState({
        email: "",
        pass: "",
        error: false,
        message: "",
        succes: false
    });

    const onChangeValue = (e) => {
        const { name, value } = e.target;
        setDataLogin((e) => ({ ...e, [name]: value }))
    }

    const onChangeValueRegister = (e) => {
        const { name, value } = e.target;
        setDataRegister((e) => ({ ...e, [name]: value }))
    }

    const LoginFunction = async (e) => {
        e.preventDefault();
        setDataLogin((e) => ({ ...e, error: false, message: "" }))
        const response = await login(dataLogin.email, dataLogin.pass);
        if (response?.error) {
            setDataLogin((e) => ({ ...e, error: true, message: response.error }))
        }
    }

    const LoginWithGoogle = async () => {
        const response = await loginWithGoogle();
        console.log("response ", response);
    }

    const RegisterFunction = async (e) => {
        e.preventDefault();
        setDataRegister((e) => ({ ...e, error: false, succes: false, message: "" }))
        const response = await register(dataRegister.email, dataRegister.pass);
        console.log("Register ", response);
        if (response.error) {
            setDataRegister((e) => ({ ...e, error: true, succes: false, message: response.message }));
            return
        }
        setDataRegister((e) => ({ ...e, error: false, succes: true, message: "Usuario registrado correctamente" }))
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

            <div className="sm:mx-auto mt-10 sm:w-full sm:max-w-sm pb-6">
                <img
                    alt="Your Company"
                    src="./Logo-pelis.png"
                    className="mx-auto h-14 w-auto"
                />
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <TabLayoutComponent>
                    <TabComponent onClick={() => setSelectedTab(0)} isSelected={selectedTab === 0}>
                        Iniciar sesión
                    </TabComponent>
                    <TabComponent onClick={() => setSelectedTab(1)} isSelected={selectedTab === 1}>
                        Registrarse
                    </TabComponent>
                </TabLayoutComponent>

                <AnimatePresence mode="wait">

                    <motion.div
                        key={selectedTab}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {selectedTab === 0 ?
                            <form className="space-y-6" onSubmit={LoginFunction}>

                                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                    <h2 className="mt-10 mb-8 text-center text-2xl font-bold leading-9 tracking-tight">
                                        Iniciar sesión
                                    </h2>
                                </div>

                                <InputComponent
                                    label="Correo electrónico"
                                    name="email"
                                    type="email"
                                    value={dataLogin.name}
                                    onChange={onChangeValue}
                                    required
                                />
                                <InputComponent
                                    label="Contraseña"
                                    name="pass"
                                    type="password"
                                    value={dataLogin.pass}
                                    onChange={onChangeValue}
                                    required
                                />
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Entrar
                                </button>
                                <button
                                    type="button"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={LoginWithGoogle}
                                >
                                    Iniciar con Google
                                </button>
                                {dataLogin.error &&
                                    <div>
                                        <p class="mt-6 text-base leading-7 text-red-600">
                                            {dataLogin.message}
                                        </p>
                                    </div>}
                            </form>
                            :
                            <form className="space-y-6" onSubmit={RegisterFunction}>

                                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                    <h2 className="mt-10 mb-8 text-center text-2xl font-bold leading-9 tracking-tight">
                                        Registrarse
                                    </h2>
                                </div>

                                <InputComponent
                                    label="Correo electrónico"
                                    name="email"
                                    type="email"
                                    value={dataRegister.name}
                                    onChange={onChangeValueRegister}
                                    required
                                />
                                <InputComponent
                                    label="Contraseña"
                                    name="pass"
                                    type="password"
                                    value={dataRegister.pass}
                                    onChange={onChangeValueRegister}
                                    required
                                />
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Registrarse
                                </button>
                                {dataRegister.error &&
                                    <div>
                                        <p class="mt-6 text-base leading-7 text-red-600">
                                            {dataRegister.message}
                                        </p>
                                    </div>}
                                {dataRegister.succes &&
                                    <div>
                                        <p class="mt-6 text-base leading-7 text-green-600">
                                            {dataRegister.message}
                                        </p>
                                    </div>}

                            </form>
                        }
                    </motion.div>
                </AnimatePresence>

            </div>


        </div>
    )
}

export default Login;
