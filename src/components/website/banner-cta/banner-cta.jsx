// Css
import styles from "./banner-cta.module.css"
// Components
import { CTA } from "@/components"

export default function BannerCta({ span,title, desc }) {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div className={styles.card}>
                        <div className={styles.grids}>
                            <div className={styles.leftColumn}>
                                {span && <span className="text-white text-[22px] font-extrabold" dangerouslySetInnerHTML={{ __html: span}}/>}
                                <h2 className={styles.title}>{title}</h2>
                                <p className={styles.para} dangerouslySetInnerHTML={{ __html: desc}}/>
                            </div>
                            <div className={styles.rightColumn}>
                                <CTA icon="chat-pink" text="Book A Consultation" css={styles.cta} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}