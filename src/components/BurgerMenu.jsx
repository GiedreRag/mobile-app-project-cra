import React, { useState } from "react";
import style from '../pages/Account.module.css';
import { BurgerMenuInside } from "../pages/BurgerMenuInside";
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';

export function BurgerMenu() {
    const [burgerMenuActive, setBurgerMenuActive] = useState(false);

    const handleBurgerClick = () => {
        setBurgerMenuActive(!burgerMenuActive);
    }

    return (
        <div className={style.burger} onClick={handleBurgerClick}>
            {burgerMenuActive ? <RxCross1 /> : <RxHamburgerMenu />}
            <BurgerMenuInside active={burgerMenuActive} />
        </div>
    );
}
