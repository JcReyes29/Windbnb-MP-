import React, { useState } from 'react'
import City from './City'

export default function Locations() {
    const [locationSelect, setLocationSelect] = useState('Whole, Finland');

    const handleClick = (event) => {
        // Obtener el texto de la etiqueta clicada
        const text = event.target.innerText;
        setLocationSelect(text);
    }
    return (
        <label className='relative w-full bg-white rounded-b-none px-9 py-2 border text-gray-800 rounded-2xl sm:rounded-l-2xl sm:rounded-r-none hover:bg-gray-50'>
            <span className='font-extrabold'>Location</span>
            <div>{locationSelect}</div>
            <input type='radio' name='1' className='peer hidden'></input>
            <div className='mt-24 sm:mt-4 absolute bg-transparent hidden peer-checked:block w-auto'>
                <City handleClick={handleClick}/>
            </div>
        </label>





    )
}
