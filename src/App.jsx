import style from './App.module.css';

function App() {
  return (
    <div className={style.app}>
      <img className={style.logoImg} src='./img/logo.png' alt='logo' />
      <button className={style.button}>Get started</button>
    </div>
  );
}

export default App;
