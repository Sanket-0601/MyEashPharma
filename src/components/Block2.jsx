import PropTypes from "prop-types";
import styles from "./Block2.module.css";

const Block2 = ({ className = "" }) => {
  return (
    <div className={[styles.block, className].join(" ")}>
      <div className={styles.divider}>
        <div className={styles.divider1}>
          <div className={styles.divider2} />
        </div>
      </div>
      <div className={styles.surface}>
        <div className={styles.header}>
          <div className={styles.title}>
            <b className={styles.blocktitle}>
              2. How does MyEasyPharma help prevent lifestyle diseases?
            </b>
          </div>
          <div className={styles.xmark}>
            <img
              className={styles.iMathPlus}
              alt=""
              src="/i--math--plus1.svg"
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
  );
};

Block2.propTypes = {
  className: PropTypes.string,
};

export default Block2;
