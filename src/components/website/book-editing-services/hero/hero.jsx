// Next
import Image from "next/image";
// Css
import style from "./hero.module.css";
// Media
import Bg from "media/book-launch-campaigns/hero-bg.png";
import CheckIcon from "media/children-book-illustrations/checkGreen.png";
// Components
import { CTAGroupDark } from "@/components";

export default function Hero() {
  return (
    <>
      <section>
        <div className={style.root}>
          <Image src={Bg} alt="domain" fill priority className={style.bg} />
          <div className="container">
            <div>
              <h1 className={style.title}>
                Your Story, Perfected: Professional Book Editing Services
              </h1>
              <p className={style.para}>
                Best Publishing Services offers expert book editing services that go beyond basic proofreading. Our experienced editors help enhance your narrative, strengthen your voice, and eliminate any imperfections, making your book truly stand out. Discover the difference professional editing makes.
              </p>
              <ul className="mt-8">
                {[
                  "Not all masterpieces are found in museums, you know?",
                  "Ready to take your book to the next level?",
                  "Are you letting errors hold your book back?",
                ].map((e, i) => (
                  <li
                    key={i}
                    className="flex font-comfortaa text-base font-medium leading-normal items-center gap-x-2 mb-4"
                  >
                    <Image src={CheckIcon} alt="icon" className="shrink-0 invert brightness-0" />
                    <span className="block">{e}</span>
                  </li>
                ))}
              </ul>
              <div className={style.cta}>
                <CTAGroupDark />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
