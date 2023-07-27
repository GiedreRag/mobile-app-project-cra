import { Link } from 'react-router-dom';
import style from './Feature.module.css';
import style2 from '../../App.module.css';
import style3 from '../../components/Button.module.css';
import { MdOutlineRadioButtonUnchecked } from 'react-icons/md';
import logo from '../../img/logo.png';
import { Skip } from '../../components/Skip';

export function Feature3() {
    return (
        <div>
            <Skip className={style.skip}/>
            <div className={`${style.feature} ${style2.app}`}>
                <img className={`${style.image} ${style2.logoImg}`} src={logo} alt="logo" />
                <h1 className={style.title}>Yes!!!</h1>
                <p className={style.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, assumenda!</p>
                <div className={style.roundDots}>
                    <MdOutlineRadioButtonUnchecked size='2rem' />
                    <MdOutlineRadioButtonUnchecked size='2rem' />
                    <MdOutlineRadioButtonUnchecked size='2rem' />
                </div>
                <Link className={style3.button} to='/'>Register</Link>
            </div>
        </div>
    );
}