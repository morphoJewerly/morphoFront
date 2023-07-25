import Good from "./Good";
import styles from "./Goods.module.css"
import React from "react";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getCatId,setSelected } from "..//../Redux/filterSlice";
import {fetchGoods} from "..//../Redux/goodsSlice";
import axios from "../../axios";
import MyLoader from "./Good/PizzaBlock";
import Categor from "./Categor";
import MyContext from "../../MyContext";
import {Link, useLocation} from "react-router-dom";
import Detail from "./Detail";
function Goods ({}) {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = React.useState(true);
    const categories = ['ВСІ ТОВАРИ',"КАБЛУЧКИ","CЕРЕЖКИ","ПІДВІСКИ","РІЗНЕ"]
    const catId = useSelector((state) => state.filter.catId)
    const goods = useSelector((state) => state.goods.goods)
    const [isClicked, setIsClicked] =  React.useState(true);
    const [idf,setIdf] =  React.useState(0);
     const selected = useSelector((state) => state.filter.selected)
     useEffect(() => {
      dispatch(fetchGoods()).then(
        () => setTimeout(() => {
          setIsLoading(false);
        }, 1000)
      );
    }, []);
  
    const pullOut = (idt) =>{
      setIdf(idt);
    }
    const ar = [1,2,3,4,5,6,7,8]
return(
    <>
    { isClicked ?  
      <main className={styles.main}>
         <div className={styles.head}>
        <div className={styles.header}>
        <h1 className={styles.h1}>MO<span>R</span>PH<span>O</span></h1>
        <h4 className={styles.h4}>THE PIECE <span>O</span>F SKY</h4>
      </div>
      <div className={styles.icons}>
      <Link to="/about"> <img width={30} height={30} className={styles.home} src="/images/h.png" alt="home" /></Link>
      <Link to="/cart"> <img width={40} height={40} className={styles.cart} src="/images/cart2.png" alt="cart" /></Link>  
         </div>
     
      </div>
      <div className={styles.categorios}>
       <Categor categories ={categories} catId={catId} OnclickCatIndex={(id) => dispatch(getCatId(id))}/>
       </div>
    <div className={styles.Items1}>
      {isLoading ? ar.map(( _ , index) => <MyLoader key={index}/>):
      (catId == 0) ? 
      goods.map((item,index) => <Good f1={isClicked} setF1={setIsClicked} callback={(idt)=> pullOut(idt)}  isLoading={isLoading} key={index} {...item}/>):
      goods.filter((obj => (obj.category === catId)))
    .map((item,index)=> <Good f1={isClicked} setF1={setIsClicked} callback={(idt)=> pullOut(idt)}  isLoading={isLoading} key={index} {...item}/>)} 
      </div>
      </main>:
      <Detail f1={isClicked} setF1={setIsClicked} goods = {goods.find(obj => obj._id == idf)}/>
}
      </>
       )}
     export default Goods;