import style from '../pages/Form.module.css';
import style2 from '../components/Button.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

export function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [termsChecked, setTermsChecked] = useState(false);
    const [errors, setErrors] = useState([]);
    const [users, setUsers] = useState(() => JSON.parse(localStorage.getItem('users')) || []);
    const navigate = useNavigate();

    function updateName(e) {
        setName(e.target.value);
    }

    function updateEmail(e) {
        setEmail(e.target.value);
    }

    function updatePassword(e) {
        setPassword(e.target.value);
    }
    
    function updateTermsChecked(e) {
        setTermsChecked(e.target.checked);
    }

    function registerUser(e) {
        const minNameLength = 2;
        const maxNameLength = 30;
        const minEmailLength = 6;
        const maxEmailLength = 50;
        const atSymbol = email.indexOf('@');
        const dotSymbol = email.lastIndexOf('.');
        const atSymbolCount = email.split('@').length - 1;
        const topLevelDomain = email.slice(dotSymbol + 1);
        const minPasswordLength = 8;
        const maxPasswordLength = 50;
        e.preventDefault();

    const newErrors = [];
        if (name.length < minNameLength || name.length > maxNameLength) {
            newErrors.push('Name has to be between 2 and 30 symbols long.');
        }

        if (email.length < minEmailLength || email.length > maxEmailLength) {
            newErrors.push('Email has to be between 6 and 50 symbols long.');
        } else if (atSymbol === -1 || dotSymbol === -1 || atSymbol > dotSymbol) {
            newErrors.push('Invalid email format');
        }

        if (topLevelDomain.length < 2 || topLevelDomain.length > 4) {
            newErrors.push('Invalid top-level domain.');
        }
        
        if (!email.includes('@')) {
            newErrors.push('Missing "@" symbol.');
        } else if (atSymbolCount > 1) {
            newErrors.push('Too many "@" symbols.');
        }

        if (password.length < minPasswordLength || password.length > maxPasswordLength) {
            newErrors.push('Password has to be between 8 and 50 symbols long.');
        }

        if (users.some((user) => user.email === email)) {
            newErrors.push('Error with password or email');
        }

        if (!termsChecked) {
            newErrors.push('You must accept the Terms and Conditions');
        }

        setErrors(newErrors);

        if (newErrors.length === 0) {
            const newUser = { name, email, password };
            setUsers((prev) => [...prev, newUser]);
            localStorage.setItem('users', JSON.stringify([...users, newUser]));
            navigate('/login');
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
                    <input onChange={updatePassword} value={password} id='password' type={showPassword ? 'text' : 'password'} required />
                    {showPassword ? (
                        <AiFillEye onClick={() => setShowPassword(false)} />
                    ) : (
                        <AiFillEyeInvisible onClick={() => setShowPassword(true)} />
                    )}
                </div>
                <div>
                    <label>
                        <input type="checkbox" checked={termsChecked} onChange={updateTermsChecked} />
                        <Link className={style.termsText} to='/terms'>Accept Terms and Conditions</Link>
                    </label>
                </div>
            </form>
            <button className={style2.button} onClick={registerUser}>Register</button>
            <p className={style.formBottomText} >Have an account? <Link className={style.formBottomLink} to='/login'>Log in</Link></p>
        </>
    );
}