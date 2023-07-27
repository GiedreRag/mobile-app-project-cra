import { Link } from "react-router-dom";
import style from '../pages/features/Feature.module.css';

export function Skip() {
    return (
        <div className={style.skip}>
            <Link className={style.link} to='/'>Skip</Link>
        </div>
    );
}