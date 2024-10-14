import React from 'react'
import Guests from './components/Guests'
import Locations from './components/Locations'

export default function Modal({toggleModal,className}) {
    return (
        <>
            <div className={`fixed w-full h-screen ${className}`}>
                <div className=' p-3 sm:py-5 sm:px-10 fixed bg-gray-50 w-full h-5/6 sm:h-3/4'>
                    <div className='flex justify-between items-center'>
                        <h1 className='font-bold'>Edit your search</h1>
                        <button onClick={toggleModal} className='text-4xl pb-1'>&times;</button>
                    </div>

                    <div className='flex flex-col justify-center mt-3  sm:mt-10 barra_busqueda'>
                        <div className='sm:mx-14'>
                            <div className='grid sm:grid-cols-3 w-full'>
                                <Locations />
                                <Guests />

                                {/* Boton de busqueda escondido */}
                                <div className='hidden sm:block w-full'>
                                    <button onClick={toggleModal} className='border px-7 py-2 rounded-r-2xl bg-red-400 flex items-center gap-2 text-white font-bold h-full w-full'>
                                        <img src='/public/icons/lupawhite.svg' width={21} alt='' />
                                        <span>Search</span>
                                    </button>
                                </div>

                            </div>

                        </div>

                        {/* Boton de busqueda */}
                        <div className='mt-80 justify-center flex sm:hidden'>
                            <button onClick={toggleModal} className='border px-7 py-2 rounded-2xl bg-red-400 flex items-center gap-2 text-white font-bold '>
                                <img src='/public/icons/lupawhite.svg' width={21} alt='' />
                                <span>Search</span>
                            </button>
                        </div>

                    </div>
                </div>
                <div className="h-full bg-black bg-opacity-20"></div>
            </div>
        </>
    )
}
