// Components
import { CTAGroupLight } from "@/components"
import Cards from "./cards/cards"
// Css
import styles from "./traditional.module.css"
import styles1 from "./cards/cards.module.css"

export default function Traditional() {
    return (
        <section>
            <div className={styles.root}>
                <div className="container">
                    <div className={styles.grids}>
                        <div className={styles.content}>
                            <h2 className={styles.title}>Get the Best in Book Editing. Get Best Publishing Services!</h2>
                            <p className={styles.para}>We are here for you. At “Best Publishing Service” we offer complete book editing and Transforming your manuscript is seamless with Best Publishing Services. We combine creative insight with technical precision, ensuring your words resonate. Our full-cycle editing ensures your book stands out, leaving a lasting impression.</p>
                            <div className={styles.cta}>
                                <CTAGroupLight />
                            </div>
                        </div>
                        <div className={styles1.root}>
                            {
                                [
                                    ["", "E-book publication"],
                                    ["", "Branding and publicity"],
                                    ["", "Video book trailers"],
                                    ["", "Website Design, Development, & SEO"],
                                    ["", "Audiobooks"],
                                    ["", "Cover designing and typesetting"],
                                ].map(([title, desc], i) => (
                                    <div key={i} className={styles1.cards}>
                                        <h3 className={styles1.title}
                                            dangerouslySetInnerHTML={{ __html: title }}
                                        />
                                        <p className={styles1.para}>
                                            {desc}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}