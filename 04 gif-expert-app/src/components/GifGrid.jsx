import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem'

export const GifGrid = ({ inputCategory }) => {

    const {images, isLoading} = useFetchGifs(inputCategory);

    /**
    const [images, setImages] = useState([])
    const getImages = async () => {
        const newImages = await getGifs(inputCategory);
        setImages(newImages);
    }

    useEffect(() => {
        getImages();
    }, [])
    */
    return (
        <>
            {/** <div key={inputCategory}>{inputCategory}</div> */}
            {
                isLoading && (<h2>Cargando....</h2>)
            }
            <div className='card-grid'>
                {
                    images.map(img => {
                        return <GifItem gif={img} key={img.id} />
                    })
                }
            </div>

        </>
    )
}
