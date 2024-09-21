


import { useState } from 'react';


export const GifCard = ( { title, url } ) => {

    const [ modalOpen, setmodalOpen ]     = useState( false );
    const [ selectedGif, setSelectedGif ] = useState( null );

    const onOpenModal = () => {
        setmodalOpen( true );
        setSelectedGif( { title, url } );
    };

    const onCloseModal = () => {
        setmodalOpen( false );
        setSelectedGif( null );
    };

    // Función para cerrar al hacer clic fuera del contenido del modal
    const onOverlayClick = ( event ) => {
        // Verifica que el clic sea en el overlay, no en el contenido
        if ( event.target.className === 'overlay' ) {
            onCloseModal();
        }
    };


    return (
        <>
            <div 
                className="card"
                onClick={ onOpenModal }
                style={{ backgroundImage: `url(${url})` }}
            >
                <p>Click Me</p>
            </div>

            {
                modalOpen ? (
                    <div className="overlay" onClick={ onOverlayClick }>
                        <div className="modal-content">
                            <h2>{ selectedGif.title }</h2>
                            <img src={ selectedGif.url } alt={ selectedGif.title } />
                            <button className="close" onClick={ onCloseModal }>Close</button>
                            <a 
                                className='link-gif'
                                target="_blank" 
                                rel="noopener noreferrer"
                                href={ selectedGif.url }>
                                LINK
                            </a>
                        </div>
                    </div>
                ) : null
            }
        </>
    );
};

