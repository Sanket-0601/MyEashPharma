import PropTypes from "prop-types";
import styles from "./SocialIcons.module.css";

const SocialIcons = ({ className = "" }) => {
  return (
    <div className={[styles.socialIcons, className].join(" ")}>
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
          src="/social-2@2x.png"
        />
      </div>
      <div className={styles.socialFrame}>
        <img
          className={styles.socialIcon3}
          loading="lazy"
          alt=""
          src="/social-3@2x.png"
        />
      </div>
    </div>
  );
};

SocialIcons.propTypes = {
  className: PropTypes.string,
};

export default SocialIcons;
