import React from "react";
import style from '../components/BurgerMenuInside.module.css';
import { Link } from 'react-router-dom';

export function BurgerMenuInside({ active }) {
    return (
        <div className={`${style.burgerMenu} ${active ? style.active : ''}`}>
            <Link className={style.burgerLink} to='/account'>Account</Link>
            <Link className={style.burgerLink} to='/settings'>Settings</Link>
            <Link className={style.burgerLink} to='/logout'>Logout</Link>
        </div>
    );
}
