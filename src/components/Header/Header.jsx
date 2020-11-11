import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return ( 
        <header className ={s.header}>
            <img src='https://img.icons8.com/bubbles/100/000000/react.png' alt='logo' />
        </header>
    );
};
export default Header;