import { useState } from "react";
import { AddCategory,GifGrid } from './components';



export const GifExpertApp = () => {
  
    const [ categories, setCategories ] = useState( [] );

    const setInputCategory = ( inputValue ) => {
        const lowerCaseValue = inputValue.toLowerCase(); // Convertir a minúsculas
        if(categories.includes(lowerCaseValue)) return;  // Si categoria ya existe no la agrega
        setCategories( [ inputValue, ...categories ] );  // Actualiza estado con nuevo registro
    };

    const deleteCategory = ( categoryToDelete ) => {
      // Filtramos la categoría que queremos eliminar
      setCategories( categories.filter( category => category !== categoryToDelete ) );
    };

    
    return (
        <>
          <h1>Gif Expert App</h1>
  
          <AddCategory 
            setInputCategory={ setInputCategory }
          />
          
          { categories.length === 0 && <h3>There Are No Searches</h3> }
          
          <div className="container">
              { 
                categories.map( (category) => (
                    <GifGrid 
                      key={ category }
                      category={ category }
                      deleteCategory={ deleteCategory }
                    /> 
                )) 
              }  
          </div>
        </>
    )
};


/*
⚡ Validacion
const lowerCaseValue = inputValue.toLowerCase(); convertir a minusculas
el registro antes de agregarlo, es para asegurarnos que no existan errores
de camel case, ademas ya estamos mandando ese inputValue que es el registro
sin espacios delante y al final gracias al trim() en la validacion de la
funcion onInputSubmit()
*/