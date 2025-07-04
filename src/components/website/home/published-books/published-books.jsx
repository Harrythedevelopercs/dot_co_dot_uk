// Next
import dynamic from "next/dynamic"
// Components
import { CTAGroupLight } from "@/components"
const Slider = dynamic(() => import("./slider/slider"))
// Css
import style from "./published-books.module.css"

export default function PublishedBooks() {
    return (
        <section>
            <div className={style.root}>
                <div className="container">
                    <div className={style.content}>
                        <div>
                            <h2 className={style.title}>Our Best Publishing Service</h2>
                            <p className={style.para}>From editing and formatting to publishing, at Publishing Services, we take pride in boasting our team of professionals who produce successful and critically acclaimed books in all genres. Here’s a sneak preview of some of our work.</p>
                        </div>
                        <div className={style.cta}>
                            <CTAGroupLight />
                        </div>
                    </div>
                </div>
                <Slider />
            </div>
        </section>
    )
}