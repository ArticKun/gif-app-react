import { useState } from "react";
import { AddCategory,GifGrid } from './components';



export const GifExpertApp = () => {

    const [ light, setLight ] = useState( false );
    const [ categories, setCategories ] = useState( [] );

    // Recuperar categorias buscadas
    const setInputCategory = ( inputValue ) => {
        const lowerCaseValue = inputValue.toLowerCase(); // Convertir a minúsculas
        if(categories.includes(lowerCaseValue)) return;  // Si categoria ya existe no la agrega
        setCategories( [ inputValue, ...categories ] );  // Actualiza estado con nuevo registro
    };

    //Eliminar categorias buscadas
    const deleteCategory = ( categoryToDelete ) => {
      // Filtramos la categoría que queremos eliminar
      setCategories( categories.filter( category => category !== categoryToDelete ) );
    };

    // Cambio de tema
    const themeChange = () => {
      if( light === false ) {
        setLight( true );
      }else {
        setLight( false );
      }
    };
    
    return (
        <>
          <div className={ `container-body ${light ? 'light-theme' : 'dark-theme'}`} >
              <header>
                <AddCategory 
                  setInputCategory={ setInputCategory }
                  themeChange={ themeChange }
                  light={ light }
                  setLight={ setLight }
                />
              </header>
              
              { categories.length === 0 && <h3 className="no-search">There Are No Searches</h3> }
              
              <main className="container">
                  { 
                    categories.map( (category) => (
                        <GifGrid 
                          key={ category }
                          category={ category }
                          deleteCategory={ deleteCategory }
                        /> 
                    )) 
                  }  
              </main>

              <div className="container-footer">
                <footer>
                    <p>Copyright © <span>Arcade</span> 2024</p>
                </footer>
              </div>
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