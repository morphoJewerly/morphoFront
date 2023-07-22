import styles from './App.module.css';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Goods from './components/Goods';
import Cart from './components/Cart';
import React, { useState, useEffect } from 'react'; // Додано імпорт useState
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Detail from './components/Goods/Detail';
import Admin from './components/Admin';
import { fetchAuthMe, selectIsAuth } from './Redux/auth';
import CreateGoods from './components/Admin/AdminPanel/CreateGood';
import OrdersForm from './components/Cart/Orders';
import Bonus from './components/Bonus';
import Preloader from './Preloader';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import animations from './animations.module.css';
function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const [isLoading, setIsLoading] = useState(true); // Додано useState
  const uniqueKey = Date.now();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    dispatch(fetchAuthMe())
  },[])

  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <Preloader />
      ) : (
        <Router>
          <Header/> 
          <div className={styles.container}>
          <TransitionGroup>
              <CSSTransition
                key={uniqueKey} 
                timeout={500}
                classNames={{
                  enter: animations.fadeEnter,
                  enterActive: animations.fadeEnterActive,
                  exit: animations.fadeExit,
                  exitActive: animations.fadeExitActive,
                }}
              >
            <Routes>
              <Route exact path="/orders" element={<OrdersForm/>}/>
              <Route exact path="/admin" element={<Admin/>}/>
              {isAuth ? <Route exact path="/admin/create" element={<CreateGoods/>}/> : ""}
              {isAuth ? <Route exact path="/admin/:id/edit" element={<CreateGoods/>}/> : ""}
              <Route exact path="/admin/home" element={<Home/>}/>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/goods" element={<Goods/>}/>
              <Route exact path="/bonus" element={<Bonus/>}/>
              <Route exact path="/details" element={<Detail/>}/>
              <Route exact path="/cart" element={<Cart/>}/>
              <Route exact path="/contacts" element={<Contacts/>}/>
            </Routes>
            </CSSTransition>
            </TransitionGroup>
          </div>
          <Footer/>
        </Router>
      )}
    </div>
  );
}

export default App;