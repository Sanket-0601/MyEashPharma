import FrameComponent3 from "../components/FrameComponent3";
import MainContent from "../components/MainContent";
import RightContent from "../components/RightContent";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.aboutUs1}>
        <img
          className={styles.backgroundPatternIcon}
          alt=""
          src="/background-pattern2@2x.png"
        />
        <FrameComponent3 />
        <MainContent />
        <img className={styles.aboutUsChild} alt="" src="/line-6.svg" />
        <RightContent />
      </div>
    </div>
  );
};

export default AboutUs;
