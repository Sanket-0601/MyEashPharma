import PropTypes from "prop-types";
import styles from "./SocialMedia.module.css";

const SocialMedia = ({ className = "" }) => {
  return (
    <footer className={[styles.socialMedia, className].join(" ")}>
      <div className={styles.socialIcons}>
        <img
          className={styles.socialIcon}
          loading="lazy"
          alt=""
          src="/social-1.svg"
        />
        <div className={styles.socialWrapper}>
          <img
            className={styles.socialIcon1}
            loading="lazy"
            alt=""
            src="/social.svg"
          />
        </div>
        <div className={styles.socialContainer}>
          <img
            className={styles.socialIcon2}
            loading="lazy"
            alt=""
            src="/social-21@2x.png"
          />
        </div>
        <div className={styles.socialFrame}>
          <img
            className={styles.socialIcon3}
            loading="lazy"
            alt=""
            src="/social-31@2x.png"
          />
        </div>
      </div>
    </footer>
  );
};

SocialMedia.propTypes = {
  className: PropTypes.string,
};

export default SocialMedia;
