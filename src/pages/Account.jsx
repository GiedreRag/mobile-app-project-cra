import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import style from './Account.module.css';
import style2 from '../pages/Form.module.css';
import { Link } from 'react-router-dom';
import { BurgerMenu } from '../components/BurgerMenu';

export function Account() {
    const location = useLocation();
    const user = location.state?.user || {};
    const [burgerMenuActive, setBurgerMenuActive] = useState(false);

    return (
        <>
            <BurgerMenu active={burgerMenuActive} onClick={() => setBurgerMenuActive(!burgerMenuActive)} />
            <div className={style.account}>
                <h1>Welcome to your account, {user.name || 'User'}!</h1>
                <p>Done for today? <Link className={style2.formBottomLink} to='/login'>Log out</Link></p> 
            </div>              
            <div className={`${style.BurgerMenu} ${burgerMenuActive ? style.active : ''}`}></div>
        </>
    );
}