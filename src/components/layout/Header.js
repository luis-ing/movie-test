import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Dialog,
    DialogPanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react';
import {
    ArrowTurnDownRightIcon,
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import {
    HomeIcon,
    MagnifyingGlassIcon
} from '@heroicons/react/20/solid'
import { useAuth } from '../../contexts/authContext';

const HeaderComponent = () => {
    const { logout, dataSession } = useAuth();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    console.log("dataSession ", dataSession);

    return (
        <header>
            <nav aria-label="Global" className="mx-auto flex items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <img alt="" src="./Logo-pelis.png" className="h-12 w-auto" />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                        <Link to="/" className="text-sm font-semibold leading-0 flex">
                            <HomeIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                            <div style={{ paddingLeft: 6 }}>Inicio</div>
                        </Link>
                        <Link to="/search" className="text-sm font-semibold leading-0 flex">
                            <MagnifyingGlassIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                            <div style={{ paddingLeft: 6 }}>Búsqueda</div>
                        </Link>
                        <Popover className="relative">
                            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-0 rounded-full">
                                <img className="inline-block h-7 w-7 rounded-full ring-2 ring-white" src={dataSession.user.photoURL ? dataSession.user.photoURL : "./photoPerfil.jpg"} alt="" />
                            </PopoverButton>

                            <PopoverPanel
                                transition
                                className="absolute -right-4 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <div className="p-4">
                                    <div
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-0 hover:bg-gray-50"
                                    >
                                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <ArrowTurnDownRightIcon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-gray-400" />
                                        </div>
                                        <div className="flex-auto">
                                            <button className="block font-semibold text-gray-900" onClick={() => logout()}>
                                                Cerrar sesión
                                                <span className="absolute inset-0" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </PopoverPanel>
                        </Popover>
                    </PopoverGroup>

                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <img
                                alt=""
                                src="https://static-assets.bamgrid.com/product/disneyplus/images/disney-plus-logo-white-update.f384bde4d5a7f1f455e2dc7d8d4348ae.png"
                                className="h-8 w-auto"
                            />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link
                                    to="/"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-700 flex items-center"
                                >
                                    <HomeIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                                    <div style={{ paddingLeft: 6 }}>Inicio</div>
                                </Link>
                                <Link
                                    to="/search"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-700 flex items-center"
                                >
                                    <MagnifyingGlassIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                                    <div style={{ paddingLeft: 6 }}>Búsqueda</div>
                                </Link>
                            </div>
                            <div className="py-6">
                                <Link
                                    onClick={() => logout()}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-700 flex items-center"
                                >
                                    <ArrowTurnDownRightIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                                    <div style={{ paddingLeft: 6 }}>Cerrar sesión</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}

export default HeaderComponent;
