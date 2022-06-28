import React from 'react';
import ButtonAction from './buttonAction';

const ParagragoCard = (props) => {
    return ( <>
            <p className='setTodos para'>{props.p}
                <ButtonAction className='bt1' botao = 'Ação 1' />
                <ButtonAction className='bt2'  botao = 'Ação 2' />
            </p>
    </> );
}
 
export default ParagragoCard;