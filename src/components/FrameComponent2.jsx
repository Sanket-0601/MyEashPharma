import TextField from "./TextField";
import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.imageAndFormColumnParent}>
        <div className={styles.imageAndFormColumn}>
          <div className={styles.formRow}>
            <div className={styles.loginForm}>
              <h1
                className={styles.welcomeToMyeasypharma}
              >{`Welcome to MyEasyPharma `}</h1>
              <div className={styles.haveAnAccountLogin}>
                <div className={styles.alreadyHaveAnContainer}>
                  <span className={styles.alreadyHaveAn}>
                    Already have an ccount?
                  </span>
                  <span className={styles.span}>{` `}</span>
                  <span className={styles.logIn}>{`Log in  `}</span>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.image4Icon}
            loading="lazy"
            alt=""
            src="/image-41@2x.png"
          />
        </div>
        <div className={styles.formFields}>
          <TextField emailLabelPlaceholder="Email" prop="designer@gmail.com" />
          <TextField emailLabelPlaceholder="Username" prop="designer123" />
          <div className={styles.passwordField}>
            <div className={styles.textField}>
              <div className={styles.passwordWrapper}>
                <div className={styles.label}>Password</div>
                <div className={styles.passwordHideSee}>
                  <div className={styles.hideIcon}>
                    <img
                      className={styles.icon}
                      loading="lazy"
                      alt=""
                      src="/icon-2.svg"
                    />
                  </div>
                  <div className={styles.hide}>Hide</div>
                </div>
              </div>
              <input className={styles.textField1} type="text" />
              <div className={styles.errorMessage}>Error message</div>
            </div>
            <div className={styles.bulletList}>
              <div className={styles.bulletItems}>
                <div className={styles.bulletPoint}>
                  <div className={styles.bulletIconOne}>
                    <div className={styles.bulletIconOneChild} />
                  </div>
                  <div className={styles.oneLowercaseCharacter}>
                    Use 8 or more characters
                  </div>
                </div>
                <div className={styles.bulletPoint1}>
                  <div className={styles.bulletIconTwo}>
                    <div className={styles.bulletIconTwoChild} />
                  </div>
                  <div className={styles.oneLowercaseCharacter1}>
                    One special character
                  </div>
                </div>
              </div>
              <div className={styles.bulletItems1}>
                <div className={styles.bulletPoint2}>
                  <div className={styles.bulletPointInner}>
                    <div className={styles.frameChild} />
                  </div>
                  <div className={styles.oneLowercaseCharacter2}>
                    One Uppercase character
                  </div>
                </div>
                <div className={styles.bulletPoint3}>
                  <div className={styles.bulletPointChild}>
                    <div className={styles.frameItem} />
                  </div>
                  <div className={styles.oneLowercaseCharacter3}>
                    One number
                  </div>
                </div>
              </div>
              <div className={styles.bulletPoint4}>
                <div className={styles.bulletCircle}>
                  <div className={styles.bulletCircleChild} />
                </div>
                <div className={styles.oneLowercaseCharacter4}>
                  One lowercase character
                </div>
              </div>
              <div className={styles.bulletPoint5}>
                <div className={styles.bulletPointItem} />
                <div
                  className={styles.oneLowercaseCharacter5}
                >{`No same sequential repeating `}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.checkBox}>
        <input className={styles.checkBox1} type="checkbox" />
        <p className={styles.iWantTo}>
          I want to receive emails about the product, feature updates, events,
          and marketing promotions.
        </p>
      </div>
      <div className={styles.linkText}>
        <div className={styles.byCreatingAnContainer}>
          <span
            className={styles.byCreatingAn}
          >{`By creating an account, you agree to the `}</span>
          <span className={styles.termsOfUse}>Terms of use</span>
          <span className={styles.span1}>{` `}</span>
          <span className={styles.and}>and</span>
          <span className={styles.span2}>{` `}</span>
          <span className={styles.privacyPolicy}>
            <span>Privacy Policy.</span>
            <span className={styles.span3}>{` `}</span>
          </span>
        </div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button}>
          <div className={styles.signupLabel}>
            <img className={styles.icons} alt="" src="/icons6.svg" />
            <div className={styles.signUp}>Create an ccount</div>
          </div>
        </button>
        <div className={styles.haveAnAccountLogin1}>
          <div className={styles.alreadyHaveAnContainer1}>
            <span className={styles.alreadyHaveAn1}>
              Already have an ccount?
            </span>
            <span className={styles.span4}>{` `}</span>
            <span className={styles.logIn1}>{`Log in  `}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
