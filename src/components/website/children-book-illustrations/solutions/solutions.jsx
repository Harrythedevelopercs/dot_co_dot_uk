// Components
import { CTAGroupLight } from "@/components";
import Cards from "./cards/cards";
// Css
import styles from "./solutions.module.css";
import FrontEndForm from "@/components/FrontEndForm";
export default function Solutions() {
  return (
    <div className={styles.root}>
      <div className="container">
        <div className={styles.__grid}>
          <div className={styles.content}>
            <h2 className={styles.title}>
              Book Launch Campaign is a Necessity
            </h2>
            <p className={styles.para}>
              At Best Publishing Services, we combine four essential steps that
              not only drive anticipation, but generate valuable content, and
              maximize exposure to your target audience before and after launch.
            </p>
            <div className={styles.cta}>
              <CTAGroupLight />
            </div>
          </div>
          <div>
            <div className="p-10 bg-black rounded-xl">
              <FrontEndForm label={true} theme="light" />
            </div>
          </div>
          {/* <Cards/> */}
        </div>
      </div>
    </div>
  );
}
