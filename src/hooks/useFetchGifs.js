import { useState, useEffect } from 'react';
import { GetGifs } from '../funciones/getGif';

export const useFetchGifs = ( category ) =>{

    const [state, setstate] = useState({
        data: [],
        loading  : true
    })


    useEffect(()=>{

        GetGifs( category )
        .then( img =>{
            
                setstate({
                    data: img,
                    loading: false
                })

        })

    },[category])


    return state;
}