import styles from './Home.module.css';
import { Helmet } from "react-helmet";
import { useLocation} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../Redux/auth';
import Preload from '../../Preload';
function Home() {
  const location = useLocation();
  const { pathname } = location;
  const isAuth = useSelector(selectIsAuth);
  const [isEditable, setIsEditable] = useState(false);
  const [content, setContent] = useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const handleTextClick = () => {
    if (isAuth && pathname.startsWith("/admin")) {
      setIsEditable(true);
    }
  };

  const handleTextChange = (event, key) => {
    setContent({ ...content, [key]: event.target.value });
  };
  
  const id = "644e8566ff074ba376daf92e";
  const handleSaveClick = async () => {
    try {
      await axios.patch(`/mainPage/${id}`, content);
      setIsEditable(false);
    } catch (error) {
      console.error(error);
    }
  };
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/mainPage`);
        const data = response.data;
        setContent(data[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData().then(
      () => setTimeout(() => {
        setIsLoading(false);
      }, 500)
    );
  }, []);

  return (
    <>
      <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet"/>


      </Helmet>
      {/* <Header/> */}
    { isLoading ?  <Preload/> :
      <main className={styles.main}  >
        {/* <h1 className={styles.title} onClick={handleTextClick}>
          {isEditable ? (
            <textarea className={styles.mainCitate} type="text" value={content.mainCitate} onChange={(e) => handleTextChange(e, "mainCitate")} />
          ) : (
            content.mainCitate
          )}
        </h1>
        <img src="/images/minePhoto.jpg" className={styles.mainPhoto} alt="" />
        <div className={styles.content}>
          <div className={styles.left_content}>
            <div className={styles.left_content_item}>
              <img className={styles.blockPhoto} src="/images/im1.jpg" alt="" />
              <p className={styles.descr} onClick={handleTextClick} >
              {isEditable ? (
           <textarea className={styles.descrInput} type="text" value={content.descr1} onChange={(e) => handleTextChange(e, "descr1")} />
          ) : (
            content.descr1
          )}
                </p>
            </div>
            <div className={styles.left_content_item}>
              <img className={styles.blockPhoto} src="/images/im2.jpg" alt="" />
              <p className={styles.descr} onClick={handleTextClick} >
              {isEditable ? (
            <textarea className={styles.descrInput} type="text" value={content.descr2} onChange={(e) => handleTextChange(e, "descr2")} />
          ) : (
            content.descr2
          )}
                </p>
            </div>
          </div>
          <div className={styles.rigth_content}>
            <h1 onClick={handleTextClick} >{isEditable ? (
           <textarea  className={styles.h1Input} type="text" value={content.h1} onChange={(e) => handleTextChange(e, "h1")} />
          ) : (
            content.h1
          )}</h1>
            <div className={styles.rigth_content_text}>
              <p onClick={handleTextClick}> {isEditable ? (
            <textarea className={styles.text1} type="text" value={content.text1} onChange={(e) => handleTextChange(e, "text1")} />
          ) : (
            content.text1
          )}</p>
              <div className={styles.line}></div>
              <p onClick={handleTextClick}> {isEditable ? (
          <textarea className={styles.text1} type="text" value={content.text2} onChange={(e) => handleTextChange(e, "text2")} />
          ) : (
            content.text2
          )}</p>
              <div className={styles.line}></div>
              <p onClick={handleTextClick}> {isEditable ? (
           <textarea className={styles.text2} type="text" value={content.text3} onChange={(e) => handleTextChange(e, "text3")} />
          ) : (
            content.text3
          )}</p>
            </div>
          </div>
        </div>
        <div className={styles.bottom_content}>
          <div className={styles.left_content_item}>
            <img className={styles.blockPhoto} src="/images/im3.jpg" alt="" />
            <p className={styles.descr} onClick={handleTextClick} >
              {isEditable ? (
           <textarea className={styles.descrInput} type="text" value={content.descr3} onChange={(e) => handleTextChange(e, "descr3")} />
          ) : (
            content.descr3
          )}
                </p>
          </div>
          <div className={styles.left_content_item}>
            <img className={styles.blockPhoto} src="/images/im4.jpg" alt="" />
            <p className={styles.descr} onClick={handleTextClick} >
              {isEditable ? (
            <textarea className={styles.descrInput} type="text" value={content.descr4} onChange={(e) => handleTextChange(e, "descr4")} />
          ) : (
            content.descr4
          )}
                </p>
          </div>
          <div className={styles.left_content_item}>
            <img className={styles.blockPhoto} src="/images/im5.jpg" alt="" />
            <p className={styles.descr} onClick={handleTextClick} >
              {isEditable ? (
           <textarea className={styles.descrInput} type="text" value={content.descr5} onChange={(e) => handleTextChange(e, "descr5")} />
          ) : (
            content.descr5
          )}
                </p>
          </div>
          </div>
          {isEditable ?  <button onClick={handleSaveClick}>ЗБЕРЕГТИ</button> : ""} */}
          <div className={styles.container}>
          {/* <img src="/images/minePhoto.jpg" className={styles.mainPhoto} alt="" />   */}
          <img className={styles.blockPhoto} src="/images/im1.jpg" alt="" /> 
          <p className={styles.descr} onClick={handleTextClick} >
              {isEditable ? (
           <textarea className={styles.descrInput} type="text" value={content.descr1} onChange={(e) => handleTextChange(e, "descr1")} />
          ) : (
            content.descr1
          )}
                </p>
          <img className={styles.blockPhoto} src="/images/im2.jpg" alt="" />
          <p className={styles.descr} onClick={handleTextClick} >
              {isEditable ? (
            <textarea className={styles.descrInput} type="text" value={content.descr2} onChange={(e) => handleTextChange(e, "descr2")} />
          ) : (
            content.descr2
          )}
                </p>
          <img  className={styles.blockPhoto} src="/images/im3.jpg" alt="" />
          <p className={styles.descr} onClick={handleTextClick} >
              {isEditable ? (
           <textarea className={styles.descrInput} type="text" value={content.descr3} onChange={(e) => handleTextChange(e, "descr3")} />
          ) : (
            content.descr3
          )}
                </p>
          <img className={styles.blockPhoto} src="/images/im4.jpg" alt="" />
          <p className={styles.descr} onClick={handleTextClick} >
              {isEditable ? (
            <textarea className={styles.descrInput} type="text" value={content.descr4} onChange={(e) => handleTextChange(e, "descr4")} />
          ) : (
            content.descr4
          )}
                </p>
          <img className={styles.blockPhoto} src="/images/im5.jpg" alt="" />
          <p className={styles.descr} onClick={handleTextClick} >
              {isEditable ? (
           <textarea className={styles.descrInput} type="text" value={content.descr5} onChange={(e) => handleTextChange(e, "descr5")} />
          ) : (
            content.descr5
          )}
                </p>
              {isEditable ?  <button className={styles.buttonSave} onClick={handleSaveClick}>ЗБЕРЕГТИ</button> : ""} 
          </div>
          </main>
          }
        </>
  )}
  export default Home;