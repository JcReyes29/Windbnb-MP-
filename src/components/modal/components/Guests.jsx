import React from 'react'

export default function Guests() {
    return (
        <label className='relative bg-white rounded-t-none px-9 py-2 border text-gray-800 rounded-2xl sm:rounded-none  hover:bg-gray-50 w-full flex-wrap gap-2'>
            <span className='font-extrabold'>Guests</span>
            <div>0</div>
            <input type='radio' name='1' className='peer hidden'></input>
            <div className='mt-7 sm:mt-3 absolute bg-gray-50 hidden   peer-checked:block w-auto'>
                <div className='my-8 justify-start grid '>
                    <h2 className='font-bold w-fit'>Adult</h2>
                    <span className='text-gray-500'>Age 13 or above</span>
                    <div className='mt-2 w-fit'>
                        <button className='border border-gray-500 rounded-md px-2 mr-2'>-</button>
                        <span>0</span>
                        <button className='border border-gray-500 rounded-md px-2 ml-2'>+</button>
                    </div>
                </div>
                <div className='my-8 grid justify-start'>
                    <h2 className='font-bold'>Children</h2>
                    <span className='text-gray-500'>Age 2-12</span>
                    <div className='mt-2'>
                        <button className='border border-gray-500 rounded-md px-2 mr-2'>-</button>
                        <span>0</span>
                        <button className='border border-gray-500 rounded-md px-2 ml-2'>+</button>
                    </div>
                </div>

            </div>
        </label>
    )
}
