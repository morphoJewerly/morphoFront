import styles from './Footer.module.css';
import {Helmet} from "react-helmet";
import {Link, useLocation} from "react-router-dom";
import React from "react";
// import Accordion from '../Accordion';
function Footer() {
  const location = useLocation();
  const { pathname } = location;
  return (
    
    <>
      <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Bad+Script&family=Marmelad&family=Pacifico&family=Tangerine:wght@700&display=swap" rel="stylesheet"/>
      </Helmet>
      {pathname.includes("/cart") || pathname.includes("/orders") || pathname.includes("/admin")  ? null : 
      <footer>
       
        <div className={styles.rigthFooter}>
          <div className={styles.socialPages}>
            <a href="https://www.facebook.com/The.piece.of.sky" target="_blank"><img width={35} height={35} src="/images/facebook.svg" alt=""  /></a>
            <a href="https://www.instagram.com/morpho_jewelry_/" target="_blank"><img width={35} height={35} src="/images/instagram.svg"  alt=""  /></a>
            <a href="https://www.tiktok.com/@morpho_jewelry" target="_blank"><img width={35} height={35} src="/images/tiktok.svg"  alt=""  /></a>
          </div>
            <div className={styles.footer_nav}>
                <Link to={"/oferta"}>Угода користувача</Link>
                <Link to={"/deliverinfo"}>Інформація про доставку</Link>
                <Link to={"/turnaround"}>Повернення товару</Link>
            </div>
          <a>morpho.jewelry</a>
          </div>
             {/* <Accordion/> */}
          <p className={styles.p}>© 2023 Усі права захищено.</p>
        </footer>
        
}
       </>
  );
}
export default Footer;
