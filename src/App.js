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
    opacity: 0.2,
    x: -50,
    rotateX: 0,
    rotateY: 0,
  },
  in: {
    opacity: 1,
    x: 0,
    rotateX: 0,
    rotateY: 360,
  },
  out: {
    opacity: 0.2,
    x: 50,
    rotateX: 0,
    rotateY: 0,
  },
};

  
  const pageTransition = {
    type: "tween",
    ease: "linear",
    duration: 1
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
  
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <Router>
         
          <div className={styles.container}>
          <Header/> 
              <Routes>
              <Route exact path="/about" element={<Home  setIsLoading = {setIsLoading} />}/>
              <Route exact path="/" element={<Goods/>}/>
              <Route element={<AnimationLayout />}>
              <Route exact path="/orders" element={<OrdersForm/>}/>
              <Route exact path="/admin" element={<Admin/>}/>
              {isAuth ? <Route exact path="/admin/create" element={<CreateGoods/>}/> : ""}
              {isAuth ? <Route exact path="/admin/:id/edit" element={<CreateGoods/>}/> : ""}
              <Route exact path="/admin/home" element={<Home/>}/>
              <Route exact path="/bonus" element={<Bonus/>}/>
              <Route exact path="/details" element={<Detail/>}/>
              <Route exact path="/cart" element={<Cart/>}/>
              <Route exact path="/contacts" element={<Contacts/>}/>
              <Route path="*" element={<Navigate to="/audit" replace />} />
              </Route>
            </Routes>
          </div>
          <Footer/>
        </Router>
      )}
    </>
  );
}

export default App;