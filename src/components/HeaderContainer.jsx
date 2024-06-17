import PropTypes from "prop-types";
import styles from "./HeaderContainer.module.css";

const HeaderContainer = ({ className = "" }) => {
  return (
    <div className={[styles.headerContainer, className].join(" ")}>
      <div className={styles.headerItems}>
        <nav className={styles.headerNavigation}>
          <a className={styles.home}>Home</a>
          <div className={styles.navigationLinks}>
            <a className={styles.aboutUs}>About Us</a>
          </div>
          <div className={styles.navigationLinks1}>
            <a className={styles.blogs}>Blogs</a>
          </div>
          <div className={styles.navigationLinks2}>
            <a className={styles.contact}>Contact</a>
          </div>
          <a className={styles.faqs}>FAQs</a>
        </nav>
      </div>
      <button className={styles.loginButton}>
        <div className={styles.loginButtonChild} />
        <a className={styles.login}>Login</a>
      </button>
      <img className={styles.headerContainerChild} loading="lazy" alt="" />
    </div>
  );
};

HeaderContainer.propTypes = {
  className: PropTypes.string,
};

export default HeaderContainer;
