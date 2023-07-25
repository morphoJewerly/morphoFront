import styles from './Item.module.css';
import {removeItem,addCartItems,increment,decrement} from "../../../../Redux/cartSlice";
import { useSelector,useDispatch } from "react-redux";
function Item({_id,imgmain,price,title,typeid,sizes,type}) {
    const dispatch = useDispatch();
    const cartItems = useSelector (state => state.cart.cartItems)
    const cartItem   = cartItems.find((obj) => (obj._id == _id ))
    const addedCount = cartItem ?  cartItem.count : 0; 
  return (
            <div className={styles.cart_item}>
              <div className={styles.descr}>
              <img width={50} height={50} src={imgmain} alt="" />
              <div className={styles.title_inner_cart}>
                <h3>{title}</h3>
              </div>
              </div>
              <div className={styles.cart_item_rigth}>
              <div className={styles.count}>
                <img onClick={() => dispatch(decrement({_id}))} className={styles.img_min}  width={27} height={27} src="images/minus.png" alt="" />
                <span>{addedCount}</span>
                <img onClick={() => dispatch(increment({_id}))} className={styles.img_plus} width={27} height={27} src="images/add.png" alt="" />
              </div>
              <div className={styles.price}>{(price * addedCount)}₴</div>
              </div>
              <img onClick={() => dispatch(removeItem({_id}))} className={styles.del_cart} width={25} height={25} src="images/close.png" alt="" />
            </div>
  );
}
export default Item;
