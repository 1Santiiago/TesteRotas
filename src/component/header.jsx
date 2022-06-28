import React from 'react';
import './header.css'
import MenuDesk from './menu';
const Header = () => {
    return ( <>
        <header>
            <div className='Logo'><img src="Logo1" alt="" />Logo1</div>
            <MenuDesk props='Home' />
            <MenuDesk props='Galeria' />
            <MenuDesk props='Sobre' />
            <MenuDesk props='Contato' />
        </header>
    </> );
}
 
export default Header;
