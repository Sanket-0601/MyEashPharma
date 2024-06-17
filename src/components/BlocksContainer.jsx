import Blocks from "./Blocks";
import SocialsContainer from "./SocialsContainer";
import PropTypes from "prop-types";
import styles from "./BlocksContainer.module.css";

const BlocksContainer = ({ className = "" }) => {
  return (
    <footer className={[styles.blocksContainer, className].join(" ")}>
      <Blocks />
      <SocialsContainer />
    </footer>
  );
};

BlocksContainer.propTypes = {
  className: PropTypes.string,
};

export default BlocksContainer;
