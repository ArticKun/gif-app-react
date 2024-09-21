
import { GifCard } from "./GifCard";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { Loading } from "./loading";


export const GifGrid = ( { category, deleteCategory } ) => {

    //⚡ Custom Hook
    const { images, isLoading } = useFetchGifs( category );

    const deleteGif = () => {
        deleteCategory( category );
    };


    return (
        <>  
            <div className="category">
                <h3>{ category }</h3>
                <p 
                    onClick={ deleteGif }
                    className="close-category">
                    Close
                </p>
            </div>

            { isLoading ? ( <Loading /> ) : null }
            
            <div className="card-grid">
                {
                    images.map( img => (
                        <GifCard 
                            key={ img.id }
                            {...img }
                        /> 
                    ))
                }
            </div>
        </>
    )
};




/*
⚡ && ( operador cortocircuito )
en ingles:  ("short-circuit evaluation"). 
Esta es una forma abreviada de hacer un if

En JavaScript, el operador && evalúa dos expresiones. 
Si la primera expresión es verdadera (truthy), entonces evalúa la segunda.

Si la primera expresión es falsa (falsy), no evalúa la segunda expresión 
(ahí es donde ocurre el "cortocircuito") y devuelve el valor de la 
primera expresión.

Estos son algunos de los valores considerados "falsy":

false
0
"" (cadena vacía)
null
undefined
NaN

Esta forma puede reemplazar el operador ternario quedando el codigo:
{ isLoading && <Loading /> }
*/