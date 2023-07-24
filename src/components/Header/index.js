import styles from './Header.module.css';
import React,{useEffect,useState} from "react"
import {Helmet} from "react-helmet";
import {Link, useLocation} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectIsAuth, logout } from '../../Redux/auth';
import { changeRouteFalse, changeRouteTrue } from '../../Redux/adminRouterSlice';
function Header() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;
  const isAuth = useSelector(selectIsAuth);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const scrollThreshold = 50;

    const [activeItem, setActiveItem] = React.useState(pathname);
    const totalCount = useSelector((state) => state.cart.totalCount);
  let  [open,setOpen] = React.useState("true")
    let openHandler= () => {
        setOpen(!open);
      }
      const onClickLogout = () => {
        if (window.confirm("Ви дійсно хочете вийти?")){
          dispatch(logout());
          window.localStorage.removeItem("token")
        }
      }
  return (
    <>
      <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet"/>
      </Helmet>
      {pathname.includes("/goods") || pathname.includes("/cart") || pathname.includes("/orders") ? null :
       <header className={isVisible ? styles.header : ""}>
             <div className={styles.header_container}>
             <div className={styles.leftHeader}>
            <Link to="/"><div className={styles.header2}>
        <h1 className={styles.h1}>MO<span>R</span>PH<span>O</span></h1>
        <h4 className={styles.h4}>THE PIECE <span>O</span>F SKY</h4>
      </div>
      </Link>
        </div>
            <div className={ styles.menu }>
              {(isAuth && pathname.startsWith("/admin")) ? 
                <ul onClick={() => openHandler()}  className={styles.rigthHeader}>
                  <li> <Link onClick={() => setActiveItem("/admin/home")} className={activeItem === "/admin/home" ? styles.activen : ''} to="/admin/home"  >
                    ГОЛОВНА
                </Link></li>
                <li><Link onClick={() => setActiveItem("/admin")} className={activeItem === "/admin" ? styles.activen : ''} to="/admin">ТОВАРИ</Link></li>
                <li><Link onClick={() => setActiveItem("/admin/create")}   className={activeItem === "/admin/create" ? styles.activen : ''} to="/admin/create">СТВОРИТИ ТОВАР</Link></li>
                <li>< button onClick={onClickLogout} className={styles.button} >ВИХІД</button></li>
              </ul>
                :<ul onClick={() => openHandler()}  className={styles.rigthHeader}>
                  <li> <Link onClick={() => setActiveItem("/")}  className={activeItem === "/" || activeItem === "/goods" ? styles.activen : ''} to="/"  >
                  ГОЛОВНА
                </Link></li>
                  <li><Link onClick={() => setActiveItem("/goods")} to="/goods" >ТОВАРИ</Link></li>
                  <li><Link onClick={() => setActiveItem("/bonus")}  className={activeItem === "/bonus" ? styles.activen : ''} to="/bonus">АКЦІЇ</Link></li>
                  {/* <li><Link onClick={() => setActiveItem(2)}  className={activeItem === 2 ? styles.activen : ''} to="/cart">КОШИК</Link></li> */}
                  <li><Link onClick={() => setActiveItem("/contacts")}  className={activeItem === "/contacts" ? styles.activen : ''} to="/contacts">КОНТАКТИ</Link></li>
                </ul>
                }
                </div>
        </div>
             </header> 
            }   
       </>
  );
}
export default Header;
