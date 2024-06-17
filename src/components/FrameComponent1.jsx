import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onBlogsTextClick = useCallback(() => {
    navigate("/blogs");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onFAQsTextClick = useCallback(() => {
    navigate("/faqs");
  }, [navigate]);

  const onLoginButtonClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  return (
    <div className={[styles.homePageInner, className].join(" ")}>
      <header className={styles.frameParent}>
        <div className={styles.companyLogoWrapper}>
          <img
            className={styles.companyLogoIcon}
            loading="lazy"
            alt=""
            src="/image-3@2x.png"
          />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.lineParent}>
            <img className={styles.frameChild} loading="lazy" alt="" />
            <img className={styles.frameItem} loading="lazy" alt="" />
            <img className={styles.frameInner} loading="lazy" alt="" />
            <img className={styles.lineIcon} alt="" />
            <img className={styles.frameChild1} loading="lazy" alt="" />
            <img className={styles.frameChild2} loading="lazy" alt="" />
            <div className={styles.footerMenu}>
              <div className={styles.homeLink}>
                <div className={styles.homeWrapper}>
                  <a className={styles.home}>Home</a>
                </div>
                <img
                  className={styles.homeLinkChild}
                  loading="lazy"
                  alt=""
                  src="/line-6.svg"
                />
              </div>
              <div className={styles.footerLinks}>
                <a className={styles.aboutUs} onClick={onAboutUsTextClick}>
                  About Us
                </a>
              </div>
              <div className={styles.footerLinks1}>
                <a className={styles.blogs} onClick={onBlogsTextClick}>
                  Blogs
                </a>
              </div>
              <div className={styles.footerLinks2}>
                <a className={styles.contact} onClick={onContactTextClick}>
                  Contact
                </a>
              </div>
              <div className={styles.footerLinks3}>
                <a className={styles.faqs} onClick={onFAQsTextClick}>
                  FAQs
                </a>
              </div>
              <div className={styles.footerImage}>
                <img
                  className={styles.image6Icon}
                  loading="lazy"
                  alt=""
                  src="/image-61@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <button className={styles.loginButton} onClick={onLoginButtonClick}>
          <div className={styles.loginButtonChild} />
          <a className={styles.login}>Login</a>
        </button>
      </header>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
