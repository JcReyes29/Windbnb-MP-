import React, { useEffect, useState } from 'react'
import Card from '../cards/Card'
import axios from 'axios'

export default function Menu({ dataUpdate }) {
    const [photos, setPhotos] = useState([])
    useEffect(() => {
        axios.get('/public/api/api.json')
            .then(response => {
                setPhotos(response.data)
            })
    }, [])

    const clasificacion = photos.filter(el => {
        const lugar = dataUpdate.lugar.trim() !== '';
        const invitados = dataUpdate.huespedes;

        const seleccionLugares = lugar ? (() => {
            const [ciudad, pais] = dataUpdate.lugar.split(',').map(part => part.trim());
            return ((el.city.toLowerCase() === ciudad.toLowerCase() && el.country.toLowerCase() === pais.toLowerCase()) || (ciudad === 'Whole')

            );
        })() : true;

        const invitadosTotal = invitados === 0 || (el.maxGuests || 0) >= invitados;
        return seleccionLugares &&
            invitadosTotal;
    });


    return (
        <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 sm:gap-5 lg:gap-10'>
            {
                clasificacion.map(todo => <Card key={todo.title} todo={todo} />)
            }
        </div>
    )
}
