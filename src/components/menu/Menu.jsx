import React, { useEffect, useState } from 'react'
import Card from '../cards/Card'
import axios from 'axios'

export default function Menu() {
    const [photos, setPhotos] = useState([])
    useEffect(() => {
        axios.get('/public/api/api.json')
            .then(response => {
                setPhotos(response.data)
            })
    },[])
    
    return (
        <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 sm:gap-5 lg:gap-10'>
            {
                photos.map(todo => <Card key={todo.title} todo={todo} />)
            }
        </div>
    )
}
