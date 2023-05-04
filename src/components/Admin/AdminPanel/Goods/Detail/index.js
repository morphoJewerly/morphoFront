import styles from "./Detail.module.css";
import { useSelector,useDispatch } from "react-redux";
import {useState} from "react";
import { Link } from "react-router-dom";
function Detail({goods,f1,setF1}) {
    // {id,img,title,price,isLoading,}
    const dispatch  = useDispatch(); 
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
              <div onClick={() => {setF1(!f1)}} className={styles.buttonBack}>
                    <img src="/images/arrow.png" alt="" />
                    <button>ТОВАРИ</button>
                </div> 
                <img height={500} width={900}  src={goods.imgmain}  />
                <div className={styles.description}>
                    <div className={styles.description_left_text}><h4>ДЕТАЛІ ПРОДУКТУ</h4></div>
                    <div className={styles.description_rigth_paragraph}>
                        <h1>MORPHO</h1>
                        <h3>{goods.title}</h3>
                        <p>{goods.text1}</p>
                        <p>{goods.text2}</p>
                        </div>
                </div>
                 <div className={styles.sectionPhoto}>
                 <img height={300} width={400} src={goods.imgsecond}  />
                 <img className={styles.img3} height={350} width={550}  src={goods.imgthird} />
                 </div>
            </div>
            <button  className={styles.button_buy} >КУПИТИ</button>
            </div>
    );
}
export default Detail;
