import styles from './Item.module.css';
import {removeItem,addCartItems,increment,decrement} from "../../../../Redux/cartSlice";
import { useSelector,useDispatch } from "react-redux";
function Item({id,imgmain,price,title,typeid,sizes,type}) {
    const dispatch = useDispatch();
    const cartItems = useSelector (state => state.cart.cartItems)
    const cartItem   = useSelector(state => state.cart.cartItems.find((obj) => (obj.id === id && obj.typeid === typeid ) || obj.price === price ))
    const activeType = useSelector(state => state.goods.activeType)
    const activeSize = useSelector(state => state.goods.activeSize)
    const addedCount = cartItem ?  cartItem.count : 0; 
  return (
            <div className={styles.cart_item}>
              <div className={styles.descr}>
              <img width={100} height={100} src={imgmain} alt="" />
              <div className={styles.title_inner_cart}>
                <h3>{title}</h3>
              </div>
              </div>
              <div className={styles.cart_item_rigth}>
              <div className={styles.count}>
                <img onClick={() => dispatch(decrement({id,price,typeid}))} className={styles.img_min}  width={27} height={27} src="images/minus.png" alt="" />
                <span>{addedCount}</span>
                <img onClick={() => dispatch(increment({id,price,typeid}))} className={styles.img_plus} width={27} height={27} src="images/add.png" alt="" />
              </div>
              <div className={styles.price}>{(price * addedCount).toFixed(2)}</div>
              </div>
              <img onClick={() => dispatch(removeItem({id,typeid,price}))} className={styles.del_cart} width={30} height={30} src="images/delGood.png" alt="" />
            </div>

  );
}
export default Item;
