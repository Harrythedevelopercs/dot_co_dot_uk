// Next
import Image from "next/image"
// Media
import Img from "media/book-launch-campaigns/stats3.jpg"
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
               Professional Book Publishing Support – Special Offer
              </h2>
              <p className={styles.para}>
                Get expert help to refine, format, and publish your book—now at an exclusive 50% discount. Our comprehensive publishing services cover everything from professional editing and layout design to ISBN assignment and worldwide distribution. Whether you're self-publishing your first book or adding to an established portfolio, we provide the tools and support you need to launch with confidence and credibility.
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
