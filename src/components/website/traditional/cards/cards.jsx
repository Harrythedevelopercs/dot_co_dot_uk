// Css
import styles from "./cards.module.css"

export default function Cards() {
    return (
        <div className={styles.root}>
            {
                [
                    ["", "Enhanced Customer Reach Connecting businesses with a vast audience."],
                    ["", "Significant Ad Performance Improvements: Helping clients achieve better returns on their advertising spend."],
                    ["", "Recognized Industry Excellence: Honored with multiple industry awards."],
                    ["", "Optimized Acquisition Costs: Assisting businesses in lowering their customer acquisition expenses."],
                ].map(([title, desc], i) => (
                    <div key={i} className={styles.cards}>
                        <h3 className={styles.title}
                            dangerouslySetInnerHTML={{ __html: title }}
                        />
                        <p className={styles.para}>
                            {desc}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}