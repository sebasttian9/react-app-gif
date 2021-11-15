import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


const GifExprtApp = () => {

    // const categories = ['One Punch','Samurai X','Dragon Ball'];
    const [categories, setcategories] = useState(['Dragon Ball'])

    const handleAdd = () => {

        // setcategories([...categories,'Paula']);
        setcategories( cats => [...cats,'Paula']); // obtiene el estado anterior del array (cat)
    }

    return (

        <>
            <h2>Hola seba</h2>
            <hr></hr>

            <button onClick={handleAdd}>Agregar</button>
            <AddCategory setCategories = { setcategories }/>
            <ol>
            {
                categories.map(category =>  
                (<GifGrid
                    key={category} 
                    category={category} />)
                )
            }
            </ol>

        </>
    );


}


export default GifExprtApp;