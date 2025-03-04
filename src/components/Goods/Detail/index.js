import styles from "./Detail.module.css";
import {addCartItems} from "../../../Redux/cartSlice";
import {useSelector, useDispatch} from "react-redux";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

function Detail({goods, f1, setF1}) {
    const cartItems = useSelector(state => state.cart.cartItems);
    const cartItem = useSelector(state => state.cart.cartItems.find(obj => obj._id === goods._id));
    const addedCount = cartItem ? cartItem.count : 0;
    const dispatch = useDispatch();

    const [selectedVariant, setSelectedVariant] = useState(goods.variants?.[0] || null);

    const addCartItem = () => {
        if (!selectedVariant) return;
        const itemToAdd = {
            _id: goods._id,
            title: goods.title + " - " + selectedVariant?.title,
            price: selectedVariant.price,
            imgmain: selectedVariant.imgmain,
            category: goods.category,
        };
        dispatch(addCartItems(itemToAdd));
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>

                <img className={styles.imgmain} height={600} width={900} src={selectedVariant?.imgmain || goods.imgmain}
                     alt={goods.title}/>
                <div className={styles.description}>
                    <div className={styles.description_rigth_paragraph}>
                        <h1>MORPHO</h1>
                        <h3>{goods.title} - {selectedVariant?.title}</h3>
                        <h3>{selectedVariant?.price} грн</h3>
                        {goods.variants?.length > 0 && (
                            <div className={styles.variantSelector}>
                                <label>Оберіть варіант:</label>
                                <select style={{width: "100%"}} onChange={(e) => setSelectedVariant(goods.variants[e.target.value])}>
                                    {goods.variants.map((variant, index) => (
                                        <option key={index} value={index}>{variant.title} - {variant.price} грн</option>
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
                         src={selectedVariant?.imgsecond || goods.imgsecond} alt=""/>
                    <img className={styles.imgthird} height={366} width={550}
                         src={selectedVariant?.imgthird || goods.imgthird} alt=""/>
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