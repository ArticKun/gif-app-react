import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {

    const [ images, setImages ]       = useState( [] );   // Estado de imagenes
    const [ isLoading, setIsLoading ] = useState( true )  // Estado de Loading

    useEffect( () => {
        const getImages = async () => {
            const newImages = await getGifs( category ); // Almacena consulta http en variable
            setImages( newImages );                      // la seteo al estado
            setIsLoading( false )                        // false si ya tenemos imagenes
        };
        getImages();
    },[ category ]);


    return {
        images   : images,
        isLoading: isLoading,
    }
};


/*
⚡ Ejecucion de Funcion en un Hook
Nunca debemos de colocar la ejecucion de una funcion directamente, 
es decir con () parentesis (que son los que ejecutan a una funcion) 
en un functional component, Porque cada vez que el componente se
vuelva a renderizar, la funcion se ejecutará tambien, y en este caso 
por consecuencia ejecutaria nuevamente la peticion HTTP.

Para prevenir esto usaremos el useEffect, donde dentro de el controlara
la ejecucion de una funcion, es decir podemos incluirla dentro de este 
hook, no directamente en el componente

Los useEffect No pueden ser directamente una Promesa,( async await) 
esto es considerado una mala practica por parte de React, solo debe 
regresar una funcion, pero dentro del useEffect, podemos encapsular 
el async await en una funcion
*/
