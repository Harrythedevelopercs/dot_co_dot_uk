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
                        <h2 className={style.title}>Best Publishing Services’s Hassle-Free TV Interview Process Simplified for You</h2>
                            <p className={style.para}>Today’s celebrity is a new breed. They create the content, they create the buzz. And you’re more likely to find them on TikTok, Instagram, and YouTube than on legacy media. It’s an exciting time. And The Spotlight Network is showcasing the talent that viewers and followers around the world are inspired by. The recipe is a “success spiral.” Best Publishing Services showcases the talent and the talent has a built-in fanbase. Plus Best Publishing Services allows emerging talent to tap into this exciting mileau.</p>
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