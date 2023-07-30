import styles from "./Detail.module.css";
import {addCartItems,increment} from "../../../Redux/cartSlice";
import { useSelector,useDispatch } from "react-redux";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
function Detail({goods,f1,setF1}) {
    // {id,img,title,price,isLoading,}
    const cartItems  = useSelector(state => state.cart.cartItems)
    const cartItem   = useSelector (state => state.cart.cartItems.find((obj) => obj._id === goods._id   ))
    const addedCount = cartItem ?  cartItem.count : 0; 
    const dispatch  = useDispatch(); 
    const addCartItem = (obj) =>{
        dispatch(addCartItems(obj));
    }
    const _id = goods._id;
    const title = goods.title;
    const price = goods.price;
    const category = goods.category;
    const imgmain = goods.imgmain;
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); 
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <img className={styles.imgmain} height={600} width={900}  src={goods.imgmain}  />
                <div className={styles.description}>
                    {/* <div className={styles.description_left_text}><h4>ДЕТАЛІ ПРОДУКТУ</h4></div> */}
                    <div className={styles.description_rigth_paragraph}>
                        <h1>MORPHO</h1>
                        <h3>{goods.title}</h3>
                        <p>{goods.text1}</p>
                        <p>{goods.text2}</p>
                        </div>
                </div>
                 <div className={styles.sectionPhoto}>
                 <img className={styles.imgsecond} height={266} width={400} src={goods.imgsecond}  />
                 <img className={styles.imgthird} height={366} width={550}  src={goods.imgthird} />
                 </div>
            </div>
            <div className={styles.buttons}>
            <Link to="/cart">
            <button  onClick={()=>addCartItem({_id,imgmain,title,price,category})}  className={styles.button_buy}  >КУПИТИ</button>

                  </Link>
                  <button  className={styles.button_back} onClick={() => {setF1(!f1)}} >НАЗАД</button>
                  </div>
            </div>
    );
}
export default Detail;
