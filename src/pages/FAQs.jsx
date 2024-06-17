import Surface from "../components/Surface";
import Block1 from "../components/Block1";
import BlockContainer from "../components/BlockContainer";
import styles from "./FAQs.module.css";

const FAQs = () => {
  return (
    <div className={styles.faqs}>
      <div className={styles.faqsInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <nav className={styles.homeParent}>
              <a className={styles.home}>Home</a>
              <div className={styles.aboutUsWrapper}>
                <a className={styles.aboutUs}>About Us</a>
              </div>
              <div className={styles.blogsWrapper}>
                <a className={styles.blogs}>Blogs</a>
              </div>
              <div className={styles.contactWrapper}>
                <a className={styles.contact}>Contact</a>
              </div>
              <a className={styles.faqs1}>FAQs</a>
            </nav>
          </div>
          <button className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <a className={styles.login}>Login</a>
          </button>
          <img className={styles.frameItem} loading="lazy" alt="" />
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
        <div className={styles.contentDivider}>
          <div className={styles.divider}>
            <div className={styles.divider1}>
              <div className={styles.divider2} />
            </div>
          </div>
          <Surface />
          <div className={styles.divider3}>
            <div className={styles.divider4}>
              <div className={styles.divider5} />
            </div>
          </div>
          <Block1 blockTitle="2. How does MyEasyPharma help prevent lifestyle diseases?" />
          <BlockContainer />
        </div>
      </div>
      <div className={styles.frameGroup}>
        <main className={styles.backgroundPatternParent}>
          <img
            className={styles.backgroundPatternIcon}
            alt=""
            src="/background-pattern@2x.png"
          />
          <img className={styles.frameInner} loading="lazy" alt="" />
          <img className={styles.lineIcon} loading="lazy" alt="" />
          <img className={styles.frameChild1} loading="lazy" alt="" />
          <img className={styles.frameChild2} alt="" />
          <img className={styles.frameChild3} loading="lazy" alt="" />
        </main>
        <img
          className={styles.image3Icon}
          loading="lazy"
          alt=""
          src="/image-3@2x.png"
        />
        <img
          className={styles.frameChild4}
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

export default FAQs;
