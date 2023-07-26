import { Link } from 'react-router-dom';
import style from './Feature.module.css';
import style2 from '../../App.module.css';
import style3 from '../../components/Button.module.css';
import { MdOutlineRadioButtonUnchecked } from 'react-icons/md';
import logo from '../../img/logo.png';

export function Feature1() {
    return (
        <div className={`${style.feature} ${style2.app}`}>
            <img className={`${style.image} ${style2.logoImg}`} src={logo} alt="logo" />
            <h1 className={style.title}>Why me?</h1>
            <p className={style.text}>Lorem ipsum dolor sit amet consectetur.</p>
            <div className={style.roundDots}>
                <MdOutlineRadioButtonUnchecked size='2rem' />
                <MdOutlineRadioButtonUnchecked size='2rem' />
                <MdOutlineRadioButtonUnchecked size='2rem' />
            </div>
            <Link className={style3.button} to='/feature2'>Continue</Link>
        </div>
    );
}