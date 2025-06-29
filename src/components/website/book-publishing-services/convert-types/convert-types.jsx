// Css
import { CTAGroupLight } from "@/components"
import style from "./convert-types.module.css"
// Next
import dynamic from "next/dynamic"
// Components
const Cards = dynamic(() => import("./cards/cards"))

export default function ConvertTypes() {
    return (
        <section>
            <div className={style.root}>
                <div className="container">
                    <div className={style.content}>
                        <h2 className={style.title}>How Can We Help?</h2>
                            <p className={style.para}>Our team of experienced writers, editors, and designers transforms your ideas into professionally published books across all genres. With thousands of successfully published titles, we handle every step—from meticulous writing and editing to stunning design and strategic publishing.</p>
                    </div>
                    <Cards />
                    <div className={style.cta}>
                        <CTAGroupLight />
                    </div>
                </div>
            </div>
        </section>
    )
}