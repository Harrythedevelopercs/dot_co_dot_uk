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
                Best Book Publishing,Editing & Marketing Solutions!
              </h1>
              <p className={style.para}>
                We have a track record of publishing thousands of successful manuscripts meticulously written, edited, designed, and formatted. Many of the published works we have done for our clients have created a buzz in the literary sphere and ranked amongst the best.
              </p>
              <ul className="mt-8">
                {[
                  "Flexible Revision Services",
                  "Dependable Deadline Management",
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
