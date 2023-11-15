import styles from './App.module.css';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Goods from './components/Goods';
import Cart from './components/Cart';
import React, { useState, useEffect, } from 'react'; // Додано імпорт useState
import { BrowserRouter as Router, Routes, Route,  Link,
  Outlet,
  useLocation,
  Navigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Detail from './components/Goods/Detail';
import Admin from './components/Admin';
import { fetchAuthMe, selectIsAuth } from './Redux/auth';
import CreateGoods from './components/Admin/AdminPanel/CreateGood';
import OrdersForm from './components/Cart/Orders';
import Bonus from './components/Bonus';
import Preloader from './Preloader';
import { motion } from "framer-motion";
import Posts from './components/Posts';
import CreateItem from './components/Admin/AdminPanel/CreateItem';
import Oferta from './components/Oferta';

import TurnAround from './components/TurnAround';
import DeliverInfo from './components/DeliverInfo';
function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const [isLoading, setIsLoading] = useState(true); // Додано useState
  useEffect(() => {
    dispatch(fetchAuthMe()).then(
      () => setTimeout(() => {
        setIsLoading(false);
      }, 1000)
    )
  },[])

  const PageLayout = ({ children }) => children;

  const pageVariants = {
    initial: {
      opacity: 1,
      x: -1000,
    },
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 1,
      x: 50,
    },
  };
  
  const pageVariants2 = {
    initial: {
      opacity: 1,
      x: 1000, // Змінено на положення зліва за межі вікна
    },
    in: {
      opacity: 1,
      x: 0, // Залишаємо без змін, щоб з'являтись у центрі
    },
    out: {
      opacity: 1,
      x: -50, // Змінено на положення справа за межі вікна
    },
  };
 
  const pageTransition = {
    type: "tween",
    ease: "linear",
    duration: 0.4
  };
  
  const AnimationLayout = () => {
    const { pathname } = useLocation();
    return (
      <PageLayout>
        <motion.div
          key={pathname}
          initial="initial"
          animate="in"
          variants={pageVariants}
          transition={pageTransition}
        >
          <Outlet />
        </motion.div>
      </PageLayout>
    );
  };
  const AnimationLayout2 = () => {
    const { pathname } = useLocation();
    return (
      <PageLayout>
        <motion.div
          key={pathname}
          initial="initial"
          animate="in"
          variants={pageVariants2}
          transition={pageTransition}
        >
          <Outlet />
        </motion.div>
      </PageLayout>
    );
  };
  

  return (
    <div translate="no">
      {isLoading ? (
        <Preloader />
      ) : (
        <Router>  
          <div className={styles.container}>
            <div className={styles.div}></div>
          {/* <Header/>  */}
              <Routes>
              <Route element={<AnimationLayout2 />}>
              <Route exact path="/about" element={<Home  setIsLoading = {setIsLoading} />}/>
              </Route>
              <Route element={<AnimationLayout />}>
              <Route exact path="/" element={<Goods/>}/>
              <Route exact path="/oferta" element={<Oferta/>}/>
              <Route exact path="/deliverinfo" element={<DeliverInfo/>}/>
              <Route exact path="/turnaround" element={<TurnAround/>}/>
              <Route exact path="posts" element={<Posts/>}/>
              <Route exact path="/orders" element={<OrdersForm/>}/>
              <Route exact path="/admin" element={<Admin/>}/>
              <Route exact path="/admin/posts" element={<Admin/>}/>
              {isAuth ? <Route exact path="/admin/create" element={<CreateGoods/>}/> : ""}
              {isAuth ? <Route exact path="/admin/:id/edit" element={<CreateGoods/>}/> : ""}
              {isAuth ? <Route exact path="/admin/createpost" element={<CreateItem/>}/> : ""}
              {isAuth ? <Route exact path="/admin/:id/editpost" element={<CreateItem/>}/> : ""}
              <Route exact path="/admin/home" element={<Home/>}/>
              <Route exact path="/bonus" element={<Bonus/>}/>
              <Route exact path="/details" element={<Detail/>}/>
              <Route exact path="/cart" element={<Cart/>}/>
              <Route exact path="/contacts" element={<Contacts/>}/>
              <Route path="*" element={<Navigate to="/audit" replace />} />
              </Route>
            </Routes>
          </div>
          {/* <Footer/> */}
        </Router>
      )}
   </div>
  );
}

export default App;