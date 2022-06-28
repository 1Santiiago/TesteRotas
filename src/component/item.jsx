import React from 'react';
import PropTypes from 'prop-types'
const Item = ({marca, anoLancamento}) => {
    return ( 
        <>
            <li>{marca} - {anoLancamento}</li>

        </>

     );
}

Item.prototypes ={
    marca: PropTypes.string,
    anolancamento: PropTypes.number,
}

Item.defaultProps = {
    marca:'Favor, preencher marca',
    anolancamento: 'Preencher com ano de lancamento',
}
 
export default Item;