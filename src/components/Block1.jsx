import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Block1.module.css";

const Block1 = ({ className = "", blockTitle, propFlexWrap }) => {
  const headerStyle = useMemo(() => {
    return {
      flexWrap: propFlexWrap,
    };
  }, [propFlexWrap]);

  return (
    <div className={[styles.block, className].join(" ")}>
      <div className={styles.divider}>
        <div className={styles.divider1}>
          <div className={styles.divider2} />
        </div>
      </div>
      <div className={styles.surface}>
        <div className={styles.header} style={headerStyle}>
          <div className={styles.title}>
            <b className={styles.blocktitle}>{blockTitle}</b>
          </div>
          <div className={styles.xmark}>
            <img
              className={styles.iMathPlus}
              loading="lazy"
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
  );
};

Block1.propTypes = {
  className: PropTypes.string,
  blockTitle: PropTypes.string,

  /** Style props */
  propFlexWrap: PropTypes.any,
};

export default Block1;
