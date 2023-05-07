import styles from "./Good.module.css";
import { useSelector,useDispatch } from "react-redux";
import {useState} from "react";
import { Link} from "react-router-dom";
import Detail from "../Detail";
import { fetchRemoveGoods } from "../../../../../Redux/goodsSlice";
function Good({_id,id,idd,imgmain,title,price,callback,f1,setF1,imgUrl}) {
    const cartItems  = useSelector(state => state.cart.cartItems)
    const [isClicked, setIsClicked] = useState(true);
    const cartItem   = useSelector (state => state.cart.cartItems.find((obj) => obj.id === id   ))
    const dispatch  = useDispatch(); 
    const  pullDatta = (event) => {
        callback(event.target.id)
        setF1(!f1);
     }
     function myConfirm(message) {
        return window.confirm(message);
      }
      const removeGood = () => {
        const confirmed = myConfirm("Ви впевнені, що хочете видалити товар?");
        if (confirmed) {
          dispatch(fetchRemoveGoods(_id));
        }
      };
    return (
         <div className={styles.Item}>
            <div className={styles.editItems}>
                  <img onClick={removeGood}  width={50} height={50} className={styles.delete} src="/images/trashBox.png" alt="" />
                  <Link to={`/admin/${_id}/edit`}><img width={50} height={50} className={styles.edit} src="/images/edit.png" alt="" /></Link>
                  </div>
                  <img height={250} width={299} className={styles.goodPhoto} src={imgmain} alt="item" />
                <h3>{title}</h3>
                <div className={styles.item_footer}>
                <span>{price} ₴</span>
                    <button  id={_id} onClick={(event) => pullDatta(event) } >ДЕТАЛІ</button>
                </div>
            </div> 
    );
}
export default Good;
