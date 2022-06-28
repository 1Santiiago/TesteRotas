import React from 'react';
import { useState } from 'react';

const Form = () => {

    const cadastrarUsuario = (e)=>{
        e.preventDefault()
        console.log(`Usuario cadastrado com o login : ${name} e a  Senha : ${password}`)
        console.log('cadastrado')
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()
    return (<>
        <h1>Meu Cadastro</h1>
        <form onSubmit={cadastrarUsuario}>
            <div>
                <label htmlFor="name" id='name'>Nome </label>
                <input type="text" placeholder='Digite seu nome' value={name} onChange={(e)=> setName(e.target.value)}
                />
              
            </div>

            <div>
                <label htmlFor="password" id='password'>Senha </label>
                <input type="password" placeholder='Digite sua senha' onChange={(e)=> setPassword(e.target.value)}/>
            </div>


            <div>
                <input type="submit" value='Cadastrar' />
            </div>
        </form>
    </>  );
}
 
export default Form;