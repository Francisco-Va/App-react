import React from 'react'
import { useState } from 'react'
import AddCategory from './Components/AddCategory'
import GifGrid from './Components/GifGrid'

const GiftExpertApp = () => {
    const [categories, setcategories] = useState(["Randall"])


    // const handleAdd =()=>{
    //     setcategories(sagua=>[...sagua, "Puro"])
    // }

  return (
    <div>
        <h1>Perro de agua</h1>
        <AddCategory setcategories={setcategories}></AddCategory>
        {/* <button onClick={handleAdd}>Add</button> */}
        <ol>
            {
                categories.map(category=>(
                    <GifGrid 
                    key={category}
                    category={category}
                    
                    ></GifGrid>
                    // como la renderización ahora no serán los elementos del input sino los traidos por la api, traemos acá el GidGrif
                    ) )
            }
        </ol>
    </div>
  )
}

export default GiftExpertApp