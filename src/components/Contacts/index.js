import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import styles from './Contacts.module.css';
import Header from '../Header';
import Footer from '../Footer';
function Contacts() {
  const { register, handleSubmit, reset , formState: { errors } } = useForm();
  const apiForm = process.env.REACT_APP_API_URL_FORM_ONE
  const onSubmit = (data) => {
    axios.post(apiForm, data)
    .then((response) => {
      if (response.status === 200) {
        alert('Form submitted successfully!');
        reset();
      } else {
        throw new Error(response.statusText);
      }
    })
    .catch((error) => {
      console.error(error);
      alert('Form submission failed.');
    });
  };
  return (
    <>
    <Header/>
    <div className={styles.wrapper}>
    <div className={styles.content}>
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
    <div className={styles.contWrapper}>
       <h3>Виготовлення, ремонт та реставрація прикрас.</h3>
      <img width={60} height={60} src="/images/ph.jpg" alt="phone" />
       {/* <a href="tel:+380977033730">+380 (97) 703-37-30</a> */}
       <a href="tel:+380631964616">+380 (63) 196-46-16</a>
   </div>
      <div className={styles.header_form}>
      <div className={styles.item}>
        <label htmlFor="name"></label>
        <input placeholder="ПРІЗВИЩЕ ІМ'Я" type="text" id="name" {...register('name', { required: true })} />
        {errors.name && <span style={{color:"red"}} >всі поля мають бути заповнені</span>}
      </div>
      <div className={styles.item}>
        <label htmlFor="email"></label>
        <input placeholder=" E-MAIL" type="email" id="email" {...register('email', { required: true })} />
        {errors.email && <span style={{color:"red"}} >всі поля мають бути заповнені</span>}
      </div>
      </div>
      <div className={styles.item}>
        <label htmlFor="phone"></label>
        <input placeholder=" ТЕЛЕФОН"  type="phone" id="phone" {...register('phone', { required: true })} />
        {errors.phone && <span style={{color:"red"}} >всі поля мають бути заповнені</span>}
      </div>
      <div className={styles.item}>
  <label htmlFor="details"></label>
  <select className={styles.select}  id="details" {...register('details', { required: true })}>
    <option className={styles.option} value="ДЕТАЛІ ЗАМОВЛЕННЯ">ДЕТАЛІ ЗАМОВЛЕННЯ</option>
    <option className={styles.option1} value="РЕМОНТ ТА РЕСТАВРАЦІЯ">РЕМОНТ ТА РЕСТАВРАЦІЯ</option>
    <option className={styles.option1} value="СПІВПРАЦЯ">СПІВПРАЦЯ</option>
    <option className={styles.option} value="ІНДИВІДУАЛЬНІ ЗАМОВЛЕННЯ">ІНДИВІДУАЛЬНІ ЗАМОВЛЕННЯ</option>
  </select>
  {errors.details && <span style={{color:"red"}}>всі поля мають бути заповнені</span>}
</div>
      <div className={styles.item}>
      <label htmlFor="letter"></label>
      <textarea className={styles.textarea} placeholder=" ПОВІДОМЛЕННЯ" rows="4" cols="50" type="text" id="letter" {...register('letter', { required: true })}/>
      {errors.letter && <span style={{color:"red"}} >всі поля мають бути заповнені</span>}
      </div>
      <button className={styles.button} type="submit">Надіслати</button>
    </form>
    </div>
    </div>
    <Footer/>
    </>
  );
}

export default Contacts;