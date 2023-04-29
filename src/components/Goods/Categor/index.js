import React from "react";
import styles from "./Categor.module.css";
import {Helmet} from "react-helmet";
function Categor ({catId,OnclickCatIndex,categories}) { 
return(
    <>
    <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Bad+Script&family=Marmelad&family=Pacifico&family=Tangerine:wght@700&display=swap" rel="stylesheet"/>
      </Helmet>
    <nav className={styles.catNav}>
      <ul className={styles.catItems}>
{categories.map((value,i) => <li key={i} onClick={()=>OnclickCatIndex(i)}  className={catId == i ? styles.active : styles.catItem}>{value}</li>)}
      </ul>
    </nav>
       </>
         )}
     export default Categor;