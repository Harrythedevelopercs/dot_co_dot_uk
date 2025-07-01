// Next
import Image from "next/image"
// Css
import style from "./hero.module.css"
// Media
import Bg from "media/contact-us/hero-bg.png"

export default function Hero() {
    return (
        <>
            <section>
                <div className={style.root}>
                    <Image src={Bg} alt="domain" fill priority className={style.bg} />
                    <div className="container">
                        <div className={style.grids}>
                            <div className={style.content}>
                            <h1 className={style.title}>
                            Ready to Address Your Book Challenges?
                            </h1>
                            <p className={style.para}>
                            As your dedicated book partner, we're here to help you achieve your literary goals. Share your contact information, and let's initiate a strategic collaboration aimed at success.
                            </p>
                            <a className={style.cta} href="tel:4475 7731 6052">4475 7731 6052</a>
                            <a className={style.cta} href="mailto:info@bestpublishingservice.co.uk">info@bestpublishingservice.co.uk</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}