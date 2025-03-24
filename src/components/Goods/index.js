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
import {Link, useLocation, useNavigate} from "react-router-dom";
import Detail from "./Detail";
import Accordion from '../Accordion';
import Footer from "../Footer";

function Goods ({}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = React.useState(true);
    const categories = [null,"КАБЛУЧКИ","CЕРЕЖКИ", "CЕРЕЖКИ ПУСЕТИ", "ПІДВІСКИ/КУЛОНИ","ПІДВІСКИ З ЛАНЦЮЖКОМ", "НАБОРИ", "БРАСЛЕТИ НА НОГУ", "БРАСЛЕТИ НА РУКУ", "ЗНАЧКИ", "КАФИ", "КОЛЬЄ", "ЛАНЦЮЖКИ", "ЧОКЕРИ", "СОТУАРИ"]
    const catId = useSelector((state) => state.filter.catId)
    const goods = useSelector((state) => state.goods.goods)
    const [isClicked, setIsClicked] =  React.useState(true);
    const [hideInfo, sethideInfo] =  React.useState(false);
    const [isOpenBurgerMenu, setIsOpenBurgerMenu] = React.useState(false);
    const [idf,setIdf] =  React.useState(0);
     const selected = useSelector((state) => state.filter.selected)
     const count = useSelector((state) => state.cart.totalCount)
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
        {/* <div className={styles.header}>
        <h1 className={styles.h1}>MO<span>R</span>PH<span>O</span></h1>
        <h4 className={styles.h4}>THE PIECE <span>O</span>F SKY</h4>
      </div> */}
      <div className={`${styles.burger_menu} ${isOpenBurgerMenu ? styles.open : ""}`}>
          <div className={styles.burger_menu_container}>
              <Link to="/about" className={styles.home_link}>Головна <img width={20} height={20} className={styles.home} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqRoWspnZm3dBSrLQaSlkuK5X1u13UpfUjdA&usqp=CAU"} alt="home" /></Link>
              <Categor categories={categories} catId={catId} OnclickCatIndex={(id) => dispatch(getCatId(id))}/>
              <Link to={"/oferta"} className={styles.added_item}>Угода користувача</Link>
              <Link to={"/deliverinfo"} className={styles.added_item}>Інформація про доставку</Link>
              <Link to={"/turnaround"} className={styles.added_item}>Повернення товару</Link>
          </div>
      </div>
      <div className={styles.icons}>
      <span onClick={() => setIsOpenBurgerMenu(!isOpenBurgerMenu)}>
          {!isOpenBurgerMenu ? <div className={styles.burger}>
              <div />
              <div />
              <div />
          </div> :
          <svg fill="#000000" width="23px" height="23px" viewBox="0 0 16 16" className={styles.cross}>
              <path d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z" fillRule="evenodd"/>
          </svg>}
      </span>
      { !hideInfo ?
          <div className={styles.logo_container} onClick={() => navigate("/about")}>
              <img src={"/images/dark-logo.png"} alt={"logo"}/>
              <p className={styles.p}>THE PIECE OF SKY</p>
          </div>
      :
      <div className={styles.info}>
      <Accordion/>
      <img onClick={() => {sethideInfo(true)}} className={styles.remimg} width={15} height={15} src="/images/rmv.svg" alt="cart" />
      </div>
       }
      <Link to="/cart"> <div className={styles.cart}>
      <img width={35} height={35} src="/images/ct.png" alt="cart" />
        <span className={styles.badge}>{count}</span>
    </div></Link>
         </div>

      </div>
      <div className={styles.categorios}>
       {/*<Categor categories={categories} catId={catId} OnclickCatIndex={(id) => dispatch(getCatId(id))}/>*/}
       </div>
    <div className={styles.Items1}>
      {isLoading ? ar.map(( _ , index) => <MyLoader key={index}/>):
      (catId == 0) ?
      goods.map((item,index) => <Good f1={isClicked} setF1={setIsClicked} callback={(idt)=> pullOut(idt)}  isLoading={isLoading} key={index} {...item}/>):
      goods.filter((obj => (obj.category === catId)))
    .map((item,index)=> <Good f1={isClicked} setF1={setIsClicked} callback={(idt)=> pullOut(idt)}  isLoading={isLoading} key={index} {...item}/>)}
      </div>
      <Footer/>
      </main>:
      <Detail f1={isClicked} setF1={setIsClicked} goods = {goods.find(obj => obj._id == idf)}/>
}
      </>
       )}
     export default Goods;
