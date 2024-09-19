import { useState } from "react";


export const AddCategory = ( { setInputCategory } ) => {

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
    
    
    return (
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
        </form>
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