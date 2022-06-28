import React from 'react';

const Saudacao = ({nome}) => {

    const gerarSaudacao =()=>{
        return `Olá, ${nome}, tudo bem ?`
    }






    return ( 
    <>
            {
                nome&&
                <p>{gerarSaudacao(nome)}</p>
                
                }
    </> 

    );
}
 
export default Saudacao;