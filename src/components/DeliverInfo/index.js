import Footer from '../Footer';
import Header from '../Header';
import styles from './DeliverInfo.module.css';
import {Helmet} from "react-helmet";
function  DeliverInfo() {
  return (
       <>
        
      <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Bad+Script&family=Marmelad&family=Pacifico&family=Tangerine:wght@700&display=swap" rel="stylesheet"/>
      </Helmet>
      <div className={styles.wrapper}>
      <Header/>
      <div className={styles.container}>
      <h3>Інформація про доставку</h3>
<p className={styles.pCenter}>Для надання логістичних послуг команда «Morpho» працює у партнерстві з перевізником «Нова пошта».</p>

<h4>Способи оплати:</h4>
<ul>
<li>Передоплата вартості виробу на рахунок, коли виріб готовий і замовника по фото та відео все влаштовує. Ви оплачуєте тільки поштову послугу доставки посилки.</li>
<li>При замовленні на суму від 3500 гривень, доставка на відділення Нової Пошти — безкоштовно.</li>
<li>Накладеного платежу та повернення немає. </li>
</ul>


<p>Після відправки замовлення Вам повідомляється номер товарно-транспортної накладної.</p>

<p>Всі товари відправляються службою доставки в усі населені пункти, що обслуговуються, «на склад перевізника».</p>

<p>Бажаємо вдалих покупок!</p>

</div>
        </div>
        <Footer/>
       </>
  );
}
export default  DeliverInfo;
