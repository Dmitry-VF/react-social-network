import React from 'react';
import style from './Friends.module.css';
import s from './Navbar.module.css';
import { NavLink } from "react-router-dom";


const Friends = (props) => {
    return (
        <div className= {style.friendsBar}>
            <NavLink to='/friends' activeClassName= {s.activeLink}>Friends</NavLink>
            <img src= 'https://static.vecteezy.com/system/resources/thumbnails/000/425/647/small/Multimedia__28203_29.jpg'></img>
            <img src= 'https://static.vecteezy.com/system/resources/thumbnails/000/425/647/small/Multimedia__28203_29.jpg'></img>
            <img src= 'https://static.vecteezy.com/system/resources/thumbnails/000/425/647/small/Multimedia__28203_29.jpg'></img>
        </div>
    )
}

export default Friends;