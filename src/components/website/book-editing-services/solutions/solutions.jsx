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
              Book Editing: Your Key to Success Body: Don't launch without it. Best Publishing Services provides vital editing steps that refine your words, generate valuable, error-free content, and maximize your book's resonance with its intended audience.
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
