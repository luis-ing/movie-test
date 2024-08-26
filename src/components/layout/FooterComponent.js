import React from 'react'

const FooterComponent = () => {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto mt-10 sm:w-full sm:max-w-sm pb-6">
                <img
                    alt="Contpaqi"
                    src="./Logo-pelis.png"
                    className="mx-auto h-14 w-auto"
                />
            </div>
            <div className="sm:mx-auto sm:w-full md:max-w-md pb-6" style={{ fontSize: "15px" }}>
                El servicio Contpaqi+ es comercializado por Contpaqi (MEXICO), 1917, Sin Nombre de Col 34, Av. José Alvarado, Jardín Español, Monterrey, N.L.
            </div>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm pb-6" style={{ fontSize: "14px", textAlign: "center" }}>
                © Contpaqi. Todos los derechos reservados.
            </div>
        </div>
    )
}

export default FooterComponent;
