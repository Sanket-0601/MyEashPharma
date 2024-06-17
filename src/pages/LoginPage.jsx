import Content from "../components/Content";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.structure}>
        <Content />
      </div>
      <div className={styles.image}>
        <img className={styles.rectangleIcon} alt="" src="/rectangle1@2x.png" />
        <img className={styles.image17Icon} alt="" src="/image-17@2x.png" />
      </div>
    </div>
  );
};

export default LoginPage;
