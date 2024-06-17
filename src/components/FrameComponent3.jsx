import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  return (
    <header className={[styles.aboutUsInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.companyLogoWrapper}>
          <img
            className={styles.companyLogoIcon}
            loading="lazy"
            alt=""
            src="/image-3@2x.png"
          />
        </div>
        <div className={styles.navigationLinksWrapper}>
          <div className={styles.navigationLinks}>
            <img className={styles.linkSeparatorIcon} loading="lazy" alt="" />
            <img className={styles.linkSeparatorIcon1} loading="lazy" alt="" />
            <img className={styles.linkSeparatorIcon2} loading="lazy" alt="" />
            <img className={styles.linkSeparatorIcon3} alt="" />
            <img className={styles.linkSeparatorIcon4} loading="lazy" alt="" />
            <img className={styles.linkSeparatorIcon5} loading="lazy" alt="" />
            <div className={styles.navigationItems}>
              <a className={styles.home} onClick={onHomeTextClick}>
                Home
              </a>
              <div className={styles.aboutLink}>
                <a className={styles.aboutUs}>About Us</a>
                <div className={styles.aboutLinkInner}>
                  <img
                    className={styles.frameChild}
                    loading="lazy"
                    alt=""
                    src="/line-7-1.svg"
                  />
                </div>
              </div>
              <div className={styles.menuItems}>
                <a className={styles.blogs}>Blogs</a>
              </div>
              <div className={styles.menuItems1}>
                <a className={styles.contact}>Contact</a>
              </div>
              <div className={styles.menuItems2}>
                <a className={styles.faqs}>FAQs</a>
              </div>
              <div className={styles.userImage}>
                <img
                  className={styles.image6Icon}
                  loading="lazy"
                  alt=""
                  src="/image-6@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <button className={styles.loginButton}>
          <div className={styles.loginButtonChild} />
          <div className={styles.loginButtonItem} />
          <a className={styles.login}>Login</a>
        </button>
      </div>
    </header>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
