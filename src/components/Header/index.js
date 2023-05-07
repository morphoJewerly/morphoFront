import styles from './Header.module.css';
import React from "react"
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
    const [activeItem, setActiveItem] = React.useState(0);
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
       <header>
             <div className={styles.header_container}>
              <div className={styles.logo_block}>
            <h1 className={styles.logo}>«Єдиний спосіб втечі від банальності - Мистецтво»</h1> 
            </div>
              <nav>
              {(isAuth && pathname.startsWith("/admin")) ? 
                <ul>
                  <li> <Link to="/admin/home"  >
                    ПРО МЕНЕ
                </Link></li>
                <li><Link to="/admin">ТОВАРИ</Link></li>
                <li><Link to="/admin/create">СТВОРИТИ ТОВАР</Link></li>
                <li><button onClick={onClickLogout} className={styles.button} >ВИХІД</button></li>
              </ul>
                :<ul>
                  <li> <Link to="/"  >
                    ПРО МЕНЕ
                </Link></li>
                  {/* <li><a href="">КІЛЬЦЯ</a></li>
                  <li><a href="">СЕРЕЖКИ</a></li>
                  <li><a href="">ПІДВІСКИ</a></li> */}
                  <li><Link to="/goods">ТОВАРИ</Link></li>
                  <li><Link to="/cart">КОШИК</Link></li>
                  <li><Link to="/contacts">КОНТАКТИ</Link></li>
                </ul>
                }
                </nav>
        </div>
             </header>
       </>
  );
}
export default Header;
