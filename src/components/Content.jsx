import PropTypes from "prop-types";
import styles from "./Content.module.css";

const Content = ({ className = "" }) => {
  return (
    <div className={[styles.content, className].join(" ")}>
      <div className={styles.formContainerWrapper}>
        <div className={styles.formContainer}>
          <img
            className={styles.image4Icon}
            loading="lazy"
            alt=""
            src="/image-4@2x.png"
          />
          <div className={styles.logInParent}>
            <div className={styles.logIn}>Log in</div>
            <div className={styles.haveAnAccountLogin}>
              <div className={styles.alreadyHaveAnContainer}>
                <span className={styles.dontHaveAn}>Don’t have an ccount?</span>
                <span className={styles.span}>{` `}</span>
                <span className={styles.signUp}>{`Sign up  `}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.socialLogin}>
        <button className={styles.socialMediaSignuplogin}>
          <div className={styles.socialButtons}>
            <img
              className={styles.socialMediaLogo}
              alt=""
              src="/social-media-logo.svg"
            />
            <div className={styles.facebookButton}>
              <div className={styles.continueWithFacebook}>
                Log in with Facebook
              </div>
            </div>
          </div>
        </button>
        <button className={styles.socialMediaSignuplogin1}>
          <div className={styles.frameParent}>
            <div className={styles.socialMediaLogoWrapper}>
              <img
                className={styles.socialMediaLogo1}
                alt=""
                src="/social-media-logo-1.svg"
              />
            </div>
            <div className={styles.continueWithGoogle}>Log in with Google</div>
          </div>
        </button>
      </div>
      <div className={styles.divider}>
        <div className={styles.dividerWrapper}>
          <div className={styles.divider1} />
        </div>
        <b className={styles.or}>OR</b>
        <div className={styles.dividerContainer}>
          <div className={styles.divider2} />
        </div>
      </div>
      <form className={styles.inputFields}>
        <div className={styles.textField}>
          <div className={styles.emailLabel}>
            <div className={styles.label}>Email or Username</div>
            <div className={styles.passwordHideSee}>
              <img className={styles.icon} alt="" src="/icon.svg" />
              <div className={styles.hide}>Hide</div>
            </div>
          </div>
          <input className={styles.textField1} type="text" />
          <div className={styles.errorMessage}>Error message</div>
        </div>
        <div className={styles.passwordField}>
          <div className={styles.textField2}>
            <div className={styles.passwordLabel}>
              <div className={styles.label1}>Password</div>
              <div className={styles.passwordHideSee1}>
                <img
                  className={styles.icon1}
                  loading="lazy"
                  alt=""
                  src="/icon.svg"
                />
                <div className={styles.hide1}>Hide</div>
              </div>
            </div>
            <div className={styles.textField3}>
              <div className={styles.inputs}>
                <div className={styles.div}>123456</div>
                <div className={styles.inputsChild} />
              </div>
              <img className={styles.icons} alt="" src="/icons3.svg" />
            </div>
            <div className={styles.errorMessage1}>Error message</div>
          </div>
          <u className={styles.forgetYourPassword}>Forget your password</u>
        </div>
        <button className={styles.button}>
          <div className={styles.buttonLabel}>
            <img className={styles.icons1} alt="" src="/icons4.svg" />
            <div className={styles.signUp1}>Log in</div>
          </div>
        </button>
      </form>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
