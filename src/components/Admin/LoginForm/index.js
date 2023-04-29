import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import styles from './LoginForm.module.css';
import { useDispatch } from "react-redux";
import { fetchUserData } from '../../../Redux/auth';
function LoginForm() {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset , setError, formState: { errors, isValid } } = useForm(
    {
      defaultValues: {
      email: "",
      password:""
    },
    }
  );
  // const apiForm2 = process.env.REACT_APP_API_URL_FORM_TWO
  console.log("greg")
  const onSubmit = async (data) => {
    const values = await dispatch(fetchUserData(data))
    if (!values.payload) return alert("Не вдалося авторизуватись");
    if ("token" in values.payload) window.localStorage.setItem("token", values.payload.token);
  };
  return (
    <>
    <div className={styles.wrapper}>
    <div className={styles.content}>
    <form onSubmit={handleSubmit(onSubmit)}>
    <section id='home'>
    <h1 className={styles.h1}>АВТОРИЗАЦІЯ</h1>
    </section>
     
     
      <div className={styles.item}>
        <label htmlFor="email"></label>
        <input placeholder=" логін" type="email" id="email" {...register('email', { required: true })} />
        {errors.email && <span style={{color:"red"}} >ви не ввели логін</span>}
      </div>

      <div className={styles.item}>
        <label htmlFor="password"></label>
        <input placeholder=" пароль" type="password" id="password" {...register('password', { required: true })} />
        {errors.password && <span style={{color:"red"}} >ви не ввели пароль</span>}
      </div>
    
      <button type="submit">ВВІЙТИ</button>
    </form>
    </div>
    </div>
    </>
  );
}

export default LoginForm;