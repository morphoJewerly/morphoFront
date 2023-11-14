import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from "react-router-dom";
import axios from '../../../../axios';
import styles from './CreateItem.module.css';
import Header from '../../../Header';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Стилі Quill
function CreateItem(props) {
  const [imgUrl, setImgUrl] =  React.useState("");
  const {id} = useParams();
  const [text, setText] = React.useState('');
  const isEditing = Boolean(id)
  const { register, handleSubmit, reset , setValue , formState: { errors } } = useForm();
  // const apiForm2 = process.env.REACT_APP_API_URL_FORM_TWO
  const onSubmit = (data) => {
    const newData = { ...data, imgmain: imgUrl, text };
    { isEditing ?  axios.patch(`/items/${id}`, newData)
    .then(function (response) {
      alert("Статтю успішно відредаговано)");
      reset()
    })
    .catch(function (error) {
      alert("Не вдалося відредагувати статтю) Спробуйте будь ласка пізніше)");
    })
     : axios.post("/items", newData)
    .then(function (response) {
      alert("Статтю успішно додано)");
      reset()
    })
    .catch(function (error) {
      alert("Не вдалося додати статтю) Спробуйте будь ласка пізніше)");
    }); }
  };


  const handleChange = (value) => {
    setText(value);
  };
  const handleChangeFile = async (event) => {
    try {
        const formData = new FormData ()
        const file = event.target.files[0];
        formData.append('image', file)
        const {data} = await axios.post("/upload", formData)
        setImgUrl(`https://walrus-app-fq6cy.ondigitalocean.app${data.url}`);
        
       
    } catch (error) {
      console.warn(error);
      alert("Помилка при завантаженні файлу")
    }
  }
  
  React.useEffect(()=>{
    if (id) {
    axios.get(`/items/${id}`).then( ({data}) => {
      setValue("idd", data.idd);
      setValue("title", data.title.toString());
      setText(data.text.toString());
      setImgUrl(data.imgmain);

    } ).catch((err) =>{
      console.log(err);
    })
  }
  },[])

  return (
    <>
    <Header/>
    <div className={styles.wrapper}>
    <div className={styles.content}>
    <div className={styles.item}>
  <label htmlFor="img1">Головне фото товару:</label>
  <input 
    onChange={handleChangeFile}   
    className={styles.inputPhoto} 
    placeholder=" фото 1" 
    type="file" 
    id="img1" 
  />
  {imgUrl && <img width={100} height={100} src={imgUrl} alt="product" />}
</div>

    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      
      <div className={styles.item}>
        <label htmlFor="title"></label>
        <input   className={styles.input}  placeholder=" заголовок статті" type="text" id="name" {...register('title', { required: true })} />
        {errors.title && <span style={{color:"red"}} >всі поля мають бути заповнені</span>}
      </div>
      <ReactQuill
  value={text}
  onChange={handleChange}
  modules={{
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ color: [] }, { background: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['clean'],
    ],
  }}
  formats={[
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
  ]}
/>
      {/* <div className={styles.item}>
      <label htmlFor="text"></label>
      <textarea  placeholder=" опис товару 1" rows="4" cols="50" type="text" id="text" {...register('text', { required: true })}/>
      {errors.text && <span style={{color:"red"}} >всі поля мають бути заповнені</span>}
      </div> */}
    <div className={styles.itemm}>

    </div>
      
      <button className={styles.button} type="submit">
       { isEditing ? "ЗБЕРЕГТИ" : "СТВОРИТИ СТАТТЮ"  }
        </button>
    </form>
    
    </div>
    </div>
    </>
  );
}

export default  CreateItem;
