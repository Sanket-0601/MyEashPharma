import PropTypes from "prop-types";
import styles from "./RightContent.module.css";

const RightContent = ({ className = "" }) => {
  return (
    <div className={[styles.rightContent, className].join(" ")}>
      <div className={styles.whatWeDoContentParent}>
        <div className={styles.whatWeDoContent}>
          <div className={styles.whatWeDoDescription}>
            <h1 className={styles.whatWeDo}>What We Do</h1>
            <div className={styles.weProvideComprehensiveProfeWrapper}>
              <p className={styles.weProvideComprehensive}>
                We provide comprehensive professional Health advice
                on parameters such as diet, physical activity, ideal screen time
                and others which reducing susceptibility to Workplace-induced
                lifestyle disorders.
              </p>
            </div>
          </div>
        </div>
        <img
          className={styles.image8Icon}
          loading="lazy"
          alt=""
          src="/image-8@2x.png"
        />
        <div className={styles.socialMedia}>
          <div className={styles.socialIcons}>
            <img
              className={styles.socialIcon}
              loading="lazy"
              alt=""
              src="/social-1.svg"
            />
            <div className={styles.socialButtons}>
              <img
                className={styles.socialIcon1}
                loading="lazy"
                alt=""
                src="/social.svg"
              />
            </div>
            <div className={styles.socialButtons1}>
              <img
                className={styles.socialIcon2}
                loading="lazy"
                alt=""
                src="/social-2@2x.png"
              />
            </div>
            <div className={styles.socialButtons2}>
              <img
                className={styles.socialIcon3}
                loading="lazy"
                alt=""
                src="/social-3@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.missionContentWrapper}>
        <div className={styles.missionContent}>
          <div className={styles.missionDescription}>
            <div className={styles.missionParent}>
              <h1 className={styles.mission}>Mission</h1>
              <div className={styles.throughOurEfforts}>
                Through our efforts, we aim to reduce the burden of chronic
                diseases and elevate public health standards through a
                specialised and well-curated corporate wellness. 
              </div>
            </div>
          </div>
          <img
            className={styles.image12Icon}
            loading="lazy"
            alt=""
            src="/image-12@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

RightContent.propTypes = {
  className: PropTypes.string,
};

export default RightContent;
