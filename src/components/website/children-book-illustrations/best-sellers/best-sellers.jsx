// Next
import Image from "next/image"
// Css
import styles from "./best-sellers.module.css"
// Media
import Book1 from "media/children-book-illustrations/bestSellers/portfolio-01.png"
import Book2 from "media/children-book-illustrations/bestSellers/portfolio-02.png"
import Book3 from "media/children-book-illustrations/bestSellers/portfolio-03.png"
import Book4 from "media/children-book-illustrations/bestSellers/portfolio-04.png"
import Book5 from "media/children-book-illustrations/bestSellers/portfolio-08.png"
import Book6 from "media/children-book-illustrations/bestSellers/portfolio-06.png"
import Book7 from "media/children-book-illustrations/bestSellers/1.png"
export default function BestSellers() {
  return (
    <section>
      <div className={styles.root}>
        <div className="container">
          <div className={styles.content}>
            <h2 className={styles.title}>Our Portfolio</h2>
            <p className={styles.para}>
              We offer full-cycle children's book services, blending imaginative storytelling with enchanting illustration expertise to craft captivating narratives that inspire young readers and bring your vision to life.
            </p>
          </div>
          <div className={styles.__grid}>
            <div className={styles.leftColumn}>
              <div className={styles.cardGrid}>
                {[Book1, Book2, Book3, Book4, Book5, Book6].map((e, i) => (
                  <div key={i} className={`${styles.card} group`}>
                    <Image
                      src={e}
                      alt="domain"
                      className={`${styles.img} group-hover:scale-105 w-full`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.rightColumn}>
              <div className={styles.bg}>
                <h3 className={styles.title2}>
                  Hire The Best Book Launch Campaigns In USA To Showcase Your
                  Masterpiece To The World
                </h3>
                <div>
                  <Image src={Book7} alt="domain" className={`${styles.rightImg}`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
