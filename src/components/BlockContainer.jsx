import Block1 from "./Block1";
import Block from "./Block";
import PropTypes from "prop-types";
import styles from "./BlockContainer.module.css";

const BlockContainer = ({ className = "" }) => {
  return (
    <footer className={[styles.blockContainer, className].join(" ")}>
      <div className={styles.blockParent}>
        <Block1
          blockTitle="3. Who can benefit from using MyEasyPharma?"
          propFlexWrap="unset"
        />
        <Block blockTitle="4. How do I sign up for MyEasyPharma?" />
        <Block1
          blockTitle="5. What kind of data do I need to provide?"
          propFlexWrap="unset"
        />
        <Block blockTitle="6. What makes MyEasyPharma different from other health apps?" />
        <div className={styles.block}>
          <div className={styles.divider}>
            <div className={styles.divider1}>
              <div className={styles.divider2} />
            </div>
          </div>
          <div className={styles.surface}>
            <div className={styles.header}>
              <div className={styles.title}>
                <b className={styles.blocktitle}>
                  Vestibulum mauris mauris elementum proin amet auctor ipsum
                  nibh sollicitudin?
                </b>
              </div>
              <div className={styles.xmark}>
                <img
                  className={styles.iMathPlus}
                  alt=""
                  src="/i--math--plus.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.divider3}>
            <div className={styles.divider4}>
              <div className={styles.divider5} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.socialContainer}>
        <div className={styles.socialParent}>
          <img
            className={styles.socialIcon}
            loading="lazy"
            alt=""
            src="/social-1.svg"
          />
          <div className={styles.socialItems}>
            <img className={styles.socialIcon1} alt="" src="/social.svg" />
          </div>
          <div className={styles.socialItems1}>
            <img
              className={styles.socialIcon2}
              alt=""
              src="/social-21@2x.png"
            />
          </div>
          <div className={styles.socialItems2}>
            <img
              className={styles.socialIcon3}
              alt=""
              src="/social-31@2x.png"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

BlockContainer.propTypes = {
  className: PropTypes.string,
};

export default BlockContainer;
