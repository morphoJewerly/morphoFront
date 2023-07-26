import React from "react";
import styles from "./Categor.module.css";
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
function Categor ({catId,OnclickCatIndex,categories}) { 
return(
    <>
    <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Bad+Script&family=Marmelad&family=Pacifico&family=Tangerine:wght@700&display=swap" rel="stylesheet"/>
      </Helmet>
    <nav className={styles.catNav}>
      <ul className={styles.catItems}>
{categories.map((value,i) => <li key={i} onClick={()=>OnclickCatIndex(i)}  className={catId == i ? styles.active : styles.catItem}>{value}</li>)}
<Link to="/about"><li className={styles.catItem}>ПРО МЕНЕ</li></Link>
<Link to="/cart"><li className={styles.catItem}>КОШИК</li></Link>
      </ul>
    </nav>
       </>
         )}
     export default Categor;