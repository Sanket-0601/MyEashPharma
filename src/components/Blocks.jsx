import PropTypes from "prop-types";
import styles from "./Blocks.module.css";

const Blocks = ({ className = "" }) => {
  return (
    <div className={[styles.blocks, className].join(" ")}>
      <div className={styles.blockParent}>
        <div className={styles.block}>
          <div className={styles.divider}>
            <div className={styles.divider1}>
              <div className={styles.divider2} />
            </div>
          </div>
          <div className={styles.surface}>
            <div className={styles.header}>
              <div className={styles.title}>
                <b className={styles.blocktitle}>
                  3. Who can benefit from using MyEasyPharma?
                </b>
              </div>
              <div className={styles.xmark}>
                <img
                  className={styles.iMathPlus}
                  alt=""
                  src="/i--math--plus1.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.divider3}>
            <div className={styles.divider4}>
              <div className={styles.divider5} />
            </div>
          </div>
        </div>
        <div className={styles.block1}>
          <div className={styles.divider6}>
            <div className={styles.divider7}>
              <div className={styles.divider8} />
            </div>
          </div>
          <div className={styles.surface1}>
            <div className={styles.header1}>
              <div className={styles.title1}>
                <b className={styles.blocktitle1}>
                  4. How do I sign up for MyEasyPharma?
                </b>
              </div>
              <div className={styles.xmark1}>
                <img
                  className={styles.iMathPlus1}
                  alt=""
                  src="/i--math--plus1.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.divider9}>
            <div className={styles.divider10}>
              <div className={styles.divider11} />
            </div>
          </div>
        </div>
        <div className={styles.block2}>
          <div className={styles.divider12}>
            <div className={styles.divider13}>
              <div className={styles.divider14} />
            </div>
          </div>
          <div className={styles.surface2}>
            <div className={styles.header2}>
              <div className={styles.title2}>
                <b className={styles.blocktitle2}>
                  5. What kind of data do I need to provide?
                </b>
              </div>
              <div className={styles.xmark2}>
                <img
                  className={styles.iMathPlus2}
                  alt=""
                  src="/i--math--plus1.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.divider15}>
            <div className={styles.divider16}>
              <div className={styles.divider17} />
            </div>
          </div>
        </div>
        <div className={styles.block3}>
          <div className={styles.divider18}>
            <div className={styles.divider19}>
              <div className={styles.divider20} />
            </div>
          </div>
          <div className={styles.surface3}>
            <div className={styles.header3}>
              <div className={styles.title3}>
                <b className={styles.blocktitle3}>
                  6. What makes MyEasyPharma different from other health apps?
                </b>
              </div>
              <div className={styles.xmark3}>
                <img
                  className={styles.iMathPlus3}
                  alt=""
                  src="/i--math--plus1.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.divider21}>
            <div className={styles.divider22}>
              <div className={styles.divider23} />
            </div>
          </div>
        </div>
        <div className={styles.block4}>
          <div className={styles.divider24}>
            <div className={styles.divider25}>
              <div className={styles.divider26} />
            </div>
          </div>
          <div className={styles.surface4}>
            <div className={styles.header4}>
              <div className={styles.title4}>
                <b className={styles.blocktitle4}>
                  Vestibulum mauris mauris elementum proin amet auctor ipsum
                  nibh sollicitudin?
                </b>
              </div>
              <div className={styles.xmark4}>
                <img
                  className={styles.iMathPlus4}
                  alt=""
                  src="/i--math--plus.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.divider27}>
            <div className={styles.divider28}>
              <div className={styles.divider29} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Blocks.propTypes = {
  className: PropTypes.string,
};

export default Blocks;
