import React from 'react';
import Butto from './eventoscomponets/Botao';

const EventoClick = () => {

    const meuEvento = ()=>{
            console.log('Fui ativado')
    }
    
    const segundoEvento = ()=>{
        console.log('Segundou')
    }
    return ( 
        <>
            <p>Clique para disparar: </p>
            <Butto event={meuEvento} text = 'Primeiro Evento' />
            <Butto event ={segundoEvento}  text ='Segundo Evento' />
            {/* <button onClick={meuEvento}>Ativar!!</button> */}
        </>
     );
}
 
export default EventoClick;