import PropTypes from "prop-types";
import styles from "./TextField.module.css";

const TextField = ({ className = "", emailLabelPlaceholder, prop }) => {
  return (
    <div className={[styles.textField, className].join(" ")}>
      <input
        className={styles.emailLabel}
        placeholder={emailLabelPlaceholder}
        type="text"
      />
      <div className={styles.textField1}>
        <div className={styles.inputs}>
          <div className={styles.div}>{prop}</div>
          <div className={styles.inputsChild} />
        </div>
        <img className={styles.icons} alt="" src="/icons5.svg" />
      </div>
      <div className={styles.errorMessage}>Error message</div>
    </div>
  );
};

TextField.propTypes = {
  className: PropTypes.string,
  emailLabelPlaceholder: PropTypes.string,
  prop: PropTypes.string,
};

export default TextField;
