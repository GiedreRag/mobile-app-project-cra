import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react';
import style from '../components/Header.module.css';
import logo from '../img/logo.png';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';

export function AccountLayout() {
    const [burgerMenuActive, setBurgerMenuActive] = useState(false);

    const handleBurgerClick = () => {
        setBurgerMenuActive(!burgerMenuActive);
    }

    return (
        <div>
            <header className={style.header}>
                <img className={style.accountLogo} src={logo} alt="logo" />
                <div>
                    <div className={style.burger} onClick={handleBurgerClick}>
                        {burgerMenuActive ? <RxCross1 /> : <RxHamburgerMenu />}                      
                    </div>
                    <div className={`${style.burgerMenu} ${burgerMenuActive ? style.active : ''}`}>
                        <Link className={style.burgerLink} to='/account'>Account</Link>
                        <Link className={style.burgerLink} to='/settings'>Settings</Link>
                        <Link className={style.burgerLink} to='/logout'>Logout</Link>
                     </div>                    
                </div>
            </header>
            <Outlet />
        </div>
    );
}