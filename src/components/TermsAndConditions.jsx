import { Link } from 'react-router-dom';
import React from "react";
import style from './Terms.module.css';
import style2 from '../components/Button.module.css';

export function TermsAndConditions() {
    return (
        <div className={style.terms}>
            <h1>Terms and Conditions</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit modi, aut voluptatem facere velit quisquam distinctio id labore? Nihil, impedit!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Link className={style2.button} to='/register'>Back to register</Link>
        </div>
    );
}