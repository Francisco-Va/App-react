import React from 'react'
import { useState } from 'react'

const AddCategory = ({setcategories}) => {
    const [valuer, setValue] = useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()

        if(valuer.trim().length > 2){
            setcategories(item=>[valuer, ...item])
            setValue("")
          }
    }

    const handleOnchange=(e)=>{
        setValue(e.target.value)
    }

  return (
    <div>
        <form onSubmit={handleSubmit} action="">
        <input 
        type="text"
        value={valuer}
        onChange={handleOnchange}
        placeholder="Text here"
        
        />
        </form>
    </div>
  )
}

export default AddCategory

