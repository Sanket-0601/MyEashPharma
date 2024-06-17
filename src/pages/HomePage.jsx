import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import OurServices from "../components/OurServices";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <section className={styles.homePage1}>
        <FrameComponent1 />
        <img
          className={styles.backgroundPatternIcon}
          alt=""
          src="/background-pattern1@2x.png"
        />
        <div className={styles.content}>
          <div className={styles.contentBlockParent}>
            <div className={styles.contentBlock}>
              <div className={styles.aiCuratedCorporateWellnessWrapper}>
                <div className={styles.aiCuratedCorporate}>
                  AI Curated corporate wellness program
                </div>
              </div>
              <div className={styles.brand}>
                <h1 className={styles.myeasypharma}>MyEasyPharma</h1>
                <div className={styles.homeImage}>
                  <img
                    className={styles.homeImageIcon}
                    alt=""
                    src="/home-image1@2x.png"
                  />
                  <img
                    className={styles.homeImageIcon1}
                    alt=""
                    src="/home-image1@2x.png"
                  />
                  <img
                    className={styles.socialIcon}
                    loading="lazy"
                    alt=""
                    src="/social.svg"
                  />
                </div>
              </div>
            </div>
            <button className={styles.getStartedButton}>
              <div className={styles.getStartedButtonChild} />
              <div className={styles.getStartedFor}>Get started for free</div>
            </button>
          </div>
        </div>
        <FrameComponent />
        <OurServices />
      </section>
    </div>
  );
};

export default HomePage;
