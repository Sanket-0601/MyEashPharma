import PropTypes from "prop-types";
import styles from "./SocialsContainer.module.css";

const SocialsContainer = ({ className = "" }) => {
  return (
    <div className={[styles.socialsContainer, className].join(" ")}>
      <img
        className={styles.socialIcon}
        loading="lazy"
        alt=""
        src="/social-1.svg"
      />
      <div className={styles.socialWrapper}>
        <img className={styles.socialIcon1} alt="" src="/social.svg" />
      </div>
      <div className={styles.socialContainer}>
        <img className={styles.socialIcon2} alt="" src="/social-21@2x.png" />
      </div>
      <div className={styles.socialFrame}>
        <img className={styles.socialIcon3} alt="" src="/social-31@2x.png" />
      </div>
    </div>
  );
};

SocialsContainer.propTypes = {
  className: PropTypes.string,
};

export default SocialsContainer;
