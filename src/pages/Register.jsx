import style from '../pages/Form.module.css';
import style2 from '../components/Button.module.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [users, setUsers] = useState(() => JSON.parse(localStorage.getItem('users')) || []);

    function updateName(e) {
        setName(e.target.value);
    }

    function updateEmail(e) {
        setEmail(e.target.value);
    }

    function updatePassword(e) {
        setPassword(e.target.value);
    }

    function registerUser(e) {
        const minNameLength = 2;
        const maxNameLength = 20;
        const minEmailLength = 6;
        const maxEmailLength = 30;
        const minPasswordLength = 8;
        const maxPasswordLength = 30;
        const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        e.preventDefault();

        const newErrors = [];
        if (name.length < minNameLength || name.length > maxNameLength) {
            newErrors.push('Not suitable username');
        }

        if (email.length < minEmailLength || email.length > maxEmailLength) {
            newErrors.push('Not suitable email');
        } else if (!emailRegex.test(email)) {
            newErrors.push('Invalid email format');
        }

        if (password.length < minPasswordLength || password.length > maxPasswordLength) {
            newErrors.push('Not suitable password');
        } else if (!passwordRegex.test(password)) {
            newErrors.push('Password must contain at least one letter and one number');
        }

        setErrors(newErrors);

        if (newErrors.length === 0) {
            setUsers((prev) => [...prev, { name, email, password }]);
        }
    }

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    return (
        <>
            <h1>Join community!</h1>
            <div className={`${style.error} ${errors.length ? style.show : ''}`}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
            </div>
            <form className={style.form}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input onChange={updateName} value={name} id='name' type="text" required />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input onChange={updateEmail} value={email} id='email' type="text" required />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input onChange={updatePassword} value={password} id='password' type="password" required />
                    <p className={style.passwordText}>Minimum 8 symbols: letters and numbers</p>
                </div>

            </form>
            <button className={style2.button} onClick={registerUser}>Register</button>
            <p className={style.logIn} >Have an account? <Link className={style.logInLink} to='/success'>Log in</Link></p>
        </>
    );
}