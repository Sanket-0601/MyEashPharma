import PropTypes from "prop-types";
import styles from "./RelatedBlogsContainer.module.css";

const RelatedBlogsContainer = ({ className = "" }) => {
  return (
    <div className={[styles.relatedBlogsContainer, className].join(" ")}>
      <div className={styles.blog2}>
        <img className={styles.blog2Child} alt="" src="/rectangle-11.svg" />
        <div className={styles.relatedBlogContent}>
          <div className={styles.relatedBlogTitle}>
            <div className={styles.patternsOfLifestyle}>
              Patterns of Lifestyle Changes to Combat Modern Disorders
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
        <img
          className={styles.image14Icon}
          loading="lazy"
          alt=""
          src="/image-14@2x.png"
        />
      </div>
    </div>
  );
};

RelatedBlogsContainer.propTypes = {
  className: PropTypes.string,
};

export default RelatedBlogsContainer;
