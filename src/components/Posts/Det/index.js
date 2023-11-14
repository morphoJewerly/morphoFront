import styles from "./Det.module.css";
import { addCartItems, increment } from "../../../Redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../../Header";
function Det({ items, f1, setF1 }) {
    // {id,img,title,price,isLoading,}
    const cartItems = useSelector((state) => state.cart.cartItems);
    const cartItem = useSelector((state) =>
        state.cart.cartItems.find((obj) => obj._id === items._id)
    );
    const addedCount = cartItem ? cartItem.count : 0;
    const location = useLocation();
    const { pathname } = location;
    const dispatch = useDispatch();
    const addCartItem = (obj) => {
        dispatch(addCartItems(obj));
    };
    const _id = items._id;
    const title = items.title;
    const text = items.text;
    const imgmain = items.imgmain;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.description}>
                    {/* <div className={styles.description_left_text}><h4>ДЕТАЛІ ПРОДУКТУ</h4></div> */}
                    <div className={styles.description_rigth_paragraph}>
                        <h3 className={styles.h3}>{title}</h3>
                      { imgmain && <img
                            className={styles.imgmain}
                            height={300}
                            width={500}
                            src={imgmain}
                        /> } 
                         <div dangerouslySetInnerHTML={{ __html: text }} />
                    </div> 
                </div>
                {pathname.startsWith("/admin/posts") ? (
                    <Link to="/admin/posts">
                        {" "}
                        <button
                            className={styles.button_back}
                            onClick={() => {
                                setF1(!f1);
                            }}
                        >
                            НАЗАД
                        </button>{" "}
                    </Link>
                ) : (
                    <Link to="/posts">
                        {" "}
                        <button
                            className={styles.button_back}
                            onClick={() => {
                                setF1(!f1);
                            }}
                        >
                            НАЗАД
                        </button>{" "}
                    </Link>
                )}
            </div>
        </div>
    );
}
export default Det;
