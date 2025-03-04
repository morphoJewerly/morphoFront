import Good from "./Good";
import styles from "./GoodsAdmin.module.css"
import React from "react";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getCatId,setSelected } from "../../../../Redux/filterSlice";
import {fetchGoods, setGoods} from "../../../../Redux/goodsSlice";
import axios from "../../../../axios";
import MyLoader from "./Good/PizzaBlock";
import Categor from "./Categor";
import MyContext from "../../../../MyContext";
import Detail from "./Detail";
function GoodsAdmin () {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = React.useState(true);
    const categories = [null,"КАБЛУЧКИ","CЕРЕЖКИ", "CЕРЕЖКИ ПУСЕТИ", "ПІДВІСКИ/КУЛОНИ","ПІДВІСКИ З ЛАНЦЮЖКОМ", "НАБОРИ", "БРАСЛЕТИ НА НОГУ", "БРАСЛЕТИ НА РУКУ", "ЗНАЧКИ", "КАФИ", "КОЛЬЄ", "ЛАНЦЮЖКИ", "ЧОКЕРИ", "СОТУАРИ"]
    const catId = useSelector((state) => state.filter.catId)
    const goods = useSelector((state) => state.goods.goods )
    const [isClicked, setIsClicked] =  React.useState(true);
    const [idf,seiIdf] =  React.useState(0);
     const selected = useSelector((state) => state.filter.selected)
    
     useEffect(() => {
      dispatch(fetchGoods());
      setIsLoading(false)
     },[])
//     const dbt = [
//       {"img":"/images/im1.jpg", "title": "Папероні",       "price":"23" , "id" : 1, "sizes":[26,30,40], "type" : [0,1],"category" : 1,"rating":8},                                                            
//       {"img":"/images/im2.jpg", "title": "Сирна",          "price":"21" , "id" : 2, "sizes":[26,30],    "type" : [0],  "category" : 1,"rating":3},
//       {"img":"/images/im3.jpg", "title": "Азіатська",      "price":"32" , "id" : 3, "sizes":[26,30,40], "type" : [1],  "category" : 3,"rating":6},
//       {"img":"/images/im4.jpg", "title": "Ананас з куркою","price":"17" , "id" : 4, "sizes":[26,30,40], "type" : [0,1],"category" : 1,"rating":2},
//       {"img":"/images/im1.jpg", "title": "Маргарита",      "price":"40" , "id" : 5, "sizes":[30,40],    "type" : [0,1],"category" : 2,"rating":6},
//       {"img":"/images/im2.jpg", "title": "Українська",     "price":"20" , "id" : 6, "sizes":[26,30,40], "type" : [0],  "category" : 2,"rating":5},
//       {"img":"/images/im3.jpg", "title": "Неополітанська", "price":"19" , "id" : 7, "sizes":[26,40],    "type" : [0,1],"category" : 4,"rating":4},
//       {"img":"/images/im4.jpg", "title": "Чізбургер-піца", "price":"14" , "id" : 8, "sizes":[26],       "type" : [0,1],"category" : 5,"rating":1}
// ]
//     let  sortArr = (arr) => {
//    ( arr.length !=0) ?  
//     (selected == 2) ? arr.sort((a, b) => a.title.localeCompare(b.title)):
//     (selected == 1)? arr.sort((a, b) => a.price - b.price): arr.sort((a, b) => b.rating - a.rating)
//     : 
//      arr = [];
//   }
//  console.log(selected)
//  const goods1 =  sortArr(goods);
//  console.log(goods1);
    // const filtredGoods = goods.filter((item) =>
    // item.title.toLowerCase().includes(inputValued.toLowerCase())
    //      ) 
    const pullOut = (idt) =>{
      console.log(idt)
      seiIdf(idt);
    }
return(
    <>
    { isClicked ?  
      <main className={styles.main}>
      <div className={styles.categorios}>
       <Categor categories ={categories} catId={catId} OnclickCatIndex={(id) => dispatch(getCatId(id))}/>
       {/* <Sort sortList={sortList} /> */}
       </div>
        {/* <h1>{categories.map((value,i) => catId === i ? value: "")}</h1> */}
    <div className={styles.Items1}>
      {isLoading ? [...Array(8)].map((_ , index) => <MyLoader key={index}/>):
      (catId == 0) ? 
      goods.map((item,index) => <Good  f1={isClicked} setF1={setIsClicked} callback={(idt)=> pullOut(idt)}  isLoading={isLoading} key={index} {...item}/>):
      goods.filter((obj => (obj.category === catId)))
    .map((item,index)=> <Good  f1={isClicked} setF1={setIsClicked} callback={(idt)=> pullOut(idt)}  isLoading={isLoading} key={index} {...item}/>)} 
      </div>
      </main>:
      <Detail  f1={isClicked} setF1={setIsClicked} goods = {goods.find(obj => obj._id == idf)}/>
}
      </>
       )}
     export default GoodsAdmin;