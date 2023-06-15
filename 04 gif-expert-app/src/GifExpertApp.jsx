import React from 'react'
import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['one punch', 'dragon ball', 'one piece'])
    const [categories2, setCategories2] = useState(['one punch2', 'dragon ball2', 'one piece2'])
    const [categories3, setCategories3] = useState(['one punch3', 'dragon ball3', 'one piece3'])
    const [categories4, setCategories4] = useState(['one punch4', 'dragon ball4', 'one piece4'])

    const addCategory = (newCategory) => {
        let existCategory = false;
        categories.forEach(category => {
            if (category.toUpperCase() === newCategory.toUpperCase()) existCategory = true;
        });

        if (existCategory) return;
        setCategories([newCategory, ...categories])
    }    

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                /**setCategories={setCategories} */
                outputCategory={(event) => { addCategory(event) }}
            />
            <br />
            <br />
            {/**  <button onClick={(event)=>{addCategory(event)}}>Agregar</button>*/}

            {
                categories.map(category => {
                    return (
                        <GifGrid inputCategory={category} key={category} />
                        /**
                            <div key={category}>
                            <h3 key={category}>{category}</h3>
                            <li key={category}>{category}</li>
                            </div> 
                        */
                    );
                })
            }
        </>
    )
}
