import { Link } from 'react-router-dom';
import style from './Feature.module.css';
import style2 from '../../App.module.css';
import style3 from '../../components/Button.module.css';
import logo from '../../img/logo.png';
import { Skip } from '../../components/Skip';
import { ThreeDots } from '../../components/ThreeDots';

export function Feature2() {
    return (
        <div>
            <Skip className={style.skip}/>
            <div className={`${style.feature} ${style2.app}`}>
                <img className={`${style.image} ${style2.logoImg}`} src={logo} alt="logo" />
                <h1 className={style.title}>I am here to help you</h1>
                <p className={style.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <ThreeDots />
                <Link className={style3.button} to='/feature/3'>Continue</Link>
            </div>
        </div>
    );
}