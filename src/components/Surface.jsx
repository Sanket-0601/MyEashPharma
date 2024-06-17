import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Surface.module.css";

const Surface = ({ className = "" }) => {
  const navigate = useNavigate();

  const onXmarkContainerClick = useCallback(() => {
    navigate("/faqsclosed");
  }, [navigate]);

  return (
    <div className={[styles.surface, className].join(" ")}>
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
            className={styles.iGamingXmark}
            loading="lazy"
            alt=""
            src="/i--gaming--xmark.svg"
          />
        </div>
      </div>
      <div className={styles.text}>
        <div className={styles.blocktext}>
          MyEasyPharma is a digital platform that offers personalized health
          solutions to prevent lifestyle disorders and NCDs through a
          combination of AI technology and personal health coaching.
        </div>
      </div>
    </div>
  );
};

Surface.propTypes = {
  className: PropTypes.string,
};

export default Surface;
