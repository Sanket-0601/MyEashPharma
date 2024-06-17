import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Block2 from "./Block2";
import PropTypes from "prop-types";
import styles from "./FAQsContent.module.css";

const FAQsContent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onXmarkContainerClick = useCallback(() => {
    navigate("/faqs");
  }, [navigate]);

  return (
    <div className={[styles.fAQsContent, className].join(" ")}>
      <div className={styles.divider}>
        <div className={styles.divider1}>
          <div className={styles.divider2} />
        </div>
      </div>
      <div className={styles.surface}>
        <div className={styles.header}>
          <div className={styles.title}>
            <div className={styles.blocktitle}>
              <b>{`1. What is `}</b>
              <b className={styles.myeasypharma}>MyEasyPharma</b>
              <b>? </b>
            </div>
          </div>
          <div className={styles.xmark} onClick={onXmarkContainerClick}>
            <img
              className={styles.iMathPlus}
              loading="lazy"
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
      <Block2 />
    </div>
  );
};

FAQsContent.propTypes = {
  className: PropTypes.string,
};

export default FAQsContent;
