import style from './App.module.css';

function App() {
  return (
    <div className={style.app}>
      <div className={style.homePage}>
        <img className={style.homeLogoImg} src='./img/logo.png' alt='logo' />
        <h1 className={style.homeTitle}>Want to enjoy shopping?</h1>
        <button className={style.button} href="#">Get started</button>
      </div>
    </div>
  );
}

export default App;
