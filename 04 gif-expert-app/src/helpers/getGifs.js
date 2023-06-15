export const getGifs = async (category) => {
    let url = `https://api.giphy.com/v1/gifs/search?api_key=nwSX7oOIToFF93m8pFytlL98k9slzuBX&q=${category}&limit=20`
    const rpta = await fetch(url);
    const { data } = await rpta.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    //console.log(gifs);
    return gifs;
}