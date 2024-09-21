

export const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=pP6btw60oFTV6qTOoCWcaqm6sOoFf96I&q=${ category }&limit=18`;

    const resp     = await fetch( url );
    const { data } = await resp.json();
    
    // Extraigo como un objeto los datos que quiero de la data
    const gifs = data.map( ( gif ) => {
        return {
            id    : gif.id,
            title : gif.title,
            url   : gif.images.downsized_medium.url,
        }
    });
    console.log(data[0].user);
    return gifs;
};
