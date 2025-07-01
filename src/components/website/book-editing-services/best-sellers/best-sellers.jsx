// Next
import Image from "next/image"
// Css
import styles from "./best-sellers.module.css"
// Media
import Book1 from "media/book-launch-campaigns/bestSellers/1.jpg"
import Book2 from "media/book-launch-campaigns/bestSellers/2.jpg"
import Book3 from "media/book-launch-campaigns/bestSellers/3.jpg"
import Book4 from "media/book-launch-campaigns/bestSellers/4.jpg"
import Book5 from "media/book-launch-campaigns/bestSellers/5.jpg"
import Book6 from "media/book-launch-campaigns/bestSellers/6.jpg"

import Book7 from "media/book-launch-campaigns/bestSellers/7.png"
export default function BestSellers() {
  return (
    <section>
      <div className={styles.root}>
        <div className="container">
          <div className={styles.content}>
            <h2 className={styles.title}>Our Portfolio</h2>
            <p className={styles.para}>
              Strategic Book Editing for Impact. We offer full-cycle book editing that combines creative insight with technical precision. Our expert editors refine your manuscript to solve communication challenges and drive your message's growth and effectiveness.
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
                      className={`${styles.img} group-hover:scale-105`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.rightColumn}>
              <div className={styles.bg}>
                <h3 className={styles.title2}>
                  Perfect Your Book: Professional Editing Here. Your masterpiece deserves the best.
                </h3>
                <div>
                  <Image src={Book7} alt="domain" className={styles.rightImg} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
