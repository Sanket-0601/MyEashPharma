import TopNavigation from "../components/TopNavigation";
import SocialMedia from "../components/SocialMedia";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <TopNavigation />
      <div className={styles.questionBanner}>
        <p className={styles.haveQuestionsAboutContainer}>
          <span className={styles.haveQuestionsAbout}>
            Have questions about our products, support services, or
          </span>
          <span className={styles.anythingElseLet}>
            anything else? Let us know and we'll get back to you.
          </span>
        </p>
      </div>
      <img className={styles.contactChild} alt="" src="/line-6.svg" />
      <div className={styles.contactItem} />
      <div className={styles.contactInner} />
      <div className={styles.lineDiv} />
      <div className={styles.twitter}>
        <p className={styles.twitter1}>Twitter</p>
      </div>
      <div className={styles.instagram}>Instagram</div>
      <div className={styles.linkedin}>
        <p className={styles.linkedin1}>Linkedin</p>
        <p className={styles.blankLine}>&nbsp;</p>
      </div>
      <div className={styles.facebook}>Facebook</div>
      <div className={styles.contactDetails}>
        <p className={styles.corporateAddressMyeasypharmContainer}>
          <span
            className={styles.corporateAddressMyeasypharm}
          >{`Corporate Address:
Myeasypharma Pvt Ltd`}</span>
          <span className={styles.unit101Oxford}>
            Unit 101, Oxford Towers 139, HAL Old Airport Rd H.A.L II Stage
            Bangalore, Karnataka, India, 560008
          </span>
          <span className={styles.blankLine1}>&nbsp;</span>
          <span className={styles.blankLine2}>&nbsp;</span>
          <span className={styles.operationsAddress}>Operations Address:</span>
          <span className={styles.upperGroundFloor}>
            252, Upper Ground Floor. Deepali, Pitampura,
          </span>
          <span className={styles.delhi110034}>Delhi-110034</span>
        </p>
        <p className={styles.contactEmailInfomyeasyphaContainer}>
          <span className={styles.contact1}>Contact:</span>
          <span className={styles.emailInfomyeasypharmain}>
            Email: info@myeasypharma.in
          </span>
          <span className={styles.phone919315909654}>
            Phone: +91-9315909654
          </span>
        </p>
      </div>
      <SocialMedia />
      <div className={styles.footer}>
        <main className={styles.patternedFooter}>
          <img
            className={styles.backgroundPatternIcon}
            alt=""
            src="/background-pattern4@2x.png"
          />
          <img className={styles.patternedFooterChild} loading="lazy" alt="" />
          <img className={styles.patternedFooterItem} loading="lazy" alt="" />
          <img className={styles.patternedFooterInner} loading="lazy" alt="" />
          <img className={styles.lineIcon} alt="" />
          <img className={styles.patternedFooterChild1} loading="lazy" alt="" />
        </main>
        <img
          className={styles.image3Icon}
          loading="lazy"
          alt=""
          src="/image-3@2x.png"
        />
        <img
          className={styles.footerChild}
          loading="lazy"
          alt=""
          src="/line-9.svg"
        />
        <img
          className={styles.image6Icon}
          loading="lazy"
          alt=""
          src="/image-6@2x.png"
        />
        <img
          className={styles.footerItem}
          loading="lazy"
          alt=""
          src="/line-12.svg"
        />
      </div>
    </div>
  );
};

export default Contact;
