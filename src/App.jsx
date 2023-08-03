import { BrowserRouter, Routes, Route } from "react-router-dom";
import style from './App.module.css';
import { Home } from './pages/Home';
import { Feature1 } from './pages/features/Feature1';
import { Feature2 } from './pages/features/Feature2';
import { Feature3 } from './pages/features/Feature3';
import { Page404 } from './pages/Page404';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Account } from './pages/Account';
import { TermsAndConditions } from './components/TermsAndConditions';
import { AccountLayout } from "./layout/AccountLayout";

function App() {
  return (
    <div className={style.app}>
      <BrowserRouter>
        <Routes>
          <Route >
            <Route path='/' index element={<Home />} />
            <Route path='/feature1' element={<Feature1 />} />
            <Route path='/feature2' element={<Feature2 />}/>
            <Route path='/feature3' element={<Feature3 />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/terms' element={<TermsAndConditions />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/logout' element={<Login />}/>

            <Route Component={AccountLayout}>
              <Route path='/account' element={<Account />}/>
            </Route>

            <Route path='*' element={<Page404 />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
