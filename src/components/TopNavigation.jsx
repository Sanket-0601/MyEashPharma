import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import styles from "./TopNavigation.module.css";

const TopNavigation = ({ className = "" }) => {
  return (
    <div className={[styles.topNavigation, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.navigationLinksWrapper}>
          <nav className={styles.navigationLinks}>
            <a className={styles.home}>Home</a>
            <div className={styles.links}>
              <a className={styles.aboutUs}><Link to="/about-us">About Us</Link></a>
            </div>
            <div className={styles.links1}>
              <a className={styles.blogs}>Blogs</a>
            </div>
            <div className={styles.links2}>
              <a className={styles.contact}>Contact</a>
            </div>
            <a className={styles.faqs}>FAQs</a>
          </nav>
        </div>
        <button className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <a className={styles.login}>Login</a>
        </button>
        <img className={styles.frameItem} loading="lazy" alt="" />
      </div>
    </div>
  );
};

TopNavigation.propTypes = {
  className: PropTypes.string,
};

export default TopNavigation;
