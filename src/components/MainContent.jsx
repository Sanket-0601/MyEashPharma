import PropTypes from "prop-types";
import styles from "./MainContent.module.css";

const MainContent = ({ className = "" }) => {
  return (
    <div className={[styles.mainContent, className].join(" ")}>
      <div className={styles.leftContent}>
        <p className={styles.myeasypharmaIsAtContainer}>
          <span className={styles.myeasypharmaIsAt}>
            MyEasyPharma is at the forefront of merging technology with
            healthcare to innovate preventive health measures for working
            professionals.
          </span>
        </p>
        <div className={styles.visionParent}>
          <b className={styles.vision}>Vision</b>
          <div className={styles.visionDescription}>
            <p className={styles.atMyeasypharmaOur}>
              At MyEasyPharma, our vision is to pioneer a shift in global health
              paradigms, focusing not just on treating illnesses but on
              preventing them before they occur. We primarily aim for improved
              employee health which leads to increased and enhanced efficiency
              at the workplace.
            </p>
            <img
              className={styles.image7Icon}
              loading="lazy"
              alt=""
              src="/image-7@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

MainContent.propTypes = {
  className: PropTypes.string,
};

export default MainContent;
