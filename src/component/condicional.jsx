import React from 'react';
import { useState } from 'react';

const Condicional = () => {
    const limparEmail = ()=>{
        
        setUserEmail('')
    }
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

   const enviarEmail = (e)=>{
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
      
   }

    return ( <>
        <h2>Cadastre seu Email:</h2>
        <form>
            <input type="email"  placeholder='Digite seu email' onChange={(e) =>setEmail(e.target.value)}/>
        <button onClick={enviarEmail}>Enviar Email</button>
        <br />
        {userEmail && (
            <div>
                <p>O Email do Usuário é: {userEmail}</p>
            </div>
        )

        }
        </form>

        <button onClick={limparEmail}>Limpe o campo E-mail</button>
      

    </> );
}
 
export default Condicional;