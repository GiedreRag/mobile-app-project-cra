import style from '../pages/Account.module.css';

export function AccountContent({dataContent: {title, img, link}}) {
    return (
        <div className={style.contents}>
            <h3 className={style.contentsTitle}>{title}</h3>
            <p><img className={style.contentImg} src={`./img/${img}`} alt="product" /></p>
            <p>Buy it <a href={link} target="_blank" rel="noopener noreferrer">here</a></p>
        </div>
    );
}