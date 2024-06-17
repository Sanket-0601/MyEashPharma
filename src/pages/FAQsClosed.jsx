import FAQsContent from "../components/FAQsContent";
import BlocksContainer from "../components/BlocksContainer";
import styles from "./FAQsClosed.module.css";

const FAQsClosed = () => {
  return (
    <div className={styles.faqsClosed}>
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.innerContent}>
            <nav className={styles.topContent}>
              <a className={styles.home}>Home</a>
              <div className={styles.links}>
                <a className={styles.aboutUs}>About Us</a>
              </div>
              <div className={styles.links1}>
                <a className={styles.blogs}>Blogs</a>
              </div>
              <div className={styles.links2}>
                <a className={styles.contact}>Contact</a>
              </div>
              <a className={styles.faqs}>FAQs</a>
            </nav>
          </div>
          <button className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <a className={styles.login}>Login</a>
          </button>
          <img className={styles.contentChild} loading="lazy" alt="" />
        </div>
      </div>
      <div className={styles.faqsOnHealthAndWellnessParent}>
        <h1 className={styles.faqsOnHealth}>FAQs on Health and Wellness</h1>
        <h2 className={styles.exploreOurFrequently}>
          Explore our frequently asked questions to find answers on topics
          ranging from yoga poses and dietary charts to the benefits of specific
          foods and exercises. Gain insights into managing lifestyle diseases,
          improving fitness, and maintaining overall well-being.
        </h2>
        <FAQsContent />
        <BlocksContainer />
      </div>
      <div className={styles.frameParent}>
        <main className={styles.backgroundPatternParent}>
          <img
            className={styles.backgroundPatternIcon}
            alt=""
            src="/background-pattern@2x.png"
          />
          <img className={styles.frameItem} loading="lazy" alt="" />
          <img className={styles.frameInner} loading="lazy" alt="" />
          <img className={styles.lineIcon} loading="lazy" alt="" />
          <img className={styles.frameChild1} alt="" />
          <img className={styles.frameChild2} loading="lazy" alt="" />
        </main>
        <img
          className={styles.image3Icon}
          loading="lazy"
          alt=""
          src="/image-3@2x.png"
        />
        <img
          className={styles.frameChild3}
          loading="lazy"
          alt=""
          src="/line-8.svg"
        />
        <img
          className={styles.image6Icon}
          loading="lazy"
          alt=""
          src="/image-6@2x.png"
        />
      </div>
    </div>
  );
};

export default FAQsClosed;
