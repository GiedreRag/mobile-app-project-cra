import style from '../pages/Account.module.css';

export function AccountContent({dataContent: {title, img, link}}) {
    console.log({img});
    return (
        <div className={style.contents}>
            <h3 className={style.contentsTitle}>{title}</h3>
            <p><img className={style.contentImg} src={`https://raw.githubusercontent.com/GiedreRag/mobile-app-project-cra/master/public/img/${img}`} alt="product" /></p>
            <p>Buy it <a href={link} target="_blank" rel="noopener noreferrer">here</a></p>
        </div>
    );
}