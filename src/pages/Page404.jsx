import style from './Page404.module.css';
import style2 from '../components/Button.module.css';
import { Link } from 'react-router-dom';

export function Page404() {
    return (
        <div className={style.page404}>
            <h2>404</h2>
            <p>Page not found</p>
            <Link className={style2.button} to='/'>Back to home</Link>
        </div>
    );
}