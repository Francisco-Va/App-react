import React from 'react'

const GifItem = ({id, title, url}) => {
    // console.log(id, title, url);
  return (
    <div className='animate__animated animate__bounce animate__backInDown'>

        <img src={url} alt={title} />
        <p>{title}</p>
        {/* {img.title} */}


    </div>
  )
}

export default GifItem