import styles from './Footer.module.css';
import {Helmet} from "react-helmet";
function Footer() {
  return (
    
    <>
      <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Bad+Script&family=Marmelad&family=Pacifico&family=Tangerine:wght@700&display=swap" rel="stylesheet"/>
      </Helmet>
      <footer>
          <div className={styles.socialPages}>
            <a href=""><img width={40} height={40} src="/images/facebook.png" alt=""  /></a>
            <a href=""><img width={33} height={33} src="/images/instagram.png"  alt=""  /></a>
            <a href=""><img width={40} height={40} src="/images/twitter.png"  alt=""  /></a>
          </div>
          <a>morpho.jewelry</a>
        </footer>
       </>
  );
}
export default Footer;
