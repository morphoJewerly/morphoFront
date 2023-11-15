import styles from './Footer.module.css';
import {Helmet} from "react-helmet";
import {Link, useLocation} from "react-router-dom";
import Accordion from '../Accordion';
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
            <a href="https://www.facebook.com/The.piece.of.sky" target="_blank"><img width={42} height={40} src="/images/facebook.png" alt=""  /></a>
            <a href="https://www.instagram.com/morpho_jewelry_/" target="_blank"><img width={33} height={33} src="/images/instagram.png"  alt=""  /></a>
            <a href="https://www.tiktok.com/@morpho_jewelry" target="_blank"><img width={35} height={37} src="/images/tiktok.png"  alt=""  /></a>
          </div>
          <a>morpho.jewelry</a>
          </div>
          <Accordion/>
        </footer>
}
       </>
  );
}
export default Footer;
