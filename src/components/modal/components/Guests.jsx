import React, { useState } from 'react'

export default function Guests() {
    const [counterAdult, setCounterAdult] = useState(0)
    const [counterChildren, setCounterChildren] = useState(0)
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

    return (
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
    )
}
