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
                        <h2 className={style.title}>Best Publishing Services’s ORM Services</h2>
                        <p className={style.para}>Navigating the online world can be tough, but your reputation doesn’t have to be. As aOnline Reputation Company, Best Publishing Services analyzes your online content, images, social media, and search results to assess and understand your current reputation.</p>
                    </div>
                    <Cards />
                    <div className={style.cta}>
                        <CTAGroupLight/>
                    </div>
                </div>
            </div>
        </section>
    )
}