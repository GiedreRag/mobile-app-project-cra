import { useLocation } from 'react-router-dom';
import style from './Account.module.css';
import style2 from '../pages/Form.module.css';
import { Link } from 'react-router-dom';

export function Account() {
    const location = useLocation();
    const user = location.state?.user || {};

    return (
        <>
            <div className={style.account}>
                <h1>Welcome to your account, {user.name || 'User'}!</h1>
                <p>Done for today? <Link className={style2.formBottomLink} to='/login'>Log out</Link></p>               
            </div>
        </>
    );
}