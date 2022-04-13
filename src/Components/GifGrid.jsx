import React from 'react'
import useFetchGif from '../Hooks/useFetchGif'
// import { useEffect } from 'react'
// import { useState } from 'react'
// import { TakeGifs } from '../Helpers/takeGifs'
import GifItem from './GifItem'

// category se inserta en el url
// Para ayudarle a la url, le colocamos encodeURI y en los parétesis el elemento. Y justo después de esto podemos realizar diferentes solitides a la api con diferente contenido. 
// En el GiftExpertApp pocisionas de manera tal que la búsqueda se incruste de primero en dom, simplemete se cambia en el valuer primero
const GifGrid = ({category}) => {

   const {data:images, loading } = useFetchGif(category)

//    console.log(data)
//    console.log(loading)

    // const [images, setimages] = useState([])

    // useEffect(()=>{
    //     // takeGifs();
    //     // como esto retorna una promesa podemos colocar un then. 
    //     TakeGifs(category).then(setimages)
    // },[category]) //si la categoría cambia entonces volverá a aplicar este efecto

   

    // takeGifs()

  return (
      <>
        <h2 className='animate__wobble'>{category} </h2>



        {loading && <p className='animate__shakeY'>Cargando</p> }
    <div className='card-grid '>
            {
                images.map(img =>(

                    <GifItem 
                    key={img.id}
                    {...img}></GifItem>
                //  <li key={img.id}>{img.title}</li>
                // Acá se importa GifItem para renderizar los elementos de la api, se le envía desestrcurada la información a GifItem

                ))
            }
    </div>
    </>
  )
}

export default GifGrid

// Primero es importar este elemento en GiftExpertApp, luego pasarnos el elemento en este caso category desestructurado. La consulta con fetch

