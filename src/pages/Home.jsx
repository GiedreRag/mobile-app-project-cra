import style from '.././App.module.css';
import style2 from '../components/Button.module.css';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';

export function Home() {
    return (
        <div>
            <div className={style.homePage}>
                <img className={style.logoImg} src={logo} alt='logo' />
                <h1 className={style.title}>Want to enjoy shopping?</h1>
                <Link className={style2.button} href="#" to="/feature1">Get started!</Link>
            </div>
        </div>
    );
}