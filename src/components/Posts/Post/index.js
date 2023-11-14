import styles from "./Post.module.css";
import {addCartItems,increment} from "../../../Redux/cartSlice";
import { useSelector,useDispatch } from "react-redux";
import { fetchRemoveItems } from "../../../Redux/itemsSlice";
import {Link, useLocation} from "react-router-dom";
import {useState,useEffect} from "react";
function Post({id,_id,imgmain,title,text,callback,f1,setF1}) {
    const cartItems  = useSelector(state => state.cart.cartItems)
    const [isClicked, setIsClicked] = useState(true);
    const location = useLocation();
    const { pathname } = location;
    const [texto, setTexto] = useState("");
    const maxLength = 600;
    useEffect(() => {
        if (text.length > maxLength) {
          setTexto(text.slice(0, maxLength) + '...');
        }
      }, []);
    // const [titles, settitles] = useState(title);
    const dispatch  = useDispatch(); 
    const addCartItem = (obj) =>{
        dispatch(addCartItems(obj));
    }
    const  pullDatta = (event) => {
        callback(event.target.id)
        setF1(!f1);
     }
  //    const maxSymbols = 100;
  //    const maxSymbolsTitle = 30;

  // useEffect(() => {
  //   if (text.length > maxSymbols) {
  //     setText(text.slice(0, maxSymbols) + "...");
  //   }
  //   if (title.length > maxSymbolsTitle) {
  //       settitles(titles.slice(0, maxSymbolsTitle) + "...");
  //     }
  // }, [text, maxSymbols], [titles, maxSymbolsTitle]);
  function myConfirm(message) {
    return window.confirm(message);

  }
  const removePost = () => {
    const confirmed = myConfirm("Ви впевнені, що хочете видалити статтю?");
    if (confirmed) {
      dispatch(fetchRemoveItems(_id));
    }
  };
    return (
         <div className={styles.Item}>
                  {/* <img className={styles.goodPhoto} height={226} width={340} src={imgmain} alt="item" /> */}
                  {pathname.startsWith("/admin/posts") ? 
                  <div className={styles.editItems}>
                  <img  onClick={removePost}  width={50} height={50} className={styles.delete} src="/images/trashBox.png" alt="" />
                  <Link to={`/admin/${_id}/editpost`}><img width={50} height={50} className={styles.edit} src="/images/edit.png" alt="" /></Link>
                  </div> : null}
                <h3 className={styles.title} >{title}</h3>
                <div className={styles.item_footer}>
                <div dangerouslySetInnerHTML={{ __html: texto ? texto : text }} />
                {/* <span>{texto ? texto : text }
                </span> */}
                <p className={styles.text_post}> </p>
                    <button className={styles.button}  id={_id} onClick={(event) => pullDatta(event) } >ДЕТАЛЬНІШЕ</button>
                </div>
            </div> 
    );
}
export default Post;