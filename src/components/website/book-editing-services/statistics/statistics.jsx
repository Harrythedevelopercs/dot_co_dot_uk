// Next
import Image from "next/image"
// Media
import Img from "media/book-launch-campaigns/stats4.jpg"
// Components
import { CTAGroupLight } from "@/components"
// Css
import styles from "./statistics.module.css"
export default function Statistics() {
  return (
    <section>
      <div className={styles.root}>
        <div className="container">
          <div className={styles.__grid}>
            <div className={styles.leftColumn}>
              <Image src={Img} alt="domain" />
            </div>
            <div className={styles.rightColumn}>
              <h2 className={styles.title}>
                Get the Best in Book Editing. Get Best Publishing Service, LLC!
              </h2>
              <p className={styles.para}>
                Transforming your manuscript is seamless with Best Publishing Service, LLC. We combine creative insight with technical precision, ensuring your words resonate. Our full-cycle editing ensures your book stands out, leaving a lasting impression.
              </p>
              <div className={styles.cta}>
                <CTAGroupLight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
