// import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { TakeGifs } from '../Helpers/takeGifs';

const useFetchGif = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(()=>{
        TakeGifs(category)
        .then(imgs=>{


            // setTimeout(()=>{

                // console.log(imgs)
                
                setState({
                    data: imgs,
                    loading: false  
                }) 
            // }, 3000)

        })
        
    },[category])


    // setTimeout(() => {
    //     setState({
    //         data: [1,2,3,4,45],
    //         loading: false
    //     }) 

    // }, 3000);

    return state; //state acá es el objeto con sus respectivos valores. 
 
}

export default useFetchGif



