import style from '../pages/Form.module.css';
import style2 from '../components/Button.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    function updateEmail(e) {
        setEmail(e.target.value);
    }

    function updatePassword(e) {
        setPassword(e.target.value);
        }

    function handleLogin(e) {
        e.preventDefault();

        const userData = JSON.parse(localStorage.getItem('users')) || [];
        const user = userData.find((u) => u.email === email && u.password === password);

        if (user) {
            navigate('/account', { state: { user } });
        } else {
            setError('Invalid email or password. Please try again.');
        }
    }

    return (
        <>
            <h2>Log in to your account!</h2>
            <div className={`${style.error} ${error ? style.show : ''}`}>
                {error && <p>{error}</p>}
            </div>
            <form className={style.form}>
                <div className={style.formRows}>
                    <label htmlFor="email">Email</label>
                    <input onChange={updateEmail} value={email} id='email' type="text" required />
                </div>
                <div className={style.formRows}>
                    <label htmlFor="password">Password</label>
                    <input onChange={updatePassword} value={password} id='password' type="password" required />
                </div>
            </form>
            <button className={style2.button} onClick={handleLogin}>Log in</button>
            <p className={style.formBottomText}>Upss.. do not have an account? <Link className={style.formBottomLink} to='/register'>Register</Link></p>
        </>
    );
}