// se le da el export, se envía la categoría como argumento y se retorna el gifs al final

export const TakeGifs = async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category)}&limit=10&api_key=QHKtNOrYyPaGoKzwKcZFzRn66TmNfw6U`

    const resp = await fetch(url)

    const {data} = await resp.json()


// De todos los datos arrojados los que me interesan son estos, de ahí el acomodo. 
    const gifs = data.map(img =>{
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    // console.log(data)
    // console.log(gifs)
    return gifs;  
}