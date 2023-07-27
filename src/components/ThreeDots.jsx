import { MdOutlineRadioButtonUnchecked } from 'react-icons/md';
import style from '../pages/features/Feature.module.css';

export function ThreeDots() {
    return (
        <div className={style.roundDots}>
            <MdOutlineRadioButtonUnchecked size='2rem' />
            <MdOutlineRadioButtonUnchecked size='2rem' />
            <MdOutlineRadioButtonUnchecked size='2rem' />
        </div>
    );
}
