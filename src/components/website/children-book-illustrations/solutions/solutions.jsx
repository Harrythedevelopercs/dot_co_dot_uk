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
              Launching Your Children's Book with Impact
            </h2>
            <p className={styles.para}>
              A successful children's book launch is crucial. Our comprehensive approach integrates key strategies designed to build excitement, create engaging promotional materials, and ensure your beautifully illustrated story reaches its ideal audience both pre- and post-publication.
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
