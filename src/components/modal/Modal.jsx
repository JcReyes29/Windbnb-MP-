import React, { useState } from 'react'
import City from './components/City'

export default function Modal({ toggleModal, className, searchData }) {
    const [locationSelect, setLocationSelect] = useState('Whole, Finland');
    const [counterAdult, setCounterAdult] = useState(0)
    const [counterChildren, setCounterChildren] = useState(0)


    // Funciones para el contador de huespedes
    function aumentar() {
        setCounterAdult(counterAdult + 1);
    }
    function disminuir() {
        setCounterAdult(counterAdult - 1);
    }
    function add() {
        setCounterChildren(counterChildren + 1)
    }
    function subtract() {
        setCounterChildren(counterChildren - 1)
    }

    const handleClick = (event) => {
        // Obtener el texto de ciudad de la etiqueta clicada
        const text = event.target.innerText;
        setLocationSelect(text);
    }

    const searchDataButton = () => {
        const searchUpdate = {
            lugar: locationSelect,
            huespedes: counterAdult +
                counterChildren,
        };
        searchData(searchUpdate);

    }

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
                                {/* Selección de ciudad */}
                                <label className='relative w-full bg-white rounded-b-none px-9 py-2 border text-gray-800 rounded-2xl sm:rounded-l-2xl sm:rounded-r-none hover:bg-gray-50'>
                                    <span className='font-extrabold'>Location</span>
                                    <div>{locationSelect}</div>
                                    <input type='radio' name='1' className='peer hidden'></input>
                                    <div className='mt-24 sm:mt-4 absolute bg-transparent hidden peer-checked:block w-auto'>
                                        <City handleClick={handleClick} />
                                    </div>
                                </label>
                                {/* Contador de huespedes */}
                                <label className='relative bg-white rounded-t-none px-9 py-2 border text-gray-800 rounded-2xl sm:rounded-none  hover:bg-gray-50 w-full flex-wrap gap-2'>
                                    <span className='font-extrabold'>Guests</span>
                                    <div>{counterAdult + counterChildren}</div>
                                    <input type='radio' name='1' className='peer hidden'></input>
                                    <div className='mt-7 sm:mt-3 absolute bg-gray-50 hidden   peer-checked:block w-auto'>
                                        <div className='my-8 justify-start grid '>
                                            <h2 className='font-bold w-fit'>Adult</h2>
                                            <span className='text-gray-500'>Age 13 or above</span>
                                            <div className='mt-2 w-fit'>
                                                <button onClick={disminuir} className='border border-gray-500 rounded-md px-2 mr-2'>-</button>
                                                <span>{counterAdult}</span>
                                                <button onClick={aumentar} className='border border-gray-500 rounded-md px-2 ml-2'>+</button>
                                            </div>
                                        </div>
                                        <div className='my-8 grid justify-start'>
                                            <h2 className='font-bold'>Children</h2>
                                            <span className='text-gray-500'>Age 2-12</span>
                                            <div className='mt-2'>
                                                <button onClick={subtract} className='border border-gray-500 rounded-md px-2 mr-2'>-</button>
                                                <span>{counterChildren}</span>
                                                <button onClick={add} className='border border-gray-500 rounded-md px-2 ml-2'>+</button>
                                            </div>
                                        </div>

                                    </div>
                                </label>

                                {/* Boton de busqueda escondido */}
                                <div className='hidden sm:block w-full'>
                                    <button onClick={(toggleModal, searchDataButton)} className='border px-7 py-2 rounded-r-2xl bg-red-400 flex items-center gap-2 text-white font-bold h-full w-full'>
                                        <img src='/public/icons/lupawhite.svg' width={21} alt='' />
                                        <span>Search</span>
                                    </button>
                                </div>

                            </div>

                        </div>

                        {/* Boton de busqueda */}
                        <div className='mt-80 justify-center flex sm:hidden'>
                            <button onClick={(toggleModal, searchDataButton)}className='border px-7 py-2 rounded-2xl bg-red-400 flex items-center gap-2 text-white font-bold '>
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
