import FrameComponent2 from "../components/FrameComponent2";
import styles from "./SignUp.module.css";

const SignUp = () => {
  return (
    <div className={styles.signUp}>
      <div className={styles.signUpInner}>
        <FrameComponent2 />
      </div>
      <div className={styles.image}>
        <img className={styles.rectangleIcon} alt="" src="/rectangle1@2x.png" />
        <img className={styles.image16Icon} alt="" src="/image-17@2x.png" />
      </div>
    </div>
  );
};

export default SignUp;
