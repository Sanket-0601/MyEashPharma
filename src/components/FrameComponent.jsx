import { useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  const onOurServicesClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='ourServicesContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={[styles.socialBlockWrapper, className].join(" ")}>
      <div className={styles.socialBlock}>
        <img
          className={styles.socialIcon}
          loading="lazy"
          alt=""
          src="/social-1.svg"
        />
        <div className={styles.servicesBlockWrapper}>
          <div className={styles.servicesBlock}>
            <button className={styles.ourServices} onClick={onOurServicesClick}>
              <div className={styles.ourServicesChild} />
              <img
                className={styles.ourServicesItem}
                alt=""
                src="/arrow-1.svg"
              />
              <b className={styles.ourServices1}>Our Services</b>
            </button>
            <div className={styles.socialContainer}>
              <div className={styles.socialRow}>
                <img
                  className={styles.socialIcon1}
                  loading="lazy"
                  alt=""
                  src="/social-2@2x.png"
                />
                <img
                  className={styles.socialIcon2}
                  loading="lazy"
                  alt=""
                  src="/social-3@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
