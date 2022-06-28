import React from 'react';
import './menu.css'
const MenuDesk = ({props}) => {
    return ( <>
    <div className='desktop'>
        <ul>
            <li>
                <a href="#">{props}</a>
            </li>
        </ul>
    </div>
    </> );
}
 
export default MenuDesk;