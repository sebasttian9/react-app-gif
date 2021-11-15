import React, {} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';

export const GifGrid = ( { category } ) => {

    const {data:images,loading} = useFetchGifs( category );
    

    return (
        <>
        <h3 className='card animate__animated animate__fadeInLeft'>{category}</h3>
        { loading && <p className='card animate__animated animate__flash'>Loading</p>}
        <div className='card-grid'>
           
            {
                images.map(g =>
                    (
                       <GifGridItem 
                             key={g.id} 
                             { ...g }
                        />
                    )
                )
            }
            
        </div>
        </>
    )
}
