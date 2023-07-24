import style from './App.module.css';

function App() {
  return (
    <div className={style.app}>
      <img className={style.logoImg} src='./img/logoImg.png' alt='logo' />
      <h1 className={style.mainTitle}>Shop with me</h1>
    </div>
  );
}

export default App;
