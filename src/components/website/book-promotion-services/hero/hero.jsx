// Next
import Image from "next/image"
// Css
import style from "./hero.module.css"
// Media
import Bg from "media/book-launch-campaigns/hero-bg.png"
// Components
import { CTAGroupDark } from "@/components"

export default function Hero() {
    return (
        <>
            <section>
                <div className={style.root}>
                    <Image src={Bg} alt="domain" fill priority className={style.bg} />
                    <div className="container">
                        <div>
                            <h3 className="text-[25px]">Professional Book Marketing & Publishing Services</h3>
                            <h1 className={style.title}>
                            Best Book Publishing, Editing & Marketing Solutions!
                            </h1>
                            <p className={style.para}>
                            Launching your first book or expanding your author brand? Our professional marketing services include social media promotion, audience targeting, and strategic campaigns to help your book gain visibility.
                            </p>
                            <div className={style.cta}>
                                <CTAGroupDark />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}