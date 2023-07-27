import React from 'react';
import styles from './Header2.module.css'; // Import the CSS module

const Header2 = () => {
  return (
    <div>
      {/* START NAVIGATION */}
      <div className={styles['fake-nav']}></div>
      {/* special for content under navigation, when nav situate in top height==nav.height */}
      <div id={styles.nav}>
        {/* START search input */}
        <div className={styles['search-container']}>
          <input id={styles['search-toggle']} type="checkbox" />
          <label className={styles['search-backdrop']} htmlFor={styles['search-toggle']}></label>
          <div className={styles['search-content']}>
            <form id={styles['search-form']} action="">
              <input
                type="search"
                className={styles['input-search']}
                placeholder="Input what you want to search"
                required
              />
              <button type="submit" id={styles.searchsubmit} className={`fa fa-search ${styles['fa-4x']}`}></button>
            </form>
          </div>
        </div>
        {/* END search input */}

        <ul className={styles['list-menu']}>
          {/* START button in responsive menu */}
          <input id={styles['responsive-toggle']} type="checkbox" />

          <label htmlFor={styles['responsive-toggle']} id={styles['btm-open-menu']}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </label>
          {/* END button in responsive menu */}

          <li className={`${styles['item-menu']} ${styles.shop}`}>
            <i href="shop.html">shop</i>
            <ul className={styles['sub-menu']}>
              <li>
                <h3 className={styles['title-sub-menu']}>item 1</h3>
              </li>
              <li>
                <h3 className={styles['title-sub-menu']}>item 2</h3>
              </li>
              <li>
                <h3 className={styles['title-sub-menu']}>item 3</h3>
              </li>
              <li>
                <h3 className={styles['title-sub-menu']}>item 4</h3>
              </li>
              <li>
                <h3 className={styles['title-sub-menu']}>item 5</h3>
              </li>
            </ul>
          </li>
          <li className={`${styles['item-menu']} ${styles.logo}`}>
            <a href="index.html">
              LOGO<br />
              <span>Short Description</span>
            </a>
          </li>
          <li className={`${styles['item-menu']} ${styles['nav-icons']}`}>
            <label htmlFor={styles['search-toggle']}>
              <i className={`fa fa-search ${styles['button-search']}`} aria-hidden="true"></i>
            </label>
            <label htmlFor={styles['modal-basket-toggle']}>
              <i className="fa fa-shopping-bag" aria-hidden="true"></i>
            </label>
            <label htmlFor={styles['modal-login-toggle']}>
              <i className="fa fa-user" aria-hidden="true"></i>
            </label>
          </li>
        </ul>
      </div>
      {/* END NAVIGATION */}

      {/* START Modal login & sign up */}
      <div className={styles['modal-login-container']}>
        <input id={styles['modal-login-toggle']} type="checkbox" />
        <label className={styles['modal-backdrop']} htmlFor={styles['modal-login-toggle']}></label>

        <div className={styles['modal-content']}>
          <label className={styles['modal-close-btn']} htmlFor={styles['modal-login-toggle']}>
            <svg width="50" height="50">
              <line x1="10" y1="10" x2="40" y2="40" />
              <line x1="40" y1="10" x2="10" y2="40" />
            </svg>
          </label>
          <div className={styles['tabs']}>
            {/* LOG IN */}
            <input className={styles['radio']} id={styles['tab-1']} name={styles['tabs-name']} type="radio" checked />
            <label htmlFor={styles['tab-1']} className={styles['table']}>
              <span>Login</span>
            </label>
            <div className={styles['tabs-content']}>
              <div className={styles['login_socnet']}>
                <a href="" className={`fa fa-vk ${styles['login_socnet']}`} aria-hidden="true"></a>
                <a href="" className={`fa fa-google-plus ${styles['login_socnet']}`} aria-hidden="true"></a>
                <a href="" className={`fa fa-facebook ${styles['login_socnet']}`} aria-hidden="true"></a>
              </div>
              <form action="">
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <input type="submit" value="Log In" />
              </form>
              <form className={styles['forgot-password']} action="">
                <input id={styles['forgot-password-toggle']} type="checkbox" />
                <label htmlFor={styles['forgot-password-toggle']}>forgot password?</label>
                <div className={styles['forgot-password-content']}>
                  <input type="email" placeholder="enter your email" required />
                  <input type="submit" value="go" />
                </div>
              </form>
            </div>
            {/* SIGN UP */}
            <input className={styles['radio']} id={styles['tab-2']} name={styles['tabs-name']} type="radio" />
            <label htmlFor={styles['tab-2']} className={styles['table']}>
              <span>Sign up</span>
            </label>
            <div className={styles['tabs-content']}>
              <div className={styles['login_socnet']}>
                <a href="" className={`fa fa-vk ${styles['login_socnet']}`} aria-hidden="true"></a>
                <a href="" className={`fa fa-google-plus ${styles['login_socnet']}`} aria-hidden="true"></a>
                <a href="" className={`fa fa-facebook ${styles['login_socnet']}`} aria-hidden="true"></a>
              </div>
              <form action="">
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <input type="password" placeholder="Confirm password" required />
                <input type="submit" value="Sign Up" />
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* END Modal login & sign up */}

    </div>
  );
};

export default Header2;