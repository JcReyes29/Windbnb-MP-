import React from 'react'
import City from './City'

export default function Locations() {
    return (
            <label className='relative w-full bg-white rounded-b-none px-9 py-2 border text-gray-800 rounded-2xl sm:rounded-l-2xl sm:rounded-r-none hover:bg-gray-50'>
                <span className='font-extrabold'>Location</span>
                <div>Whole,Finland</div>
                <input type='radio' name='1' className='peer hidden'></input>
                <div className='mt-24 sm:mt-4 absolute bg-gray-50 hidden peer-checked:block w-auto'>
                    <City />
                    <City />
                    <City />
                    <City />
                </div>
            </label>



        

    )
}
