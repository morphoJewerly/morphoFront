import styles from "./Good.module.css";
import {addCartItems,increment} from "../../../Redux/cartSlice";
import { useSelector,useDispatch } from "react-redux";
import {useState} from "react";
import { Link } from "react-router-dom";
import Detail from "../Detail";
function Good({id,idd,imgmain,title,price,callback,f1,setF1}) {
    const cartItems  = useSelector(state => state.cart.cartItems)
    const [isClicked, setIsClicked] = useState(true);
    const cartItem   = useSelector (state => state.cart.cartItems.find((obj) => obj.id === id   ))
    const addedCount = cartItem ?  cartItem.count : 0; 
    const dispatch  = useDispatch(); 
    const addCartItem = (obj) =>{
        dispatch(addCartItems(obj));
    }
    const  pullDatta = (event) => {
        callback(event.target.id)
        setF1(!f1);
     }
    return (
         <div className={styles.Item}>
                  <img height={250} width={299} src={imgmain} alt="item" />
                <h3>{title}</h3>
                <div className={styles.item_footer}>
                <span>{price} $</span>
                    <button  id={idd} onClick={(event) => pullDatta(event) } >ДЕТАЛІ</button>
                </div>
            </div> 
    );
}
export default Good;
