import HeaderContainer from "../components/HeaderContainer";
import RelatedBlogs from "../components/RelatedBlogs";
import styles from "./Blogs.module.css";

const Blogs = () => {
  return (
    <div className={styles.blogs}>
      <div className={styles.header}>
        <HeaderContainer />
      </div>
      <div className={styles.content}>
        <div className={styles.blog1}>
          <div className={styles.blog1Child} />
          <img
            className={styles.image13Icon}
            loading="lazy"
            alt=""
            src="/image-13@2x.png"
          />
          <div className={styles.blogContent}>
            <div className={styles.blogTitle}>
              <div className={styles.whyTheCurrent}>
                Why the Current Generation is More Prone to Lifestyle Disorders
              </div>
              <p className={styles.inTodaysFastPaced}>
                In today's fast-paced world, lifestyle disorders have become
                increasingly common, particularly among the younger generation.
                Factors such as sedentary behavior, poor dietary choices, and
                high-stress levels contribute significantly to this troubling
                trend.
              </p>
            </div>
          </div>
        </div>
        <RelatedBlogs />
      </div>
      <img className={styles.blogsChild} alt="" src="/line-6.svg" />
      <div className={styles.footer}>
        <main className={styles.footerContent}>
          <img
            className={styles.backgroundPatternIcon}
            alt=""
            src="/background-pattern3@2x.png"
          />
          <img className={styles.footerContentChild} loading="lazy" alt="" />
          <img className={styles.footerContentItem} loading="lazy" alt="" />
          <img className={styles.footerContentInner} loading="lazy" alt="" />
          <img className={styles.lineIcon} alt="" />
          <img className={styles.footerContentChild1} loading="lazy" alt="" />
        </main>
        <img
          className={styles.image6Icon}
          loading="lazy"
          alt=""
          src="/image-6@2x.png"
        />
        <img
          className={styles.footerChild}
          loading="lazy"
          alt=""
          src="/line-8.svg"
        />
        <img
          className={styles.companyLogoIcon}
          loading="lazy"
          alt=""
          src="/image-3@2x.png"
        />
      </div>
    </div>
  );
};

export default Blogs;
