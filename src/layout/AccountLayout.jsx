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

    const burgerList = [
        {
            type: 'link',
            id: '1of1',
            title: 'Carts list',
            url: '/account',
        },

        {
            type: 'link',
            id: '2of1',
            title: 'Products',
            url: '/account',
        },

        {
            type: 'link',
            id: '3of1',
            title: 'Shops',
            url: '/account',
        },
        {
            type: 'line',
        },
        {
            type: 'link',
            id: '1of2',
            title: 'New Cart',
            url: '/account',
        },
        {
            type: 'link',
            id: '2of2',
            title: 'New product',
            url: '/account',
        },
        {
            type: 'link',
            id: '3of2',
            title: 'New Shop',
            url: '/account',
        },
        {
            type: 'line',
        },
        {
            type: 'link',
            id: '1of3',
            title: 'Account',
            url: '/account',
        },
        {
            type: 'link',
            id: '2of3',
            title: 'Settings',
            url: '/account',
        },
        {
            type: 'link',
            id: '30f3',
            title: 'Log out',
            url: '/account',
        },
    ];

    return (
        <div>
            <header className={style.header}>
                <img className={style.accountLogo} src={logo} alt="logo" />
                <div>
                    <div className={style.burger} onClick={handleBurgerClick}>
                        {burgerMenuActive ? <RxCross1 /> : <RxHamburgerMenu />}                      
                    </div>
                    <div className={`${style.burgerMenu} ${burgerMenuActive ? style.active : ''}`}>
                        {
                            burgerList.map((link, index) => {
                                if (link.type === 'line') {
                                    return <hr key={index} />;
                                }
                                if (link.type === 'link') {
                                    return (
                                        <Link className={style.burgerList} key={link.id} to={link.url}>
                                            {link.title}
                                        </Link>
                                    );
                                }

                                return <>ERROR</>;
                            })
                        }
                     </div>                    
                </div>
            </header>
            <Outlet />
        </div>
    );
}


// return (
//     <div>
//         <header className={style.header}>
//             <img className={style.accountLogo} src={logo} alt="logo" />
//             <div>
//                 <div className={style.burger} onClick={handleBurgerClick}>
//                     {burgerMenuActive ? <RxCross1 /> : <RxHamburgerMenu />}                      
//                 </div>
//                 <div className={`${style.burgerMenu} ${burgerMenuActive ? style.active : ''}`}>
//                     <Link className={style.burgerLink} to='/account'>Account</Link>
//                     <Link className={style.burgerLink} to='/settings'>Settings</Link>
//                     <Link className={style.burgerLink} to='/logout'>Logout</Link>
//                  </div>                    
//             </div>
//         </header>
//         <Outlet />
//     </div>
// );