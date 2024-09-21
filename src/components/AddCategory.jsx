import { useState } from "react";

//SVG
const SolSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sun-high" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z" />
        <path d="M6.343 17.657l-1.414 1.414" />
        <path d="M6.343 6.343l-1.414 -1.414" />
        <path d="M17.657 6.343l1.414 -1.414" />
        <path d="M17.657 17.657l1.414 1.414" />
        <path d="M4 12h-2" />
        <path d="M12 4v-2" />
        <path d="M20 12h2" />
        <path d="M12 20v2" />
    </svg>
);

const LunaSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-moon" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
    </svg>
);



export const AddCategory = ( { setInputCategory,themeChange,light,setLight } ) => {

    const [ inputValue, setInputValue ] = useState("");

    // Recuperamos value del input
    const onInputChange = (event) => {
        setInputValue( event.target.value );
    };

    // Submit Input( enter )
    const onInputSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return; //Evita registro vacio
        setInputCategory( inputValue.trim() );
        setInputValue(""); // Limpiar el input después de añadir la categoría
    };

    // Boton 
    const onButtonClick = () => {
        if( inputValue.trim().length <= 1 ) return; //Evita registro vacio
        setInputCategory( inputValue );
        setInputValue(""); // Limpiar el input después de añadir la categoría
    };
    
    console.log( light );
    
    return (
        <div className="container-header">
            <div className="logo">
                <p>Gif<span>App</span></p>
            </div>
            <form 
                className="form"
                onSubmit={ (event) => onInputSubmit(event) }
            >
                <input 
                    type="text" 
                    placeholder="Buscar Gifts"
                    value={ inputValue }
                    onChange={ (event) => onInputChange(event) }
                />
                <button 
                    type="button" 
                    onClick={ onButtonClick }>
                    Add
                </button>
                <a  className="theme" onClick={ themeChange }>
                    { light === false ? <LunaSVG /> : <SolSVG /> }
                </a>
            </form>
        </div>
    )
};




/*
 ⚡Validacion

trim():
El método .trim() elimina los espacios en blanco al inicio y al final de la 
cadena de texto. Por ejemplo, si inputValue es " hola ", después de aplicar 
.trim(), se convierte en "hola". Esto es útil para evitar que espacios 
innecesarios afecten la validación.

.length:
El método .length obtiene la cantidad de caracteres de la cadena ya "limpia" 
(sin los espacios en blanco). Si después de eliminar los espacios, la cadena 
tiene 1 o menos caracteres, pasamos a la siguiente parte.

<= 1:
Aquí se compara la longitud de la cadena. Si la longitud es menor o igual a 
1 (es decir, si está vacía, tiene solo un espacio, o solo un carácter), 
la condición será true.

return;
El return; en esta línea hace que el código termine inmediatamente la ejecución 
de la función actual si la condición se cumple, es decir, si el texto es muy 
corto (menos de 2 caracteres). No permite que se ejecute el resto del código.

En resumen:
Esta línea de código está asegurándose de que el valor de inputValue tenga 
más de un carácter (excluyendo los espacios en blanco). Si no es así, detiene 
la ejecución de la función para evitar procesar valores vacíos o muy cortos.
*/