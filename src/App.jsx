import { BrowserRouter, Routes, Route } from "react-router-dom";
import style from './App.module.css';
import { Home } from './pages/Home';
import { Feature1 } from './pages/features/Feature1';
import { Feature2 } from './pages/features/Feature2';
import { Feature3 } from './pages/features/Feature3';
import { Page404 } from './pages/Page404';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Account } from "./pages/Account";

function App() {
  return (
    <div className={style.app}>
      <BrowserRouter>
        <Routes>
          <Route >
            <Route path='/' index element={<Home />} />
            <Route path='/feature/1' element={<Feature1 />} />
            <Route path='/feature/2' element={<Feature2 />}/>
            <Route path='/feature/3' element={<Feature3 />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/account' element={<Account />}/>
            <Route path='*' element={<Page404 />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
