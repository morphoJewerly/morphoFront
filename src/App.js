import styles   from './App.module.css';
import Contacts from './components/Contacts';
import Footer   from './components/Footer';
import Header    from './components/Header';
import Home      from './components/Home';
import Goods     from './components/Goods';
import Cart      from './components/Cart';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux';
import Detail from './components/Goods/Detail';
import Admin from './components/Admin';
import { fetchAuthMe, selectIsAuth  } from './Redux/auth';
import CreateGoods from './components/Admin/AdminPanel/CreateGood';

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  React.useEffect(() => {
    dispatch(fetchAuthMe())
  },[])

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Router>
          <Header/>
            <div className={styles.container}>
                    <Routes>
                      <Route exact path="/admin" element={ <Admin/>}/>
                    { isAuth ? <Route exact path="/admin/create" element={ <CreateGoods/>}/>: ""} 
                    { isAuth ? <Route exact path="/admin/:id/edit" element={ <CreateGoods/>}/>: ""} 
                      <Route exact path="/" element={ <Home/>}/>
                      <Route exact path="/goods" element={ <Goods/>}/>
                      <Route exact path="/details" element={ <Detail/>}/>
                      <Route exact path="/cart" element={ <Cart/>}/>
                      <Route exact path="/contacts" element={ <Contacts/>}/>
                    </Routes>
            </div>
          <Footer/>
        </Router>
      </div>     
    </div>
  );
}
export default App;
