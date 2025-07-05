// Next
import Image from "next/image"
// Media
import Img from "media/book-launch-campaigns/statistics_2.jpg"
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
                We Help You Bring Your Vision to Life
                With our expert children's book illustration and publishing services.

              </h2>
              <p className={styles.para}>
                Your book's design is crucial for captivating young readers, whether in print or digital format. A well-thought-out cover and engaging illustrations spark curiosity and wonder. Let us help you perfect the presentation of your manuscript and illustrations, creating a magical experience for children!
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
