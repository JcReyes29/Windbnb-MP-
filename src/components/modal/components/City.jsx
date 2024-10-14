import React from 'react'

export default function City({handleClick}) {
    return (
        <>
            <button onClick={handleClick} className='my-6 flex gap-2 hover:bg-gray-100 p-2 rounded'>
                <img src='/public/icons/map.svg' width={21} />
                <h2 className='font-medium'>Helsinki, Finland</h2>
            </button>
            <button onClick={handleClick} className='my-6 flex gap-2 hover:bg-gray-100 p-2 rounded'>
                <img src='/public/icons/map.svg' width={21} />
                <h2 className='font-medium'>Turku, Finland</h2>
            </button>
            <button onClick={handleClick} className='my-6 flex gap-2 hover:bg-gray-100 p-2 rounded'>
                <img src='/public/icons/map.svg' width={21} />
                <h2 className='font-medium'>Vaasa, Finland</h2>
            </button>
            <button onClick={handleClick} className='my-6 flex gap-2 hover:bg-gray-100 p-2 rounded'>
                <img src='/public/icons/map.svg' width={21} />
                <h2 className='font-medium'>Oulu, Finland</h2>
            </button>

        </>

    )
}
