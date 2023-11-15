import styles from "./Posts.module.css"
import React from "react";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getCatId,setSelected } from "..//../Redux/filterSlice";
import {fetchItems} from "..//../Redux/itemsSlice";
import axios from "../../axios";
import MyLoader from "./Post/PizzaBlock";
import MyContext from "../../MyContext";
import {Link, useLocation} from "react-router-dom";
import { selectIsAuth, logout } from '../../Redux/auth';
import Det from "./Det";
import Post from "./Post";
import Header from "../Header";
import Footer from "../Footer";
function Posts ({}) {
    const dispatch = useDispatch();
    const location = useLocation();
    const { pathname } = location;
    const [isLoading, setIsLoading] = React.useState(true);
    const items = useSelector((state) => state.items.items)
    const isAuth = useSelector(selectIsAuth);
    const [isClicked, setIsClicked] =  React.useState(true);
    const [idf,setIdf] =  React.useState(0);
     useEffect(() => {
      dispatch(fetchItems()).then(
        () => setTimeout(() => {
            console.log(items) 
          setIsLoading(false);
        }, 1000)
      );
    }, []);
  
    const pullOut = (idt) =>{
      setIdf(idt);
    }
    const ar = [1,2,3,4,5,6,7,8]
return(
    <>
    { isClicked ?  
      <main className={styles.main}>
        {(isAuth && pathname.startsWith("/admin/posts")) ? 
      null: <Header/>
      }
    <div className={styles.Items1}>
      {isLoading ? ar.map(( _ , index) => <MyLoader key={index}/>):
      items.map((item,index) => <Post f1={isClicked} setF1={setIsClicked} callback={(idt)=> pullOut(idt)}  isLoading={isLoading} key={index} {...item}/>)}
      </div>
      <Footer/>
      </main>
      :
      <Det f1={isClicked} setF1={setIsClicked} items = {items.find(obj => obj._id == idf)}/>
}

      </>
       )}
     export default Posts;