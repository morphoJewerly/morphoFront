import styles from "./Good.module.css";
import {addCartItems,increment} from "../../../Redux/cartSlice";
import { useSelector,useDispatch } from "react-redux";
import {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Detail from "../Detail";
function Good({id,_id,imgmain,title,price,text1,category,callback,f1,setF1}) {
    const cartItems  = useSelector(state => state.cart.cartItems)
    const [isClicked, setIsClicked] = useState(true);
    const [text, setText] = useState(text1);
    const [titles, settitles] = useState(title);
    const dispatch  = useDispatch(); 
    const addCartItem = (obj) =>{
        dispatch(addCartItems(obj));
    }
    const  pullDatta = (event) => {
        callback(event.target.id)
        setF1(!f1);
     }
     const maxSymbols = 100;
     const maxSymbolsTitle = 30;

  useEffect(() => {
    if (text.length > maxSymbols) {
      setText(text.slice(0, maxSymbols) + "...");
    }
    if (title.length > maxSymbolsTitle) {
        settitles(titles.slice(0, maxSymbolsTitle) + "...");
      }
  }, [text, maxSymbols], [titles, maxSymbolsTitle]);
  
    return (
         <div className={styles.Item}>
                  <img className={styles.goodPhoto} height={250} width={340} src={imgmain} alt="item" />
                <h3>{titles}</h3>
                <div className={styles.item_footer}>
                {/* <span>{text}</span> */}
                <span className={styles.price}>{price} ₴</span>
                    <button className={styles.button}  id={_id} onClick={(event) => pullDatta(event) } ><img width={15} height={15} src="/images/zoom.png" alt="img" />ДЕТАЛІ</button>
                </div>
            </div> 
    );
}
export default Good;
