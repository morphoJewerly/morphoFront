import styles from './Bonus.module.css';
import {Helmet} from "react-helmet";
function Bonus() {
  return (
       <>
      <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Bad+Script&family=Marmelad&family=Pacifico&family=Tangerine:wght@700&display=swap" rel="stylesheet"/>
      </Helmet>
      <div className={styles.wrapper}>
        <h1 className={styles.h1}>АКЦІЇ ТА ВИГІДНІ ПРОПОЗИЦІЇ</h1>
    <div className={styles.items}>
    <div className={styles.item}>
        <span className={styles.number}>01</span>
        <div  className={styles.item_header}>
        <img width={50} height={50} src="/images/delivery.png" alt="" srcset="" />
        <h2 className={styles.title}>БЕЗКОШТОВНА ДОСТАВКА</h2>
        </div>
        <p className={styles.descr}>При замовленні на суму від 3000 грн - доставка безкоштовно по Україні.</p>
        </div>
        <div className={styles.item}>
        <span className={styles.number}>02</span>
        <div  className={styles.item_header}>
        <img width={50} height={50} src="/images/guarantee.png" alt="" srcset="" />
        <h2 className={styles.title}>ГАРАНТІЯ НА ВСІ ВИДИ ПРОДУКЦІЇ</h2>
        </div>
        <p className={styles.descr}>Гарантія на вироби - 2 роки з моменту отримання (гарантія не поширюється на дефект не виробничого характеру).</p>
        </div>
        <div className={styles.item}>
        <span className={styles.number}>03</span>
        <div  className={styles.item_header}>
        <img width={50} height={50} src="/images/brash.png" alt="" srcset="" />
        <h2 className={styles.title}>БЕЗКОШТОВНА ЧИСТКА ВИРОБІВ</h2>
        </div>
        <p className={styles.descr}>Також після замовлення на протязі 2-х років ви отримаєте можливість безкоштовної чистки свого виробу.</p>
        </div>
    </div>
    
         
        </div>
       </>
  );
}
export default  Bonus;
