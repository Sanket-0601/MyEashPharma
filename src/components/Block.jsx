import PropTypes from "prop-types";
import styles from "./Block.module.css";

const Block = ({ className = "", blockTitle }) => {
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
            <b className={styles.blocktitle}>{blockTitle}</b>
          </div>
          <div className={styles.xmark}>
            <img className={styles.iMathPlus} alt="" src="/i--math--plus.svg" />
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

Block.propTypes = {
  className: PropTypes.string,
  blockTitle: PropTypes.string,
};

export default Block;
