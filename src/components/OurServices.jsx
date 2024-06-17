import PropTypes from "prop-types";
import styles from "./OurServices.module.css";

const OurServices = ({ className = "" }) => {
  return (
    <div
      className={[styles.ourServices, className].join(" ")}
      data-scroll-to="ourServicesContainer"
    >
      <div className={styles.footerContainerWrapper}>
        <div className={styles.footerContainer}>
          <div className={styles.footerContent}>
            <div className={styles.footerNavigation}>
              <b className={styles.home}>Home</b>
              <div className={styles.footerNavLinks}>
                <b className={styles.aboutUs}>About Us</b>
              </div>
              <div className={styles.footerNavLinks1}>
                <b className={styles.blogs}>Blogs</b>
              </div>
              <div className={styles.footerNavLinks2}>
                <b className={styles.contact}>Contact</b>
              </div>
              <b className={styles.faqs}>FAQs</b>
            </div>
          </div>
          <button className={styles.loginButton}>
            <div className={styles.loginButtonChild} />
            <b className={styles.login}>Login</b>
          </button>
          <img className={styles.footerDividerIcon} loading="lazy" alt="" />
        </div>
      </div>
      <div className={styles.backgroundBlockParent}>
        <div className={styles.backgroundBlock}>
          <img
            className={styles.backgroundPatternIcon}
            alt=""
            src="/background-pattern-1@2x.png"
          />
          <img className={styles.backgroundBlockChild} loading="lazy" alt="" />
          <img className={styles.backgroundBlockItem} loading="lazy" alt="" />
          <img className={styles.backgroundBlockInner} loading="lazy" alt="" />
          <img className={styles.lineIcon} alt="" />
          <img className={styles.backgroundBlockChild1} loading="lazy" alt="" />
        </div>
        <img
          className={styles.companyLogoIcon}
          loading="lazy"
          alt=""
          src="/image-3@2x.png"
        />
        <img className={styles.frameChild} alt="" src="/line-6.svg" />
        <img
          className={styles.image6Icon}
          loading="lazy"
          alt=""
          src="/image-61@2x.png"
        />
      </div>
      <div className={styles.ourServicesChild} />
      <div className={styles.ourServicesItem} />
      <div className={styles.ourServicesInner} />
      <div className={styles.lineDiv} />
      <div className={styles.socialLinks}>
        <img
          className={styles.socialIcon}
          loading="lazy"
          alt=""
          src="/social-1.svg"
        />
        <div className={styles.socialIcons}>
          <img
            className={styles.socialIcon1}
            loading="lazy"
            alt=""
            src="/social.svg"
          />
        </div>
        <div className={styles.socialIcons1}>
          <img
            className={styles.socialIcon2}
            loading="lazy"
            alt=""
            src="/social-2@2x.png"
          />
        </div>
        <div className={styles.socialIcons2}>
          <img
            className={styles.socialIcon3}
            loading="lazy"
            alt=""
            src="/social-3@2x.png"
          />
        </div>
      </div>
      <div className={styles.descriptionList} />
      <img
        className={styles.arrowIcon}
        loading="lazy"
        alt=""
        src="/arrow-4.svg"
      />
      <h3
        className={styles.enableProductive}
      >{`Enable Productive & Healthier Corporates!`}</h3>
      <img
        className={styles.image11Icon}
        loading="lazy"
        alt=""
        src="/image-11@2x.png"
      />
      <div className={styles.descriptionList1} />
      <h3 className={styles.deliveringHealthAndContainer}>
        <p
          className={styles.deliveringHealthAnd}
        >{`Delivering Health and wellness `}</p>
        <p className={styles.byAyush}>by AYUSH</p>
      </h3>
      <img
        className={styles.image9Icon}
        loading="lazy"
        alt=""
        src="/image-9@2x.png"
      />
      <img
        className={styles.ourServicesChild1}
        loading="lazy"
        alt=""
        src="/arrow-4.svg"
      />
      <div className={styles.descriptionList2} />
      <h3 className={styles.personalisedHealthPlan}>
        Personalised Health Plan for Employees!
      </h3>
      <img
        className={styles.ourServicesChild2}
        loading="lazy"
        alt=""
        src="/arrow-4.svg"
      />
      <img
        className={styles.image10Icon}
        loading="lazy"
        alt=""
        src="/image-10@2x.png"
      />
      <h1 className={styles.ourServices1}>Our Services</h1>
    </div>
  );
};

OurServices.propTypes = {
  className: PropTypes.string,
};

export default OurServices;
