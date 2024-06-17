import RelatedBlogsContainer from "./RelatedBlogsContainer";
import SocialIcons from "./SocialIcons";
import PropTypes from "prop-types";
import styles from "./RelatedBlogs.module.css";

const RelatedBlogs = ({ className = "" }) => {
  return (
    <div className={[styles.relatedBlogs, className].join(" ")}>
      <RelatedBlogsContainer />
      <SocialIcons />
    </div>
  );
};

RelatedBlogs.propTypes = {
  className: PropTypes.string,
};

export default RelatedBlogs;
