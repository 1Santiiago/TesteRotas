import React from 'react';
import './headerCard.css'
const HeaderCard = (props) => {
    return ( 
        <>
        <div className='container'>
            <h2>{props.title}</h2>
            <h4>{props.subtitle}</h4>
        </div>
        </>

     );
}
 
export default HeaderCard;