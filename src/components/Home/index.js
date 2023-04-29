import styles from './Home.module.css';
import {Helmet} from "react-helmet";

function Home() {
  return (
   <>
      <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Bad+Script&family=Marmelad&family=Pacifico&family=Tangerine:wght@700&display=swap" rel="stylesheet"/>
      </Helmet>
             <main>
              <h1 className={styles.title}>«Єдиний спосіб втечі від банальності - Мистецтво»</h1>
              <img  src="/images/minePhoto.jpg" className={styles.mainPhoto} alt="" />
              <div className={styles.content}>
              <div className={styles.left_content}>
              <div className={styles.left_content_item}>
                <img  className={styles.blockPhoto} src="/images/im1.jpg" alt="" />
                 <p>Все починається з натхнення та приємних ідей.</p>
                </div>
                <div className={styles.left_content_item}>
                <img className={styles.blockPhoto}   src="/images/im2.jpg" alt="" />
                 <p>Потім з'являється мета і я концентруюсь на ній.</p>
                </div>
                </div>
                <div className={styles.rigth_content}>
                  <h1>ПОТРІБНО ВІРИТИ У СЕБЕ І СВОЇ БАЖАННЯ, УСЕ ЗДІЙСНИТЬСЯ, УСЕ РЕАЛЬНО...</h1>
                  <div className={styles.rigth_content_text}>
                  <p>Привіт, вітаю на сайті "MORPHO-the piece of sky"! Мене звати Наталя, я - засновник та виконавець MORPHO - the.piece.of.sky Я народилась та виросла на Хмельнитчині, там, де поля пахнуть теплом і пшеницею, де блакитне глибоке небо. Потім я навчалась 5 років у Івано – Франківську - в колоритному містечку, де кожна творча людина знайде для себе щось цікаве, а головне - «своє». Перші роки були у кузні, проте який з мене коваль?)) на останньому курсі я зрозуміла, що робота з меншими деталями і іншим металом мені приносить задоволення. Метал і все, що з ним пов'язане - моя робота, хобі і ціль життя. </p>
                  <div className={styles.line}></div>
                  <p>Створюю прикраси і аксесуари з різних матеріалів: латунь, срібло, золото, каміння, стрази та інше. Прийнято, що потрібно обирати один стиль і напрямок, але я створюю різне, тому що я сама буваю різна: ніжна, серйозна, зухвала, шалена, і це ще далеко не весь список) Усі вироби виготовляю з любов'ю, вкладаю у них шматочок своєї душі), а ще мені подобається реставрація, це - ніби даруєш друге життя дорогим та улюбленим для людей речам. На сайті ти можеш знайти виріб для себе чи на подарунок, а також індивідуально зробити замовлення за власним ескізом, щоб даний виріб доповнював тебе та втілював твій настрій.</p>
                  <div className={styles.line}></div>
                  <p>MORPHO - тому, що потрібно вірити у себе і свої бажання, усе здійсниться, усе реальне...</p>
                  {/* <div className={styles.line}></div> */}
                  </div>
                </div>
               
              </div>
               <div className={styles.bottom_content}>
                <div className={styles.left_content_item}>
                <img className={styles.blockPhoto}    src="/images/im3.jpg" alt="" />
                 <p>Нічого прекрасного не буває без крапельки чаклунства.</p>
                </div>
                <div className={styles.left_content_item}>
                <img className={styles.blockPhoto}    src="/images/im4.jpg" alt="" />
                 <p>Процес не може не народити результат.</p>
                </div>
                <div className={styles.left_content_item}>
                <img className={styles.blockPhoto}    src="/images/im5.jpg" alt="" />
                 <p>Дуже скромно у виробі живе душа та б'ється серце.</p>
                </div>
                </div>
             </main>
        </> 
      );
}

export default Home;
