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
             Transform your draft into a polished master-piece with expert editing.
            </h2>
            
            <span className={styles.para}>
              <p> We provide end-to-end publishing services to help authors bring their manuscripts to market. Our team offers: </p>
              <ul className="ml-5 mt-5">
                <li className="list-disc">Professional editing services</li>
                <li className="list-disc">Custom cover design</li>
                <li className="list-disc">Strategic marketing support</li>
              </ul>
              <p className="mt-5">With industry expertise and attention to detail, we guide you through each step of the publishing process to help your book reach its audience</p>
            </span>
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
