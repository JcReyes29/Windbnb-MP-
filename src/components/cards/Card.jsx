import React from 'react'
import './Card.css'

export default function Card({ todo: { photo, title, rating, type, beds, superHost } }) {
    return (
        <div>
            <div className='h-auto sm:h-44 md:h-36 lg:h-48 xl:h-64 2xl:h-72 overflow-hidden flex items-center rounded-xl'>
                <img className='h-auto' src={photo} alt='' />
            </div>
            <div className='flex justify-between my-2'>
                <div>
                    <span className={`${superHost === false ? 'hidden' : 'superHost'}`}>SUPER HOST</span>
                    <span className='font-medium text-gray-500'>{type}. {beds} beds</span>
                </div>
                <div className='flex items-center gap-3'>
                    <img src='/public/icons/star.svg' alt='star image' width={21} />
                    <span>{rating}</span>
                </div>
            </div>
            <div className='font-semibold'>{title}</div>
        </div>
    )
}
