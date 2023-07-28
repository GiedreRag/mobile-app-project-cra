import { MdOutlineRadioButtonUnchecked } from 'react-icons/md';
import style from '../pages/features/Feature.module.css';
import { Link } from 'react-router-dom';

export function ThreeDots() {
    return (
        <div className={style.roundDots}>
            <Link to='/feature2'>
                <MdOutlineRadioButtonUnchecked size='2rem' />
            </Link>
            <Link to='/feature3'>
                <MdOutlineRadioButtonUnchecked size='2rem' />
            </Link>
            <Link to='/register'>
                <MdOutlineRadioButtonUnchecked size='2rem' />
            </Link>
        </div>
    );
}