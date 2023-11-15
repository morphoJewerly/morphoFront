import Footer from '../Footer';
import Header from '../Header';
import styles from './TurnAround.module.css';
import {Helmet} from "react-helmet";
function  TurnAround() {
  return (
       <>
        
      <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Bad+Script&family=Marmelad&family=Pacifico&family=Tangerine:wght@700&display=swap" rel="stylesheet"/>
      </Helmet>
      <div className={styles.wrapper}>
      <Header/>
      <div className={styles.container}>
      <h2>Повернення товару</h2>

     <p> Шановні Покупці, Згідно законодавства України, ювелірні вироби належної якості, зазначені в переліку непродовольчих товарів, затвердженому Постановою Кабінету Міністрів України від 19 березня 1994 року № 172, не підлягають поверненню та обміну.</p>

<p>Розуміємо, що бувають різні ситуації,  тому у випадку виявлення Замовником у поставленому товарі недоліків, не застережених продавцем, товар може бути обмінений на інший такого ж самого вигляду та розміру, який повністю влаштовує Замовника за своїми експлуатаційними та естетичними характеристиками.</p>
<p>Також вироби належної якості можна обміняти, якщо вони не підійшли Вам за розміром (кілечка) або будь-яким іншим зовнішніми характеристиками даної моделі. </p>
<p>Обмін проводиться протягом 48 годин з моменту отримання посилки, та за умови, що  виріб немає ознак використання.</p>

</div>
        </div>
        <Footer/>
       </>
  );
}
export default  TurnAround;
