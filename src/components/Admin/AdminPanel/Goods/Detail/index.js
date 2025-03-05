import styles from "./Detail.module.css";
import {addCartItems,increment} from "../../../../../Redux/cartSlice";
import { useSelector,useDispatch } from "react-redux";
import {useState} from "react";
import { Link } from "react-router-dom";
function Detail({goods,f1,setF1}) {
    // {id,img,title,price,isLoading,}
    const cartItems  = useSelector(state => state.cart.cartItems)
    const cartItem   = useSelector (state => state.cart.cartItems.find((obj) => obj._id === goods._id   ))
    const addedCount = cartItem ?  cartItem.count : 0; 
    const dispatch  = useDispatch();
    const addCartItem = () => {
        if (!selectedVariant) return;
        const itemToAdd = {
            _id: goods?.isVariant ? selectedVariant._id : goods._id,
            title: goods?.isVariant ? `${goods.title} - ${selectedVariant?.title}` : goods.title,
            price: goods?.isVariant ? selectedVariant.price : goods.price,
            imgmain: goods?.isVariant ? selectedVariant.imgmain : goods.imgmain,
            category: goods.category,
        };
        dispatch(addCartItems(itemToAdd));
    };
    const _id = goods._id;
    const title = goods.title;
    const price = goods.price;
    const category = goods.category;
    const imgmain = goods.imgmain;
    const [selectedVariant, setSelectedVariant] = useState(goods.variants?.[0] || null);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <img className={styles.imgmain} height={600} width={900} src={goods?.isVariant ? selectedVariant?.imgmain : goods.imgmain}
                     alt={goods.title}/>
                <div className={styles.description}>
                    {/* <div className={styles.description_left_text}><h4>ДЕТАЛІ ПРОДУКТУ</h4></div> */}
                    <div className={styles.description_rigth_paragraph}>
                        <h1>MORPHO</h1>
                        <h3>{goods?.isVariant ? `${goods.title} - ${selectedVariant?.title}` : goods.title}</h3>
                        <h3>{goods?.isVariant ? selectedVariant?.price : goods.price} грн</h3>
                        {goods.variants?.length > 0 && (
                            <div className={styles.variantSelector}>
                                <label>Оберіть варіант:</label>
                                <select style={{width: "100%"}} onChange={(e) => setSelectedVariant(goods.variants[e.target.value])}>
                                    {goods.variants.map((variant, index) => (
                                        <option key={index} value={index}>{variant.title}</option>
                                    ))}
                                </select>
                            </div>
                        )}
                        <p>{goods.text1}</p>
                        <p>{goods.text2}</p>
                        </div>
                </div>
                <div className={styles.sectionPhoto}>
                    <img className={styles.imgsecond} height={266} width={400}
                         src={goods?.isVariant ? selectedVariant?.imgsecond : goods.imgsecond} alt=""/>
                    <img className={styles.imgthird} height={366} width={550}
                         src={goods?.isVariant ? selectedVariant?.imgthird : goods.imgthird} alt=""/>
                 </div>
            </div>
            <div className={styles.buttons}>
                <Link to="/cart">
                    <button onClick={addCartItem} className={styles.button_buy}>КУПИТИ</button>
                </Link>
                <button className={styles.button_back} onClick={() => setF1(!f1)}>НАЗАД</button>
            </div>
            </div>
    );
}
export default Detail;
